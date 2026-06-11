/* ════════════════════════════════════════════════════
   data.js — All curated content, flashcards, quizzes,
             companies, sources, roadmap, Germany data
   ════════════════════════════════════════════════════ */

/* ── News Pool (rotates daily) ── */
const NEWS_POOL = [
  {
    title: "Solid-State Battery Breakthrough: Toyota Targets 2027–2028 Mass Production",
    summary: "Toyota's solid-state EV battery promises 1200 km range, 10-minute fast-charge, and -30°C cold weather performance. The all-solid-state cell uses a sulfide-based electrolyte and a bipolar structure, reducing internal resistance by 50% compared to current lithium-ion cells.",
    tags: ["ev","bms"], source: "Nikkei / Toyota R&D",
    url: "https://global.toyota/en/newsroom/"
  },
  {
    title: "AUTOSAR Adaptive 22-11 Release Adds Enhanced SOME/IP and Cybersecurity Modules",
    summary: "The latest Adaptive AUTOSAR release strengthens secure communication with TLS 1.3 support, introduces firewall management APIs, and improves deterministic execution scheduling for ADAS applications running on heterogeneous SoCs.",
    tags: ["autosar","software","cyber"], source: "AUTOSAR Consortium",
    url: "https://www.autosar.org/standards/"
  },
  {
    title: "NXP S32K3 MCU Family Gains ISO 26262 ASIL-D Certification for EV Powertrains",
    summary: "NXP's automotive-grade S32K3 microcontrollers now hold complete ASIL-D functional safety certification, enabling use in traction inverters, OBC, and DC-DC converters. Key features include lockstep core pairs, ECC memory, and dedicated safety monitors.",
    tags: ["safety","embedded","ev"], source: "NXP Semiconductors",
    url: "https://www.nxp.com/products/processors-and-microcontrollers/s32-automotive-platform/s32k3:S32K3"
  },
  {
    title: "Bosch Opens New €1.2B Semiconductor Fab in Dresden — Focus on SiC Power Modules",
    summary: "Bosch's Dresden facility will produce 150 mm Silicon Carbide wafers for EV inverters. SiC MOSFETs enable switching frequencies above 100 kHz, reducing inverter size by 40% and increasing efficiency to >98%. Volume production begins Q2 2026.",
    tags: ["power","ev","germany"], source: "Bosch Global",
    url: "https://www.bosch.com/news-and-stories/silicon-carbide/bosch-sic-semiconductor-production/"
  },
  {
    title: "Volkswagen Group's MEB+ Platform: 77 kWh Battery with 800V Architecture",
    summary: "VW's next-gen MEB+ platform features an 800V system voltage, enabling 350 kW DC charging. The new battery pack uses prismatic LFP cells for entry models and pouch NMC cells for performance variants, targeting €80/kWh at pack level by 2026.",
    tags: ["ev","bms","germany"], source: "Volkswagen Group",
    url: "https://www.volkswagen-newsroom.com/en"
  },
  {
    title: "ISO/SAE 21434 Road Vehicle Cybersecurity Engineering — 2025 Amendment Published",
    summary: "The updated standard introduces new requirements for post-production CSMS (Cybersecurity Management System), OTA update security, vulnerability tracking throughout vehicle lifetime, and tightened TARA (Threat Analysis and Risk Assessment) methodology.",
    tags: ["cyber","safety","autosar"], source: "ISO / SAE International",
    url: "https://www.sae.org/standards/content/iso/sae21434/"
  },
  {
    title: "Continental Unveils Next-Generation SiC-Based On-Board Charger for 400V/800V Dual Architecture",
    summary: "Continental's bidirectional OBC supports V2G (Vehicle-to-Grid) functionality at 22 kW AC and 350 kW DC. The SiC-based design achieves 96.5% peak efficiency with integrated EMI filter on a single PCB — a 35% volume reduction over previous generation.",
    tags: ["ev","power","germany"], source: "Continental AG",
    url: "https://www.continental-automotive.com/en/components/charging-solutions"
  },
  {
    title: "IEEE Transactions on Power Electronics: Adaptive Model Predictive Control for PMSM Drives",
    summary: "Researchers from TU Munich present an AMPC algorithm that eliminates the need for PI controller tuning in PMSM traction drives. The method achieves 15% faster torque response and handles motor parameter variations, validated on a 100 kW test bench.",
    tags: ["power","ev"], source: "IEEE Transactions on Power Electronics",
    url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=63"
  },
  {
    title: "Infineon Launches New AURIX TC4x MCU — Designed for High-Performance ADAS and EV",
    summary: "Infineon's AURIX TC4x offers 5× more compute than TC3x with dedicated AI accelerators for ADAS workloads, supports LPDDR5 memory, and maintains backward compatibility with TC3x software ecosystems. Safety: ASIL-D lockstep CPUs.",
    tags: ["embedded","safety","ev"], source: "Infineon Technologies",
    url: "https://www.infineon.com/cms/en/product/microcontroller/32-bit-tricore-microcontroller/aurix-tc4x/"
  },
  {
    title: "BMW iX5 Hydrogen FCEV Completes 1 Million km European Road Testing",
    summary: "BMW's hydrogen fuel cell pilot fleet accumulated over 1 million test km across Europe. Key learnings include cold-start performance at -30°C, refueling time under 4 minutes, and 500 kW peak power output from the fuel cell stack.",
    tags: ["ev","germany"], source: "BMW Group R&D",
    url: "https://www.bmwgroup.com/en/innovation/technologies-and-mobility/hydrogen.html"
  },
  {
    title: "Vector Informatik Releases CANoe 18.0 with Enhanced AUTOSAR Adaptive Simulation",
    summary: "CANoe 18.0 adds direct SOME/IP service simulation, improved Ethernet backbone analysis with 10 Gbit/s capture, integrated cybersecurity testing modules (ISO/SAE 21434), and Python 3.11 CAPL bridge for test automation.",
    tags: ["autosar","software","network"], source: "Vector Informatik",
    url: "https://www.vector.com/int/en/products/products-a-z/software/canoe/"
  },
  {
    title: "Porsche Taycan Turbo GT Sets New Nürburgring Production EV Lap Record: 7:07.55",
    summary: "Porsche's Taycan Turbo GT achieved a 7:07.55 lap at Nürburgring Nordschleife — the fastest production EV ever. It uses an 800V, 105 kWh battery, 760 kW peak power, and Porsche Active Ride suspension with 48V electromechanical actuators.",
    tags: ["ev","germany"], source: "Porsche AG",
    url: "https://newsroom.porsche.com/en.html"
  },
  {
    title: "CATL Unveils Shenxing 4C Superfast Charging LFP Battery: 400 km in 10 Minutes",
    summary: "CATL's latest LFP chemistry achieves 4C charge rate through graphene-enhanced anodes, fast lithium-ion transport channels, and advanced thermal management. Energy density: 205 Wh/kg — highest ever for LFP chemistry.",
    tags: ["bms","ev"], source: "CATL",
    url: "https://www.catl.com/en/news/"
  },
  {
    title: "Mercedes-Benz EQS 450+ Achieves WLTP Range of 800 km with New Gen4 Battery",
    summary: "Mercedes-Benz achieved 800 km WLTP certification using its 118 kWh Gen4 battery pack featuring next-gen NMC-811 cathode, silicon-dominant anode, and improved battery thermal management with refrigerant direct cooling.",
    tags: ["ev","bms","germany"], source: "Mercedes-Benz AG",
    url: "https://media.mercedes-benz.com/en"
  },
  {
    title: "Siemens Xcelerator Integrates Model-Based AUTOSAR Development with Capital VSTAR",
    summary: "Siemens' updated Capital VSTAR enables seamless round-trip engineering between AUTOSAR Classic/Adaptive models and hardware description. New features include automated SWC (Software Component) validation and DDC optimization for CAN FD networks.",
    tags: ["autosar","software"], source: "Siemens Digital Industries",
    url: "https://plm.sw.siemens.com/en-US/capital/products/capital-vstar/"
  }
];

/* ── Technology Spotlight Pool ── */
const TECH_SPOTLIGHT_POOL = [
  {
    title: "Silicon Carbide (SiC) MOSFETs in EV Inverters",
    body: "SiC semiconductor devices are replacing traditional Silicon IGBTs in EV traction inverters. SiC has 3× higher bandgap (3.26 eV vs 1.12 eV for Si), enabling operation at higher voltages (1200V+), higher temperatures (200°C junction), and higher switching frequencies (100+ kHz). This directly reduces inverter size, weight, and thermal management requirements while boosting efficiency to >98%.",
    formula: "P_switching = 0.5 × Vds × Id × (tr + tf) × fsw\nP_conduction = Id² × Rds(on)\n\nSiC Rds(on) ≈ 10× lower than Si at 600V",
    relevance: "Core skill for Bosch, Continental, ZF, Infineon roles",
    tags: ["power","ev"],
    learnMore: "https://www.infineon.com/cms/en/product/power/sic-silicon-carbide/"
  },
  {
    title: "State of Charge (SOC) Estimation in BMS",
    body: "SOC is the ratio of remaining charge to full capacity, expressed as percentage. Accurate SOC estimation is critical for range prediction and battery protection. Methods include: (1) Coulomb Counting — integrate current over time, simple but drift-prone; (2) Open Circuit Voltage (OCV) lookup — accurate at rest, unusable during driving; (3) Kalman Filter / Extended Kalman Filter — fuses both methods for real-time, drift-free estimation.",
    formula: "SOC(t) = SOC(t₀) - (1/Q_nom) × ∫ I(τ)dτ  [Coulomb Counting]\n\nSOC = f(V_OCV) from characterization table [OCV Method]\n\nEKF prediction: x̂(k|k-1) = f(x̂(k-1), u(k))",
    relevance: "BMS Engineer skills — BMW, VW, CATL suppliers",
    tags: ["bms","ev"],
    learnMore: "https://batteryuniversity.com/article/bu-903-how-to-measure-state-of-charge"
  },
  {
    title: "CAN FD Protocol — Why It Replaced CAN 2.0",
    body: "Controller Area Network with Flexible Data-rate (CAN FD, ISO 11898-1) extends classic CAN by allowing the data phase to switch to a higher bit rate (up to 8 Mbit/s vs 1 Mbit/s) and supports 64 bytes payload vs 8 bytes. This is critical for modern ECUs that transmit large data like ADAS sensor fusion results, calibration data, and OTA update packets. CAN FD is backward compatible with classic CAN nodes on the same bus.",
    formula: "Efficiency = Data bits / Total frame bits\nCAN 2.0: max 8B / ~111 bits ≈ 57%\nCAN FD: max 64B / ~736 bits ≈ 70%",
    relevance: "Essential for Vector CANoe/CANalyzer, automotive ECU development",
    tags: ["network","embedded"],
    learnMore: "https://www.vector.com/int/en/know-how/protocols/can-canfd/"
  },
  {
    title: "AUTOSAR Layered Architecture — Software Components & RTE",
    body: "AUTOSAR Classic defines a 4-layer architecture: (1) Application Layer — SWCs (Software Components) implementing vehicle functions; (2) RTE (Runtime Environment) — virtual bus decoupling SWCs from BSW; (3) Basic Software — standardized modules: MCAL, COM, DIAG, NVM, OS; (4) Microcontroller. SWCs communicate only via ports and connectors — never directly, ensuring ECU portability. The ARXML configuration file describes the entire architecture.",
    formula: "SWC_A → P-Port → [AUTOSAR Interface] → R-Port → SWC_B\n         (both communicate via RTE, not directly)\n\nAUTOSAR Expression: I = S/E (Independent of HW/SW mapping)",
    relevance: "Mandatory for all automotive software roles in Germany",
    tags: ["autosar","software","embedded"],
    learnMore: "https://www.autosar.org/standards/classic-platform/"
  },
  {
    title: "Space Vector Modulation (SVM) for 3-Phase Inverters",
    body: "SVM is the optimal PWM technique for 3-phase inverters driving electric motors. It maps desired voltage vector into adjacent space vectors and zero vectors, minimizing harmonics and maximizing DC bus utilization. DC bus utilization: SVM achieves Vmax = Vdc/√3 × 1.155, compared to sinusoidal PWM's Vdc/2. Result: 15% more output voltage from same DC link.",
    formula: "V_α = V_dc × [Sa - (Sb+Sc)/2] × (2/3)\nV_β = V_dc × (Sb-Sc)/√3 × (2/3)\n\nT₁ = (√3 × Ts × |V*|/Vdc) × sin(π/3 - θ)\nT₂ = (√3 × Ts × |V*|/Vdc) × sin(θ)",
    relevance: "Motor control engineer at Bosch, ZF, Continental, BorgWarner",
    tags: ["power","ev"],
    learnMore: "https://www.ti.com/lit/an/spra524/spra524.pdf"
  },
  {
    title: "Functional Safety — ASIL Decomposition in ISO 26262",
    body: "ISO 26262 defines 4 Automotive Safety Integrity Levels: A (lowest), B, C, D (highest). ASIL is determined by 3 parameters: Severity (S0–S3), Exposure (E0–E4), Controllability (C0–C3). ASIL D items can be decomposed into two ASIL B items or ASIL A+ASIL C, allowing simpler hardware/software implementation while maintaining safety goals. This is commonly applied in BMS, ADAS, and powertrain control.",
    formula: "ASIL = f(Severity, Exposure, Controllability)\n\nASIL D = ASIL B + ASIL B (decomposition)\nASIL D = ASIL A + ASIL C (decomposition)\n\nPFHD target (ASIL D): < 10⁻⁸ failures/hour",
    relevance: "Safety engineer at every OEM and Tier 1 supplier in Germany",
    tags: ["safety","embedded","autosar"],
    learnMore: "https://www.iso.org/standard/68383.html"
  },
  {
    title: "On-Board Charger (OBC) Design — PFC + LLC Topology",
    body: "A typical 22 kW OBC consists of two stages: (1) AC/DC Power Factor Correction (PFC) stage — converts AC grid to ~400V DC with >0.99 PF using a totem-pole bridgeless PFC; (2) DC/DC LLC resonant converter — provides galvanic isolation and CC/CV battery charging. SiC MOSFETs in both stages enable peak efficiency >97%. Key standards: IEC 62196, SAE J1772, IEC 61851.",
    formula: "PFC: V_bus = 400V, PF > 0.99, THD < 5%\n\nLLC resonant frequency: fr = 1 / (2π√(Lr×Cr))\n\nCharging power: P = V_bat × I_charge\nEfficiency: η = P_out / P_in = V_bat×I_bat / V_grid×I_grid×PF",
    relevance: "Charging systems engineer at Bosch, Continental, ABB, Siemens",
    tags: ["ev","power"],
    learnMore: "https://www.ti.com/solution/ev-hev-onboard-charger"
  },
  {
    title: "Cybersecurity in Automotive — TARA Methodology",
    body: "TARA (Threat Analysis and Risk Assessment) per ISO/SAE 21434 is the systematic process to identify cybersecurity risks in road vehicles. Steps: (1) Asset identification — what data/functions have value; (2) Threat scenario analysis — misuse of assets; (3) Impact assessment — operational, safety, financial, privacy; (4) Attack path analysis — feasibility scoring; (5) Risk value = Impact × Attack feasibility; (6) Risk treatment: accept, avoid, reduce, transfer.",
    formula: "Risk = Impact × Attack Feasibility\n\nAttack Feasibility factors:\n  - Elapsed time\n  - Specialist expertise\n  - Knowledge of item\n  - Window of opportunity\n  - Equipment required",
    relevance: "Cybersecurity engineer — major demand at all German OEMs",
    tags: ["cyber","safety"],
    learnMore: "https://www.sae.org/standards/content/iso/sae21434/"
  }
];

/* ── Tool of the Day Pool ── */
const TOOLS_POOL = [
  {
    name: "CANoe (Vector Informatik)",
    desc: "The industry-standard tool for development, testing, and analysis of entire vehicle network systems. CANoe simulates entire ECU networks, executes CAPL test scripts, and supports all automotive bus protocols: CAN, CAN FD, LIN, FlexRay, Automotive Ethernet, MOST.",
    why: "Required skill at nearly 100% of German automotive companies. Most job descriptions for embedded/automotive software roles explicitly list CANoe.",
    links: [
      {name: "Vector CANoe", url: "https://www.vector.com/int/en/products/products-a-z/software/canoe/"},
      {name: "Free Student License", url: "https://www.vector.com/int/en/products/application-areas/independent-developers/students/"},
      {name: "YouTube Tutorial", url: "https://www.youtube.com/results?search_query=CANoe+tutorial+automotive"}
    ]
  },
  {
    name: "MATLAB / Simulink (MathWorks)",
    desc: "MATLAB is the de-facto standard for algorithm development, BMS SOC/SOH estimation, motor control design, and signal processing in automotive R&D. Simulink enables Model-Based Design (MBD) — graphical block-diagram modeling that auto-generates production-grade C code for ECUs.",
    why: "Listed in virtually every German automotive job description. Battery engineers, powertrain engineers, and control engineers all use MATLAB daily.",
    links: [
      {name: "MathWorks Student", url: "https://www.mathworks.com/academia/students.html"},
      {name: "Simulink EV Tutorial", url: "https://www.mathworks.com/solutions/electrification.html"},
      {name: "Automotive Toolboxes", url: "https://www.mathworks.com/solutions/automotive.html"}
    ]
  },
  {
    name: "Python for Automotive (cantools + python-can)",
    desc: "Python is increasingly used for automotive test automation, DBC file parsing, CAN log analysis, and data pipeline scripting. The cantools library parses .dbc files and decodes CAN messages; python-can interfaces with PEAK, Vector, and Kvaser hardware.",
    why: "Modern automotive test engineers are expected to automate test execution with Python. Used in CI/CD pipelines for ECU software testing.",
    links: [
      {name: "cantools GitHub", url: "https://github.com/cantools/cantools"},
      {name: "python-can docs", url: "https://python-can.readthedocs.io/"},
      {name: "Free Automotive Python Course", url: "https://www.udemy.com/topic/python/"}
    ]
  },
  {
    name: "ETAS INCA (ECU Calibration Tool)",
    desc: "INCA (Integration and New CALibration) is the professional ECU calibration and measurement tool by ETAS (Bosch subsidiary). It connects to ECUs via XCP protocol, reads/writes calibration parameters in real-time, and logs measurement data. Used extensively in engine and battery management calibration.",
    why: "Widely used at Bosch, Continental, BMW, and by their development suppliers. Calibration engineers need INCA experience.",
    links: [
      {name: "ETAS INCA", url: "https://www.etas.com/en/products/inca_software_products.php"},
      {name: "XCP Protocol Overview", url: "https://www.vector.com/int/en/know-how/protocols/xcp/"}
    ]
  },
  {
    name: "LTspice (Analog Devices)",
    desc: "Free SPICE-based circuit simulator from Analog Devices. Essential for power electronics design — simulate buck/boost converters, LLC resonant converters, gate drivers, and EMI filters. Supports real component models from major semiconductor vendors.",
    why: "Power electronics engineers use SPICE simulation to verify converter design before PCB layout. Free and industry-accepted.",
    links: [
      {name: "Download LTspice", url: "https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html"},
      {name: "LTspice Tutorial", url: "https://www.youtube.com/results?search_query=LTspice+power+electronics+tutorial"}
    ]
  },
  {
    name: "AUTOSAR ARXML & SystemDesk (dSPACE)",
    desc: "ARXML is the XML-based configuration format for all AUTOSAR systems. SystemDesk by dSPACE is a professional AUTOSAR architecture tool for designing software architectures, configuring BSW modules, and generating RTE. Understanding ARXML is fundamental to any automotive software architect role.",
    why: "Required for automotive software architecture positions. dSPACE tools are used at BMW, VW, and major Tier 1s.",
    links: [
      {name: "dSPACE SystemDesk", url: "https://www.dspace.com/en/pub/home/products/sw/sysd.cfm"},
      {name: "AUTOSAR Official", url: "https://www.autosar.org/"},
      {name: "AUTOSAR Explained", url: "https://www.youtube.com/results?search_query=AUTOSAR+tutorial+beginners"}
    ]
  },
  {
    name: "Keil MDK / STM32CubeIDE (Embedded Development)",
    desc: "Keil MDK (Arm) and STM32CubeIDE (ST) are professional embedded development environments. Keil supports all Arm Cortex-M devices with CMSIS, RTX RTOS, and professional debugger. STM32CubeIDE is free and integrates HAL code generation, FreeRTOS, and motor control libraries.",
    why: "Embedded C development on Arm Cortex-M is the backbone of automotive ECU firmware. Essential for any embedded software role.",
    links: [
      {name: "STM32CubeIDE Free", url: "https://www.st.com/en/development-tools/stm32cubeide.html"},
      {name: "Keil MDK for Students", url: "https://www.keil.com/demo/eval/arm.htm"},
      {name: "FreeRTOS + STM32", url: "https://www.freertos.org/RTOS_ports.html"}
    ]
  },
  {
    name: "Git & GitHub for Automotive Engineers",
    desc: "Version control is mandatory in professional automotive software development. AUTOSAR projects use Git for ECU software, configuration files, and test scripts. GitHub Actions enables CI/CD pipelines for automated MISRA C checking, unit testing, and static analysis.",
    why: "All modern automotive software teams require Git proficiency. ASPICE (Automotive SPICE) mandates version control for all deliverables.",
    links: [
      {name: "GitHub Student Pack", url: "https://education.github.com/pack"},
      {name: "Git Tutorial", url: "https://learngitbranching.js.org/"},
      {name: "ASPICE Overview", url: "https://www.automotivespice.com/"}
    ]
  }
];

/* ── Flashcard Database ── */
const FLASHCARDS = {
  bms: [
    { q: "What is State of Health (SOH) in a battery?", a: "SOH is the ratio of current maximum capacity to original rated capacity (%), indicating battery aging.", explanation: "SOH = Q_max(current) / Q_nom × 100%. Below 80% SOH, the battery is typically end-of-life for automotive use." },
    { q: "What is a Cell Balancing and why is it needed in BMS?", a: "Cell balancing equalizes charge levels across all cells in a pack to prevent overcharge/undercharge of individual cells.", explanation: "Without balancing, cells with higher self-discharge drift lower, limiting pack capacity to the weakest cell. Passive balancing dissipates excess energy as heat; active balancing transfers it." },
    { q: "Define C-rate for a battery.", a: "C-rate is the charge or discharge current relative to battery capacity. 1C discharges a 100 Ah battery in exactly 1 hour.", explanation: "2C means 200A for 100Ah battery (30 min discharge). 0.5C = 50A (2 hour discharge). Fast charging (4C) generates significant heat." },
    { q: "What does EKF stand for and where is it used in BMS?", a: "Extended Kalman Filter — used for SOC estimation by fusing current integration and voltage-based SOC.", explanation: "EKF linearizes the nonlinear battery model at each time step, providing accurate SOC even with sensor noise and model uncertainty." },
    { q: "What is the difference between NMC and LFP battery chemistry?", a: "NMC (Nickel Manganese Cobalt): high energy density (200-280 Wh/kg), higher cost. LFP (Lithium Iron Phosphate): lower energy density (~160 Wh/kg), safer, longer cycle life, cheaper.", explanation: "NMC is used in performance EVs (Tesla Model S). LFP is preferred for high-cycle-count applications and budget EVs (Tesla Model 3 Standard Range, VW ID.3 entry)." },
    { q: "What is an electrolyte and why is it critical in Li-ion batteries?", a: "Electrolyte is the ionic conductor between anode and cathode, enabling Li⁺ ion transport while blocking electron flow.", explanation: "Liquid electrolytes (LiPF₆ in organic solvent) are flammable — a key safety risk. Solid-state electrolytes eliminate this but are still in development for mass production." },
    { q: "Name the four main functions of a Battery Management System.", a: "1) Monitoring (V, I, T) 2) State estimation (SOC, SOH, SOE) 3) Protection (overvoltage, overcurrent, overtemperature) 4) Cell balancing", explanation: "Modern BMS also adds 5) Communication (CAN/LIN) and 6) Diagnostics (DTC logging per OBD-II or UDS)." },
    { q: "What is thermal runaway in Li-ion batteries?", a: "Thermal runaway is a self-accelerating exothermic reaction where heat generation exceeds heat dissipation, leading to fire or explosion.", explanation: "Triggered by overcharge, short circuit, or external heat. Managed by BMS protection, thermal management system (TMS), and cell-level safety vents. A key concern for EV safety certification." }
  ],
  ev: [
    { q: "What is the difference between BEV, PHEV, HEV, and FCEV?", a: "BEV: Battery-only EV. PHEV: Plugin Hybrid (engine + battery, chargeable). HEV: Hybrid (engine + battery, not chargeable). FCEV: Fuel Cell EV (hydrogen).", explanation: "BEVs have zero tailpipe emissions. PHEVs offer flexibility. FCEVs have fast refueling but limited infrastructure." },
    { q: "What does 800V architecture offer over 400V in EVs?", a: "800V enables faster charging (350kW+), thinner/lighter cables, reduced copper, lower current for same power, and higher efficiency.", explanation: "P = V×I. At 800V, same power = half the current of 400V, reducing I²R losses and cable weight. Porsche Taycan and Hyundai Ioniq 5 pioneered 800V." },
    { q: "What is regenerative braking and how much energy can it recover?", a: "Regenerative braking converts kinetic energy back into electrical energy using the motor as a generator, recovering 10–25% of driving energy.", explanation: "During deceleration, the inverter controls the motor in generator mode. Recovered energy is stored in the battery. Limited by battery charge acceptance rate (C-rate)." },
    { q: "What is a Permanent Magnet Synchronous Motor (PMSM) and why is it preferred in EVs?", a: "PMSM uses permanent magnets on rotor — no rotor excitation needed. High efficiency (94–97%), high power density, wide CPSR (Constant Power Speed Range).", explanation: "PMSM needs FOC (Field Oriented Control) or DTC for precise torque control. Used in Tesla, BMW, Mercedes, VW EVs." },
    { q: "Explain V2G (Vehicle-to-Grid) technology.", a: "V2G allows EV batteries to discharge energy back into the grid during peak demand, acting as distributed energy storage.", explanation: "Requires bidirectional OBC and smart grid communication (ISO 15118). Benefits: grid stabilization, reduced peak demand, owner income. Challenge: battery degradation from additional cycles." }
  ],
  autosar: [
    { q: "What is the difference between AUTOSAR Classic and Adaptive?", a: "Classic: OSEK/AUTOSAR OS, fixed schedule, hard real-time, CAN/LIN networks, C code. Adaptive: POSIX OS (QNX/Linux), service-oriented, Ethernet SOME/IP, C++14.", explanation: "Classic is for safety-critical control ECUs (ABS, EPS, BMS). Adaptive is for high-compute ADAS/infotainment ECUs requiring dynamic service discovery." },
    { q: "What is the RTE in AUTOSAR?", a: "Runtime Environment (RTE) is the middleware layer that enables communication between Software Components (SWCs) and between SWCs and BSW.", explanation: "SWCs never communicate directly — only through RTE interfaces. This ensures portability: an SWC can run on different hardware without code changes." },
    { q: "What does MCAL stand for and what does it contain?", a: "Microcontroller Abstraction Layer — lowest layer of AUTOSAR BSW. Contains drivers for GPIO, ADC, PWM, SPI, CAN, LIN, etc.", explanation: "MCAL is hardware-specific — generated or provided by MCU vendor (Infineon MCAL for AURIX, NXP MCAL for S32K). Everything above MCAL is hardware-independent." },
    { q: "What is SOME/IP in AUTOSAR Adaptive?", a: "SOME/IP (Scalable service-Oriented MiddlEware over IP) is the service communication protocol for AUTOSAR Adaptive over Ethernet.", explanation: "SOME/IP supports three patterns: Request/Response, Fire&Forget, Event notification. Used for ADAS services, OTA, and infotainment communication." },
    { q: "Name the AUTOSAR BSW modules involved in CAN communication.", a: "CANIF (CAN Interface), CANTP (CAN Transport Protocol), COM (Communication), PDU Router, DCM (Diagnostic Communication Manager)", explanation: "Stack from bottom: CAN Driver → CANIF → CANTP (for multi-frame) → PDU Router → COM → Application. COM module handles signal packing/unpacking." }
  ],
  can: [
    { q: "What is the maximum data rate of CAN FD and how is it achieved?", a: "CAN FD achieves up to 8 Mbit/s in the data phase by switching bit timing after the SOF bit — faster clock during payload transmission.", explanation: "The arbitration phase (for bus access priority) runs at classical speed (≤1 Mbit/s). Only after arbitration is won does the transmitter switch to high-speed data phase." },
    { q: "What is the purpose of the CAN identifier and how does arbitration work?", a: "The 11-bit (or 29-bit extended) CAN ID defines message priority. Lower ID = higher priority. Arbitration is non-destructive (CSMA/CD → CSMA/CA).", explanation: "All nodes transmit ID simultaneously. If a node transmits '1' but reads '0', it loses arbitration and backs off. The lowest ID wins and transmits without interruption." },
    { q: "What is LIN bus and when is it preferred over CAN?", a: "LIN (Local Interconnect Network) is a single-wire, master-slave serial bus at 20 kbit/s, used for low-speed body electronics: seat motors, mirrors, window controls.", explanation: "LIN costs <$1/node vs $3–5 for CAN. No bus arbitration — master polls slaves. Suitable for non-safety functions where cost matters more than speed." },
    { q: "What is FlexRay and what is its key advantage over CAN?", a: "FlexRay is a deterministic, fault-tolerant, dual-channel automotive network at 10 Mbit/s per channel, providing time-triggered communication.", explanation: "CAN has non-deterministic timing (arbitration delays). FlexRay has a fixed time schedule (TDMA) — critical for x-by-wire systems (steer-by-wire, brake-by-wire) where timing guarantees are safety-critical." },
    { q: "What is Automotive Ethernet and why is it needed for ADAS?", a: "100BASE-T1 / 1000BASE-T1 over single unshielded twisted pair — providing 100 Mbit/s to 1 Gbit/s for high-bandwidth ADAS sensor data.", explanation: "Camera (100–900 Mbit/s), LiDAR (500 Mbit/s+), radar data requires Ethernet. CAN FD's 8 Mbit/s is insufficient. AVB/TSN protocols provide timing guarantees." }
  ],
  safety: [
    { q: "What are the 4 ASIL levels and what do they mean?", a: "ASIL A (least strict) to ASIL D (most strict). Each level defines requirements for hardware diagnostic coverage, software quality, and development process rigor.", explanation: "ASIL D examples: EPS (loss = loss of steering = S3), ABS, BMS overcharge protection. ASIL A: wiper, seat heater (S1, low exposure)." },
    { q: "What is a Safety Goal in ISO 26262?", a: "A Safety Goal is a top-level safety requirement derived from HARA (Hazard Analysis and Risk Assessment), expressing what must NOT happen in terms of vehicle-level behavior.", explanation: "Example: 'Unexpected acceleration must not occur when driver requests deceleration — ASIL D.' Safety Goals are then decomposed into Functional Safety Requirements and then Technical Safety Requirements." },
    { q: "Define Fault, Error, and Failure in ISO 26262.", a: "Fault: root cause (hardware defect, software bug). Error: incorrect system state caused by fault. Failure: deviation of system behavior from intended function.", explanation: "ISO 26262 5-9: A fault is a defect. An error is the manifestation of the fault. A failure is when the error reaches the item boundary and causes incorrect behavior." },
    { q: "What is PMHF in ISO 26262 hardware metrics?", a: "PMHF (Probabilistic Metric for random Hardware Failures) — the total probability of hardware failures that could violate a Safety Goal, per hour.", explanation: "ASIL D: PMHF < 10⁻⁸ per hour. ASIL B: < 10⁻⁷ per hour. Calculated from component failure rates (FIT values from datasheets) and diagnostic coverage." },
    { q: "What is the difference between systematic and random hardware failures?", a: "Random failures: unpredictable component failures (transistor breakdown, electromigration) — addressed by redundancy and diagnostics. Systematic failures: design errors that will always fail under specific conditions — addressed by development process.", explanation: "ISO 26262 addresses random failures with hardware metrics (PMHF, SPFM, LFM) and systematic failures with development process requirements (ASIL-appropriate reviews, testing)." }
  ],
  power: [
    { q: "What is the difference between a Buck and Boost converter?", a: "Buck: steps voltage DOWN (Vout < Vin). Boost: steps voltage UP (Vout > Vin). Both are switched-mode DC-DC converters using an inductor and capacitor.", explanation: "Buck: Vout = D × Vin (D = duty cycle 0–1). Boost: Vout = Vin / (1-D). In EVs: DC-DC converter (400V to 12V) uses a buck; boost is used in some mild-hybrid systems." },
    { q: "What is Power Factor and why does it matter in EV charging?", a: "Power Factor = Real Power / Apparent Power = P/S = cos(φ). Unity PF (1.0) = ideal. Low PF means more current drawn from grid for same real power → higher losses.", explanation: "EV chargers must meet IEC 61000-3-2 for harmonic currents. PFC (Power Factor Correction) circuit in OBC achieves PF > 0.99, reducing grid impact and charger power loss." },
    { q: "What is Dead Time in an H-bridge inverter and why is it needed?", a: "Dead time is a small delay (100–500 ns) between turning off one switch and turning on the complementary switch in the same leg, preventing shoot-through.", explanation: "If both high-side and low-side FETs in a half-bridge conduct simultaneously, it's a shoot-through — direct short across DC bus. Dead time prevents this. But dead time distorts output waveform → dead-time compensation needed for smooth motor control." },
    { q: "Explain Field Oriented Control (FOC) for PMSM motors.", a: "FOC transforms 3-phase motor currents to a rotating d-q frame, decoupling flux (Id) and torque (Iq) control — like a DC motor.", explanation: "Clarke transform: (ia,ib,ic) → (Iα,Iβ). Park transform: (Iα,Iβ) → (Id,Iq) using rotor angle. PI controllers regulate Id=0 and Iq=torque_ref. Inverse Park → SVPWM → gate signals." },
    { q: "What is a Three-Level NPC Inverter and where is it used?", a: "Neutral Point Clamped (NPC) 3-level inverter produces three output levels (+Vdc/2, 0, -Vdc/2) per phase, reducing harmonic content vs 2-level.", explanation: "Lower dV/dt reduces motor insulation stress. Used in high-power EV drivetrains (800V+) and grid-connected inverters. Main challenge: DC link capacitor voltage balancing." }
  ],
  embedded: [
    { q: "What is MISRA C and why is it used in automotive?", a: "MISRA C is a set of C coding guidelines for safety-critical embedded systems. It restricts dynamic memory, recursion, and undefined behavior to reduce runtime errors.", explanation: "MISRA C:2012 has 143 rules (mandatory + advisory). Tools: PC-lint, Polyspace, LDRA automatically check MISRA compliance. Required by ISO 26262 ASIL B/C/D." },
    { q: "What is an RTOS and how does it differ from bare-metal programming?", a: "Real-Time Operating System provides task scheduling, IPC, memory management, and timing guarantees. Bare-metal: single infinite loop, no OS, no preemption.", explanation: "AUTOSAR OS (based on OSEK) is a static RTOS — all tasks, priorities, and resources defined at compile time. No dynamic allocation. FreeRTOS is a portable, open-source RTOS for automotive prototyping." },
    { q: "Explain interrupt latency and why it matters in automotive embedded systems.", a: "Interrupt latency is the time from interrupt assertion to first instruction of ISR execution. In automotive: jitter in interrupt response can affect CAN timing, PWM accuracy, and sensor sampling.", explanation: "AUTOSAR OS Categories: Cat1 ISR (< 1μs latency, minimal OS overhead), Cat2 ISR (OS-managed, higher latency). Safety-critical ISRs use Cat1 for deterministic response." },
    { q: "What is the CAN DBC file format?", a: "DBC (Database CAN) is a text file describing all CAN messages: IDs, message names, signal names, bit positions, scaling, offset, and units.", explanation: "Automotive teams maintain .dbc files for each network. CANoe/CANalyzer/cantools use .dbc to decode raw CAN frames into engineering values (e.g., 0x3C → 30°C battery temperature)." },
    { q: "What is UDS (Unified Diagnostic Services) in automotive?", a: "UDS (ISO 14229) defines diagnostic communication protocol between diagnostic tester and ECU. Services: read/write data (0x22/0x2E), fault code management (0x19), ECU programming (0x34–0x37), routine control.", explanation: "OBD-II port in every car uses UDS (or its predecessor KWP2000) over CAN. ECU flashing at workshop uses 0x34 (RequestDownload) → 0x36 (TransferData) → 0x37 (RequestTransferExit)." }
  ],
  cybersecurity: [
    { q: "What is SecOC in AUTOSAR and what does it protect against?", a: "Secure Onboard Communication (SecOC) adds a Message Authentication Code (MAC) to CAN/Ethernet frames, detecting spoofed or replayed messages on internal vehicle networks.", explanation: "SecOC uses CMAC (AES-based) with a freshness counter to prevent replay attacks. Required for safety-critical bus messages where spoofing could cause unsafe vehicle behavior." },
    { q: "What is the difference between penetration testing and TARA?", a: "TARA is a proactive design-phase risk assessment per ISO/SAE 21434. Penetration testing is a validation-phase attack simulation to find actual exploitable vulnerabilities.", explanation: "Both are required. TARA at design phase identifies risks and shapes architecture. Pen testing validates that implemented security controls actually work against real attacks." },
    { q: "What does OTA (Over-the-Air) update security require?", a: "OTA requires: (1) Authentication of update package (PKI/digital signatures), (2) Integrity verification (hash), (3) Rollback protection, (4) Secure boot after update.", explanation: "Unprotected OTA was exploited in the famous Jeep Cherokee hack (2015). Now automotive OTA follows UN R156 regulation mandating SUMS (Software Update Management System)." },
    { q: "Name three UN Regulations affecting automotive cybersecurity.", a: "UN R155: Cybersecurity Management System (CSMS) — mandatory for new vehicles since 2022. UN R156: Software Update Management System (SUMS). ISO/SAE 21434: engineering process standard.", explanation: "UN R155 applies to all new type approvals in EU, Japan, Korea, South Korea from July 2022. Vehicles must maintain cybersecurity throughout their entire lifecycle." }
  ]
};

/* ── Quiz Questions Pool ── */
const QUIZ_QUESTIONS = [
  { q: "Which ASIL level has the most stringent requirements in ISO 26262?", options: ["A","B","C","D"], correct: 3, explanation: "ASIL D is the highest integrity level. It requires the most stringent hardware diagnostic coverage (PMHF < 10⁻⁸/hr), software quality processes, and independence of safety analyses." },
  { q: "What does 'C-rate' represent in battery terminology?", options: ["Celsius rate of temperature rise","Charge/discharge current relative to capacity","Coulombic efficiency rate","Cell resistance measurement"], correct: 1, explanation: "1C = full charge/discharge in 1 hour. A 60 Ah battery at 2C delivers 120A (30 min discharge). Fast charging at 4C requires careful thermal management." },
  { q: "CAN FD maximum data payload per frame is:", options: ["8 bytes","32 bytes","64 bytes","128 bytes"], correct: 2, explanation: "CAN FD extends payload from 8 bytes (CAN 2.0) to 64 bytes, while also supporting higher data phase bit rates up to 8 Mbit/s." },
  { q: "In AUTOSAR, the RTE stands for:", options: ["Real-Time Engine","Runtime Environment","Resource Transfer Engine","Redundant Task Executor"], correct: 1, explanation: "The Runtime Environment is the middleware that decouples Software Components from the Basic Software, enabling hardware independence." },
  { q: "SiC (Silicon Carbide) enables higher switching frequency compared to Silicon because:", options: ["Lower melting point","3× wider bandgap enabling higher breakdown voltage and junction temperature","Cheaper manufacturing","Lower on-resistance at all temperatures"], correct: 1, explanation: "SiC's 3.26 eV bandgap (vs Si's 1.12 eV) enables 10× higher breakdown field, 3× higher thermal conductivity, enabling smaller, faster, hotter devices." },
  { q: "ISO/SAE 21434 covers:", options: ["Functional safety of E/E systems","Road vehicle cybersecurity engineering","Battery safety standards","AUTOSAR software architecture"], correct: 1, explanation: "ISO/SAE 21434 defines the cybersecurity engineering process for road vehicles, covering TARA, security requirements, implementation, testing, and incident response." },
  { q: "What is the primary advantage of Field Oriented Control (FOC) over simple V/Hz control for motors?", options: ["Lower cost","Full torque control at all speeds including zero speed","Higher maximum speed","Simpler implementation"], correct: 1, explanation: "FOC provides decoupled, independent control of motor flux and torque, enabling full torque response at zero speed — essential for EV traction (starting from standstill, hill hold)." },
  { q: "In a BMS, passive cell balancing:", options: ["Transfers energy from high cells to low cells","Burns excess energy in resistors to equalize cells","Increases total battery capacity","Is more efficient than active balancing"], correct: 1, explanation: "Passive balancing dissipates excess cell energy as heat through resistors — simple but wastes energy. Active balancing transfers energy between cells using inductors/capacitors — more efficient but complex." },
  { q: "The SOME/IP protocol in AUTOSAR Adaptive is used for:", options: ["CAN message encoding","Service-Oriented Communication over Ethernet","FLASH memory management","Motor control PWM generation"], correct: 1, explanation: "SOME/IP (Scalable service-Oriented Middleware over IP) enables service discovery and communication between AUTOSAR Adaptive applications over Automotive Ethernet." },
  { q: "Which charging standard uses Combined Charging System (CCS) connector?", options: ["CHAdeMO","GB/T","CCS Type 1/Type 2","Tesla Supercharger only"], correct: 2, explanation: "CCS (IEC 62196-3) combines AC pins with DC fast charging pins in one connector. CCS Type 1 in North America, CCS Type 2 in Europe. Mandated as European standard." }
];

/* ── Skills Definition ── */
const SKILLS_DATA = [
  { id:"matlab",   name:"MATLAB",              icon:"📊", priority:"critical", nextSteps:{0:"Complete MATLAB Onramp (free, 2hrs) on MathWorks",30:"Practice signal processing and control system toolbox",60:"Build a SOC estimation model using Simulink",80:"Use Code Generation toolbox for Embedded Coder",95:"Advanced: Develop a complete BMS algorithm in Simulink"} },
  { id:"simulink", name:"Simulink",             icon:"⚙️", priority:"critical", nextSteps:{0:"Complete Simulink Onramp (free) then build a basic RC circuit model",30:"Model a battery equivalent circuit (Thevenin model)",60:"Design a PI motor speed controller",80:"Implement Model-Based Design with code generation",95:"Advanced: Full EV drivetrain model with HIL testing"} },
  { id:"canoe",    name:"CANoe / CANalyzer",    icon:"🔌", priority:"critical", nextSteps:{0:"Download Vector CANoe Demo or student license",30:"Create a simple CAN network simulation with 2 nodes",60:"Write a CAPL test script for automated message validation",80:"Simulate a full ECU network with UDS diagnostics",95:"Advanced: Ethernet/SOME/IP simulation with AUTOSAR SWC"} },
  { id:"capl",     name:"CAPL (CAN Access Programming Language)",icon:"💻", priority:"high", nextSteps:{0:"Learn CAN fundamentals first, then read Vector CAPL manual",30:"Write a CAPL script to send/receive CAN messages",60:"Write automated test procedures for ECU validation",80:"Implement a complete test suite with reporting",95:"Advanced: CAPL for Ethernet/SOME/IP testing"} },
  { id:"autosar",  name:"AUTOSAR Classic / Adaptive",icon:"🏗️", priority:"critical", nextSteps:{0:"Read AUTOSAR layered architecture explanation — watch YouTube overview",30:"Study RTE, SWC, and BSW module concepts",60:"Configure a simple AUTOSAR BSW module (COM, NVM)",80:"Create a complete AUTOSAR application with multiple SWCs",95:"Advanced: Implement AUTOSAR Adaptive with SOME/IP service"} },
  { id:"embedded_c",name:"Embedded C / C++",   icon:"⌨️", priority:"critical", nextSteps:{0:"Learn C basics: pointers, structs, bitfields, interrupt handlers",30:"Write bare-metal LED + UART on STM32 Nucleo",60:"Implement a timer-based PWM and ADC on STM32",80:"Write MISRA C compliant firmware with unit tests",95:"Advanced: AUTOSAR BSW module implementation in C"} },
  { id:"python",   name:"Python for Engineering",icon:"🐍", priority:"high",    nextSteps:{0:"Complete Python Basics tutorial — then install cantools, numpy",30:"Write a CAN log parser using cantools and pandas",60:"Automate ECU test execution with python-can",80:"Build a BMS data analysis dashboard with matplotlib",95:"Advanced: ML-based SOH prediction with scikit-learn"} },
  { id:"bms_theory",name:"Battery Management Systems",icon:"🔋", priority:"critical", nextSteps:{0:"Study Li-ion battery chemistry and cell equivalent circuit model",30:"Implement Coulomb Counting SOC estimation in Python",60:"Study EKF/UKF for SOC estimation — implement in MATLAB",80:"Analyze thermal management and cell balancing algorithms",95:"Advanced: Complete BMS software stack design per ISO 6469"} },
  { id:"power_elec",name:"Power Electronics",  icon:"⚡", priority:"high",    nextSteps:{0:"Study Buck/Boost converter operation with LTspice simulation",30:"Simulate a full-bridge inverter driving an R-L load",60:"Design a 1kW Buck converter — calculate L,C, verify in LTspice",80:"Implement SVM for a 3-phase inverter in MATLAB/Simulink",95:"Advanced: SiC-based 50kW EV inverter design and loss analysis"} },
  { id:"func_safety",name:"Functional Safety (ISO 26262)",icon:"🛡️", priority:"high", nextSteps:{0:"Read ISO 26262 overview — watch ASIL explanation on YouTube",30:"Perform a simple HARA (Hazard Analysis) for a real EV subsystem",60:"Study FMEA/FTA safety analysis methods and practice",80:"Complete an ISO 26262 online course (TÜV, BSI, or Udemy)",95:"Advanced: Achieve TÜV Rheinland Functional Safety Engineer certification"} },
  { id:"cybersec",  name:"Automotive Cybersecurity",icon:"🔐", priority:"medium", nextSteps:{0:"Read ISO/SAE 21434 overview and UN R155 regulation summary",30:"Study TARA methodology — perform a threat analysis for OBD-II port",60:"Set up a CANbus replay attack test on a test bench (educational)",80:"Complete HEAVENS or STRIDE threat modeling for a vehicle system",95:"Advanced: Pursue Automotive Cybersecurity Engineer certification"} },
  { id:"motor_ctrl",name:"Motor Control & Drives",icon:"🔄", priority:"medium", nextSteps:{0:"Study PMSM operating principles — back-EMF, torque production",30:"Implement V/Hz open-loop motor control in Simulink",60:"Implement FOC (Field Oriented Control) in MATLAB/Simulink",80:"Run FOC on STM32 with X-CUBE-MCSDK motor control library",95:"Advanced: Advanced FOC with adaptive observers for sensorless operation"} }
];

/* ── Germany Preparation Data ── */
const GERMANY_DATA = {
  masterRequirements: [
    "B.Tech/B.E. in ECE, EEE, Electrical, or Mechatronics (minimum 7.0 CGPA / 70%)",
    "German language: B1/B2 recommended (some programs require B2)",
    "English: IELTS 6.5+ or TOEFL 90+ for English-medium programs",
    "APS Certificate (Akademische Prüfstelle) — mandatory for Indian students",
    "Statement of Purpose (SOP) — research interest & career goals",
    "3 Letters of Recommendation from professors/industry mentors",
    "CV in German/Europass format — highlight projects and technical skills",
    "GRE: Not required at most German universities (exception: some TU programs)",
    "Application via Uni-Assist or university direct portal",
    "Application windows: Winter semester (Apr–Jul), Summer semester (Nov–Jan)"
  ],
  topUniversities: [
    {name: "TU Munich (TUM)", rank: "QS #1 Germany", programs: "M.Sc. Electrical Engineering, EV focus available", notes: "Highly competitive, strong industry connections with BMW, MAN, Siemens"},
    {name: "KIT Karlsruhe", rank: "Top 5 Germany", programs: "M.Sc. Electrical Engineering & IT, Electromobility specialization", notes: "Strong E-mobility research, Fraunhofer ISI nearby"},
    {name: "RWTH Aachen", rank: "Top 3 Germany", programs: "M.Sc. Electrical Power Engineering, Automotive Engineering", notes: "Excellent for power electronics and EV; Ford, Bosch research campus"},
    {name: "TU Braunschweig", rank: "Strong in Automotive", programs: "M.Sc. Automotive Engineering, Electrical Engineering", notes: "Adjacent to Volkswagen HQ and research — excellent internship access"},
    {name: "Hochschule Esslingen", rank: "Top Applied Sciences", programs: "M.Eng. Automotive Systems", notes: "Close to Stuttgart — Bosch, Porsche, Daimler cluster. Very practical."},
    {name: "TU Darmstadt", rank: "Top 10 Germany", programs: "M.Sc. Electrical Engineering & IT, Power Systems", notes: "Strong power electronics research; close to Frankfurt automotive cluster"},
    {name: "University of Stuttgart", rank: "Top Engineering", programs: "PEGASUS — M.Sc. in Embedded Systems for Automotive", notes: "Strong embedded/automotive program, excellent Bosch connections"},
    {name: "FAU Erlangen-Nuremberg", rank: "Top 10 Germany", programs: "M.Sc. Electrical Engineering, Electrification focus", notes: "Siemens AG HQ in Erlangen — direct research collaboration"}
  ],
  inDemandSkills: [
    "AUTOSAR Classic & Adaptive architecture and configuration",
    "Functional Safety ISO 26262 — ASIL analysis, FMEA, FTA",
    "Battery Management Systems — SOC/SOH estimation, cell balancing algorithms",
    "CANoe / CANalyzer / CAPL test scripting (Vector tools)",
    "MATLAB/Simulink Model-Based Design with code generation",
    "Embedded C for automotive (MISRA C compliance, bare-metal, RTOS)",
    "CAN FD / Automotive Ethernet (100/1000BASE-T1) / SOME/IP",
    "Automotive Cybersecurity — ISO/SAE 21434, TARA, SecOC",
    "Python for test automation, data analysis, and CAN log parsing",
    "Power Electronics — SiC inverter design, BMS hardware",
    "OBD-II / UDS diagnostics (ISO 14229)",
    "Git + CI/CD for automotive software (ASPICE-compliant)",
    "Electric motor control — FOC, DTC, SVM"
  ],
  salaryData: [
    {role: "Graduate Engineer (EV/Automotive, 0-2 yrs)", salary: "€45,000 – €58,000/year"},
    {role: "Embedded Software Engineer (3-5 yrs)", salary: "€55,000 – €75,000/year"},
    {role: "Functional Safety Engineer (ISO 26262 certified)", salary: "€60,000 – €85,000/year"},
    {role: "BMS / Battery Systems Engineer", salary: "€58,000 – €80,000/year"},
    {role: "Power Electronics Engineer", salary: "€55,000 – €78,000/year"},
    {role: "AUTOSAR Software Architect (5+ yrs)", salary: "€70,000 – €100,000/year"},
    {role: "Cybersecurity Engineer (Automotive)", salary: "€65,000 – €90,000/year"},
    {role: "Working Student (Werkstudent, Master's level)", salary: "€14 – €20/hour (12-20 hrs/week allowed)"},
    {role: "Internship (Pflichtpraktikum/Industriepraktikum)", salary: "€800 – €1,500/month"}
  ],
  visaInfo: [
    "Student visa (Visum zu Studienzwecken): Required for studies >3 months",
    "Apply at German embassy in India after university admission letter",
    "Blocked account (Sperrkonto): €11,622/year (2024 requirement) must be deposited",
    "Health insurance: Mandatory — AOK, TK, Barmer (~€110/month for students)",
    "Work permission: Up to 120 full days or 240 half days per year during studies",
    "After graduation: 18-month job-seeking visa (Aufenthaltserlaubnis zur Jobsuche)",
    "After job: EU Blue Card requires €45,552 gross salary/year (2024 threshold for shortage occupations — engineers qualify)"
  ],
  germanWords: [
    {de: "Elektromobilität", en: "Electric mobility"},
    {de: "Hochvolttechnik", en: "High-voltage technology"},
    {de: "Eingebettete Systeme", en: "Embedded systems"},
    {de: "Funktionale Sicherheit", en: "Functional safety"},
    {de: "Fahrzeugnetzwerke", en: "Vehicle networks"},
    {de: "Bewerbung", en: "Job application"},
    {de: "Lebenslauf", en: "Curriculum vitae (CV)"},
    {de: "Werkstudent", en: "Working student"},
    {de: "Praktikum", en: "Internship"},
    {de: "Stellenausschreibung", en: "Job posting"},
    {de: "Antriebssysteme", en: "Drive systems / powertrains"},
    {de: "Batteriesysteme", en: "Battery systems"},
    {de: "Kraftfahrzeugingenieur", en: "Automotive engineer"}
  ]
};

/* ── Companies Data ── */
const COMPANIES_DATA = [
  { name:"Bosch", type:"Tier 1 Supplier / Technology", hq:"Gerlingen-Schillerhöhe, Germany", color:"#e01e26", focus:"World's largest auto supplier: BMS, powertrain systems, sensors, ADAS, software.", skills:["AUTOSAR","Embedded C","CANoe","Functional Safety","BMS","Python"], roles:["EV Systems Engineer","Software Developer","Functional Safety Engineer","BMS Validation"] },
  { name:"Continental AG", type:"Tier 1 Supplier", hq:"Hannover, Germany", color:"#f0a500", focus:"Tires + technology: ADAS sensors, powertrain control, vehicle networking, OBC, inverters.", skills:["CANoe","AUTOSAR","Cybersecurity","Power Electronics","C++","MATLAB"], roles:["Embedded Software","Power Electronics Engineer","Cybersecurity Engineer","AUTOSAR Architect"] },
  { name:"ZF Friedrichshafen", type:"Tier 1 Supplier", hq:"Friedrichshafen, Germany", color:"#003366", focus:"Driveline + chassis: EV traction motors, e-axles, transmission control, ADAS.", skills:["Motor Control","Embedded C","MATLAB/Simulink","CAN","Functional Safety","AUTOSAR"], roles:["Motor Drive Engineer","Software Developer","Safety Analyst","Systems Engineer"] },
  { name:"Volkswagen Group", type:"OEM", hq:"Wolfsburg, Germany", color:"#009ee3", focus:"World's largest OEM: VW, Audi, Porsche, Skoda, SEAT, Lamborghini. MEB platform EVs.", skills:["Python","MATLAB","AUTOSAR","BMS","CANoe","Functional Safety"], roles:["EV Development Engineer","Software Architect","Battery Engineer","Validation Engineer"] },
  { name:"BMW Group", type:"OEM", hq:"Munich, Germany", color:"#0066b2", focus:"Premium EVs: iX, i4, i7, i5. 800V battery architecture, hydrogen FCEV research.", skills:["MATLAB/Simulink","AUTOSAR","Embedded C","Power Electronics","BMS","Python"], roles:["HV Battery Engineer","Embedded Developer","Powertrain Systems","Calibration Engineer"] },
  { name:"Mercedes-Benz AG", type:"OEM", hq:"Stuttgart, Germany", color:"#aaaaaa", focus:"EQS, EQE, EQB, EQC premium EVs. MBUX software platform. Strong cybersecurity team.", skills:["C/C++","AUTOSAR","Cybersecurity","BMS","CANoe","Python"], roles:["Software Architect","Battery Systems","Cybersecurity Engineer","ADAS Developer"] },
  { name:"Porsche AG", type:"OEM", hq:"Stuttgart, Germany", color:"#cf0829", focus:"Taycan 800V EV, Mission E, e-fuel research. High-performance powertrain and motorsport R&D.", skills:["Power Electronics","MATLAB","Motor Control","Embedded C","Functional Safety"], roles:["Powertrain Engineer","EV Performance Engineer","Software Developer","Safety Engineer"] },
  { name:"Siemens AG", type:"Technology Conglomerate", hq:"Munich, Germany", color:"#009999", focus:"EV charging infrastructure, industrial drives, rail electrification, digital twin, ADAS tools.", skills:["Power Systems","Python","C++","MATLAB","Digital Twin","Embedded Software"], roles:["Power Systems Engineer","Software Developer","EV Charging Architect","Systems Engineer"] },
  { name:"Infineon Technologies", type:"Semiconductor", hq:"Neubiberg (Munich), Germany", color:"#009ee0", focus:"SiC/GaN power semiconductors, AURIX MCUs, radar sensors, security chips for automotive.", skills:["Embedded C","Power Electronics","Functional Safety","Python","Semiconductor Design"], roles:["Application Engineer","Embedded Developer","Safety Engineer","Field Application Engineer"] },
  { name:"ETAS GmbH (Bosch)", type:"Tool Vendor / Software", hq:"Stuttgart, Germany", color:"#e01e26", focus:"INCA calibration, AUTOSAR tools (ISOLAR), model-based testing, cybersecurity tools.", skills:["AUTOSAR","Python","Embedded C","CANoe","MATLAB/Simulink"], roles:["Tools Engineer","AUTOSAR Developer","Test Automation Engineer","Calibration Engineer"] },
  { name:"Vector Informatik", type:"Tool Vendor", hq:"Stuttgart, Germany", color:"#005aaa", focus:"CANoe, CANalyzer, CAPL, DaVinci AUTOSAR tools, automotive bus protocols.", skills:["CANoe","CAPL","AUTOSAR","Python","CAN FD","Automotive Ethernet"], roles:["Application Engineer","Software Developer","Customer Support Engineer","AUTOSAR Consultant"] },
  { name:"NXP Semiconductors", type:"Semiconductor", hq:"Eindhoven (major Germany presence)", color:"#009fda", focus:"S32K MCUs for EV/ADAS, i.MX processors, V2X communication chips, radar SoCs.", skills:["Embedded C","Functional Safety","AUTOSAR","Power Electronics","Python"], roles:["Embedded Systems Engineer","Safety Engineer","Application Engineer"] },
  { name:"STMicroelectronics", type:"Semiconductor", hq:"Geneva (strong Germany+Italy presence)", color:"#02a0c8", focus:"STM32 MCUs, SiC MOSFETs (STPOWER), motor control ICs, BMS AFEs.", skills:["Embedded C","MATLAB","STM32","Motor Control","Power Electronics","Python"], roles:["Field Application Engineer","Embedded Developer","Motor Control Specialist"] },
  { name:"Schaeffler AG", type:"Tier 1 Supplier", hq:"Herzogenaurach, Germany", color:"#b4161b", focus:"E-axles, rolling bearings, thermal management for EVs, 48V hybrid systems.", skills:["MATLAB/Simulink","Motor Control","Embedded C","CANoe","Functional Safety"], roles:["Electrification Engineer","Software Developer","Systems Engineer"] }
];

/* ── Learning Sources ── */
const SOURCES_DATA = {
  "Standards & Technical Bodies": [
    {icon:"📐", name:"IEEE Xplore", desc:"World's largest database of electrical engineering and electronics research papers", url:"https://ieeexplore.ieee.org"},
    {icon:"🚗", name:"SAE International", desc:"Automotive engineering standards, papers, and e-learning (SAE J1772, J3400, etc.)", url:"https://www.sae.org"},
    {icon:"📋", name:"AUTOSAR Consortium", desc:"Official AUTOSAR specifications, software architecture documents, working groups", url:"https://www.autosar.org"},
    {icon:"🛡️", name:"ISO Standards", desc:"ISO 26262 (Functional Safety), ISO/SAE 21434 (Cybersecurity) standards overview", url:"https://www.iso.org"},
    {icon:"⚡", name:"IEC Standards", desc:"IEC 61851 (EV charging), IEC 62196 (connectors), IEC 60068 (environmental testing)", url:"https://www.iec.ch"}
  ],
  "OEM & Supplier Tech Blogs": [
    {icon:"🔩", name:"Bosch Global Newsroom", desc:"EV technology announcements, SiC news, ADAS breakthroughs, software innovations", url:"https://www.bosch-presse.de/pressportal/de/en/"},
    {icon:"🔄", name:"Continental Technology", desc:"Automotive megatrends, electrification news, autonomous driving updates", url:"https://www.continental.com/en/press/press-releases/"},
    {icon:"💡", name:"Infineon Blog", desc:"SiC power semiconductor technical articles, AURIX MCU insights, EV design guides", url:"https://www.infineon.com/cms/en/discoveries/"},
    {icon:"🔌", name:"NXP Blog", desc:"Automotive MCU design guides, CAN FD tutorials, ADAS/V2X technical content", url:"https://www.nxp.com/company/blog/"},
    {icon:"📱", name:"STMicroelectronics Blog", desc:"STM32 tutorials, motor control application notes, BMS design guides", url:"https://blog.st.com"},
    {icon:"🚙", name:"Volkswagen Newsroom", desc:"EV platform updates, MEB+ architecture, battery technology milestones", url:"https://www.volkswagen-newsroom.com/en"},
    {icon:"🚗", name:"BMW Group Innovation", desc:"i-series EV technology, eDrive powertrain, solid-state battery research", url:"https://www.bmwgroup.com/en/innovation.html"}
  ],
  "EV & Automotive Publications": [
    {icon:"🌐", name:"Electrek", desc:"Breaking EV news, Tesla, VW, BMW, charging infrastructure updates daily", url:"https://electrek.co"},
    {icon:"📰", name:"InsideEVs", desc:"EV reviews, range tests, charging network news, industry analysis", url:"https://insideevs.com"},
    {icon:"📡", name:"Automotive World", desc:"In-depth automotive technology and policy analysis for engineers", url:"https://www.automotiveworld.com"},
    {icon:"🔋", name:"Battery Technology (AVL)", desc:"Battery design, testing, and management technical content from AVL", url:"https://www.avl.com/en/testing-solutions/battery-testing"},
    {icon:"🏭", name:"EV Tech Insider", desc:"Deep technical content on EV drivetrain, charging, and battery systems", url:"https://www.evtechmag.com"},
    {icon:"🇩🇪", name:"ATZ (Automobiltechnische Zeitschrift)", desc:"German automotive engineering journal — premium technical content", url:"https://www.springer.com/journal/35148"}
  ],
  "Learning Platforms": [
    {icon:"🎓", name:"MathWorks Academy (Free)", desc:"MATLAB and Simulink Onramp courses — industry-standard free training", url:"https://matlabacademy.mathworks.com"},
    {icon:"🎓", name:"Coursera — EV Specializations", desc:"University of Colorado, TU Delft EV engineering courses with certificates", url:"https://www.coursera.org/courses?query=electric%20vehicles"},
    {icon:"🎓", name:"edX Engineering Courses", desc:"MIT, TU Delft embedded systems, power electronics courses", url:"https://www.edx.org/search?q=power+electronics"},
    {icon:"💻", name:"GitHub — Awesome Automotive", desc:"Curated list of open-source automotive tools, DBC parsers, AUTOSAR resources", url:"https://github.com/topics/automotive"},
    {icon:"📹", name:"YouTube — AllAboutEE", desc:"High-quality power electronics and BMS tutorials for engineering students", url:"https://www.youtube.com/@AllAboutElectronicsAndEmbedded"},
    {icon:"📚", name:"FreeRTOS Documentation", desc:"Official RTOS documentation with automotive application examples", url:"https://www.freertos.org"},
    {icon:"🔧", name:"Vector e-Learning (Free)", desc:"Free CAN, CAN FD, LIN, FlexRay, SOME/IP protocol courses from Vector", url:"https://elearning.vector.com"}
  ],
  "German-Specific Resources": [
    {icon:"🇩🇪", name:"DAAD — German Academic Exchange", desc:"Scholarships, master's programs search, admission requirements for Indian students", url:"https://www.daad.de/en/"},
    {icon:"🎓", name:"Hochschulkompass", desc:"Official German university program search engine — find all EE/EV master's", url:"https://www.hochschulkompass.de"},
    {icon:"🔬", name:"Fraunhofer Society", desc:"Europe's largest applied research org — working student + thesis positions", url:"https://www.fraunhofer.de/en.html"},
    {icon:"💼", name:"LinkedIn Germany Jobs", desc:"Search: 'Elektromobilität', 'Embedded Systems', 'AUTOSAR', 'Werkstudent'", url:"https://www.linkedin.com/jobs/"},
    {icon:"💼", name:"Indeed.de", desc:"German job portal — filter by Munich, Stuttgart, Wolfsburg for automotive", url:"https://de.indeed.com"},
    {icon:"🏢", name:"GTAI — Germany Trade & Invest", desc:"Official guide to working and investing in Germany — industry landscape", url:"https://www.gtai.de/en"}
  ]
};

/* ── Action Items Pool ── */
const ACTION_ITEMS = [
  { title:"Set up your first Python CAN log parser", body:"Install cantools: <code>pip install cantools</code>. Download a sample .dbc file from GitHub (search 'automotive dbc example'). Write a 20-line Python script to decode CAN message signals. This is a real skill tested in automotive software interviews." },
  { title:"Create your AUTOSAR learning map", body:"Open a blank page and draw the 4 AUTOSAR Classic layers from memory: Application → RTE → BSW (COM, MCAL, OS) → Hardware. Label 5 BSW modules with their function. Then verify against AUTOSAR.org spec. Active recall reinforces memory far better than re-reading." },
  { title:"Simulate a Buck Converter in LTspice", body:"Download free LTspice from analog.com. Build a synchronous buck converter: 12V→3.3V, 500mA. Add MOSFET models, inductor (10μH), capacitor (100μF). Run transient simulation and measure efficiency. Share screenshot in your engineering portfolio." },
  { title:"Read NXP S32K3 safety features application note", body:"Go to nxp.com → search 'S32K3 safety'. Download the 'Functional Safety Overview' application note (free). Read the lockstep CPU and ECC memory sections. Write 3 key takeaways in your notes. This directly prepares you for embedded safety engineer roles." },
  { title:"Research one German master's program in detail", body:"Visit hochschulkompass.de, search 'Electrical Engineering' with specialization 'Electromobility'. Pick one university. Note: application deadline, German language requirement, CGPA cutoff, and one professor whose research aligns with EVs. Add to your university shortlist." },
  { title:"Write your first CAPL script outline", body:"Download the free Vector CAPL tutorial PDF from vector.com. Read Section 2 (CAPL basics). Write a CAPL script skeleton that: declares a CAN variable, sends a message every 100ms, logs received messages. Even without CANoe, writing the code structure trains your thinking." },
  { title:"Study one ISO 26262 HARA example", body:"Search YouTube: 'ISO 26262 HARA worked example'. Watch a 10-15 minute video. Then apply the same method to: 'Loss of BMS protection during fast charging'. Identify: Hazard, Situation, Severity, Exposure, Controllability, ASIL. Document your analysis." },
  { title:"Build your EV knowledge flashcard deck", body:"Open the Flashcards tab in this dashboard. Go through the BMS section. For each card you rate 'Again' or 'Hard', write the concept in your own words in a notebook. Explaining concepts in your own words is the single most effective learning technique." },
  { title:"Research Werkstudent positions at one company", body:"Go to LinkedIn or the careers page of one company (Bosch, Continental, or ZF). Search 'Werkstudent Elektromobilität' or 'Werkstudent Embedded Systems'. Read 3 job descriptions. Note the exact skills listed — compare against your skill tracker. Identify your biggest gap." },
  { title:"Implement SOC Coulomb Counting in Python", body:"Write a Python function: <code>soc(t) = soc(0) - (1/Q_nom) * integral(I, dt)</code>. Use numpy's cumtrapz for integration. Test with sample current data (constant 10A discharge from 100% SOC, 60Ah battery). Plot SOC vs time. Upload to GitHub." }
];

/* ── Weekly Deep Dive Content ── */
const WEEKLY_CONTENT = {
  roadmap: {
    title: "Technology Roadmap: Electric Vehicle Battery Systems 2024–2030",
    subtitle: "From LFP optimization to solid-state commercialization",
    body: `
<h3>Current State (2024–2025)</h3>
<ul>
<li>Dominant chemistries: NMC-811 (high energy) and LFP (budget/commercial)</li>
<li>Cell-to-pack (CTP) and cell-to-body (CTB) architectures eliminating module-level components</li>
<li>800V systems now standard in premium EVs (Taycan, Ioniq 5, BMW iX)</li>
<li>Energy density: 250–300 Wh/kg at pack level achievable</li>
</ul>
<h3>Near-Term (2025–2027): Optimization & Scaling</h3>
<ul>
<li>Silicon anode blending (10–20% Si) boosting energy density 15–20%</li>
<li>LMFP (Lithium Manganese Iron Phosphate) — LFP energy density with Mn bonus</li>
<li>Sodium-ion batteries (NIB) for low-cost urban EVs — CATL mass production 2025</li>
<li>4C fast charging (10 min for 400 km) becoming mainstream</li>
</ul>
<h3>Medium-Term (2027–2029): Solid-State Transition</h3>
<ul>
<li>Toyota, Honda, Samsung SDI targeting solid-state EV battery launch 2027–2028</li>
<li>Sulfide-based electrolytes leading commercialization race</li>
<li>Target: >400 Wh/kg cell-level, 10-minute charging, -30°C operation</li>
<li>Bipolar stacking enabling series voltage without module connectors</li>
</ul>
<h3>Long-Term (2029–2035): Advanced Architectures</h3>
<ul>
<li>Lithium-metal anodes enabling 500+ Wh/kg</li>
<li>Vehicle-to-Grid (V2G) bidirectional charging as grid standard</li>
<li>AI-optimized BMS with digital twin for real-time aging prediction</li>
<li>Battery-as-a-Service (BaaS) business models (NIO model expanding)</li>
</ul>
<h3>Key Skills for Battery Engineers in This Roadmap</h3>
<ul>
<li>Electrochemistry fundamentals (DFT simulation exposure is increasingly valued)</li>
<li>BMS software: advanced SOC/SOH/SOE algorithms (EKF, UKF, Neural Network-based)</li>
<li>MATLAB/Simulink for battery model simulation (Doyle-Fuller-Newman model)</li>
<li>Thermal management simulation (CFD basics, ANSYS Fluent for BMS engineers)</li>
<li>ISO 6469, IEC 62660 battery safety standards knowledge</li>
</ul>`
  },
  company: {
    title: "Company Deep Dive: Bosch — The World's Largest Automotive Supplier",
    subtitle: "Organization, technology focus, hiring strategy, and how to get in",
    body: `
<h3>Overview</h3>
<ul>
<li>Revenue: €91.6 billion (2023) | Employees: 429,000 worldwide</li>
<li>Founded: 1886, Stuttgart, Germany | Private company (Robert Bosch Stiftung majority)</li>
<li>Business divisions: Mobility (70% revenue), Industrial Technology, Consumer Goods, Energy & Building</li>
</ul>
<h3>Key Technology Areas Relevant to You</h3>
<ul>
<li><strong>Electrification:</strong> Battery Management Systems, SiC inverters, On-Board Chargers, e-axles, 48V mild hybrid</li>
<li><strong>Software & Electronics:</strong> AUTOSAR-based ECU software, domain controller architecture, OTA updates</li>
<li><strong>ADAS & Sensors:</strong> Radar, LiDAR, camera sensors; sensor fusion algorithms; AUTOSAR Adaptive</li>
<li><strong>Powertrain Control:</strong> Engine/transmission control units, fuel injection, hydrogen fuel cells</li>
<li><strong>Manufacturing:</strong> Dresden SiC fab — world's most advanced automotive semiconductor plant</li>
</ul>
<h3>How to Get Into Bosch</h3>
<ul>
<li><strong>Werkstudent:</strong> Apply 3–6 months before desired start. Search careers.bosch.com → "Werkstudent Elektromobilität"</li>
<li><strong>Thesis (Bachelor's/Master's):</strong> Bosch actively offers thesis positions — excellent path to employment</li>
<li><strong>Graduate Program:</strong> "GET" (Graduate Entry Training) — 18-month program across multiple divisions</li>
<li><strong>Must-have skills:</strong> MATLAB/Simulink, AUTOSAR, Embedded C, CANoe for software roles; LTspice, MATLAB for hardware roles</li>
<li><strong>German language:</strong> B2 strongly preferred for Werkstudent positions, especially in production-facing roles</li>
</ul>
<h3>Bosch Interview Process (Typical)</h3>
<ul>
<li>Online assessment: Technical questions (C/C++, embedded) + behavioral</li>
<li>Technical interview: Deep dive on AUTOSAR, Embedded C, your projects</li>
<li>HR interview: Motivation, German proficiency, cultural fit</li>
<li>Case study (for some roles): Analyze an embedded/EV technical problem</li>
</ul>`
  },
  ev_breakdown: {
    title: "EV Technology Breakdown: The 800V Architecture",
    subtitle: "Why 800V systems are redefining EV engineering and what you need to know",
    body: `
<h3>Why 800V?</h3>
<ul>
<li>Power equation: P = V × I. For same power, doubling V halves I → cables are thinner, lighter</li>
<li>Charging speed: 800V × 500A = 400 kW — 10 minutes for 300 km (Porsche/Hyundai)</li>
<li>Efficiency: Lower I² R losses through motor windings, inverter, and cables</li>
<li>Thermal: Less heat generated at same power level → simpler cooling</li>
</ul>
<h3>Key Engineering Challenges of 800V</h3>
<ul>
<li><strong>Insulation:</strong> All HV components (motor, cables, connectors) need 1200V+ rated insulation</li>
<li><strong>SiC mandatory:</strong> Si IGBTs not suitable at 800V — SiC MOSFETs required for inverter</li>
<li><strong>DC-DC converter:</strong> 800V battery → 12V vehicle network requires an isolated 800V-input DC-DC</li>
<li><strong>Active discharge:</strong> HV bus must safely discharge <60V within 5 seconds (ISO 6469-3) after crash</li>
<li><strong>HV safety interlock (HVIL):</strong> Pilot line detects connector removal and shuts HV instantly</li>
</ul>
<h3>800V Inverter Architecture</h3>
<ul>
<li>3-phase SiC half-bridge modules (typically 6 SiC MOSFETs per phase pair)</li>
<li>Gate drivers with DESAT protection (detect short circuit in &lt;2μs)</li>
<li>DC-link capacitor: film capacitor 700–1000μF at 900V rated</li>
<li>Active thermal management: water-glycol cooling plate under power modules</li>
<li>Switching frequency: 10–20 kHz (higher possible with SiC — reduces inductor size)</li>
</ul>
<h3>Companies Leading 800V Development</h3>
<ul>
<li>Porsche Taycan (2019) — first mass-production 800V EV</li>
<li>Hyundai/Kia E-GMP platform — IONIQ 5, IONIQ 6, EV6, EV9</li>
<li>Mercedes-Benz EQS, EQE (2021 onwards)</li>
<li>BMW iX, i7 (2022)</li>
<li>VW Group — MEB+ platform migrating to 800V for 2026+</li>
</ul>
<h3>Skills Needed for 800V Engineering Roles</h3>
<ul>
<li>SiC MOSFET characterization and gate driver design</li>
<li>EMC/EMI mitigation techniques (high dV/dt SiC causes EMI challenges)</li>
<li>HV safety standards: ISO 6469-3, IEC 60664 insulation coordination</li>
<li>Thermal simulation (ANSYS, COMSOL, or LTspice thermal models)</li>
<li>Power module assembly and test experience (internship goal)</li>
</ul>`
  },
  case_study: {
    title: "Engineering Case Study: BMS Thermal Runaway Prevention",
    subtitle: "How a modern BMS prevents the most dangerous EV failure mode",
    body: `
<h3>The Problem</h3>
<ul>
<li>Thermal runaway: cell temperature rises → exothermic reactions accelerate → temperature rises faster → fire</li>
<li>Can be triggered by: overcharge (>4.2V for NMC), over-temperature (>60°C sustained), internal short circuit, mechanical crush</li>
<li>Propagation: one cell can trigger adjacent cells — entire pack fire within minutes</li>
</ul>
<h3>BMS Defense Layers (Defense-in-Depth)</h3>
<ul>
<li><strong>Layer 1 — Prevention:</strong> Cell monitoring at 1ms intervals, limits SOC to 10–90% for longevity</li>
<li><strong>Layer 2 — Detection:</strong> Temperature gradient monitoring (delta-T between cells >5°C/min = warning)</li>
<li><strong>Layer 3 — Isolation:</strong> Pre-charge relay and main contactor open within 10ms of fault detection</li>
<li><strong>Layer 4 — Cell-level safety:</strong> Each cell has CID (Current Interrupt Device) and PTC (Positive Temperature Coefficient) fuse built in</li>
<li><strong>Layer 5 — Pack-level:</strong> Thermal runaway vent channels direct gases away from passengers</li>
</ul>
<h3>BMS Algorithm for Thermal Runaway Detection</h3>
<code>
IF (T_cell > 55°C) AND (dT/dt > 2°C/min):
  FAULT_LEVEL = WARNING
  Reduce max charge current by 50%
  Increase cooling fan/pump speed to max

IF (T_cell > 70°C) OR (dT/dt > 5°C/min):
  FAULT_LEVEL = CRITICAL
  Open main contactors immediately
  Activate fire suppression (if equipped)
  Send CAN DTC: 0x1234 — THERMAL_RUNAWAY_IMMINENT
  Alert VCU to initiate safe stop
</code>
<h3>Relevant Standards</h3>
<ul>
<li>UN ECE R100: Electric powertrain safety — thermal propagation test</li>
<li>ISO 6469-1: Safety requirements for high-voltage batteries</li>
<li>IEC 62660-3: Cell safety test methods for traction batteries</li>
<li>FMVSS 305 (US) / ECE R12 (EU): Post-crash EV safety requirements</li>
</ul>
<h3>Career Relevance</h3>
<ul>
<li>BMS Safety Software Engineer: Implement detection algorithms in Embedded C on AURIX/S32K MCU</li>
<li>Hardware Safety Engineer: Design protection circuits, verify ISO 26262 ASIL D compliance</li>
<li>Validation Engineer: Design test cases for thermal runaway detection response time</li>
<li>Systems Engineer: Define Safety Goals and ASIL classification for BMS system</li>
</ul>`
  }
};

console.log("[EV Dashboard] data.js loaded:", {
  news: NEWS_POOL.length,
  tech: TECH_SPOTLIGHT_POOL.length,
  tools: TOOLS_POOL.length,
  flashcards: Object.values(FLASHCARDS).reduce((s,v)=>s+v.length,0),
  quiz: QUIZ_QUESTIONS.length,
  companies: COMPANIES_DATA.length
});
