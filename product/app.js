const STORAGE_KEY = "habit-tracker.habits.v1";
const HISTORY_DAYS = 30;

const listEl = document.getElementById("habit-list");
const emptyStateEl = document.getElementById("empty-state");
const formEl = document.getElementById("add-habit-form");
const nameInputEl = document.getElementById("habit-name");
const templateEl = document.getElementById("habit-template");

function loadHabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHabits(habits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function todayKey() {
  return dateKey(new Date());
}

function dateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function currentStreak(completions) {
  const today = new Date();
  const anchor = new Date(today);
  if (!completions[dateKey(today)]) {
    anchor.setDate(anchor.getDate() - 1);
  }
  let streak = 0;
  const cursor = anchor;
  while (completions[dateKey(cursor)]) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function render() {
  const habits = loadHabits();
  listEl.innerHTML = "";
  emptyStateEl.hidden = habits.length > 0;

  for (const habit of habits) {
    listEl.appendChild(renderHabitCard(habit));
  }
}

function renderHabitCard(habit) {
  const node = templateEl.content.cloneNode(true);
  const card = node.querySelector(".habit-card");
  const toggleBtn = node.querySelector(".toggle-today");
  const nameEl = node.querySelector(".habit-name");
  const streakEl = node.querySelector(".streak");
  const deleteBtn = node.querySelector(".delete-habit");
  const historyEl = node.querySelector(".history");

  const doneToday = Boolean(habit.completions[todayKey()]);
  const streak = currentStreak(habit.completions);

  nameEl.textContent = habit.name;
  streakEl.textContent = streak > 0
    ? `${streak} day${streak === 1 ? "" : "s"} streak`
    : "No streak yet";

  toggleBtn.setAttribute("aria-pressed", String(doneToday));
  toggleBtn.addEventListener("click", () => toggleToday(habit.id));
  deleteBtn.addEventListener("click", () => deleteHabit(habit.id));

  for (let i = HISTORY_DAYS - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = dateKey(d);
    const dayEl = document.createElement("span");
    dayEl.className = "day" + (habit.completions[key] ? " hit" : "");
    dayEl.title = key;
    historyEl.appendChild(dayEl);
  }

  card.dataset.id = habit.id;
  return node;
}

function addHabit(name) {
  const habits = loadHabits();
  habits.push({
    id: crypto.randomUUID(),
    name,
    createdAt: todayKey(),
    completions: {},
  });
  saveHabits(habits);
  render();
}

function toggleToday(id) {
  const habits = loadHabits();
  const habit = habits.find((h) => h.id === id);
  if (!habit) return;
  const key = todayKey();
  if (habit.completions[key]) {
    delete habit.completions[key];
  } else {
    habit.completions[key] = true;
  }
  saveHabits(habits);
  render();
}

function deleteHabit(id) {
  const habits = loadHabits().filter((h) => h.id !== id);
  saveHabits(habits);
  render();
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInputEl.value.trim();
  if (!name) return;
  addHabit(name);
  nameInputEl.value = "";
  nameInputEl.focus();
});

render();
