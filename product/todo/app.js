import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from './config.js';

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Auth emails and Google login send the user back to this exact page.
const APP_URL = window.location.origin + window.location.pathname;

const $ = (id) => document.getElementById(id);

let todos = [];
let editingId = null;
let signUpMode = false;
let recovering = false;

// ---------- Messages ----------

function showMessage(text, isError = false) {
  const el = $('message');
  el.textContent = text;
  el.classList.toggle('error', isError);
  el.hidden = false;
}

function clearMessage() {
  $('message').hidden = true;
}

// ---------- Views ----------

function showView(name) {
  $('auth-view').hidden = name !== 'auth';
  $('reset-view').hidden = name !== 'reset';
  $('todo-view').hidden = name !== 'todos';
}

function render(session) {
  if (recovering) {
    showView('reset');
    return;
  }
  if (!session) {
    $('user-bar').hidden = true;
    showView('auth');
    return;
  }
  $('user-email').textContent = session.user.email;
  $('user-bar').hidden = false;
  showView('todos');
}

// ---------- Auth ----------

function setAuthMode(isSignUp) {
  signUpMode = isSignUp;
  $('auth-title').textContent = isSignUp ? 'Sign up' : 'Log in';
  $('auth-submit').textContent = isSignUp ? 'Sign up' : 'Log in';
  $('auth-password').autocomplete = isSignUp ? 'new-password' : 'current-password';
  $('toggle-mode').textContent = isSignUp ? 'Have an account? Log in' : 'Need an account? Sign up';
}

$('toggle-mode').addEventListener('click', () => {
  clearMessage();
  setAuthMode(!signUpMode);
});

$('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearMessage();
  const email = $('auth-email').value.trim();
  const password = $('auth-password').value;

  if (signUpMode) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: APP_URL },
    });
    if (error) return showMessage(error.message, true);
    if (!data.session) showMessage('Check your email to confirm your account, then log in.');
  } else {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return showMessage(error.message, true);
  }
  $('auth-password').value = '';
});

$('google-btn').addEventListener('click', async () => {
  clearMessage();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: APP_URL },
  });
  if (error) showMessage(error.message, true);
});

$('forgot-btn').addEventListener('click', async () => {
  clearMessage();
  const email = $('auth-email').value.trim();
  if (!email) return showMessage('Enter your email above, then click "Forgot password?" again.', true);
  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: APP_URL });
  if (error) return showMessage(error.message, true);
  showMessage('If that email has an account, a reset link is on its way.');
});

$('reset-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearMessage();
  const { error } = await supabase.auth.updateUser({ password: $('reset-password').value });
  if (error) return showMessage(error.message, true);
  $('reset-password').value = '';
  recovering = false;
  showMessage('Password updated.');
  const { data } = await supabase.auth.getSession();
  render(data.session);
  loadTodos();
});

$('logout-btn').addEventListener('click', async () => {
  clearMessage();
  await supabase.auth.signOut();
});

// ---------- Dates ----------

function todayString() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatDate(yyyyMmDd) {
  const [y, m, d] = yyyyMmDd.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function isOverdue(todo) {
  return !todo.done && todo.due_date && todo.due_date < todayString();
}

// Open before done; within each group, dated soonest-first, then undated newest-first.
function sortTodos(list) {
  return [...list].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    if (a.due_date && b.due_date && a.due_date !== b.due_date) return a.due_date < b.due_date ? -1 : 1;
    if (a.due_date && !b.due_date) return -1;
    if (!a.due_date && b.due_date) return 1;
    return a.created_at < b.created_at ? 1 : -1;
  });
}

// ---------- To-dos ----------

async function loadTodos() {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) return showMessage(`Couldn't load to-dos: ${error.message}`, true);
  todos = data;
  renderTodos();
}

function renderTodos() {
  const list = $('todo-list');
  list.replaceChildren();
  $('empty-state').hidden = todos.length > 0;

  for (const todo of sortTodos(todos)) {
    list.append(todo.id === editingId ? editRow(todo) : viewRow(todo));
  }
}

function viewRow(todo) {
  const li = document.createElement('li');
  li.className = 'todo';
  li.classList.toggle('done', todo.done);
  li.classList.toggle('overdue', isOverdue(todo));

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.checked = todo.done;
  check.setAttribute('aria-label', `Mark "${todo.title}" as ${todo.done ? 'not done' : 'done'}`);
  check.addEventListener('change', () => updateTodo(todo.id, { done: check.checked }));

  const title = document.createElement('span');
  title.className = 'title';
  title.textContent = todo.title;

  li.append(check, title);

  if (todo.due_date) {
    const due = document.createElement('span');
    due.className = 'due';
    due.textContent = (isOverdue(todo) ? 'Overdue: ' : 'Due ') + formatDate(todo.due_date);
    li.append(due);
  }

  const actions = document.createElement('span');
  actions.className = 'actions';
  const edit = linkButton('Edit', () => { editingId = todo.id; renderTodos(); });
  const del = linkButton('Delete', () => deleteTodo(todo));
  del.classList.add('danger');
  actions.append(edit, del);
  li.append(actions);

  return li;
}

function editRow(todo) {
  const li = document.createElement('li');
  li.className = 'todo';

  const form = document.createElement('form');
  form.className = 'add-form';
  form.style.margin = '0';
  form.style.flex = '1';

  const title = document.createElement('input');
  title.className = 'edit-title';
  title.type = 'text';
  title.required = true;
  title.maxLength = 500;
  title.value = todo.title;
  title.setAttribute('aria-label', 'To-do text');

  const due = document.createElement('input');
  due.type = 'date';
  due.value = todo.due_date ?? '';
  due.setAttribute('aria-label', 'Due date (optional)');

  const save = document.createElement('button');
  save.type = 'submit';
  save.className = 'primary';
  save.textContent = 'Save';

  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.className = 'secondary';
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', () => { editingId = null; renderTodos(); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const ok = await updateTodo(todo.id, { title: title.value.trim(), due_date: due.value || null });
    if (ok) { editingId = null; renderTodos(); }
  });

  form.append(title, due, save, cancel);
  li.append(form);
  setTimeout(() => title.focus(), 0);
  return li;
}

function linkButton(text, onClick) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'link-btn';
  b.textContent = text;
  b.addEventListener('click', onClick);
  return b;
}

$('add-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearMessage();
  const title = $('add-title').value.trim();
  if (!title) return;
  const { data, error } = await supabase
    .from('todos')
    .insert({ title, due_date: $('add-due').value || null })
    .select()
    .single();
  if (error) return showMessage(`Couldn't add to-do: ${error.message}`, true);
  todos.push(data);
  $('add-title').value = '';
  $('add-due').value = '';
  renderTodos();
});

async function updateTodo(id, changes) {
  clearMessage();
  const { data, error } = await supabase.from('todos').update(changes).eq('id', id).select().single();
  if (error) {
    showMessage(`Couldn't save: ${error.message}`, true);
    renderTodos();
    return false;
  }
  todos = todos.map((t) => (t.id === id ? data : t));
  renderTodos();
  return true;
}

async function deleteTodo(todo) {
  if (!confirm(`Delete "${todo.title}"?`)) return;
  clearMessage();
  const { error } = await supabase.from('todos').delete().eq('id', todo.id);
  if (error) return showMessage(`Couldn't delete: ${error.message}`, true);
  todos = todos.filter((t) => t.id !== todo.id);
  renderTodos();
}

// ---------- Start ----------

supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'PASSWORD_RECOVERY') recovering = true;
  // Defer Supabase calls out of the callback, per supabase-js guidance.
  setTimeout(() => {
    render(session);
    if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
      if (session && !recovering) loadTodos();
    }
    if (event === 'SIGNED_OUT') {
      todos = [];
      editingId = null;
      renderTodos();
    }
  }, 0);
});
