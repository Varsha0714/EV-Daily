/* ════════════════════════════════════════════
   skills.js — Skill Tracker + Radar Chart
   ════════════════════════════════════════════ */

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  const saved = store.get('skillLevels', {});

  grid.innerHTML = SKILLS_DATA.map(skill => {
    const val = saved[skill.id] ?? 0;
    return `
    <div class="skill-item" id="skill-${skill.id}">
      <div class="skill-item-header">
        <span class="skill-item-name">${skill.icon} ${skill.name}</span>
        <span class="skill-level-badge ${getLevelClass(val)}" id="badge-${skill.id}">${getLevelText(val)}</span>
      </div>
      <div class="skill-bar-outer">
        <div class="skill-bar-inner" id="bar-${skill.id}" style="width:${val}%"></div>
      </div>
      <div class="skill-controls">
        <input type="range" min="0" max="100" value="${val}" class="skill-slider"
          id="slider-${skill.id}"
          oninput="updateSkill('${skill.id}', this.value)" />
        <span class="skill-pct" id="pct-${skill.id}">${val}%</span>
      </div>
      <div class="skill-next-step" id="next-${skill.id}">
        💡 Next step: ${skill.nextSteps[getStepKey(val)]}
      </div>
    </div>`;
  }).join('');

  drawRadar();
}

function updateSkill(id, val) {
  val = parseInt(val);
  const saved = store.get('skillLevels', {});
  saved[id] = val;
  store.set('skillLevels', saved);

  document.getElementById('bar-'+id).style.width = val + '%';
  document.getElementById('pct-'+id).textContent  = val + '%';
  document.getElementById('badge-'+id).className =
    'skill-level-badge ' + getLevelClass(val);
  document.getElementById('badge-'+id).textContent = getLevelText(val);

  const skill = SKILLS_DATA.find(s => s.id === id);
  if (skill) {
    document.getElementById('next-'+id).innerHTML =
      '💡 Next step: ' + skill.nextSteps[getStepKey(val)];
  }
  drawRadar();
}

function getLevelClass(val) {
  if (val < 20) return 'level-beginner';
  if (val < 40) return 'level-elementary';
  if (val < 65) return 'level-intermediate';
  if (val < 85) return 'level-advanced';
  return 'level-expert';
}
function getLevelText(val) {
  if (val < 20) return 'Beginner';
  if (val < 40) return 'Elementary';
  if (val < 65) return 'Intermediate';
  if (val < 85) return 'Advanced';
  return 'Expert';
}
function getStepKey(val) {
  if (val < 20) return 0;
  if (val < 40) return 30;
  if (val < 65) return 60;
  if (val < 85) return 80;
  return 95;
}

/* ── Radar Chart (pure canvas, no external library) ── */
function drawRadar() {
  const canvas = document.getElementById('skillRadar');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  const saved  = store.get('skillLevels', {});
  const W = canvas.width, H = canvas.height;
  const cx = W/2, cy = H/2;
  const R  = Math.min(W, H) * 0.38;

  // Only show 8 key skills in radar
  const radarSkills = ['matlab','simulink','canoe','autosar','embedded_c','bms_theory','power_elec','func_safety'];
  const n  = radarSkills.length;
  const labels = {
    matlab:'MATLAB', simulink:'Simulink', canoe:'CANoe',
    autosar:'AUTOSAR', embedded_c:'Embedded C', bms_theory:'BMS',
    power_elec:'Power Elec', func_safety:'Safety'
  };

  ctx.clearRect(0, 0, W, H);

  // Background grid
  for (let level = 1; level <= 5; level++) {
    const r = R * level / 5;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (2 * Math.PI * i / n) - Math.PI/2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(67,97,238,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = level === 5 ? 'rgba(67,97,238,0.03)' : 'transparent';
    ctx.fill();
  }

  // Axis lines
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i / n) - Math.PI/2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
    ctx.strokeStyle = 'rgba(67,97,238,0.18)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Data polygon
  const values = radarSkills.map(id => (saved[id] ?? 0) / 100);
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i / n) - Math.PI/2;
    const r = R * values[i];
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle   = 'rgba(67,97,238,0.18)';
  ctx.strokeStyle = '#4361ee';
  ctx.lineWidth   = 2.5;
  ctx.fill();
  ctx.stroke();

  // Data points
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i / n) - Math.PI/2;
    const r = R * values[i];
    ctx.beginPath();
    ctx.arc(cx + r*Math.cos(angle), cy + r*Math.sin(angle), 5, 0, 2*Math.PI);
    ctx.fillStyle = '#7209b7';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = '#495057';
  ctx.font      = 'bold 11px Inter, sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < n; i++) {
    const angle  = (2 * Math.PI * i / n) - Math.PI/2;
    const labelR = R + 22;
    const x = cx + labelR * Math.cos(angle);
    const y = cy + labelR * Math.sin(angle);
    ctx.fillText(labels[radarSkills[i]], x, y + 4);
  }
}
