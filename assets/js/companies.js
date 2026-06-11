/* ═══════════════════════════════
   companies.js — Target Companies
   ═══════════════════════════════ */

function renderCompanies() {
  const grid = document.getElementById('companiesGrid');
  if (!grid) return;

  grid.innerHTML = COMPANIES_DATA.map(c => `
    <div class="company-card">
      <div class="company-header">
        <div class="company-logo-text" style="background:${c.color}">${c.name.split(' ')[0].slice(0,3).toUpperCase()}</div>
        <div>
          <div class="company-name">${c.name}</div>
          <div class="company-type">${c.type} · ${c.hq}</div>
        </div>
      </div>
      <div class="company-focus">${c.focus}</div>
      <div class="company-skills-label">Key Skills Required</div>
      <div class="company-skill-tags">
        ${c.skills.map(s => `<span class="company-skill-tag">${s}</span>`).join('')}
      </div>
      <div style="margin-top:12px;">
        <div class="company-skills-label">Common Roles</div>
        <div style="font-size:12px; color:var(--text-secondary); margin-top:4px; line-height:1.6">
          ${c.roles.join(' · ')}
        </div>
      </div>
      <div class="company-hq">📍 ${c.hq}</div>
    </div>`).join('');
}
