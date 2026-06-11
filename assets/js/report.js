/* ════════════════════════════════════════════
   report.js — Daily Engineering Intelligence
   Report generator (all 6 segments)
   ════════════════════════════════════════════ */

function generateReport() {
  const container = document.getElementById('reportContainer');
  const dayIndex  = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);

  // Pick items using day-based rotation for "fresh daily content"
  const newsItems     = pickN(NEWS_POOL,           5, dayIndex);
  const techItem      = TECH_SPOTLIGHT_POOL[dayIndex % TECH_SPOTLIGHT_POOL.length];
  const toolItem      = TOOLS_POOL[dayIndex % TOOLS_POOL.length];
  const quizItems     = pickN(QUIZ_QUESTIONS,      3, dayIndex + 100);
  const actionItem    = ACTION_ITEMS[dayIndex % ACTION_ITEMS.length];
  const skillItem     = SKILLS_DATA[dayIndex % SKILLS_DATA.length];

  // Germany job data — rotates weekly
  const weekIndex = Math.floor(dayIndex / 7);
  const germanySnippet = buildGermanySnippet(weekIndex);

  container.innerHTML = `
  <div id="reportSections">

  <!-- ① TOP NEWS -->
  <div class="report-section" id="section-news">
    <div class="report-section-header">
      📰 Top News &amp; Developments
      <span class="segment-timer">⏱ 5 min · Segment 1/6</span>
    </div>
    <div class="report-body">
      <div class="news-list">
        ${newsItems.map((item,i) => `
          <div class="news-item">
            <div class="news-num">${i+1}</div>
            <div class="news-content">
              <div class="news-title">${item.title}</div>
              <div class="news-summary">${item.summary}</div>
              <div class="news-tags">
                ${item.tags.map(t=>`<span class="tag tag-${t}">${t.toUpperCase()}</span>`).join('')}
                <span class="text-muted" style="font-size:11px; margin-left:4px">— ${item.source}</span>
                ${item.url ? `<a class="news-source-link" href="${item.url}" target="_blank" rel="noopener noreferrer">🔗 Learn More →</a>` : ''}
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- ② EE BREAKTHROUGHS -->
  <div class="report-section" id="section-tech">
    <div class="report-section-header">
      ⚡ Latest EE &amp; EV Breakthroughs
      <span class="segment-timer">⏱ 5 min · Segment 2/6</span>
    </div>
    <div class="report-body">
      <div class="concept-card">
        <div class="concept-title">🔬 ${techItem.title}</div>
        <div class="concept-body">${techItem.body}</div>
        <div class="concept-formula">${techItem.formula}</div>
        <div class="mt8" style="font-size:12px; color:#c2410c; font-weight:600;">
          💼 <strong>Career relevance:</strong> ${techItem.relevance}
        </div>
        ${techItem.learnMore ? `<a class="concept-learn-link" href="${techItem.learnMore}" target="_blank" rel="noopener noreferrer">📖 Deep Dive Resource →</a>` : ''}
      </div>
      <div class="mt16">
        <div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:10px">🏆 Top 3 Emerging Technologies This Week</div>
        ${buildEmergingTech(dayIndex)}
      </div>
    </div>
  </div>

  <!-- ③ TOOL OF THE DAY -->
  <div class="report-section" id="section-tools">
    <div class="report-section-header">
      🔧 Tool &amp; Software of the Day
      <span class="segment-timer">⏱ 5 min · Segment 3/6</span>
    </div>
    <div class="report-body">
      <div class="tool-card">
        <div class="tool-name">🛠️ ${toolItem.name}</div>
        <div class="tool-desc">${toolItem.desc}</div>
        <div class="tool-why">💡 Why learn this: ${toolItem.why}</div>
        <div class="tool-links">
          ${toolItem.links.map(l => `<a class="tool-link" href="${l.url}" target="_blank">${l.name} ↗</a>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- ④ DEEP CONCEPT -->
  <div class="report-section" id="section-concept">
    <div class="report-section-header">
      📚 Deep Technical Concept
      <span class="segment-timer">⏱ 5 min · Segment 4/6</span>
    </div>
    <div class="report-body">
      ${buildConceptOfDay(dayIndex)}
    </div>
  </div>

  <!-- ⑤ GERMANY WATCH -->
  <div class="report-section" id="section-germany-watch">
    <div class="report-section-header">
      🇩🇪 Germany Automotive &amp; Industry Watch
      <span class="segment-timer">⏱ 5 min · Segment 5/6</span>
    </div>
    <div class="report-body">
      ${germanySnippet}
    </div>
  </div>

  <!-- ⑥ CAREER & SKILL -->
  <div class="report-section" id="section-career">
    <div class="report-section-header">
      🚀 Career Builder &amp; Skill of the Day
      <span class="segment-timer">⏱ 5 min · Segment 6/6</span>
    </div>
    <div class="report-body">
      <div class="skill-of-day">
        <div class="skill-name">⚡ Skill Focus: ${skillItem.name}</div>
        <div class="skill-why">
          <strong>Why this skill matters:</strong> ${getSkillWhyText(skillItem.id)}<br/><br/>
          <strong>Today's micro-learning:</strong> ${skillItem.nextSteps[0]}
        </div>
        <div class="skill-action">
          🎯 Priority Level: <span class="text-ev">${skillItem.priority.toUpperCase()}</span>
          — Update your level in the Skill Tracker tab after studying.
        </div>
      </div>

      <div class="mt16" style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:10px">
        📋 Daily Quiz — 3 Questions
      </div>
      <div class="quiz-questions">
        ${quizItems.map((q,i) => `
          <div class="quiz-q">
            <div class="quiz-q-num">Q${i+1}</div>
            <div class="quiz-q-text">${q.q}</div>
            <button class="btn-reveal" onclick="revealAns(this)">Show Answer</button>
            <div class="quiz-q-ans">
              ✅ <strong>${q.options[q.correct]}</strong> — ${q.explanation}
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- ACTION ITEM -->
  <div class="report-section" id="section-action">
    <div class="report-section-header">⚡ Today's 15-Minute Action Item</div>
    <div class="report-body">
      <div class="report-action-item">
        <div class="report-action-title">${actionItem.title}</div>
        <div class="report-action-body">${actionItem.body}</div>
      </div>
    </div>
  </div>

  </div>`;
}

/* ── Helpers ── */
function pickN(arr, n, seed) {
  const result = [];
  const used   = new Set();
  let i = seed % arr.length;
  while (result.length < Math.min(n, arr.length)) {
    if (!used.has(i)) { result.push(arr[i]); used.add(i); }
    i = (i + 1) % arr.length;
  }
  return result;
}

function revealAns(btn) {
  const ans = btn.nextElementSibling;
  ans.classList.add('visible');
  btn.style.display = 'none';
}

function buildEmergingTech(dayIndex) {
  const techs = [
    {icon:"⚡", name:"Solid-State Batteries", relevance:"Toyota 2027 target — revolutionizes EV range & safety"},
    {icon:"🔮", name:"Digital Twin for BMS", relevance:"Real-time virtual battery model in cloud — predictive SOH"},
    {icon:"🌐", name:"V2X Communication (C-V2X)", relevance:"Vehicle-to-everything — safety + autonomous driving backbone"},
    {icon:"🤖", name:"AI-Enhanced ADAS SoCs", relevance:"NVIDIA Thor, Qualcomm Snapdragon — 2000+ TOPS compute"},
    {icon:"🔋", name:"Sodium-Ion Batteries (NIB)", relevance:"CATL 2025 mass production — LFP replacement for budget EVs"},
    {icon:"💡", name:"GaN Power Semiconductors", relevance:"GaN for OBC and DC-DC converters — rival to SiC"},
    {icon:"🛡️", name:"Zonal E/E Architecture", relevance:"VW, BMW migrating from distributed ECUs to zone controllers"}
  ];
  const items = pickN(techs, 3, dayIndex + 50);
  return items.map(t => `
    <div class="emerging-item">
      <span style="font-size:24px">${t.icon}</span>
      <div>
        <div style="font-size:13px; font-weight:700; color:#1a1a2e">${t.name}</div>
        <div style="font-size:12px; color:#495057">${t.relevance}</div>
      </div>
    </div>`).join('');
}

function buildConceptOfDay(dayIndex) {
  const concepts = [
    {
      title:"Understanding State of Charge (SOC) Estimation",
      body:"SOC represents how much energy remains in a battery as a percentage of its total capacity. Three main methods: (1) <strong>Coulomb Counting</strong> — integrates current over time (simple but drifts). (2) <strong>OCV Method</strong> — maps voltage to SOC using a characterization table (accurate at rest only). (3) <strong>Kalman Filter</strong> — combines both with battery model to eliminate drift while working in real-time.",
      formula:"SOC(t) = SOC(t₀) - (η/Q_nom) × ∫I(τ)dτ\nwhere η = Coulombic efficiency, Q_nom = nominal capacity (Ah)"
    },
    {
      title:"AUTOSAR Runtime Environment (RTE) — The Hidden Backbone",
      body:"The RTE is what makes AUTOSAR powerful. Every Software Component (SWC) declares its interfaces as ports. Two types: Provide-Ports (output data/services) and Require-Ports (input data/services). The RTE connects them automatically. This means SWC_A never calls SWC_B directly — it writes to its Provide-Port, and the RTE routes the data. Result: SWCs are completely portable across ECUs.",
      formula:"[SWC_A: P-Port] → RTE generated code → [SWC_B: R-Port]\nCode example: Rte_Write_SpeedPort_SpeedValue(speedKmh);"
    },
    {
      title:"Space Vector Modulation (SVM) Concept",
      body:"SVM is the optimal way to drive a 3-phase inverter. Instead of generating three independent sinusoidal PWM signals, SVM treats all three phases together as a single rotating voltage vector in a 2D plane (the alpha-beta plane). This improves DC bus utilization by 15% over sinusoidal PWM and reduces harmonic distortion. Used in every high-performance EV inverter.",
      formula:"V_max (SVM) = Vdc / √3 = 0.577 × Vdc\nV_max (SPWM) = Vdc / 2 = 0.5 × Vdc\n→ SVM delivers 15.5% more voltage → more motor torque/speed"
    },
    {
      title:"ISO 26262 HARA — Hazard Analysis and Risk Assessment",
      body:"HARA is the starting point of all functional safety work. Step 1: List all hazardous events (e.g., 'unexpected acceleration while parking'). Step 2: For each event, assess: Severity (S0–S3), Exposure probability (E0–E4), Controllability by driver (C0–C3). Step 3: Look up the ASIL table to determine ASIL A/B/C/D or QM (no ASIL required). Step 4: Write Safety Goals.",
      formula:"ASIL = f(S, E, C) — lookup table:\nS3 + E4 + C3 → ASIL D (most critical)\nS1 + E1 + C1 → QM (quality management only)"
    },
    {
      title:"CAN Bus Arbitration — How Multiple ECUs Share One Bus",
      body:"In a CAN network, multiple ECUs share a single bus. When two ECUs transmit simultaneously, they both listen while transmitting. The one with the lower CAN ID wins because: on CAN, '0' (dominant) always overpowers '1' (recessive). An ECU transmitting '1' but reading '0' knows it lost — it immediately stops and retries later. No data is lost. This is called Non-Destructive Bitwise Arbitration.",
      formula:"Bus logic: 0 (dominant) + 0 = 0, 0 + 1 = 0, 1 + 1 = 1\nLowest CAN ID = highest priority (wins arbitration)\nCAN ID 0x001 beats 0x002 every time"
    }
  ];
  const c = concepts[dayIndex % concepts.length];
  return `
    <div class="concept-card">
      <div class="concept-title">💡 ${c.title}</div>
      <div class="concept-body">${c.body}</div>
      <div class="concept-formula">${c.formula}</div>
    </div>`;
}

function buildGermanySnippet(weekIndex) {
  const skills = GERMANY_DATA.inDemandSkills;
  const salaries = GERMANY_DATA.salaryData;
  const s1 = salaries[weekIndex % salaries.length];
  const s2 = salaries[(weekIndex + 1) % salaries.length];
  const topSkill = skills[weekIndex % skills.length];
  const unis = GERMANY_DATA.topUniversities;
  const uni  = unis[weekIndex % unis.length];

  return `
    <div class="germany-watch-card">
      <div class="gw-item">
        <div class="gw-label">🏆 Top In-Demand Skill</div>
        <div class="gw-value">${topSkill}</div>
      </div>
      <div class="gw-item">
        <div class="gw-label">💰 Salary Insight</div>
        <div class="gw-value"><strong>${s1.role}</strong><br/>${s1.salary}</div>
      </div>
      <div class="gw-item">
        <div class="gw-label">🎓 University Spotlight</div>
        <div class="gw-value"><strong>${uni.name}</strong> (${uni.rank})<br/>${uni.programs}</div>
      </div>
      <div class="gw-item">
        <div class="gw-label">📋 Job Market Fact</div>
        <div class="gw-value">Germany automotive sector employs <strong>890,000+</strong> engineers. EV transition creating <strong>120,000+ new engineering roles</strong> by 2030. Indian engineers with German B2 + AUTOSAR/BMS skills are <strong>highly sought</strong>.</div>
      </div>
    </div>`;
}

function getSkillWhyText(id) {
  const why = {
    matlab:     "MATLAB/Simulink is listed in 80%+ of German automotive engineering job descriptions. It is the industry standard for algorithm development, BMS modeling, and Model-Based Design.",
    simulink:   "Simulink enables Model-Based Design — the dominant development approach at Bosch, Continental, BMW. Auto-generated C code runs directly on automotive ECUs.",
    canoe:      "CANoe is the #1 automotive network analysis tool worldwide. If you want to work on ECU development or testing in Germany, CANoe proficiency is non-negotiable.",
    capl:       "CAPL (CAN Access Programming Language) is used in CANoe to write automated test procedures. Every automotive software test engineer writes CAPL daily.",
    autosar:    "AUTOSAR is the software architecture standard for every new ECU in German vehicles. Without AUTOSAR knowledge, you cannot contribute to BMW, VW, or Bosch ECU development.",
    embedded_c: "Automotive ECU firmware is written in C. MISRA C compliance, bare-metal programming on ARM Cortex-M, and RTOS integration are foundational skills.",
    python:     "Python has become essential in automotive for test automation, DBC file parsing, data analysis of CAN logs, and CI/CD pipelines in modern ASPICE processes.",
    bms_theory: "Battery Management System expertise is one of the hottest skills in the German automotive industry as all OEMs accelerate EV transitions.",
    power_elec: "SiC power electronics knowledge is in enormous demand as Germany invests billions in EV powertrain manufacturing.",
    func_safety: "Every safety-relevant ECU in Germany requires ISO 26262 compliance. Safety engineers with ASIL analysis skills command premium salaries.",
    cybersec:   "UN R155 regulation mandates cybersecurity for all new vehicles from 2022. Cybersecurity engineers are urgently needed at all OEMs and Tier 1s.",
    motor_ctrl: "Electric motor control (FOC, DTC, SVM) is the core of EV powertrain development. Essential for roles at ZF, Bosch, BorgWarner, and Continental."
  };
  return why[id] || "This skill is highly valued in the German automotive industry.";
}
