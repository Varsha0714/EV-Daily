/* ════════════════════════════════════════════
   app.js — Core application logic, timer,
            tab switching, initialization
   ════════════════════════════════════════════ */

/* ── State ── */
const STATE = {
  currentTab: 'dashboard',
  timer: { running: false, remaining: 30 * 60, interval: null },
  streak: 0,
  daysLearned: 0,
  lastVisit: null,
  roadmapMonth: 1
};

/* ── Storage helpers ── */
const store = {
  get: (key, def) => { try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }
};

/* ════════════════ INIT ════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initDashboard();
  renderSkills();
  renderRoadmap();
  renderGermany();
  renderCompanies();
  renderSources();
  renderWeeklyDive();
  loadFlashcards();
  renderActionItem();
  updateTimeGreeting();
  setInterval(updateTimeGreeting, 60000);
});

function loadState() {
  STATE.streak      = store.get('streak', 0);
  STATE.daysLearned = store.get('daysLearned', 0);
  STATE.lastVisit   = store.get('lastVisit', null);
  STATE.roadmapMonth= store.get('roadmapMonth', 1);

  // Streak logic
  const today = new Date().toDateString();
  if (STATE.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (STATE.lastVisit === yesterday) {
      STATE.streak++;
    } else if (STATE.lastVisit !== null && STATE.lastVisit !== today) {
      STATE.streak = 1; // reset
    } else if (STATE.lastVisit === null) {
      STATE.streak = 1;
    }
    STATE.daysLearned++;
    STATE.lastVisit = today;
    store.set('streak', STATE.streak);
    store.set('daysLearned', STATE.daysLearned);
    store.set('lastVisit', today);
  }

  document.getElementById('streakCount').textContent = STATE.streak;
  document.getElementById('statDaysLearned').textContent = STATE.daysLearned;
  document.getElementById('statCurrentMonth').textContent = 'M' + STATE.roadmapMonth;

  const lastScore = store.get('lastQuizScore', null);
  if (lastScore !== null) document.getElementById('statQuizScore').textContent = lastScore + '%';
}

function initDashboard() {
  const now = new Date();
  document.getElementById('todayDate').textContent =
    now.toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
  document.getElementById('reportDate').textContent =
    'Generated for: ' + now.toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
  updateProgressBar();
}

function updateTimeGreeting() {
  const h = new Date().getHours();
  const tod = h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : h < 21 ? 'Evening' : 'Night';
  document.getElementById('timeOfDay').textContent = tod;
}

/* ════════════════ TAB NAVIGATION ════════════════ */
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const panel = document.getElementById('tab-' + tabId);
  if (panel) panel.classList.add('active');

  const navBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (navBtn) navBtn.classList.add('active');

  STATE.currentTab = tabId;
  window.scrollTo(0, 0);
}

/* ════════════════ TIMER ════════════════ */
function toggleTimer() {
  if (STATE.timer.running) {
    clearInterval(STATE.timer.interval);
    STATE.timer.running = false;
    document.getElementById('timerBtn').textContent = 'Resume';
    document.getElementById('timerBtn').classList.remove('running');
  } else {
    STATE.timer.running = true;
    document.getElementById('timerBtn').textContent = 'Pause';
    document.getElementById('timerBtn').classList.add('running');
    STATE.timer.interval = setInterval(() => {
      STATE.timer.remaining--;
      if (STATE.timer.remaining <= 0) {
        clearInterval(STATE.timer.interval);
        STATE.timer.running = false;
        STATE.timer.remaining = 0;
        document.getElementById('timerBtn').textContent = '✅ Done!';
        document.getElementById('timerBtn').classList.remove('running');
        updateProgressBar(100);
      }
      updateTimerDisplay();
      updateProgressBar();
    }, 1000);
  }
}

function updateTimerDisplay() {
  const m = Math.floor(STATE.timer.remaining / 60);
  const s = STATE.timer.remaining % 60;
  document.getElementById('timerDisplay').textContent =
    String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}

function updateProgressBar(override) {
  const total = 30 * 60;
  const elapsed = total - STATE.timer.remaining;
  const pct = override !== undefined ? override : Math.min(100, Math.round((elapsed / total) * 100));
  document.getElementById('dailyProgressBar').style.width = pct + '%';
  document.getElementById('progressPercent').textContent = pct + '% complete';
}

/* ════════════════ SEGMENT JUMP ════════════════ */
function jumpToSegment(segment) {
  switchTab('daily-report');
  setTimeout(() => {
    const el = document.getElementById('section-' + segment);
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    else if (!document.getElementById('reportSections')) generateReport();
  }, 100);
}

/* ════════════════ ACTION ITEM ════════════════ */
function renderActionItem() {
  // Pick based on day of year for deterministic daily rotation
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);
  const item = ACTION_ITEMS[dayOfYear % ACTION_ITEMS.length];
  document.getElementById('actionContent').innerHTML =
    `<strong class="text-ev">${item.title}</strong><br/><br/>${item.body}`;
}

function refreshActionItem() {
  const item = ACTION_ITEMS[Math.floor(Math.random() * ACTION_ITEMS.length)];
  document.getElementById('actionContent').innerHTML =
    `<strong class="text-ev">${item.title}</strong><br/><br/>${item.body}`;
}

/* ════════════════ SIDEBAR TOGGLE ════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('sidebarToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      const main    = document.getElementById('mainContent');
      sidebar.style.width = sidebar.style.width === '60px' ? '' : '60px';
    });
  }
});
