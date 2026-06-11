/* ═══════════════════════════════════════
   weekly.js — Weekly Deep Dive Content
   ═══════════════════════════════════════ */

let activeWeeklyTab = 'roadmap';

function renderWeeklyDive() {
  const container = document.getElementById('weeklyDiveContent');
  if (!container) return;

  container.innerHTML = `
    <div class="weekly-tabs">
      <button class="weekly-tab-btn active" id="wtab-roadmap" onclick="switchWeeklyTab('roadmap')">🗺️ Technology Roadmap</button>
      <button class="weekly-tab-btn" id="wtab-company" onclick="switchWeeklyTab('company')">🏭 Company Analysis</button>
      <button class="weekly-tab-btn" id="wtab-ev_breakdown" onclick="switchWeeklyTab('ev_breakdown')">⚡ EV Breakdown</button>
      <button class="weekly-tab-btn" id="wtab-case_study" onclick="switchWeeklyTab('case_study')">🔬 Case Study</button>
    </div>

    <div id="weekly-roadmap" class="weekly-content-panel active">
      ${buildWeeklyPanel(WEEKLY_CONTENT.roadmap)}
    </div>
    <div id="weekly-company" class="weekly-content-panel">
      ${buildWeeklyPanel(WEEKLY_CONTENT.company)}
    </div>
    <div id="weekly-ev_breakdown" class="weekly-content-panel">
      ${buildWeeklyPanel(WEEKLY_CONTENT.ev_breakdown)}
    </div>
    <div id="weekly-case_study" class="weekly-content-panel">
      ${buildWeeklyPanel(WEEKLY_CONTENT.case_study)}
    </div>`;
}

function buildWeeklyPanel(content) {
  return `
    <div class="deep-dive-card">
      <div class="deep-dive-title">${content.title}</div>
      <div class="deep-dive-subtitle">${content.subtitle}</div>
      <div class="deep-dive-body">${content.body}</div>
    </div>`;
}

function switchWeeklyTab(tab) {
  document.querySelectorAll('.weekly-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.weekly-content-panel').forEach(p => p.classList.remove('active'));

  document.getElementById('wtab-' + tab)?.classList.add('active');
  document.getElementById('weekly-' + tab)?.classList.add('active');
  activeWeeklyTab = tab;
}
