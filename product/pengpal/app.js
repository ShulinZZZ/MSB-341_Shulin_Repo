const STORAGE_KEY = "pengpal-demo.v1";

// Screen order drives the back button and the "step N of 8" label.
const FLOW = ["welcome", "onboard", "hosts", "profile", "intro", "book", "prep", "trip", "review", "done"];
const STEP_TITLE = {
  onboard: "About your trip",
  hosts: "Your matches",
  profile: "Host profile",
  intro: "Video intro",
  book: "Book & pay",
  prep: "Before you fly",
  trip: "Trip day",
  review: "Rate your day",
};
const TOTAL_STEPS = 8;

const screenEl = document.getElementById("screen");
const topbarEl = document.getElementById("topbar");
const sheetEl = document.getElementById("sheet");
const backdropEl = document.getElementById("sheet-backdrop");
const toastEl = document.getElementById("toast");

// ---- state ----

function defaultState() {
  return {
    screen: "welcome",
    profile: { city: "chongqing", country: "us", language: "English", interests: [] },
    hostId: null,
    intro: { slot: null },
    booking: { date: null, duration: "half", party: 2, paid: false },
    checklist: {},
    chat: [],
    chatStep: 0,
    review: { stars: 0, tags: [], comment: "", nps: null },
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private mode or storage full: the demo still works, it just won't survive a refresh.
  }
}

let state = loadState();

function go(screen) {
  state.screen = screen;
  saveState();
  render();
  screenEl.scrollTop = 0;
  screenEl.focus({ preventScroll: true });
}

// ---- helpers ----

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function usd(n) {
  return "$" + n.toFixed(2).replace(/\.00$/, "");
}

function city() {
  return CITIES[state.profile.city];
}

function host() {
  return HOSTS.find((h) => h.id === state.hostId) || null;
}

function country() {
  return COUNTRIES.find((c) => c.id === state.profile.country) || COUNTRIES[0];
}

function stars(n) {
  const full = Math.round(n);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function avatar(h, size = "") {
  return `<span class="avatar ${size}" style="--c:${h.color}" aria-hidden="true">${esc(h.name[0])}</span>`;
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

function openSheet(html) {
  sheetEl.innerHTML = `<div class="sheet-grip" aria-hidden="true"></div>${html}`;
  sheetEl.hidden = false;
  backdropEl.hidden = false;
  requestAnimationFrame(() => sheetEl.classList.add("open"));
}

function closeSheet() {
  sheetEl.classList.remove("open");
  sheetEl.hidden = true;
  backdropEl.hidden = true;
}

// China is UTC+8 with no daylight saving, so China wall-clock time maps to UTC by subtracting 8h.
function chinaToday() {
  const d = new Date(Date.now() + 8 * 3600e3);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth(), d: d.getUTCDate() };
}

function chinaDateISO(daysAhead) {
  const t = chinaToday();
  return new Date(Date.UTC(t.y, t.m, t.d + daysAhead)).toISOString().slice(0, 10);
}

function fmtTime(date, tz) {
  return new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short", hour: "numeric", minute: "2-digit" }).format(date);
}

function fmtDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" })
    .format(new Date(Date.UTC(y, m - 1, d)));
}

// ---- matching ----

function matchHosts() {
  const p = state.profile;
  const studyKey = country().studyKey;
  return HOSTS.filter((h) => h.city === p.city)
    .map((h) => {
      const shared = h.interests.filter((i) => p.interests.includes(i));
      const speaksYours = p.language !== "English" && h.languages.includes(p.language);
      const livedInYours = h.studied.country === studyKey;
      const score = shared.length * 2 + (speaksYours ? 3 : 0) + (livedInYours ? 1 : 0) + h.rating / 10;
      return { h, shared, speaksYours, livedInYours, score };
    })
    .sort((a, b) => b.score - a.score);
}

function matchFor(id) {
  return matchHosts().find((m) => m.h.id === id);
}

function badges(m) {
  const out = [`<span class="badge badge-gold">🎓 Studied in ${esc(m.h.studied.place)}</span>`];
  if (m.livedInYours) out.push(`<span class="badge badge-navy">Lived in your country</span>`);
  if (m.speaksYours) out.push(`<span class="badge badge-navy">Speaks ${esc(state.profile.language)}</span>`);
  return out.join("");
}

// ---- pricing ----

function priceFor(duration) {
  const rate = PRICE[duration];
  const fee = Math.round(rate * SERVICE_FEE_RATE * 100) / 100;
  return { rate, fee, total: rate + fee };
}

// ---- top bar ----

function renderTopbar() {
  const s = state.screen;
  if (s === "welcome" || s === "done") {
    topbarEl.innerHTML = `
      <div class="brand"><span class="pmark" aria-hidden="true">P</span><span>PengPal</span><span class="zh">朋友派</span></div>`;
    return;
  }
  const step = FLOW.indexOf(s);
  topbarEl.innerHTML = `
    <button class="icon-btn" data-action="back" aria-label="Back">‹</button>
    <div class="topbar-title">
      <span>${esc(STEP_TITLE[s])}</span>
      <span class="step">Step ${step} of ${TOTAL_STEPS}</span>
    </div>
    <span class="pmark pmark-sm" aria-hidden="true">P</span>
    <div class="progress" style="--p:${step / TOTAL_STEPS}" aria-hidden="true"></div>`;
}

// ---- screens ----

const screens = {
  welcome() {
    return `
      <section class="hero">
        <div class="lanterns" aria-hidden="true"><span></span><span></span></div>
        <span class="pmark pmark-xl" aria-hidden="true">P</span>
        <h1>Travel China like you have a friend there.</h1>
        <p class="lead">Get matched with a young, English-speaking local who helps with food, places and
          getting around: Alipay, DiDi, QR menus and all.</p>
        <ul class="hero-points">
          <li><b>Before you go</b> Meet your host on a short video call</li>
          <li><b>In the city</b> Explore local food and neighborhoods together</li>
          <li><b>Practical help</b> Set up apps, transit and payments</li>
        </ul>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="go" data-to="onboard">Find my local friend</button>
        <p class="fine">Prototype · sample hosts · nothing is charged</p>
      </div>`;
  },

  onboard() {
    const p = state.profile;
    const cityCards = Object.entries(CITIES).map(([id, c]) => `
      <button class="city-card ${p.city === id ? "selected" : ""}" data-action="city" data-id="${id}" aria-pressed="${p.city === id}">
        <span class="city-name">${esc(c.name)} <span class="zh">${esc(c.zh)}</span></span>
        <span class="city-tag">${esc(c.tagline)}</span>
      </button>`).join("");
    const chips = INTERESTS.map((i) => `
      <button class="chip ${p.interests.includes(i.id) ? "selected" : ""}" data-action="interest" data-id="${i.id}" aria-pressed="${p.interests.includes(i.id)}">
        <span aria-hidden="true">${i.icon}</span> ${esc(i.label)}
      </button>`).join("");
    return `
      <section class="pad">
        <h2>Where are you headed?</h2>
        <div class="city-grid">${cityCards}</div>

        <h2>About you</h2>
        <label class="field">Home country
          <select data-field="country">
            ${COUNTRIES.map((c) => `<option value="${c.id}" ${p.country === c.id ? "selected" : ""}>${esc(c.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">Language you're most comfortable in
          <select data-field="language">
            ${LANGUAGES.map((l) => `<option ${p.language === l ? "selected" : ""}>${esc(l)}</option>`).join("")}
          </select>
        </label>

        <h2>What do you want to do?</h2>
        <p class="hint">Pick as many as you like. We'll match hosts who love the same things.</p>
        <div class="chips">${chips}</div>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="go" data-to="hosts" ${p.interests.length ? "" : "disabled"}>
          ${p.interests.length ? "Show my matches" : "Pick at least one interest"}
        </button>
      </div>`;
  },

  hosts() {
    const c = city();
    const cards = matchHosts().map((m) => `
      <button class="host-card" data-action="pick-host" data-id="${m.h.id}">
        ${avatar(m.h)}
        <span class="host-main">
          <span class="host-name">${esc(m.h.name)} <span class="verified" title="ID and interview verified">✔ Verified</span></span>
          <span class="badges">${badges(m)}</span>
          <span class="host-meta">${esc(m.h.languages.join(" · "))}</span>
          <span class="host-meta">${esc(m.h.specialties.join(" · "))}</span>
          <span class="host-foot">
            <span class="rating">★ ${m.h.rating.toFixed(1)} <span class="muted">(${m.h.trips} trips)</span></span>
            ${m.shared.length ? `<span class="match">Matches ${m.shared.length} of your interests</span>` : ""}
          </span>
        </span>
        <span class="chev" aria-hidden="true">›</span>
      </button>`).join("");
    return `
      <section class="pad">
        <p class="eyebrow">${esc(c.name.toUpperCase())} · CHINA</p>
        <h2 class="h-big">Meet a local host</h2>
        <p class="hint">Sorted by what you told us. Every host is ID-checked and interviewed by our team.</p>
        <div class="sample-tag">Sample profiles</div>
        <div class="host-list">${cards}</div>
        <div class="callout">
          <b>Meet before you book</b>
          <span>Every trip starts with a free 15-minute video intro.</span>
        </div>
      </section>`;
  },

  profile() {
    const h = host();
    const m = matchFor(h.id);
    const half = priceFor("half");
    const full = priceFor("full");
    return `
      <section>
        <div class="video" data-action="play-video" role="button" tabindex="0" aria-label="Play ${esc(h.name)}'s intro video" style="--c:${h.color}">
          <div class="video-inner" id="video-inner">
            <span class="play" aria-hidden="true">▶</span>
            <span class="video-label">${esc(h.name)}'s intro · 0:45</span>
          </div>
        </div>
        <div class="pad">
          <div class="profile-head">
            ${avatar(h, "avatar-lg")}
            <div>
              <h2 class="h-big">${esc(h.name)} <span class="verified">✔ Verified</span></h2>
              <p class="muted">${h.age} · Local host in ${esc(city().name)} · ★ ${h.rating.toFixed(1)} (${h.trips} trips)</p>
            </div>
          </div>
          <div class="badges">${badges(m)}</div>
          <p class="bio">${esc(h.bio)}</p>

          <h3>Languages</h3>
          <p>${esc(h.languages.join(" · "))}</p>
          <h3>Favorite things to show you</h3>
          <div class="chips chips-static">${h.specialties.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>

          <h3>Price</h3>
          <div class="price-cards">
            <div class="price-card"><span class="price">${usd(half.rate)}</span><span>Half day · 4 hrs</span></div>
            <div class="price-card"><span class="price">${usd(full.rate)}</span><span>Full day · 8 hrs</span></div>
          </div>
          <p class="fine">Per group of up to 4. Plus a ${Math.round(SERVICE_FEE_RATE * 100)}% PengPal service fee. Meals, tickets and rides are paid as you go.</p>

          <h3>Reviews</h3>
          <div class="reviews">
            ${h.reviews.map((r) => `
              <div class="review">
                <div class="review-top"><b>${esc(r.who)}</b><span class="stars" aria-label="${r.stars} stars">${stars(r.stars)}</span></div>
                <p>${esc(r.text)}</p>
              </div>`).join("")}
          </div>
          <div class="sample-tag">Sample profile and reviews</div>
        </div>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="go" data-to="intro">Book a free video intro with ${esc(h.name)}</button>
      </div>`;
  },

  intro() {
    const h = host();
    const tz = country().tz;
    const hours = [[10, 0], [13, 0], [20, 0], [21, 30]];
    const t = chinaToday();
    const days = [1, 2, 3].map((i) => {
      const slots = hours.map(([hh, mm]) => new Date(Date.UTC(t.y, t.m, t.d + i, hh - 8, mm)));
      const label = fmtTime(slots[0], "Asia/Shanghai").split(" ")[0];
      return { label, slots };
    });
    const sel = state.intro.slot;
    return `
      <section class="pad">
        <div class="intro-head">
          ${avatar(h)}
          <div>
            <h2>Meet ${esc(h.name)} before you book</h2>
            <p class="muted">15 min · free · video call in the app</p>
          </div>
        </div>
        <p class="hint">Say hi, share your plans, and ask anything. No obligation to book after.</p>
        <p class="tz-note">Times shown in <b>your time</b> (${esc(country().name)}) with ${esc(h.name)}'s time in China below.</p>
        ${days.map((d) => `
          <h3>${esc(d.label)} in China</h3>
          <div class="slots">
            ${d.slots.map((s) => {
              const iso = s.toISOString();
              return `<button class="slot ${sel === iso ? "selected" : ""}" data-action="slot" data-iso="${iso}" aria-pressed="${sel === iso}">
                <span class="slot-you">${esc(fmtTime(s, tz))}</span>
                <span class="slot-cn">${esc(fmtTime(s, "Asia/Shanghai"))} China</span>
              </button>`;
            }).join("")}
          </div>`).join("")}
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="confirm-intro" ${sel ? "" : "disabled"}>
          ${sel ? `Confirm ${esc(fmtTime(new Date(sel), tz))}` : "Pick a time"}
        </button>
      </div>`;
  },

  book() {
    const h = host();
    const b = state.booking;
    if (!b.date) b.date = chinaDateISO(14);
    const pr = priceFor(b.duration);
    const introDone = state.intro.slot
      ? `<div class="done-note">✔ Video intro with ${esc(h.name)}: ${esc(fmtTime(new Date(state.intro.slot), country().tz))} your time</div>`
      : "";
    return `
      <section class="pad">
        ${introDone}
        <div class="intro-head">
          ${avatar(h)}
          <div>
            <h2>Book your day with ${esc(h.name)}</h2>
            <p class="muted">${esc(city().name)} · after your intro call</p>
          </div>
        </div>

        <label class="field">Trip date
          <input type="date" data-field="date" value="${b.date}" min="${chinaDateISO(1)}">
        </label>

        <div class="field">How long
          <div class="seg" role="radiogroup">
            <button class="seg-btn ${b.duration === "half" ? "selected" : ""}" data-action="duration" data-id="half" role="radio" aria-checked="${b.duration === "half"}">Half day<small>4 hrs · ${usd(PRICE.half)}</small></button>
            <button class="seg-btn ${b.duration === "full" ? "selected" : ""}" data-action="duration" data-id="full" role="radio" aria-checked="${b.duration === "full"}">Full day<small>8 hrs · ${usd(PRICE.full)}</small></button>
          </div>
        </div>

        <div class="field">Travelers
          <div class="stepper">
            <button class="icon-btn" data-action="party" data-d="-1" aria-label="Fewer travelers" ${b.party <= 1 ? "disabled" : ""}>−</button>
            <span aria-live="polite">${b.party} ${b.party === 1 ? "person" : "people"}</span>
            <button class="icon-btn" data-action="party" data-d="1" aria-label="More travelers" ${b.party >= 4 ? "disabled" : ""}>+</button>
          </div>
          <small class="muted">Same price for up to 4 people.</small>
        </div>

        <div class="receipt">
          <div class="row"><span>${esc(h.name)}'s time · ${b.duration === "half" ? "half day" : "full day"}</span><span>${usd(pr.rate)}</span></div>
          <div class="row"><span>PengPal service fee (${Math.round(SERVICE_FEE_RATE * 100)}%)</span><span>${usd(pr.fee)}</span></div>
          <div class="row total"><span>Total, in USD</span><span>${usd(pr.total)}</span></div>
          <p class="fine">Charged now and held by PengPal. ${esc(h.name)} is paid after your trip. Free cancellation up to 48 hours before.</p>
        </div>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="pay">Pay ${usd(pr.total)}</button>
        <p class="fine">Demo only. No card needed, nothing is charged.</p>
      </div>`;
  },

  prep() {
    const h = host();
    const c = city();
    const items = [
      { id: "alipay", title: "Set up Alipay with your foreign card", tip: "Download it before you fly, add your Visa or Mastercard and verify your passport. Almost everywhere takes Alipay, almost nowhere takes cards." },
      { id: "wechat", title: "Install WeChat", tip: "It's how we'll message once you land, and some small shops only take WeChat Pay." },
      { id: "esim", title: "Buy an eSIM with data", tip: "Get it before you land so maps and translation work at the airport. Hotel Wi-Fi often blocks Google, Instagram and WhatsApp; many travel eSIMs don't." },
      { id: "amap", title: "Download Amap (高德地图)", tip: "Google Maps is out of date here. Amap has an English mode in settings. I'll show you how to read it." },
      { id: "didi", title: "Find DiDi inside Alipay", tip: "No extra app needed. Open Alipay, search DiDi, switch to English. The driver sees your pin, so you don't have to talk." },
      { id: "address", title: "Save your hotel address in Chinese", tip: "Screenshot it from your booking. Show it to any driver and you'll get home." },
      { id: "city", title: c.cityTip.title, tip: c.cityTip.tip },
    ];
    const doneCount = items.filter((i) => state.checklist[i.id]).length;
    return `
      <section class="pad">
        <div class="done-note">✔ Booked: ${esc(fmtDate(state.booking.date))} with ${esc(h.name)} · ${state.booking.duration === "half" ? "half day" : "full day"}</div>
        <h2>Get ready for China</h2>
        <p class="hint">${esc(h.name)} added tips to each step. Stuck? We'll fix it together on day one.</p>
        <div class="meter" aria-label="${doneCount} of ${items.length} done"><span style="width:${(doneCount / items.length) * 100}%"></span></div>
        <p class="muted small">${doneCount} of ${items.length} done</p>
        <ul class="checklist">
          ${items.map((i) => `
            <li class="${state.checklist[i.id] ? "checked" : ""}">
              <button class="check" data-action="check" data-id="${i.id}" role="checkbox" aria-checked="${!!state.checklist[i.id]}" aria-label="${esc(i.title)}">${state.checklist[i.id] ? "✔" : ""}</button>
              <div>
                <b>${esc(i.title)}</b>
                <p class="tip">${avatar(h, "avatar-xs")}<span><b>${esc(h.name)}'s tip:</b> ${esc(i.tip)}</span></p>
              </div>
            </li>`).join("")}
        </ul>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="go" data-to="trip">Skip ahead to trip day</button>
      </div>`;
  },

  trip() {
    const h = host();
    const mp = city().meetingPoint;
    const time = state.booking.duration === "half" ? "9:00 – 13:00" : "9:00 – 17:00";
    return `
      <section class="pad">
        <div class="trip-banner">
          ${avatar(h)}
          <div>
            <b>Today with ${esc(h.name)}</b>
            <span>${esc(fmtDate(state.booking.date))} · ${time}</span>
          </div>
          <button class="sos" data-action="sos">SOS<small>Safety</small></button>
        </div>

        <div class="meet">
          <p class="eyebrow">MEETING POINT · 9:00</p>
          <b>${esc(mp.name)}</b>
          <p class="zh-big">${esc(mp.zh)}</p>
          <p class="muted small">${esc(mp.note)}</p>
          <button class="btn btn-ghost" data-action="show-driver">Show to driver</button>
        </div>

        <h3>Chat with ${esc(h.name)}</h3>
        <div class="chat" id="chat">${renderChat()}</div>
        <div class="quick" id="quick">${renderQuick()}</div>
        <form class="chat-input" data-action="send">
          <input name="msg" placeholder="Message ${esc(h.name)}" autocomplete="off" aria-label="Message">
          <button class="btn btn-primary btn-sm">Send</button>
        </form>
      </section>
      <div class="cta-bar">
        <button class="btn btn-secondary" data-action="go" data-to="review">Trip finished · rate your day</button>
      </div>`;
  },

  review() {
    const h = host();
    const r = state.review;
    const tags = ["Helped with payments", "Great food spots", "Made transit easy", "Felt like a friend", "Good English", "On time"];
    return `
      <section class="pad">
        <div class="intro-head">
          ${avatar(h, "avatar-lg")}
          <div><h2>How was your day with ${esc(h.name)}?</h2></div>
        </div>
        <div class="star-input" role="radiogroup" aria-label="Rating">
          ${[1, 2, 3, 4, 5].map((n) => `<button class="star ${r.stars >= n ? "on" : ""}" data-action="stars" data-n="${n}" role="radio" aria-checked="${r.stars === n}" aria-label="${n} star${n > 1 ? "s" : ""}">★</button>`).join("")}
        </div>

        <h3>What stood out?</h3>
        <div class="chips">
          ${tags.map((t) => `<button class="chip ${r.tags.includes(t) ? "selected" : ""}" data-action="tag" data-id="${esc(t)}" aria-pressed="${r.tags.includes(t)}">${esc(t)}</button>`).join("")}
        </div>

        <label class="field">Anything else? (optional)
          <textarea data-field="comment" rows="3" placeholder="What should the next traveler know?">${esc(r.comment)}</textarea>
        </label>

        <h3>How likely are you to recommend PengPal to a friend going to China?</h3>
        <div class="nps">
          ${Array.from({ length: 11 }, (_, n) => `<button class="nps-btn ${r.nps === n ? "selected" : ""}" data-action="nps" data-n="${n}" aria-pressed="${r.nps === n}">${n}</button>`).join("")}
        </div>
        <div class="nps-legend"><span>Not likely</span><span>Very likely</span></div>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="submit-review" ${r.stars ? "" : "disabled"}>${r.stars ? "Submit review" : "Tap a star to rate"}</button>
      </div>`;
  },

  done() {
    const h = host();
    return `
      <section class="hero">
        <span class="pmark pmark-xl" aria-hidden="true">P</span>
        <h1>Thanks! 谢谢</h1>
        <p class="lead">Your review helps ${esc(h.name)} and the next first-timer in ${esc(city().name)}.</p>
        <div class="summary">
          <div><span>Host</span><b>${esc(h.name)}</b></div>
          <div><span>Rating</span><b class="stars">${stars(state.review.stars)}</b></div>
          <div><span>Would recommend</span><b>${state.review.nps ?? "–"} / 10</b></div>
        </div>
      </section>
      <div class="cta-bar">
        <button class="btn btn-primary" data-action="share">Invite a friend going to China</button>
        <button class="btn btn-ghost" data-action="restart">Start over</button>
      </div>`;
  },
};

// ---- chat (scripted) ----

const CHAT_SCRIPT = [
  {
    options: [
      { text: "I'm on my way!", reply: () => "Great! Message me when you see the meeting point. I know a breakfast spot nearby you have to try." },
      { text: "My DiDi driver can't find it", reply: () => `No problem. Show the driver the Chinese address above (${city().meetingPoint.zh}), or send me a photo of where you are and I'll come to you.` },
      { text: "Running 10 min late", reply: () => "No rush at all! 慢慢来 (màn man lái), take your time." },
    ],
  },
  {
    options: [
      { text: "See you soon 👋", reply: () => "See you! I'm wearing a red PengPal cap 🧢" },
      { text: "Can you help me top up Alipay?", reply: () => "Yes, we'll do it first thing. Bring your passport." },
    ],
  },
];

function hostOpening() {
  return `Morning! I'm at ${city().meetingPoint.name}. Ready when you are 😊`;
}

function renderChat() {
  const h = host();
  const msgs = [{ from: "host", text: hostOpening() }, ...state.chat];
  return msgs.map((m) => m.from === "host"
    ? `<div class="msg msg-host">${avatar(h, "avatar-xs")}<span>${esc(m.text)}</span></div>`
    : `<div class="msg msg-me"><span>${esc(m.text)}</span></div>`).join("");
}

function renderQuick() {
  const step = CHAT_SCRIPT[state.chatStep];
  if (!step) return "";
  return step.options.map((o, i) => `<button class="chip" data-action="quick" data-i="${i}">${esc(o.text)}</button>`).join("");
}

function sendChat(text, replyFn) {
  state.chat.push({ from: "me", text });
  saveState();
  refreshChat();
  const chat = document.getElementById("chat");
  chat.insertAdjacentHTML("beforeend", `<div class="msg msg-host typing">${avatar(host(), "avatar-xs")}<span>…</span></div>`);
  setTimeout(() => {
    state.chat.push({ from: "host", text: replyFn() });
    saveState();
    if (state.screen === "trip") refreshChat();
  }, 900);
}

function refreshChat() {
  const chat = document.getElementById("chat");
  const quick = document.getElementById("quick");
  if (!chat) return;
  chat.innerHTML = renderChat();
  quick.innerHTML = renderQuick();
  chat.lastElementChild?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

// ---- render ----

function render() {
  if (!screens[state.screen]) state.screen = "welcome";
  // Screens past the host list need a chosen host; send a stale or reset state back.
  if (FLOW.indexOf(state.screen) > FLOW.indexOf("hosts") && !host()) state.screen = "hosts";
  renderTopbar();
  screenEl.innerHTML = screens[state.screen]();
  screenEl.dataset.screen = state.screen;
}

// ---- events ----

document.addEventListener("click", (e) => {
  if (e.target === backdropEl) return closeSheet();
  const el = e.target.closest("[data-action]");
  if (!el || el.disabled || el.tagName === "FORM") return;
  const a = el.dataset.action;
  const s = state;

  switch (a) {
    case "go": return go(el.dataset.to);
    case "back": {
      const i = FLOW.indexOf(s.screen);
      return go(FLOW[Math.max(0, i - 1)]);
    }
    case "restart": return restart();
    case "city":
      if (s.profile.city !== el.dataset.id) s.hostId = null;
      s.profile.city = el.dataset.id;
      break;
    case "interest": {
      const list = s.profile.interests;
      const id = el.dataset.id;
      s.profile.interests = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      break;
    }
    case "pick-host":
      if (s.hostId !== el.dataset.id) {
        s.hostId = el.dataset.id;
        s.intro.slot = null;
        s.chat = [];
        s.chatStep = 0;
      }
      return go("profile");
    case "play-video": return playVideo();
    case "slot": s.intro.slot = el.dataset.iso; break;
    case "confirm-intro":
      showToast(`Video intro booked with ${host().name}. We'll send a reminder.`);
      return go("book");
    case "duration": s.booking.duration = el.dataset.id; break;
    case "party": s.booking.party = Math.min(4, Math.max(1, s.booking.party + Number(el.dataset.d))); break;
    case "pay": return openPaySheet();
    case "confirm-pay":
      s.booking.paid = true;
      closeSheet();
      showToast("Payment confirmed (demo). You're booked!");
      return go("prep");
    case "check": s.checklist[el.dataset.id] = !s.checklist[el.dataset.id]; break;
    case "show-driver": return openDriverSheet();
    case "sos": return openSosSheet();
    case "sim":
      closeSheet();
      return showToast(el.dataset.msg);
    case "close-sheet": return closeSheet();
    case "quick": {
      const opt = CHAT_SCRIPT[s.chatStep].options[Number(el.dataset.i)];
      s.chatStep += 1;
      return sendChat(opt.text, opt.reply);
    }
    case "stars": s.review.stars = Number(el.dataset.n); break;
    case "tag": {
      const t = el.dataset.id;
      s.review.tags = s.review.tags.includes(t) ? s.review.tags.filter((x) => x !== t) : [...s.review.tags, t];
      break;
    }
    case "nps": s.review.nps = Number(el.dataset.n); break;
    case "submit-review": return go("done");
    case "share": return share();
    default: return;
  }
  saveState();
  const y = screenEl.scrollTop;
  render();
  screenEl.scrollTop = y;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !sheetEl.hidden) closeSheet();
  if ((e.key === "Enter" || e.key === " ") && e.target.dataset?.action === "play-video") {
    e.preventDefault();
    playVideo();
  }
});

document.addEventListener("change", (e) => {
  const f = e.target.dataset?.field;
  if (!f) return;
  if (f === "country" || f === "language") {
    state.profile[f] = e.target.value;
    state.intro.slot = null;
  }
  if (f === "date" && e.target.value) state.booking.date = e.target.value;
  saveState();
  render();
});

document.addEventListener("input", (e) => {
  if (e.target.dataset?.field === "comment") {
    state.review.comment = e.target.value;
    saveState();
  }
});

document.addEventListener("submit", (e) => {
  if (e.target.dataset.action !== "send") return;
  e.preventDefault();
  const input = e.target.elements.msg;
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  sendChat(text, () => `(Demo) In the real app ${host().name} would answer here. Try the quick replies.`);
});

document.getElementById("restart").addEventListener("click", restart);

function restart() {
  closeSheet();
  state = defaultState();
  saveState();
  go("welcome");
}

// ---- sheets and simulated actions ----

function playVideo() {
  const h = host();
  const box = document.getElementById("video-inner");
  if (!box) return;
  box.innerHTML = `<span class="caption">“Hi, I'm ${esc(h.name)}! I studied in ${esc(h.studied.place)} and now I'm back home in ${esc(city().name)}. I'd love to show you ${esc(h.specialties[0])}, and help you sort out Alipay and DiDi on day one.”</span>
    <span class="video-label">Demo: a 45-second intro video plays here</span>`;
}

function openPaySheet() {
  const pr = priceFor(state.booking.duration);
  openSheet(`
    <h2>Confirm payment</h2>
    <div class="receipt">
      <div class="row"><span>${esc(host().name)} · ${esc(fmtDate(state.booking.date))}</span><span>${usd(pr.rate)}</span></div>
      <div class="row"><span>Service fee</span><span>${usd(pr.fee)}</span></div>
      <div class="row total"><span>Total (USD)</span><span>${usd(pr.total)}</span></div>
    </div>
    <div class="fake-card">💳 Visa ending in 4242 <span class="muted">(demo)</span></div>
    <button class="btn btn-primary" data-action="confirm-pay">Pay ${usd(pr.total)}</button>
    <button class="btn btn-ghost" data-action="close-sheet">Cancel</button>`);
}

function openDriverSheet() {
  const mp = city().meetingPoint;
  openSheet(`
    <p class="eyebrow">请带我去 · Please take me to</p>
    <p class="driver-zh">${esc(mp.zh)}</p>
    <p class="muted">${esc(mp.name)}, ${esc(city().name)}</p>
    <button class="btn btn-ghost" data-action="close-sheet">Done</button>`);
}

function openSosSheet() {
  const h = host();
  openSheet(`
    <h2 class="sos-title">Safety</h2>
    <p class="hint">PengPal support answers 24/7 in English and can call local services for you in Chinese.</p>
    <div class="sos-grid">
      <button class="sos-btn" data-action="sim" data-msg="Demo: this would dial 110 (police).">110<small>Police</small></button>
      <button class="sos-btn" data-action="sim" data-msg="Demo: this would dial 120 (ambulance).">120<small>Ambulance</small></button>
      <button class="sos-btn" data-action="sim" data-msg="Demo: this would dial 119 (fire).">119<small>Fire</small></button>
    </div>
    <button class="btn btn-secondary" data-action="sim" data-msg="Demo: your live location is now shared with PengPal support.">📍 Share my live location with PengPal</button>
    <button class="btn btn-secondary" data-action="sim" data-msg="Demo: connecting you to PengPal support…">📞 Call PengPal support</button>
    <button class="btn btn-ghost danger" data-action="sim" data-msg="Demo: report sent. Support will contact you privately within minutes.">Report a problem with ${esc(h.name)}</button>
    <button class="btn btn-ghost" data-action="close-sheet">Close</button>`);
}

async function share() {
  const data = { title: "PengPal", text: "Travel China like you have a friend there.", url: location.href };
  try {
    if (navigator.share) {
      await navigator.share(data);
      return;
    }
    await navigator.clipboard.writeText(location.href);
    showToast("Link copied");
  } catch {
    showToast("Share the link from your browser bar");
  }
}

render();
