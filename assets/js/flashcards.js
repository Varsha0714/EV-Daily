/* ════════════════════════════════════════════
   flashcards.js — Spaced Repetition System
   ════════════════════════════════════════════ */

let currentCards  = [];
let currentIndex  = 0;
let isFlipped     = false;
let quizState     = { questions: [], current: 0, score: 0, answers: [] };
let currentQuizMode = 'flashcard';

/* ── Load Cards ── */
function loadFlashcards() {
  const domain = document.getElementById('flashcardDomain')?.value || 'all';
  if (domain === 'all') {
    currentCards = Object.values(FLASHCARDS).flat();
  } else {
    currentCards = FLASHCARDS[domain] || [];
  }

  // Shuffle using Fisher-Yates
  for (let i = currentCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
  }

  currentIndex = 0;
  showCard(0);
  updateDueCount();
}

function showCard(idx) {
  if (!currentCards.length) return;
  isFlipped = false;
  const card = currentCards[idx];

  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('cardDomain').textContent = getDomainLabel(card);
  document.getElementById('cardQuestion').textContent = card.q;
  document.getElementById('cardAnswer').textContent = card.a;
  document.getElementById('cardExplanation').textContent = card.explanation || '';
  document.getElementById('flashcardProgress').textContent =
    `Card ${idx + 1} of ${currentCards.length}`;
}

function flipCard() {
  isFlipped = !isFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', isFlipped);
}

function rateCard(rating) {
  // Simple spaced repetition: store due dates
  const card = currentCards[currentIndex];
  const key  = 'card_' + btoa(card.q.slice(0,20));
  const intervals = {again:1, hard:3, good:7, easy:14}; // days
  const dueDate   = Date.now() + intervals[rating] * 86400000;
  store.set(key, dueDate);

  // Advance to next card
  currentIndex = (currentIndex + 1) % currentCards.length;
  showCard(currentIndex);
  updateDueCount();
}

function updateDueCount() {
  let dueCount = 0;
  currentCards.forEach(card => {
    const key     = 'card_' + btoa(card.q.slice(0,20));
    const dueDate = store.get(key, 0);
    if (Date.now() >= dueDate) dueCount++;
  });
  document.getElementById('dueToday').textContent = `Due today: ${dueCount} cards`;
}

function getDomainLabel(card) {
  // Identify domain from card content
  for (const [domain, cards] of Object.entries(FLASHCARDS)) {
    if (cards.some(c => c.q === card.q)) {
      const labels = {bms:'🔋 BMS', ev:'⚡ EV', autosar:'🏗️ AUTOSAR',
                      can:'🔌 Networks', safety:'🛡️ Safety', power:'⚡ Power',
                      embedded:'💻 Embedded', cybersecurity:'🔐 Cybersecurity'};
      return labels[domain] || domain.toUpperCase();
    }
  }
  return 'Technical';
}

/* ── Quiz Mode ── */
function setQuizMode(mode) {
  currentQuizMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('mode' + mode.charAt(0).toUpperCase() + mode.slice(1))?.classList.add('active');

  document.getElementById('flashcardMode').style.display = mode === 'flashcard' ? '' : 'none';
  document.getElementById('quizMode').style.display      = mode === 'quiz'      ? '' : 'none';
  document.getElementById('weeklyMode').style.display    = mode === 'weekly'    ? '' : 'none';

  if (mode === 'quiz')   startQuiz();
  if (mode === 'weekly') startWeeklyAssessment();
}

function startQuiz() {
  // Pick 5 random questions
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5);
  quizState = { questions: shuffled, current: 0, score: 0, answers: [] };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quizContainer');
  if (quizState.current >= quizState.questions.length) {
    renderQuizResult();
    return;
  }
  const q = quizState.questions[quizState.current];
  container.innerHTML = `
    <div class="deep-dive-card">
      <div style="font-size:12px; color:var(--text-muted); margin-bottom:12px">
        Question ${quizState.current + 1} of ${quizState.questions.length}
      </div>
      <div class="deep-dive-title" style="font-size:17px">${q.q}</div>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px" id="quizOptions">
        ${q.options.map((opt,i) => `
          <button class="quiz-option-btn" onclick="selectAnswer(${i})"
            style="background:var(--bg-primary); border:1px solid var(--border-light);
                   border-radius:8px; padding:13px 18px; text-align:left;
                   color:var(--text-secondary); font-size:14px; cursor:pointer;
                   transition:all 0.2s; font-family:inherit"
            onmouseover="this.style.borderColor='#00d4ff'; this.style.color='#00d4ff'"
            onmouseout="if(!this.dataset.selected){this.style.borderColor=''; this.style.color='';}">
            <span style="color:var(--accent-ev); font-weight:700; margin-right:10px">${String.fromCharCode(65+i)}.</span>
            ${opt}
          </button>`).join('')}
      </div>
    </div>`;
}

function selectAnswer(selectedIdx) {
  const q = quizState.questions[quizState.current];
  quizState.answers.push(selectedIdx);
  if (selectedIdx === q.correct) quizState.score++;

  const buttons = document.querySelectorAll('.quiz-option-btn');
  buttons.forEach((btn, i) => {
    btn.style.pointerEvents = 'none';
    if (i === q.correct)   { btn.style.background = 'rgba(0,230,118,0.15)'; btn.style.borderColor = '#00e676'; btn.style.color = '#00e676'; }
    if (i === selectedIdx && selectedIdx !== q.correct) {
      btn.style.background = 'rgba(255,68,68,0.15)'; btn.style.borderColor = '#ff4444'; btn.style.color = '#ff4444';
    }
  });

  // Show explanation then advance
  const container = document.getElementById('quizContainer');
  container.insertAdjacentHTML('beforeend', `
    <div style="background:rgba(0,212,255,0.08); border:1px solid rgba(0,212,255,0.2);
                border-radius:8px; padding:14px; margin-top:12px; font-size:13px; color:var(--text-secondary)">
      💡 ${q.explanation}
      <br/><br/>
      <button onclick="nextQuestion()" class="btn-primary" style="margin-top:8px">
        ${quizState.current + 1 < quizState.questions.length ? 'Next Question →' : 'See Results'}
      </button>
    </div>`);
}

function nextQuestion() {
  quizState.current++;
  renderQuizQuestion();
}

function renderQuizResult() {
  const pct = Math.round((quizState.score / quizState.questions.length) * 100);
  store.set('lastQuizScore', pct);
  document.getElementById('statQuizScore').textContent = pct + '%';

  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
  const msg   = pct >= 80 ? 'Excellent! You are mastering these concepts.' :
                pct >= 60 ? 'Good progress! Review the missed concepts.' :
                'Keep studying — these are foundational skills. Use the flashcards!';
  document.getElementById('quizContainer').innerHTML = `
    <div class="deep-dive-card" style="text-align:center">
      <div style="font-size:56px; margin-bottom:12px">${emoji}</div>
      <div class="deep-dive-title">Quiz Complete!</div>
      <div style="font-size:40px; font-weight:800; color:var(--accent-ev); margin:16px 0">
        ${pct}%
      </div>
      <div style="font-size:14px; color:var(--text-secondary); margin-bottom:20px">
        ${quizState.score} / ${quizState.questions.length} correct — ${msg}
      </div>
      <button onclick="startQuiz()" class="btn-primary">Try Again</button>
    </div>`;
}

/* ── Weekly Assessment (20 questions) ── */
function startWeeklyAssessment() {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  quizState = { questions: shuffled, current: 0, score: 0, answers: [], mode: 'weekly' };
  document.getElementById('weeklyContainer').innerHTML = `
    <div class="deep-dive-card">
      <div class="deep-dive-title">📋 Weekly Assessment</div>
      <div class="deep-dive-body">
        <p>This ${shuffled.length}-question assessment covers all domains. Take it weekly to track your progress.</p>
        <p>Estimated time: ${shuffled.length * 1.5} minutes</p>
      </div>
      <button onclick="runWeeklyQuiz()" class="btn-primary" style="margin-top:16px">Start Assessment</button>
    </div>`;
}

function runWeeklyQuiz() {
  // Reuse quiz logic but with all questions
  quizState.current = 0; quizState.score = 0; quizState.answers = [];
  const container = document.getElementById('weeklyContainer');
  renderWeeklyQuestion(container);
}

function renderWeeklyQuestion(container) {
  if (quizState.current >= quizState.questions.length) {
    const pct = Math.round((quizState.score / quizState.questions.length) * 100);
    store.set('weeklyScore', pct);
    container.innerHTML = `
      <div class="deep-dive-card" style="text-align:center">
        <div style="font-size:48px; margin-bottom:12px">🎓</div>
        <div class="deep-dive-title">Weekly Assessment Complete!</div>
        <div style="font-size:40px; font-weight:800; color:var(--accent-ev); margin:16px 0">${pct}%</div>
        <div style="font-size:14px; color:var(--text-secondary); margin-bottom:20px">
          ${quizState.score} / ${quizState.questions.length} correct
        </div>
        <button onclick="startWeeklyAssessment()" class="btn-primary">Retake Assessment</button>
      </div>`;
    return;
  }
  const q = quizState.questions[quizState.current];
  container.innerHTML = `
    <div class="deep-dive-card">
      <div style="font-size:12px; color:var(--text-muted); margin-bottom:12px">
        Question ${quizState.current + 1} of ${quizState.questions.length}
        <span style="float:right">Score: ${quizState.score}</span>
      </div>
      <div class="deep-dive-title" style="font-size:16px">${q.q}</div>
      <div style="display:flex; flex-direction:column; gap:8px; margin-top:16px">
        ${q.options.map((opt,i) => `
          <button onclick="selectWeeklyAnswer(${i}, this)"
            style="background:var(--bg-primary); border:1px solid var(--border-light);
                   border-radius:8px; padding:12px 16px; text-align:left;
                   color:var(--text-secondary); font-size:13px; cursor:pointer;
                   font-family:inherit">
            <span style="color:var(--accent-ev); font-weight:700; margin-right:8px">${String.fromCharCode(65+i)}.</span>${opt}
          </button>`).join('')}
      </div>
    </div>`;
}

function selectWeeklyAnswer(idx, btn) {
  const q = quizState.questions[quizState.current];
  if (idx === q.correct) quizState.score++;
  quizState.answers.push(idx);

  const btns = btn.parentElement.querySelectorAll('button');
  btns.forEach((b,i) => {
    b.style.pointerEvents = 'none';
    if (i === q.correct) { b.style.background='rgba(0,230,118,0.12)'; b.style.borderColor='#00e676'; b.style.color='#00e676'; }
    if (i === idx && idx !== q.correct) { b.style.background='rgba(255,68,68,0.12)'; b.style.borderColor='#ff4444'; b.style.color='#ff4444'; }
  });

  setTimeout(() => {
    quizState.current++;
    renderWeeklyQuestion(document.getElementById('weeklyContainer'));
  }, 1200);
}
