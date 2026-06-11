/* ═══════════════════════════════════
   germany.js — Germany Preparation Hub
   ═══════════════════════════════════ */

function renderGermany() {
  const container = document.getElementById('germanyContent');
  if (!container) return;

  container.innerHTML = `
  <div class="germany-grid">

    <!-- Master's Requirements -->
    <div class="germany-card">
      <div class="germany-card-title">🎓 Master's Application Requirements</div>
      <ul class="germany-list">
        ${GERMANY_DATA.masterRequirements.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <!-- Top Universities -->
    <div class="germany-card">
      <div class="germany-card-title">🏛️ Top Universities for EV/EE Engineering</div>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${GERMANY_DATA.topUniversities.map(u => `
          <div style="background:#fffbeb; border-radius:8px; padding:12px; border-left:3px solid #f59e0b">
            <div style="font-size:13px; font-weight:700; color:#1a1a2e">${u.name}</div>
            <div style="font-size:11px; color:#92400e; font-weight:600; margin-bottom:4px">${u.rank}</div>
            <div style="font-size:12px; color:#495057">${u.programs}</div>
            <div style="font-size:11px; color:#868e96; margin-top:4px; font-style:italic">${u.notes}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- In-Demand Skills -->
    <div class="germany-card">
      <div class="germany-card-title">⚡ Top In-Demand Skills in Germany</div>
      <ul class="germany-list">
        ${GERMANY_DATA.inDemandSkills.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <!-- Salary Data -->
    <div class="germany-card">
      <div class="germany-card-title">💰 Salary Benchmarks (Germany, 2024–2025)</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${GERMANY_DATA.salaryData.map(s => `
          <div style="background:#ecfdf5; border-radius:6px; padding:10px 12px;
                      display:flex; justify-content:space-between; align-items:flex-start; gap:10px; border:1px solid #a7f3d0">
            <span style="font-size:12px; color:#495057; flex:1">${s.role}</span>
            <span style="font-size:12px; font-weight:700; color:#065f46; white-space:nowrap">${s.salary}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- Visa & Legal Info -->
    <div class="germany-card">
      <div class="germany-card-title">🛂 Visa, Work & Legal Information</div>
      <ul class="germany-list">
        ${GERMANY_DATA.visaInfo.map(v => `<li>${v}</li>`).join('')}
      </ul>
    </div>

    <!-- German Automotive Vocabulary -->
    <div class="germany-card">
      <div class="germany-card-title">🇩🇪 Essential German Automotive Vocabulary</div>
      <div style="display:flex; flex-direction:column; gap:6px;">
        ${GERMANY_DATA.germanWords.map(w => `
          <div style="display:flex; justify-content:space-between; padding:7px 0;
                      border-bottom:1px solid var(--border); font-size:13px;">
            <span style="font-weight:700; color:#92400e">${w.de}</span>
            <span style="color:var(--text-secondary)">${w.en}</span>
          </div>`).join('')}
      </div>
    </div>

  </div>

  <!-- Timeline for Germany -->
  <div style="margin-top:28px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:24px;">
    <h2 style="font-size:18px; font-weight:700; margin-bottom:20px; color:var(--text-primary)">
      🗓️ Your Germany Journey Timeline
    </h2>
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px,1fr)); gap:12px;">
      ${[
        {time:"Now – M6", action:"Build foundation skills, prepare APS certificate, IELTS/TOEFL test"},
        {time:"M7–M11", action:"Write SOP, gather recommendation letters, apply to 3–5 universities"},
        {time:"M11–M12", action:"Apply for German Student Visa, open blocked account (€11,622)"},
        {time:"M12–M13", action:"Arrive in Germany, register at Bürgeramt, get health insurance, student ID"},
        {time:"M13–M18", action:"First semester: network, apply for Werkstudent jobs, improve German to B1"},
        {time:"M18–M21", action:"Start internship or Werkstudent position at automotive company"},
        {time:"M21–M23", action:"Master's thesis at OEM/Tier 1, apply for full-time positions in parallel"},
        {time:"M24+", action:"Full-time graduate engineer position — EU Blue Card eligibility"}
      ].map(t => `
        <div style="background:#fffbeb; border-radius:8px; padding:12px; border-top:3px solid #f59e0b">
          <div style="font-size:11px; font-weight:700; color:#92400e; margin-bottom:6px">${t.time}</div>
          <div style="font-size:12px; color:var(--text-secondary); line-height:1.5">${t.action}</div>
        </div>`).join('')}
    </div>
  </div>`;
}
