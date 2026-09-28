const STORAGE_KEY = "mcat-tracker.v1";
const SECTIONS = ["Bio/Biochem", "Chem/Phys", "Psych/Soc", "CARS"];
const FORMATS = ["visual", "video", "text"];
const FORMAT_LABEL = { visual: "Visual", video: "Video-style", text: "Text summary" };

const tabsEl = document.getElementById("tabs");
const panels = {
  dashboard: document.getElementById("panel-dashboard"),
  setup: document.getElementById("panel-setup"),
  study: document.getElementById("panel-study"),
  scores: document.getElementById("panel-scores"),
  lessons: document.getElementById("panel-lessons"),
};

let currentTab = "dashboard";
let activeLessonId = null;
let activeFormat = null;
let videoSceneIndex = 0;
let videoPlayToken = 0;

// ---- state ----

function defaultState() {
  return {
    setup: { examDate: null, targetScore: null },
    sessions: [],
    scores: [],
    lessons: {},
    formatTally: { visual: 0, video: 0, text: 0 },
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ---- dates ----

function dateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function todayKey() {
  return dateKey(new Date());
}

function keyToDate(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysUntil(examKey) {
  if (!examKey) return null;
  const ms = keyToDate(examKey).setHours(0, 0, 0, 0) - keyToDate(todayKey()).setHours(0, 0, 0, 0);
  return Math.round(ms / 86400000);
}

// ---- derived stats ----

function weeklyHours(sessions) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 6);
  cutoff.setHours(0, 0, 0, 0);
  const minutes = sessions
    .filter((s) => keyToDate(s.date) >= cutoff)
    .reduce((sum, s) => sum + s.minutes, 0);
  return Math.round((minutes / 60) * 10) / 10;
}

function studyStreak(sessions) {
  const days = new Set(sessions.map((s) => s.date));
  const anchor = new Date();
  if (!days.has(todayKey())) anchor.setDate(anchor.getDate() - 1);
  let streak = 0;
  const cursor = anchor;
  while (days.has(dateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function sectionTarget(targetScore) {
  if (!targetScore) return null;
  return Math.min(132, Math.max(118, Math.round(targetScore / 4)));
}

function scoresFor(scores, section) {
  return scores
    .filter((s) => s.section === section)
    .slice()
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.id.localeCompare(b.id)));
}

function scoreStatus(latest, target) {
  if (latest == null || target == null) return { level: "none", text: "No data yet" };
  const diff = latest - target;
  if (diff >= 0) return { level: "good", text: "On track" };
  if (diff >= -3) return { level: "warning", text: "Close to target" };
  return { level: "critical", text: "Below target" };
}

function lessonMastery(lessonState) {
  if (!lessonState || !lessonState.attempts || lessonState.attempts.length === 0) return null;
  const totals = lessonState.attempts.reduce(
    (acc, a) => ({ correct: acc.correct + a.correct, total: acc.total + a.total }),
    { correct: 0, total: 0 }
  );
  return Math.round((totals.correct / totals.total) * 100);
}

function masteryTag(mastery) {
  if (mastery == null) return { cls: "none", text: "Not started" };
  if (mastery < 50) return { cls: "needs-review", text: "Needs review" };
  if (mastery < 80) return { cls: "improving", text: "Improving" };
  return { cls: "solid", text: "Solid" };
}

function weakestTopics(state, limit = 3) {
  return LESSONS.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    section: lesson.section,
    mastery: lessonMastery(state.lessons[lesson.id]),
  }))
    .filter((t) => t.mastery != null)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, limit);
}

function defaultFormat(state) {
  const tally = state.formatTally;
  let best = "text";
  let bestCount = 0;
  for (const f of FORMATS) {
    if (tally[f] > bestCount) {
      best = f;
      bestCount = tally[f];
    }
  }
  return best;
}

// ---- helpers ----

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function badge(section) {
  return `<span class="badge sec-${section}">${section}</span>`;
}

// ---- tabs ----

function showTab(name) {
  currentTab = name;
  if (name !== "lessons") {
    activeLessonId = null;
  }
  for (const btn of tabsEl.querySelectorAll(".tab-btn")) {
    btn.setAttribute("aria-current", btn.dataset.tab === name ? "page" : "false");
  }
  for (const [key, el] of Object.entries(panels)) {
    el.hidden = key !== name;
  }
  render();
}

tabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  showTab(btn.dataset.tab);
});

// ---- render dispatch ----

function render() {
  const state = loadState();
  if (currentTab === "dashboard") renderDashboard(state);
  else if (currentTab === "setup") renderSetup(state);
  else if (currentTab === "study") renderStudy(state);
  else if (currentTab === "scores") renderScores(state);
  else if (currentTab === "lessons") renderLessons(state);
}

// ---- dashboard ----

function renderDashboard(state) {
  const days = daysUntil(state.setup.examDate);
  const hours = weeklyHours(state.sessions);
  const streak = studyStreak(state.sessions);
  const target = sectionTarget(state.setup.targetScore);
  const weak = weakestTopics(state);

  const scoreRows = SECTIONS.map((section) => {
    const history = scoresFor(state.scores, section);
    const latest = history.length ? history[history.length - 1].score : null;
    const status = scoreStatus(latest, target);
    return `
      <div class="weak-row">
        ${badge(section)}
        <span>${latest != null ? latest : "—"}${target != null ? ` <span class="q-text" style="font-weight:400;color:var(--ink-muted)">/ target ${target}</span>` : ""}</span>
        <span class="status-pill ${status.level}">${statusIcon(status.level)} ${status.text}</span>
      </div>`;
  }).join("");

  const weakRows = weak.length
    ? weak
        .map((t) => {
          const tag = masteryTag(t.mastery);
          return `
        <div class="weak-row">
          <span>${badge(t.section)} ${escapeHtml(t.title)}</span>
          <span class="mastery-tag ${tag.cls}">${t.mastery}% · ${tag.text}</span>
        </div>`;
        })
        .join("")
    : `<p class="empty-state">No lessons attempted yet. Try one in the Lessons tab to see your weak spots here.</p>`;

  panels.dashboard.innerHTML = `
    <h2>Dashboard</h2>
    <p class="panel-intro">Where things stand right now.</p>
    <div class="stat-row">
      <div class="stat-tile">
        <div class="value">${days != null ? days : "—"}</div>
        <div class="label">${days != null ? "days to exam" : "Set your exam date"}</div>
      </div>
      <div class="stat-tile">
        <div class="value">${hours}h</div>
        <div class="label">studied this week</div>
      </div>
      <div class="stat-tile">
        <div class="value">${streak}</div>
        <div class="label">day study streak</div>
      </div>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <h3 style="margin-top:0;font-size:1rem;">Practice scores vs. target</h3>
      ${scoreRows}
    </div>
    <div class="card">
      <h3 style="margin-top:0;font-size:1rem;">Weakest topics</h3>
      ${weakRows}
    </div>
  `;
}

function statusIcon(level) {
  if (level === "good") return "✓";
  if (level === "warning") return "▲";
  if (level === "critical") return "▼";
  return "·";
}

// ---- setup ----

function renderSetup(state) {
  const { examDate, targetScore } = state.setup;
  const days = daysUntil(examDate);
  panels.setup.innerHTML = `
    <h2>Setup</h2>
    <p class="panel-intro">Your exam date and target score. Everything else is measured against this.</p>
    <form id="setup-form" class="card">
      <div class="form-grid">
        <label>Exam date
          <input type="date" id="exam-date" value="${examDate || ""}" required>
        </label>
        <label>Target total score (472-528)
          <input type="number" id="target-score" min="472" max="528" value="${targetScore || ""}" required>
        </label>
      </div>
      <p class="field-error" id="setup-error"></p>
      <button type="submit" class="primary">Save</button>
    </form>
    ${
      examDate && targetScore
        ? `<p style="margin-top:14px;color:var(--ink-soft);">${days >= 0 ? `${days} day${days === 1 ? "" : "s"} until your exam` : "Your exam date has passed"} — targeting a total score of ${targetScore}.</p>`
        : ""
    }
  `;

  document.getElementById("setup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("exam-date").value;
    const score = Number(document.getElementById("target-score").value);
    const errorEl = document.getElementById("setup-error");
    if (!date) {
      errorEl.textContent = "Pick an exam date.";
      return;
    }
    if (!Number.isInteger(score) || score < 472 || score > 528) {
      errorEl.textContent = "Target score must be a whole number between 472 and 528.";
      return;
    }
    const s = loadState();
    s.setup = { examDate: date, targetScore: score };
    saveState(s);
    render();
  });
}

// ---- study log ----

function renderStudy(state) {
  const hours = weeklyHours(state.sessions);
  const streak = studyStreak(state.sessions);
  const sorted = state.sessions.slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const rows = sorted.length
    ? sorted
        .map(
          (s) => `
      <li class="entry-row" data-id="${s.id}">
        <div class="entry-main">
          <div class="entry-topic">${escapeHtml(s.topic)}</div>
          <div class="entry-meta">${badge(s.section)} ${s.minutes} min · ${s.date}</div>
        </div>
        <button class="delete-entry" data-delete-session="${s.id}" aria-label="Delete session">×</button>
      </li>`
        )
        .join("")
    : `<li class="empty-state">No sessions logged yet.</li>`;

  panels.study.innerHTML = `
    <h2>Study Log</h2>
    <p class="panel-intro">Log a session to track hours and your study streak.</p>
    <div class="stat-row">
      <div class="stat-tile">
        <div class="value">${hours}h</div>
        <div class="label">this week</div>
      </div>
      <div class="stat-tile">
        <div class="value">${streak}</div>
        <div class="label">day streak</div>
      </div>
    </div>
    <form id="study-form" class="card" style="margin-bottom:20px;">
      <div class="form-grid">
        <label>Section
          <select id="study-section">${SECTIONS.map((s) => `<option value="${s}">${s}</option>`).join("")}</select>
        </label>
        <label>Topic
          <input type="text" id="study-topic" maxlength="80" placeholder="e.g. Buffers" required>
        </label>
        <label>Minutes
          <input type="number" id="study-minutes" min="1" max="600" required>
        </label>
        <label>Date
          <input type="date" id="study-date" value="${todayKey()}" required>
        </label>
      </div>
      <p class="field-error" id="study-error"></p>
      <button type="submit" class="primary">Log session</button>
    </form>
    <ul class="entry-list">${rows}</ul>
  `;

  document.getElementById("study-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const topic = document.getElementById("study-topic").value.trim();
    const minutes = Number(document.getElementById("study-minutes").value);
    const date = document.getElementById("study-date").value;
    const section = document.getElementById("study-section").value;
    const errorEl = document.getElementById("study-error");
    if (!topic) {
      errorEl.textContent = "Add a topic.";
      return;
    }
    if (!Number.isFinite(minutes) || minutes <= 0) {
      errorEl.textContent = "Minutes must be greater than 0.";
      return;
    }
    if (!date) {
      errorEl.textContent = "Pick a date.";
      return;
    }
    const s = loadState();
    s.sessions.push({ id: crypto.randomUUID(), section, topic, minutes, date });
    saveState(s);
    render();
  });

  panels.study.querySelectorAll("[data-delete-session]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = loadState();
      s.sessions = s.sessions.filter((x) => x.id !== btn.dataset.deleteSession);
      saveState(s);
      render();
    });
  });
}

// ---- practice scores ----

function renderScores(state) {
  const target = sectionTarget(state.setup.targetScore);

  const cards = SECTIONS.map((section) => {
    const history = scoresFor(state.scores, section);
    const latest = history.length ? history[history.length - 1].score : null;
    const status = scoreStatus(latest, target);
    const recent = history.slice(-5);
    const bars = recent
      .map((s) => {
        const pct = Math.max(4, Math.round(((s.score - 118) / (132 - 118)) * 100));
        return `<div class="bar sec-${section}" style="height:${pct}%" title="${s.date}: ${s.score}"></div>`;
      })
      .join("");

    return `
      <div class="score-card">
        <div class="score-card-head">
          ${badge(section)}
          <span class="status-pill ${status.level}">${statusIcon(status.level)} ${status.text}</span>
        </div>
        <div class="score-latest">${latest != null ? latest : "—"} ${target != null ? `<span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">/ target ${target}</span>` : ""}</div>
        <div class="bar-strip">${bars || `<span class="entry-meta">No scores logged yet</span>`}</div>
      </div>`;
  }).join("");

  panels.scores.innerHTML = `
    <h2>Practice Scores</h2>
    <p class="panel-intro">Log a practice exam score per section and track it against your target.</p>
    <form id="scores-form" class="card" style="margin-bottom:20px;">
      <div class="form-grid">
        <label>Section
          <select id="score-section">${SECTIONS.map((s) => `<option value="${s}">${s}</option>`).join("")}</select>
        </label>
        <label>Score (118-132)
          <input type="number" id="score-value" min="118" max="132" required>
        </label>
        <label>Date
          <input type="date" id="score-date" value="${todayKey()}" required>
        </label>
      </div>
      <p class="field-error" id="scores-error"></p>
      <button type="submit" class="primary">Log score</button>
    </form>
    <div class="score-grid">${cards}</div>
  `;

  document.getElementById("scores-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const section = document.getElementById("score-section").value;
    const score = Number(document.getElementById("score-value").value);
    const date = document.getElementById("score-date").value;
    const errorEl = document.getElementById("scores-error");
    if (!Number.isInteger(score) || score < 118 || score > 132) {
      errorEl.textContent = "Score must be a whole number between 118 and 132.";
      return;
    }
    if (!date) {
      errorEl.textContent = "Pick a date.";
      return;
    }
    const s = loadState();
    s.scores.push({ id: crypto.randomUUID(), section, score, date });
    saveState(s);
    render();
  });
}

// ---- lessons ----

function renderLessons(state) {
  if (!activeLessonId) {
    renderLessonList(state);
  } else {
    renderLessonDetail(state, LESSONS.find((l) => l.id === activeLessonId));
  }
}

function renderLessonList(state) {
  const cards = LESSONS.map((lesson) => {
    const mastery = lessonMastery(state.lessons[lesson.id]);
    const tag = masteryTag(mastery);
    return `
      <button class="topic-card" data-open-lesson="${lesson.id}">
        <span>
          <div class="topic-title">${escapeHtml(lesson.title)}</div>
          <div class="entry-meta">${badge(lesson.section)}</div>
        </span>
        <span class="mastery-tag ${tag.cls}">${tag.text}</span>
      </button>`;
  }).join("");

  panels.lessons.innerHTML = `
    <h2>Lessons</h2>
    <p class="panel-intro">Pick a topic, see it a few ways, and check your understanding.</p>
    <div class="demo-banner">Demo content — hand-written for this prototype, not verified by a subject-matter expert. Don't rely on it to study for the real exam yet.</div>
    <div class="topic-grid">${cards}</div>
  `;

  panels.lessons.querySelectorAll("[data-open-lesson]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeLessonId = btn.dataset.openLesson;
      activeFormat = defaultFormat(loadState());
      videoSceneIndex = 0;
      render();
    });
  });
}

function renderLessonDetail(state, lesson) {
  const lessonState = state.lessons[lesson.id];
  const mastery = lessonMastery(lessonState);
  const tag = masteryTag(mastery);
  const currentDefault = defaultFormat(state);

  const formatTabs = FORMATS.map(
    (f) => `<button class="format-tab" data-format="${f}" aria-current="${f === activeFormat}">${FORMAT_LABEL[f]}</button>`
  ).join("");

  panels.lessons.innerHTML = `
    <button class="ghost" id="back-to-topics" style="margin-bottom:14px;">&larr; Back to topics</button>
    <h2>${escapeHtml(lesson.title)}</h2>
    <p class="panel-intro">${badge(lesson.section)} <span class="mastery-tag ${tag.cls}">${mastery != null ? mastery + "% · " : ""}${tag.text}</span></p>
    <div class="format-tabs">${formatTabs}</div>
    <div class="lesson-content" id="lesson-content"></div>
    <div class="prefer-row">
      <button class="ghost" id="mark-worked">This format worked for me</button>
      <span class="prefer-note">Default next time: ${FORMAT_LABEL[currentDefault]}</span>
    </div>
    <div class="card" id="check-area"></div>
  `;

  document.getElementById("back-to-topics").addEventListener("click", () => {
    activeLessonId = null;
    render();
  });

  panels.lessons.querySelectorAll(".format-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFormat = btn.dataset.format;
      videoSceneIndex = 0;
      render();
    });
  });

  document.getElementById("mark-worked").addEventListener("click", () => {
    const s = loadState();
    s.formatTally[activeFormat] = (s.formatTally[activeFormat] || 0) + 1;
    saveState(s);
    render();
  });

  renderLessonContent(lesson);
  renderCheckArea(lesson);
}

function renderLessonContent(lesson) {
  const el = document.getElementById("lesson-content");
  if (activeFormat === "visual") {
    el.innerHTML = lesson.visualSvg;
  } else if (activeFormat === "text") {
    el.innerHTML = `<p>${lesson.text.trim().replace(/\s+/g, " ")}</p>`;
  } else {
    el.innerHTML = `
      <div class="video-player">
        <div class="scene-title" id="scene-title"></div>
        <div class="scene-narration" id="scene-narration"></div>
        <div class="video-controls">
          <button class="ghost" id="video-prev">Prev</button>
          <button class="primary" id="video-play">Play narration</button>
          <button class="ghost" id="video-stop" hidden>Stop</button>
          <button class="ghost" id="video-next">Next</button>
          <span class="scene-count" id="scene-count"></span>
        </div>
      </div>`;
    initVideoPlayer(lesson);
  }
}

function initVideoPlayer(lesson) {
  const titleEl = document.getElementById("scene-title");
  const narrEl = document.getElementById("scene-narration");
  const countEl = document.getElementById("scene-count");
  const prevBtn = document.getElementById("video-prev");
  const nextBtn = document.getElementById("video-next");
  const playBtn = document.getElementById("video-play");
  const stopBtn = document.getElementById("video-stop");
  const supportsSpeech = "speechSynthesis" in window;

  function showScene(i) {
    videoSceneIndex = Math.max(0, Math.min(lesson.video.length - 1, i));
    const scene = lesson.video[videoSceneIndex];
    titleEl.textContent = scene.title;
    narrEl.textContent = scene.narration;
    countEl.textContent = `Scene ${videoSceneIndex + 1} of ${lesson.video.length}`;
  }

  prevBtn.addEventListener("click", () => showScene(videoSceneIndex - 1));
  nextBtn.addEventListener("click", () => showScene(videoSceneIndex + 1));

  if (!supportsSpeech) {
    playBtn.disabled = true;
    playBtn.textContent = "Narration not supported here";
  } else {
    playBtn.addEventListener("click", () => {
      videoPlayToken++;
      const token = videoPlayToken;
      playBtn.hidden = true;
      stopBtn.hidden = false;

      function speakFrom(i) {
        if (token !== videoPlayToken || i >= lesson.video.length) {
          playBtn.hidden = false;
          stopBtn.hidden = true;
          return;
        }
        showScene(i);
        const utter = new SpeechSynthesisUtterance(lesson.video[i].narration);
        utter.onend = () => {
          if (token === videoPlayToken) speakFrom(i + 1);
        };
        window.speechSynthesis.speak(utter);
      }
      speakFrom(videoSceneIndex);
    });

    stopBtn.addEventListener("click", () => {
      videoPlayToken++;
      window.speechSynthesis.cancel();
      playBtn.hidden = false;
      stopBtn.hidden = true;
    });
  }

  showScene(videoSceneIndex);
}

function renderCheckArea(lesson) {
  const el = document.getElementById("check-area");
  el.innerHTML = `
    <h3 style="margin-top:0;font-size:1rem;">Check your understanding</h3>
    <form id="check-form">
      ${lesson.questions
        .map(
          (q, qi) => `
        <div class="question-block">
          <p class="q-text">${qi + 1}. ${escapeHtml(q.q)}</p>
          <div class="options">
            ${q.options
              .map(
                (opt, oi) => `
              <label class="option">
                <input type="radio" name="q${qi}" value="${oi}" required>
                ${escapeHtml(opt)}
              </label>`
              )
              .join("")}
          </div>
          <p class="q-feedback" id="feedback-${qi}"></p>
        </div>`
        )
        .join("")}
      <button type="submit" class="primary" style="margin-top:14px;">Check answers</button>
    </form>
    <p class="check-results" id="check-results"></p>
  `;

  document.getElementById("check-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let correct = 0;
    lesson.questions.forEach((q, qi) => {
      const picked = document.querySelector(`input[name="q${qi}"]:checked`);
      const feedbackEl = document.getElementById(`feedback-${qi}`);
      const isCorrect = picked && Number(picked.value) === q.correct;
      if (isCorrect) correct++;
      feedbackEl.className = `q-feedback ${isCorrect ? "correct" : "incorrect"}`;
      feedbackEl.textContent = isCorrect ? `Correct — ${q.explain}` : `Not quite — ${q.explain}`;
    });

    const total = lesson.questions.length;
    const s = loadState();
    if (!s.lessons[lesson.id]) s.lessons[lesson.id] = { attempts: [] };
    s.lessons[lesson.id].attempts.push({ date: todayKey(), correct, total });
    saveState(s);

    const newMastery = lessonMastery(s.lessons[lesson.id]);
    document.getElementById("check-results").textContent =
      `${correct} / ${total} correct — mastery updated to ${newMastery}%`;
  });
}

// ---- init ----

showTab("dashboard");
