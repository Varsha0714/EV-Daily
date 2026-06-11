/* ════════════════════════════════════════════
   roadmap.js — 24-Month Learning Roadmap
   ════════════════════════════════════════════ */

const ROADMAP_DATA = [
  {
    phase: "foundation",
    label: "Phase 1 — Foundation",
    months: "Months 1–6",
    overview: "Build a rock-solid foundation in Electrical Engineering, Embedded C, and EV fundamentals. This phase prepares you for MATLAB/Simulink and introductory AUTOSAR work. Target: strong enough to pass German master's admission technical interviews.",
    months_detail: [
      {
        num: "M1", focus: "Electrical Engineering Fundamentals Review",
        tasks: ["Kirchhoff's laws, RLC circuits, AC/DC theory (deep review)", "Laplace transforms for control systems", "OP-AMP circuits, filters, signal conditioning", "Start MATLAB Onramp (free, mathworks.com)", "Set up STM32 Nucleo board — run Hello World LED blink"],
        milestone: "Complete MATLAB Onramp certificate"
      },
      {
        num: "M2", focus: "Embedded C & Microcontrollers",
        tasks: ["C pointers, structs, bitfields, volatile variables", "Interrupts, timers, ADC, UART on STM32", "Understand memory-mapped registers, datasheet reading", "Implement PWM generation for LED dimming", "Study MISRA C:2012 rules — top 20 most violated"],
        milestone: "Build working STM32 project with UART + ADC + PWM"
      },
      {
        num: "M3", focus: "Automotive Networks — CAN & LIN",
        tasks: ["CAN 2.0A/B frame structure, bit stuffing, error frames", "CAN FD — extended payload, bit rate switching", "LIN bus — master/slave, schedule table", "Install Vector free tools or cantools Python library", "Parse sample CAN log file with Python + cantools"],
        milestone: "Successfully decode a real CAN log file in Python"
      },
      {
        num: "M4", focus: "Introduction to Electric Vehicles",
        tasks: ["EV drivetrain architecture: motor, inverter, battery, OBC", "BEV vs PHEV vs HEV — topology comparison", "Battery cell chemistry: Li-ion, LFP, NMC (Ragone plots)", "EV charging standards: SAE J1772, CCS, IEC 61851", "Study Volkswagen MEB platform white paper"],
        milestone: "Write a 2-page technical summary of one EV platform"
      },
      {
        num: "M5", focus: "MATLAB & Simulink Basics",
        tasks: ["MATLAB: matrices, plotting, control system toolbox", "Simulink: block diagrams, state machines (Stateflow)", "Model a simple RC low-pass filter in Simulink", "Model a PI speed controller — tune P and I gains", "Complete Simulink Onramp (free, mathworks.com)"],
        milestone: "Complete Simulink Onramp certificate"
      },
      {
        num: "M6", focus: "Battery Management System Fundamentals",
        tasks: ["Li-ion equivalent circuit models (Rint, Thevenin, PNGV)", "Coulomb Counting SOC estimation — implement in Python", "Cell balancing: passive vs active — design tradeoffs", "BMS hardware: AFE IC (Analog Front End), NTC sensors", "Study Texas Instruments BQ76940 BMS reference design"],
        milestone: "Implement SOC estimation algorithm in Python with plots"
      }
    ],
    goals: ["MATLAB Onramp + Simulink Onramp certificates", "Working STM32 embedded projects in portfolio", "Python CAN log parser on GitHub", "Understand full BEV drivetrain architecture"]
  },
  {
    phase: "intermediate",
    label: "Phase 2 — Intermediate",
    months: "Months 7–12",
    overview: "Deepen expertise in AUTOSAR, Power Electronics, and Functional Safety. Apply for German master's programs (Winter semester deadline ~July). Begin building a professional portfolio and targeting Werkstudent/internship applications.",
    months_detail: [
      {
        num: "M7", focus: "AUTOSAR Classic Architecture",
        tasks: ["AUTOSAR layered architecture: Application, RTE, BSW, MCAL", "SWC types: Application, Service, ECU-internal", "BSW modules: COM, NVM, DCM, CANIF, OS", "Set up a simple AUTOSAR simulation in MATLAB/Simulink", "Study AUTOSAR ARXML configuration file structure"],
        milestone: "Explain AUTOSAR full stack in an interview (practice with flashcards)"
      },
      {
        num: "M8", focus: "Power Electronics — DC-DC Converters",
        tasks: ["Buck, boost, buck-boost converter analysis", "CCM vs DCM operation — boundary condition calculation", "Gate driver circuits, deadtime, shoot-through prevention", "Simulate a 12V/5A buck converter in LTspice", "Study efficiency vs load curves, datasheet selection"],
        milestone: "LTspice simulation of functioning buck converter with efficiency plot"
      },
      {
        num: "M9", focus: "ISO 26262 Functional Safety",
        tasks: ["HARA methodology — severity, exposure, controllability, ASIL", "Safety Goals → Functional Safety Requirements → Technical SR", "FMEA (Failure Mode Effects Analysis) — worked example", "Hardware metrics: PMHF, SPFM, LFM calculation", "Complete free ISO 26262 introductory course (TÜV SÜD)"],
        milestone: "Perform HARA analysis for a real EV subsystem (document it)"
      },
      {
        num: "M10", focus: "Vehicle Networks Advanced — FlexRay & Automotive Ethernet",
        tasks: ["FlexRay: static + dynamic segment, cycle structure", "Automotive Ethernet: 100BASE-T1, 1000BASE-T1 (IEEE 802.3bw/bp)", "SOME/IP service-oriented communication", "AVB (Audio Video Bridging) + TSN (Time Sensitive Networking)", "CANoe: set up a simple Ethernet simulation"],
        milestone: "Understand all 5 major automotive bus protocols — pass quiz"
      },
      {
        num: "M11", focus: "German Master's Applications",
        tasks: ["Finalize university shortlist (TUM, KIT, RWTH, TU Braunschweig)", "Write Statement of Purpose (SOP) — draft and revise 3×", "Prepare APS Certificate application (mandatory for India)", "Request 3 letters of recommendation from professors", "Apply via uni-assist.de or direct university portal"],
        milestone: "Submit applications to at least 3 German universities"
      },
      {
        num: "M12", focus: "Internship / Werkstudent Application Campaign",
        tasks: ["Polish GitHub portfolio with 3+ automotive projects", "Write German-style Bewerbung (Lebenslauf + Anschreiben)", "Apply to 5+ Werkstudent/internship positions in Germany", "Practice technical interview questions for embedded/EV roles", "Achieve German language level A2/B1 (begin Goethe Institut course)"],
        milestone: "Active applications at 5+ German automotive companies"
      }
    ],
    goals: ["Deep AUTOSAR Classic knowledge", "Power electronics simulation skills (LTspice)", "ISO 26262 foundational understanding", "German master's applications submitted", "First German job applications sent"]
  },
  {
    phase: "advanced",
    label: "Phase 3 — Advanced",
    months: "Months 13–18",
    overview: "Master advanced BMS algorithms, motor control, AUTOSAR Adaptive, and automotive cybersecurity. By this phase you should be in Germany (or actively interviewing). Build your first complete automotive engineering project.",
    months_detail: [
      {
        num: "M13", focus: "Advanced BMS — SOC/SOH Algorithms",
        tasks: ["Extended Kalman Filter (EKF) for SOC estimation — implement in Python/MATLAB", "SOH estimation: capacity fade model, impedance spectroscopy concept", "Thermal runaway detection algorithm design (ISO 6469)", "Dual Polarization (DP) battery model implementation", "Study CATL and Samsung SDI BMS patent disclosures"],
        milestone: "Implement EKF-based SOC estimator in MATLAB/Simulink"
      },
      {
        num: "M14", focus: "Motor Control & Drives",
        tasks: ["PMSM: dq0 transformation, back-EMF, torque production equation", "Field Oriented Control (FOC) — block diagram and PI tuning", "Space Vector Modulation (SVM) — sector determination algorithm", "Implement FOC in MATLAB/Simulink (or STM32 MCSDK)", "Understand IPMSM MTPA (Maximum Torque Per Ampere) strategy"],
        milestone: "Simulate complete FOC drive for a PMSM in Simulink"
      },
      {
        num: "M15", focus: "CANoe / CAPL Proficiency",
        tasks: ["Install Vector CANoe demo (or student license via university)", "Create a multi-ECU CAN simulation with 3+ nodes", "Write CAPL test scripts for ECU message validation", "Implement UDS diagnostic services in CAPL (0x22, 0x2E, 0x19)", "Record and replay CAN traces — apply DBC file decoding"],
        milestone: "CANoe simulation project on GitHub with test results"
      },
      {
        num: "M16", focus: "AUTOSAR Adaptive & SOME/IP",
        tasks: ["Adaptive AUTOSAR: ARA API, execution management, communication management", "SOME/IP: service discovery, method calls, event notifications", "ara::com API — practical coding exercises in C++", "Understand difference in safety approach (ASIL decomposition vs. QM+lock)", "Study Autosar Adaptive on GitHub open-source examples"],
        milestone: "Implement a simple SOME/IP server-client in C++ (Linux)"
      },
      {
        num: "M17", focus: "Automotive Cybersecurity",
        tasks: ["TARA methodology — complete worked vehicle example", "SecOC implementation concept (CMAC, freshness counter)", "OBD-II and UDS security: SecurityAccess (0x27) service", "Study UN R155 and UN R156 regulations content", "Study the UNECE WP.29 cybersecurity framework in full"],
        milestone: "Document a complete TARA for one EV subsystem"
      },
      {
        num: "M18", focus: "Capstone Project — Complete EV BMS Software",
        tasks: ["Design full BMS software architecture (AUTOSAR Classic)", "Implement: cell monitoring, SOC (EKF), balancing, protection, CAN comms", "Apply MISRA C coding guidelines throughout", "Write unit tests using Unity testing framework", "Document with AUTOSAR-style SWC description"],
        milestone: "Complete BMS software stack — showcase project in portfolio"
      }
    ],
    goals: ["Advanced BMS algorithm expertise (EKF SOC)", "Complete FOC motor control simulation", "CANoe/CAPL proficiency demonstrated with projects", "First internship or Werkstudent experience", "Automotive cybersecurity fundamentals (TARA)"]
  },
  {
    phase: "applications",
    label: "Phase 4 — Application Level",
    months: "Months 19–24",
    overview: "You are now in Germany (master's program or internship). This phase focuses on industry integration, advanced certifications, thesis research, and job applications. Target: full-time graduate engineer role at Bosch, Continental, BMW, or ZF.",
    months_detail: [
      {
        num: "M19", focus: "Industry Integration & Networking",
        tasks: ["Attend automotive tech events: AutoSens, Battery Show, EVS conference", "Join IEEE Germany section — attend local meetings", "Engage with LinkedIn automotive engineering community", "Connect with alumni from your university at German OEMs/Tier 1s", "Apply for Fraunhofer IAO/ISI student research positions"],
        milestone: "10+ meaningful LinkedIn connections with German automotive engineers"
      },
      {
        num: "M20", focus: "SiC Power Electronics Advanced",
        tasks: ["SiC MOSFET gate driver design — Miller clamp, Kelvin source", "EMC challenges of SiC (high dV/dt) — common-mode choke design", "EV inverter efficiency calculation and loss breakdown", "Study Infineon, Wolfspeed SiC MOSFET datasheets in depth", "Compare 3-level NPC vs 2-level inverter topology analysis"],
        milestone: "Design a SiC gate driver circuit in LTspice — verify timing"
      },
      {
        num: "M21", focus: "Master's Thesis Research",
        tasks: ["Select thesis topic aligned with EV/BMS/embedded domain", "Approach 2-3 professors with concrete research proposal", "Target external thesis at Bosch/Continental/BMW (paid, ~1500€/month)", "Begin literature review — 20+ relevant IEEE papers", "Set up MATLAB/Python simulation environment for thesis"],
        milestone: "Thesis topic confirmed + supervisor assigned"
      },
      {
        num: "M22", focus: "Functional Safety Certification",
        tasks: ["Complete TÜV Rheinland / TÜV SÜD ISO 26262 online training", "Study for Functional Safety Engineer examination", "Practice FTA (Fault Tree Analysis) for complex systems", "Study SOTIF (ISO 21448) for ADAS safety (future skill)", "Document 2 complete safety analyses in portfolio"],
        milestone: "TÜV or equivalent ISO 26262 certificate obtained"
      },
      {
        num: "M23", focus: "German Language B2 Level",
        tasks: ["Complete Goethe Institut B2 examination", "Practice automotive German vocabulary daily", "Conduct at least 2 mock German job interviews", "Read German automotive news (ATZ, Automobil Industrie) daily", "Write your Bewerbung entirely in German (have native review it)"],
        milestone: "Goethe B2 or TestDaF certificate obtained"
      },
      {
        num: "M24", focus: "Full-Time Job Application Campaign",
        tasks: ["Apply to 20+ graduate positions: Bosch, Continental, ZF, BMW, VW, Mercedes", "Target: Embedded Software, BMS Engineer, Functional Safety, Powertrain Systems", "Use university career services + Germany's Hochschulstart job board", "Prepare: 3 technical project presentations for panel interviews", "Negotiate: EU Blue Card eligibility, relocation package"],
        milestone: "🏆 GOAL: First German automotive engineering job offer accepted"
      }
    ],
    goals: ["Functional Safety Engineer certification (TÜV)", "German B2 language proficiency", "Industry thesis at a major German OEM/Tier 1", "Full-time graduate engineer job offer from target company", "EU Blue Card eligibility achieved (>€45,552 gross salary)"]
  }
];

function renderRoadmap() {
  const container = document.getElementById('roadmapTimeline');
  if (!container) return;
  const savedMonth = store.get('roadmapMonth', 1);

  container.innerHTML = ROADMAP_DATA.map((phase, phaseIdx) => `
    <div class="phase-block phase-${phase.phase}" id="phase-${phaseIdx}">
      <div class="phase-header" onclick="togglePhase(${phaseIdx})">
        <div class="phase-num">P${phaseIdx+1}</div>
        <div class="phase-title-group">
          <div class="phase-title">${phase.label}</div>
          <div class="phase-months">${phase.months}</div>
        </div>
        <span class="phase-chevron">▼</span>
      </div>
      <div class="phase-body">
        <div class="phase-overview">${phase.overview}</div>
        <div class="months-grid">
          ${phase.months_detail.map(m => `
            <div class="month-card">
              <div class="month-label">${m.num}</div>
              <div class="month-focus">${m.focus}</div>
              <ul class="month-tasks">
                ${m.tasks.map(t => `<li>${t}</li>`).join('')}
              </ul>
              <div class="month-milestone">🎯 ${m.milestone}</div>
            </div>`).join('')}
        </div>
        <div class="phase-goals">
          <div class="phase-goals-title">✅ Phase Goals</div>
          <ul class="phase-goals-list">
            ${phase.goals.map(g => `<li>${g}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`).join('');

  // Auto-open Phase 1
  togglePhase(0);
}

function togglePhase(idx) {
  const block = document.getElementById('phase-' + idx);
  if (block) block.classList.toggle('open');
}
