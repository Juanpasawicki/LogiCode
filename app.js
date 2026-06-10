const STORAGE_KEY = 'logicode-progress';

const simulator = new PseudocodeSimulator();

const state = {
  view: 'home',
  chapterId: null,
  lessonId: null,
  bookChapterId: null,
  bookExerciseId: null,
  algoTopicId: null,
  algoExerciseId: null,
  progress: loadProgress(),
  exerciseAnswers: {},
  completedBookExercises: loadBookProgress(),
  bookNotes: loadBookNotes(),
  practiceAttempts: loadPracticeProgress(),
  algorithmAttempts: loadAlgorithmProgress(),
  revealedHints: {}
};

function loadBookNotes() {
  try {
    const saved = localStorage.getItem('logicode-book-notes');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveBookNotes() {
  localStorage.setItem('logicode-book-notes', JSON.stringify(state.bookNotes));
}

function loadBookProgress() {
  try {
    const saved = localStorage.getItem('logicode-book-exercises');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveBookProgress() {
  localStorage.setItem('logicode-book-exercises', JSON.stringify(state.completedBookExercises));
}

function getBookExerciseCount() {
  return BOOK_EXERCISES.reduce((n, ch) => n + ch.exercises.length, 0);
}

function findBookExercise(chapterId, exerciseId) {
  const chapter = BOOK_EXERCISES.find(c => c.id === chapterId);
  if (!chapter) return null;
  const exercise = chapter.exercises.find(e => e.id === exerciseId);
  return exercise ? { chapter, exercise } : null;
}

function loadPracticeProgress() {
  try {
    const saved = localStorage.getItem('logicode-practice');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function savePracticeProgress() {
  localStorage.setItem('logicode-practice', JSON.stringify(state.practiceAttempts));
}

function loadAlgorithmProgress() {
  try {
    const saved = localStorage.getItem('logicode-algorithms');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveAlgorithmProgress() {
  localStorage.setItem('logicode-algorithms', JSON.stringify(state.algorithmAttempts));
}

function findAlgorithmExercise(exerciseId) {
  const exercise = ALGORITHM_BANK.find(e => e.id === exerciseId);
  if (!exercise) return null;
  const topic = ALGORITHM_TOPICS.find(t => t.id === exercise.topic);
  return { topic, exercise };
}

function getAlgorithmsByTopic(topicId) {
  return ALGORITHM_BANK.filter(e => e.topic === topicId);
}

function algoKey(exerciseId) {
  return exerciseId;
}

const DIFFICULTY_LABELS = { basico: 'Básico', intermedio: 'Intermedio', avanzado: 'Avanzado' };

function getPractices(lessonId) {
  return PRACTICE_BY_LESSON[lessonId] || [];
}

function practiceKey(chapterId, lessonId, practiceId) {
  return `${chapterId}/${lessonId}/${practiceId}`;
}

function hasAttemptedPractice(chapterId, lessonId) {
  const practices = getPractices(lessonId);
  return practices.some(p => state.practiceAttempts[practiceKey(chapterId, lessonId, p.id)]);
}

function allPracticesAttempted(chapterId, lessonId) {
  const practices = getPractices(lessonId);
  if (!practices.length) return true;
  return practices.every(p => state.practiceAttempts[practiceKey(chapterId, lessonId, p.id)]);
}

function getStarterCode(exercise) {
  if (!exercise.starterCode) return '';
  if (exercise.starterCode.length > 40) return exercise.starterCode;
  return SIMULATOR_EXAMPLES[exercise.starterCode] || '';
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getAllLessons() {
  return CURRICULUM.flatMap(ch => ch.lessons.map(l => ({ ...l, chapterId: ch.id, chapterTitle: ch.title })));
}

function findLesson(chapterId, lessonId) {
  const chapter = CURRICULUM.find(c => c.id === chapterId);
  if (!chapter) return null;
  const lesson = chapter.lessons.find(l => l.id === lessonId);
  return lesson ? { chapter, lesson } : null;
}

function getProgressStats() {
  const all = getAllLessons();
  const completed = all.filter(l => state.progress[`${l.chapterId}/${l.id}`]).length;
  const percent = all.length ? Math.round((completed / all.length) * 100) : 0;
  return { total: all.length, completed, percent };
}

function markLessonComplete(chapterId, lessonId) {
  state.progress[`${chapterId}/${lessonId}`] = true;
  saveProgress();
  updateProgressUI();
  renderSidebar();
}

function navigate(view, chapterId = null, lessonId = null, bookChapterId = null, bookExerciseId = null, algoTopicId = null, algoExerciseId = null) {
  if (view !== 'simulator') state.simReturnTo = null;
  state.view = view;
  state.chapterId = chapterId;
  state.lessonId = lessonId;
  state.bookChapterId = bookChapterId;
  state.bookExerciseId = bookExerciseId;
  state.algoTopicId = algoTopicId;
  state.algoExerciseId = algoExerciseId;
  state.exerciseAnswers = {};
  render();
  updateSidebarActive();
  window.scrollTo(0, 0);
}

function updateSidebarActive() {
  document.querySelectorAll('.tool-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.view);
  });
}

function getAdjacentLesson(chapterId, lessonId, direction) {
  const all = getAllLessons();
  const idx = all.findIndex(l => l.chapterId === chapterId && l.id === lessonId);
  if (idx === -1) return null;
  const next = all[idx + (direction === 'next' ? 1 : -1)];
  return next || null;
}

function renderSidebar() {
  const nav = document.getElementById('chapter-nav');
  nav.innerHTML = CURRICULUM.map(chapter => `
    <div class="chapter-group">
      <div class="chapter-title">${chapter.title}</div>
      ${chapter.lessons.map(lesson => {
        const key = `${chapter.id}/${lesson.id}`;
        const isActive = state.chapterId === chapter.id && state.lessonId === lesson.id;
        const isCompleted = state.progress[key];
        return `
          <button class="lesson-link ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                  data-chapter="${chapter.id}" data-lesson="${lesson.id}">
            <span class="lesson-status">${isCompleted ? '✓' : ''}</span>
            <span>${lesson.title}</span>
          </button>
        `;
      }).join('')}
    </div>
  `).join('');

  nav.querySelectorAll('.lesson-link').forEach(btn => {
    btn.addEventListener('click', () => {
      navigate('lesson', btn.dataset.chapter, btn.dataset.lesson);
      closeSidebar();
    });
  });
}

function renderCreditsSection(compact = false) {
  const m = BOOK_META;
  const a = ATTRIBUTION;
  if (compact) {
    return `
      <div class="credits-compact">
        <p>© ${m.year} — <em>${m.title}</em></p>
        <p class="book-ref">${m.authorsShort}</p>
        <p class="credits-thanks">Gracias a los autores por su obra. ${a.appName} es un proyecto educativo de ${a.creator}.</p>
      </div>
    `;
  }
  return `
    <section class="credits-section">
      <h3>Créditos y derechos de autor</h3>
      <div class="credits-block">
        <h4>Obra de referencia</h4>
        <p><strong>${m.title}</strong> (${m.year})</p>
        <p>${m.authors}</p>
        <p class="credits-legal">${a.bookCredit}</p>
      </div>
      <div class="credits-block">
        <h4>Sobre ${a.appName}</h4>
        <p>${a.purpose}</p>
        <p>${a.originalContent}</p>
        <p class="credits-thanks">Agradezco profundamente a los autores del libro por los conocimientos que han brindado a estudiantes y docentes. Esta aplicación es mi forma de compartir ese aprendizaje con más personas.</p>
        <p class="credits-legal">${a.disclaimer}</p>
      </div>
    </section>
  `;
}

function updateProgressUI() {
  const { total, completed, percent } = getProgressStats();
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('progress-fill').style.width = `${percent}%`;
  document.getElementById('progress-detail').textContent =
    `${completed} de ${total} lecciones completadas`;
}

function renderHome() {
  const stats = getProgressStats();
  return `
    <div class="hero">
      <span class="hero-badge">Curso interactivo · 2020</span>
      <h2>Aprende a pensar como programador</h2>
      <p>Aprende haciendo: cada lección tiene algoritmos que <strong>tú resuelves</strong> en el simulador, con guía y pistas paso a paso.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${CURRICULUM.length}</div>
        <div class="stat-label">Capítulos</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${stats.total}</div>
        <div class="stat-label">Lecciones</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${getBookExerciseCount()}</div>
        <div class="stat-label">Ejercicios libro</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${ALGORITHM_BANK.length}</div>
        <div class="stat-label">Banco algoritmos</div>
      </div>
    </div>

    <div class="home-actions">
      <button class="btn btn-primary" data-go="algorithms">🧮 Banco de algoritmos</button>
      <button class="btn btn-secondary" data-go="exercises">📋 Ejercicios del libro</button>
      <button class="btn btn-secondary" data-go="simulator">▶ Abrir simulador</button>
    </div>

    <h3 style="margin-bottom:1rem;font-size:1.1rem;">Lecciones del curso</h3>
    <div class="chapters-grid">
      ${CURRICULUM.map((ch, i) => {
        const done = ch.lessons.filter(l => state.progress[`${ch.id}/${l.id}`]).length;
        return `
          <div class="chapter-card" data-chapter="${ch.id}">
            <div class="chapter-num">${i + 1}</div>
            <div>
              <h3>${ch.title}</h3>
              <p>${ch.description}</p>
              <div class="lesson-count">${done}/${ch.lessons.length} lecciones · ${ch.lessons[0] ? 'Empezar →' : ''}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    ${renderCreditsSection()}
  `;
}

function renderExercises(exercises, chapterId, lessonId) {
  if (!exercises || !exercises.length) return '';

  const key = `${chapterId}/${lessonId}`;
  const answers = state.exerciseAnswers[key] || {};

  return `
    <div class="exercise-section">
      <h3><span class="exercise-badge">Práctica</span> Ejercicios</h3>
      ${exercises.map((ex, i) => {
        const answered = answers[i] !== undefined;
        const isCorrect = answered && answers[i] === ex.correct;
        return `
          <div class="exercise-item" data-exercise="${i}">
            <div class="exercise-question">${i + 1}. ${ex.question}</div>
            <div class="options">
              ${ex.options.map((opt, j) => {
                let cls = 'option-btn';
                if (answered) {
                  if (j === ex.correct) cls += ' correct';
                  else if (j === answers[i]) cls += ' incorrect';
                } else if (answers[i] === j) {
                  cls += ' selected';
                }
                return `
                  <button class="${cls}" data-option="${j}" ${answered ? 'disabled' : ''}>
                    <span class="option-letter">${String.fromCharCode(65 + j)}</span>
                    <span>${opt}</span>
                  </button>
                `;
              }).join('')}
            </div>
            ${answered ? `
              <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correcto!' : '✗ Incorrecto.'} ${ex.explanation}
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function allExercisesCorrect(exercises, chapterId, lessonId) {
  if (!exercises || !exercises.length) return true;
  const key = `${chapterId}/${lessonId}`;
  const answers = state.exerciseAnswers[key] || {};
  return exercises.every((ex, i) => answers[i] === ex.correct);
}

function canCompleteLesson(chapterId, lessonId, lesson) {
  return allExercisesCorrect(lesson.exercises, chapterId, lessonId)
    && allPracticesAttempted(chapterId, lessonId);
}

function renderPracticeExercises(chapterId, lessonId) {
  const practices = getPractices(lessonId);
  if (!practices.length) return '';

  const attempted = practices.filter(p => state.practiceAttempts[practiceKey(chapterId, lessonId, p.id)]).length;

  return `
    <div class="practice-section">
      <div class="practice-header">
        <h3><span class="practice-badge">Hazlo tú</span> Algoritmos para practicar</h3>
        <p class="practice-subtitle">Resuelve en el simulador. Usa la guía y las pistas — no hay solución automática.</p>
        <div class="practice-progress">${attempted} de ${practices.length} intentados en simulador</div>
      </div>
      ${practices.map((p, idx) => {
        const key = practiceKey(chapterId, lessonId, p.id);
        const tried = state.practiceAttempts[key];
        const hintKey = `${key}/hints`;
        const revealed = state.revealedHints[hintKey] || 0;
        return `
          <div class="practice-card ${tried ? 'attempted' : ''}" data-practice="${p.id}">
            <div class="practice-card-head">
              <span class="practice-num">${idx + 1}</span>
              <h4>${p.title}</h4>
              ${tried ? '<span class="practice-tried">✓ Intentado</span>' : ''}
            </div>
            <p class="practice-problem">${p.problem}</p>

            <details class="practice-guide">
              <summary>📖 Guía paso a paso (cómo pensar el algoritmo)</summary>
              <ol>${p.guide.map(g => `<li>${g}</li>`).join('')}</ol>
            </details>

            <div class="practice-hints">
              <span class="hints-label">💡 Pistas progresivas:</span>
              ${p.hints.map((h, hi) => `
                <div class="hint-item ${hi < revealed ? 'visible' : 'hidden'}">
                  ${hi < revealed ? `<p><strong>Pista ${hi + 1}:</strong> ${h}</p>` : ''}
                </div>
              `).join('')}
              ${revealed < p.hints.length ? `
                <button class="btn btn-secondary btn-sm reveal-hint" data-hint-key="${hintKey}" data-max="${p.hints.length}">
                  Mostrar pista ${revealed + 1}
                </button>
              ` : '<span class="hints-done">Todas las pistas reveladas</span>'}
            </div>

            <details class="practice-expected">
              <summary>✓ ¿Cómo verificar tu resultado?</summary>
              <p>${p.expected}</p>
              ${p.sampleInputs.length ? `<p class="sample-inputs"><strong>Datos de prueba:</strong> ${p.sampleInputs.join(', ')}</p>` : ''}
            </details>

            <button class="btn btn-primary practice-sim-btn"
              data-skeleton="${encodeURIComponent(p.skeleton)}"
              data-inputs="${encodeURIComponent(p.sampleInputs.join('\n'))}"
              data-pkey="${key}">
              ▶ Resolver en el simulador
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderLesson(chapterId, lessonId) {
  const data = findLesson(chapterId, lessonId);
  if (!data) return '<p>Lección no encontrada.</p>';

  const { chapter, lesson } = data;
  const key = `${chapterId}/${lessonId}`;
  const isCompleted = state.progress[key];
  const canComplete = canCompleteLesson(chapterId, lessonId, lesson);
  const practices = getPractices(lessonId);
  const practicesDone = allPracticesAttempted(chapterId, lessonId);
  const prev = getAdjacentLesson(chapterId, lessonId, 'prev');
  const next = getAdjacentLesson(chapterId, lessonId, 'next');

  return `
    <div class="lesson-header">
      <div class="lesson-tag">${chapter.title}</div>
      <h2>${lesson.title}</h2>
      <p class="summary">${lesson.summary}</p>
    </div>

    <div class="lesson-body">${lesson.content}</div>

    ${renderPracticeExercises(chapterId, lessonId)}

    ${renderExercises(lesson.exercises, chapterId, lessonId)}

    ${practices.length && !practicesDone ? `
      <div class="info-box" style="margin-top:1.5rem">
        <strong>Para completar esta lección:</strong> intenta todos los algoritmos en el simulador (${practices.length} ejercicios) y responde el cuestionario.
      </div>
    ` : ''}

    ${isCompleted ? `
      <div class="completion-banner">
        <h4>✓ Lección completada</h4>
        <p style="color:var(--text-muted);font-size:0.9rem;">Puedes continuar con la siguiente lección.</p>
      </div>
    ` : ''}

    <div class="lesson-nav">
      ${prev ? `
        <button class="btn btn-secondary" data-nav="prev" data-chapter="${prev.chapterId}" data-lesson="${prev.id}">
          ← ${prev.title}
        </button>
      ` : '<span></span>'}

      ${!isCompleted ? `
        <button class="btn btn-success" id="complete-btn" ${canComplete ? '' : 'disabled'}
          title="${canComplete ? '' : 'Completa el cuestionario y practica en el simulador'}">
          Marcar como completada ✓
        </button>
      ` : ''}

      ${next ? `
        <button class="btn btn-primary" data-nav="next" data-chapter="${next.chapterId}" data-lesson="${next.id}">
          ${next.title} →
        </button>
      ` : '<span></span>'}
    </div>
  `;
}

function renderAlgorithmBank() {
  const total = ALGORITHM_BANK.length;
  const done = Object.keys(state.algorithmAttempts).length;
  return `
    <div class="hero">
      <span class="hero-badge">Practica por temas</span>
      <h2>Banco de algoritmos</h2>
      <p>${total} ejercicios con guía, pistas y simulador — secuencia, operadores, selección, ciclos, arreglos, matrices, funciones y problemas combinados.</p>
      <p class="practice-progress">${done} de ${total} intentados en simulador</p>
    </div>
    <div class="book-chapters algo-bank">
      ${ALGORITHM_TOPICS.map(topic => {
        const exercises = getAlgorithmsByTopic(topic.id);
        const topicDone = exercises.filter(e => state.algorithmAttempts[algoKey(e.id)]).length;
        return `
          <div class="book-chapter-card" id="topic-${topic.id}">
            <div class="book-chapter-header">
              <div>
                <h3>${topic.title}</h3>
                <p class="topic-desc">${topic.description}</p>
              </div>
              <span class="page-ref">${topicDone}/${exercises.length}</span>
            </div>
            <div class="book-exercise-list">
              ${exercises.map((ex, idx) => {
                const tried = state.algorithmAttempts[algoKey(ex.id)];
                const diff = DIFFICULTY_LABELS[ex.difficulty] || ex.difficulty;
                return `
                  <button class="book-exercise-item ${tried ? 'done' : ''}" data-algo="${ex.id}">
                    <span class="ex-num">${idx + 1}</span>
                    <div>
                      <strong>${ex.title}</strong>
                      <span class="ex-type">${diff}</span>
                    </div>
                    ${tried ? '<span class="ex-done">✓</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderAlgorithmDetail(exerciseId) {
  const data = findAlgorithmExercise(exerciseId);
  if (!data) return '<p>Ejercicio no encontrado.</p>';
  const { topic, exercise } = data;
  const key = algoKey(exercise.id);
  const tried = state.algorithmAttempts[key];
  const hintKey = `algo/${key}/hints`;
  const revealed = state.revealedHints[hintKey] || 0;
  const diff = DIFFICULTY_LABELS[exercise.difficulty] || exercise.difficulty;

  return `
    <div class="lesson-header">
      <div class="lesson-tag">${topic.title} · ${diff}</div>
      <h2>${exercise.title}</h2>
      <p class="summary">${exercise.problem}</p>
    </div>

    <div class="practice-card algo-detail ${tried ? 'attempted' : ''}">
      ${tried ? '<span class="practice-tried">✓ Intentado en simulador</span>' : ''}

      <details class="practice-guide" open>
        <summary>📖 Guía paso a paso</summary>
        <ol>${exercise.guide.map(g => `<li>${g}</li>`).join('')}</ol>
      </details>

      <div class="practice-hints">
        <span class="hints-label">💡 Pistas progresivas:</span>
        ${exercise.hints.map((h, hi) => `
          <div class="hint-item ${hi < revealed ? 'visible' : 'hidden'}">
            ${hi < revealed ? `<p><strong>Pista ${hi + 1}:</strong> ${h}</p>` : ''}
          </div>
        `).join('')}
        ${revealed < exercise.hints.length ? `
          <button class="btn btn-secondary btn-sm reveal-hint" data-hint-key="${hintKey}" data-max="${exercise.hints.length}">
            Mostrar pista ${revealed + 1}
          </button>
        ` : '<span class="hints-done">Todas las pistas reveladas</span>'}
      </div>

      <details class="practice-expected">
        <summary>✓ ¿Cómo verificar tu resultado?</summary>
        <p>${exercise.expected}</p>
        ${exercise.sampleInputs.length ? `<p class="sample-inputs"><strong>Datos de prueba:</strong> ${exercise.sampleInputs.join(', ')}</p>` : ''}
      </details>

      <details class="practice-guide">
        <summary>📝 Esqueleto inicial (sin solución)</summary>
        <pre class="theory-example">${escapeHtml(exercise.skeleton)}</pre>
      </details>

      <button class="btn btn-primary practice-sim-btn algo-sim-btn"
        data-skeleton="${encodeURIComponent(exercise.skeleton)}"
        data-inputs="${encodeURIComponent(exercise.sampleInputs.join('\n'))}"
        data-akey="${key}"
        data-exercise-id="${exercise.id}">
        ▶ Resolver en el simulador
      </button>
    </div>

    <div class="lesson-nav">
      <button class="btn btn-secondary" id="back-algorithms">← Volver al banco</button>
      <button class="btn btn-secondary" id="back-topic" data-topic="${topic.id}">↑ ${topic.title}</button>
    </div>
  `;
}

function renderBookExercises() {
  const total = getBookExerciseCount();
  const done = Object.keys(state.completedBookExercises).length;
  return `
    <div class="hero">
      <span class="hero-badge">Libro de referencia</span>
      <h2>Ejercicios propuestos</h2>
      <p>${BOOK_META.title} — ${BOOK_META.authors}. ${done} de ${total} marcados como resueltos.</p>
      <p class="book-note">${BOOK_META.note}</p>
    </div>
    <div class="credits-inline">
      <p><strong>Atribución:</strong> Ejercicios basados en <em>${BOOK_META.title}</em> (${BOOK_META.year}), ${BOOK_META.authors}. ${ATTRIBUTION.bookCredit}</p>
    </div>
    <div class="book-chapters">
      ${BOOK_EXERCISES.map(ch => `
        <div class="book-chapter-card">
          <div class="book-chapter-header">
            <h3>${ch.title}</h3>
            <span class="page-ref">pág. ${ch.page}</span>
          </div>
          <div class="book-exercise-list">
            ${ch.exercises.map(ex => {
              const key = `${ch.id}/${ex.id}`;
              const done = state.completedBookExercises[key];
              const typeLabel = ex.type === 'teoria' ? 'Teoría' : ex.type === 'algoritmo' ? 'Algoritmo' : 'Práctica';
              return `
                <button class="book-exercise-item ${done ? 'done' : ''}" data-bchapter="${ch.id}" data-bexercise="${ex.id}">
                  <span class="ex-num">${ex.number}</span>
                  <div>
                    <strong>${ex.title}</strong>
                    <span class="ex-type">${typeLabel}</span>
                  </div>
                  ${done ? '<span class="ex-done">✓</span>' : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

const THEORY_HELP = {
  '1-1': {
    steps: [
      'Para cada dato de la lista, inventa un nombre de variable (identificador) descriptivo.',
      'Elige el tipo de dato correcto: Entero, Real, Cadena, Caracter o Logico.',
      'Arma una tabla con 3 columnas: Dato | Identificador | Tipo'
    ],
    example: `Ejemplo (solo el primero):
Dato: Placa de un vehículo
Identificador: placaVehiculo
Tipo: Cadena`
  },
  '1-2': {
    steps: [
      'Revisa cada nombre y pregúntate: ¿empieza con letra? ¿tiene espacios o símbolos raros (@, #)?',
      'Escribe Válido o Inválido y una razón breve.'
    ],
    example: 'Ejemplo: generoAspirante → Válido (empieza con letra, sin espacios)'
  }
};

function renderTheoryHelp(exercise) {
  const help = THEORY_HELP[exercise.id] || {
    steps: ['Lee el enunciado con calma.', 'Responde por escrito en tu cuaderno.', 'Cuando termines, marca como resuelto.'],
    example: ''
  };
  const notesKey = `book-notes/${exercise.id}`;
  const saved = state.bookNotes?.[notesKey] || '';
  return `
    <div class="theory-help">
      <h4>¿Qué debes hacer?</h4>
      <ol>${help.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      ${help.example ? `<pre class="theory-example">${help.example}</pre>` : ''}
      <label class="notes-label">Tu respuesta (opcional, se guarda aquí):</label>
      <textarea class="theory-notes" id="theory-notes" data-notes-key="${notesKey}" placeholder="Escribe tu tabla o respuesta aquí...">${escapeHtml(saved)}</textarea>
    </div>
  `;
}

function renderBookExerciseDetail(chapterId, exerciseId) {
  const data = findBookExercise(chapterId, exerciseId);
  if (!data) return '<p>Ejercicio no encontrado.</p>';
  const { chapter, exercise } = data;
  const key = `${chapterId}/${exerciseId}`;
  const isDone = state.completedBookExercises[key];
  const starter = getStarterCode(exercise);
  const descHtml = exercise.description.replace(/\n/g, '<br>');

  return `
    <div class="lesson-header">
      <div class="lesson-tag">${chapter.title} · Ejercicio ${exercise.number}</div>
      <h2>${exercise.title}</h2>
      <p class="summary">Página ${chapter.page} del libro</p>
    </div>
    <div class="book-exercise-body">
      ${exercise.type === 'teoria' ? `
        <div class="theory-notice">
          <strong>📝 Ejercicio de teoría</strong> — No uses el simulador. Resuélvelo en papel, cuaderno o en el cuadro de abajo.
        </div>
      ` : `
        <div class="theory-notice algo-notice">
          <strong>▶ Ejercicio de algoritmo</strong> — Escríbelo en el simulador y pruébalo con datos de entrada.
        </div>
      `}
      <div class="info-box"><strong>Enunciado:</strong><br>${descHtml}</div>
      ${exercise.type === 'teoria' ? renderTheoryHelp(exercise) : ''}
      ${exercise.type === 'algoritmo' ? `
        <button class="btn btn-primary" id="open-simulator-btn" data-starter="${encodeURIComponent(starter)}" data-inputs="${encodeURIComponent((exercise.sampleInputs || []).join('\n'))}">
          ▶ Resolver en el simulador
        </button>
      ` : ''}
      ${isDone ? `<div class="completion-banner"><h4>✓ Marcado como resuelto</h4></div>` : ''}
      <div class="lesson-nav">
        <button class="btn btn-secondary" id="back-exercises">← Volver a ejercicios</button>
        <button class="btn btn-success" id="mark-book-exercise">${isDone ? 'Desmarcar' : 'Marcar como resuelto ✓'}</button>
      </div>
    </div>
  `;
}

function renderSimulator(prefillCode = '', prefillInputs = '') {
  const examples = Object.keys(SIMULATOR_EXAMPLES);
  const returnLabel = state.simReturnTo?.view === 'algorithm-exercise'
    ? '← Volver al ejercicio'
    : state.simReturnTo?.view === 'lesson'
      ? '← Volver a la lección'
      : '← Volver';
  const returnBtn = state.simReturnTo
    ? `<button class="btn btn-secondary" id="sim-return">${returnLabel}</button>`
    : '';
  return `
    <div class="hero">
      <span class="hero-badge">Herramienta interactiva</span>
      <h2>Simulador de pseudocódigo</h2>
      <p>Escribe y ejecuta algoritmos con la sintaxis del libro: <code>leer</code>, <code>imprimir</code>, <code>Si/FinSi</code>, <code>Para/FinPara</code>, <code>Mientras/FinMientras</code>.</p>
      ${state.simReturnTo ? '<p class="practice-subtitle">Completa el algoritmo en el editor. Usa las pistas de la lección si te atoras.</p>' : ''}
      ${returnBtn}
    </div>
    <div class="simulator-layout">
      <div class="sim-panel">
        <div class="sim-toolbar">
          <label>Ejemplos:
            <select id="sim-examples">
              <option value="">— Seleccionar —</option>
              ${examples.map(k => `<option value="${k}">${k}</option>`).join('')}
            </select>
          </label>
          <button class="btn btn-secondary btn-sm" id="sim-clear">Limpiar</button>
        </div>
        <textarea id="sim-code" class="sim-code" spellcheck="false" placeholder="Escribe tu algoritmo aquí...">${escapeHtml(prefillCode || SIMULATOR_EXAMPLES.hola)}</textarea>
      </div>
      <div class="sim-side">
        <div class="sim-io">
          <label>Datos de entrada <span class="hint">(uno por línea, para cada leer)</span></label>
          <textarea id="sim-inputs" class="sim-inputs" placeholder="Ej: Ana">${escapeHtml(prefillInputs)}</textarea>
        </div>
        <button class="btn btn-primary btn-run" id="sim-run">▶ Ejecutar</button>
        <div class="sim-output-wrap">
          <label>Salida</label>
          <pre id="sim-output" class="sim-output">Presiona Ejecutar para ver el resultado.</pre>
        </div>
        <div id="sim-vars" class="sim-vars"></div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function runSimulator() {
  const code = document.getElementById('sim-code').value;
  const inputs = document.getElementById('sim-inputs').value.split('\n').map(s => s.trim()).filter(Boolean);
  const result = simulator.run(code, inputs);
  const out = document.getElementById('sim-output');
  const vars = document.getElementById('sim-vars');

  if (result.errors.length) {
    out.textContent = '❌ Errores:\n' + result.errors.join('\n');
    out.classList.add('error');
  } else {
    out.textContent = result.output || '(sin salida)';
    out.classList.remove('error');
  }

  const varEntries = Object.entries(result.variables);
  vars.innerHTML = varEntries.length
    ? '<label>Variables</label><div class="var-list">' + varEntries.map(([k,v]) => `<span><code>${k}</code> = ${v}</span>`).join('') + '</div>'
    : '';
}

function render() {
  const content = document.getElementById('content');
  const breadcrumb = document.getElementById('breadcrumb');
  content.classList.toggle('content-wide', state.view === 'simulator');

  if (state.view === 'home') {
    breadcrumb.innerHTML = '<strong>Inicio</strong>';
    content.innerHTML = renderHome();
    bindHomeEvents();
  } else if (state.view === 'lesson') {
    const data = findLesson(state.chapterId, state.lessonId);
    if (data) {
      breadcrumb.innerHTML = `<a href="#" class="bc-link" data-bc="home">Inicio</a> / <strong>${data.lesson.title}</strong>`;
    }
    content.innerHTML = renderLesson(state.chapterId, state.lessonId);
    bindLessonEvents();
  } else if (state.view === 'algorithms') {
    breadcrumb.innerHTML = '<strong>Banco de algoritmos</strong>';
    content.innerHTML = renderAlgorithmBank();
    bindAlgorithmBankEvents();
  } else if (state.view === 'algorithm-exercise') {
    const data = findAlgorithmExercise(state.algoExerciseId);
    breadcrumb.innerHTML = `<a href="#" class="bc-link" data-bc="algorithms">Banco</a> / <strong>${data?.exercise.title || ''}</strong>`;
    content.innerHTML = renderAlgorithmDetail(state.algoExerciseId);
    bindAlgorithmDetailEvents();
  } else if (state.view === 'exercises') {
    breadcrumb.innerHTML = '<strong>Ejercicios del libro</strong>';
    content.innerHTML = renderBookExercises();
    bindBookExercisesEvents();
  } else if (state.view === 'book-exercise') {
    const data = findBookExercise(state.bookChapterId, state.bookExerciseId);
    breadcrumb.innerHTML = `<a href="#" class="bc-link" data-bc="exercises">Ejercicios</a> / <strong>${data?.exercise.title || ''}</strong>`;
    content.innerHTML = renderBookExerciseDetail(state.bookChapterId, state.bookExerciseId);
    bindBookExerciseDetailEvents();
  } else if (state.view === 'simulator') {
    breadcrumb.innerHTML = '<strong>Simulador de pseudocódigo</strong>';
    content.innerHTML = renderSimulator(state.simCode || '', state.simInputs || '');
    bindSimulatorEvents();
  }

  updateProgressUI();
  bindBreadcrumbLinks();
}

function bindBreadcrumbLinks() {
  document.querySelectorAll('.bc-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.bc);
    });
  });
}

function bindHomeEvents() {
  document.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const chapter = CURRICULUM.find(c => c.id === card.dataset.chapter);
      if (chapter && chapter.lessons.length) {
        navigate('lesson', chapter.id, chapter.lessons[0].id);
      }
    });
  });
  document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.go));
  });
}

function bindAlgorithmBankEvents() {
  document.querySelectorAll('.book-exercise-item[data-algo]').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = findAlgorithmExercise(btn.dataset.algo);
      navigate('algorithm-exercise', null, null, null, null, data?.topic?.id, btn.dataset.algo);
    });
  });
}

function bindAlgorithmDetailEvents() {
  document.getElementById('back-algorithms')?.addEventListener('click', () => navigate('algorithms'));
  document.getElementById('back-topic')?.addEventListener('click', e => {
    const topicId = e.currentTarget.dataset.topic;
    navigate('algorithms');
    requestAnimationFrame(() => {
      document.getElementById(`topic-${topicId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.reveal-hint').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.hintKey;
      const max = parseInt(btn.dataset.max, 10);
      state.revealedHints[key] = (state.revealedHints[key] || 0) + 1;
      if (state.revealedHints[key] > max) state.revealedHints[key] = max;
      render();
    });
  });

  document.querySelectorAll('.algo-sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const akey = btn.dataset.akey;
      const exerciseId = btn.dataset.exerciseId;
      state.algorithmAttempts[akey] = true;
      saveAlgorithmProgress();
      state.simCode = decodeURIComponent(btn.dataset.skeleton || '');
      state.simInputs = decodeURIComponent(btn.dataset.inputs || '').replace(/\\n/g, '\n');
      const data = findAlgorithmExercise(exerciseId);
      state.simReturnTo = { view: 'algorithm-exercise', topicId: data?.topic?.id, exerciseId };
      navigate('simulator');
    });
  });
}

function bindBookExercisesEvents() {
  document.querySelectorAll('.book-exercise-item').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = 'book-exercise';
      state.bookChapterId = btn.dataset.bchapter;
      state.bookExerciseId = btn.dataset.bexercise;
      render();
    });
  });
}

function bindBookExerciseDetailEvents() {
  document.getElementById('back-exercises')?.addEventListener('click', () => navigate('exercises'));
  document.getElementById('theory-notes')?.addEventListener('input', e => {
    const key = e.target.dataset.notesKey;
    if (!state.bookNotes) state.bookNotes = {};
    state.bookNotes[key] = e.target.value;
    saveBookNotes();
  });
  document.getElementById('mark-book-exercise')?.addEventListener('click', () => {
    const key = `${state.bookChapterId}/${state.bookExerciseId}`;
    if (state.completedBookExercises[key]) delete state.completedBookExercises[key];
    else state.completedBookExercises[key] = true;
    saveBookProgress();
    render();
  });
  document.getElementById('open-simulator-btn')?.addEventListener('click', () => {
    const btn = document.getElementById('open-simulator-btn');
    state.simCode = decodeURIComponent(btn.dataset.starter || '');
    state.simInputs = decodeURIComponent(btn.dataset.inputs || '').replace(/\\n/g, '\n');
    navigate('simulator');
  });
}

function bindSimulatorEvents() {
  document.getElementById('sim-run')?.addEventListener('click', runSimulator);
  document.getElementById('sim-clear')?.addEventListener('click', () => {
    document.getElementById('sim-code').value = '';
    document.getElementById('sim-inputs').value = '';
    document.getElementById('sim-output').textContent = '';
    document.getElementById('sim-vars').innerHTML = '';
  });
  document.getElementById('sim-examples')?.addEventListener('change', e => {
    const key = e.target.value;
    if (key && SIMULATOR_EXAMPLES[key]) {
      document.getElementById('sim-code').value = SIMULATOR_EXAMPLES[key];
    }
  });

  document.getElementById('sim-return')?.addEventListener('click', () => {
    const ret = state.simReturnTo;
    state.simReturnTo = null;
    if (ret?.view === 'lesson') {
      navigate('lesson', ret.chapterId, ret.lessonId);
    } else if (ret?.view === 'algorithm-exercise') {
      navigate('algorithm-exercise', null, null, null, null, ret.topicId, ret.exerciseId);
    } else {
      navigate('home');
    }
  });
}

function bindLessonEvents() {
  const key = `${state.chapterId}/${state.lessonId}`;
  const data = findLesson(state.chapterId, state.lessonId);
  if (!data) return;

  document.querySelector('.bc-link[data-bc="home"]')?.addEventListener('click', e => {
    e.preventDefault();
    navigate('home');
  });

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      navigate('lesson', btn.dataset.chapter, btn.dataset.lesson);
    });
  });

  document.querySelectorAll('.exercise-item').forEach(item => {
    const exIdx = parseInt(item.dataset.exercise, 10);
    item.querySelectorAll('.option-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!state.exerciseAnswers[key]) state.exerciseAnswers[key] = {};
        state.exerciseAnswers[key][exIdx] = parseInt(btn.dataset.option, 10);
        render();
      });
    });
  });

  document.getElementById('complete-btn')?.addEventListener('click', () => {
    if (canCompleteLesson(state.chapterId, state.lessonId, data.lesson)) {
      markLessonComplete(state.chapterId, state.lessonId);
      render();
    }
  });

  bindPracticeLessonEvents(state.chapterId, state.lessonId);
}

function bindPracticeLessonEvents(chapterId, lessonId) {
  document.querySelectorAll('.reveal-hint').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.hintKey;
      const max = parseInt(btn.dataset.max, 10);
      state.revealedHints[key] = (state.revealedHints[key] || 0) + 1;
      if (state.revealedHints[key] > max) state.revealedHints[key] = max;
      render();
    });
  });

  document.querySelectorAll('.practice-sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkey = btn.dataset.pkey;
      state.practiceAttempts[pkey] = true;
      savePracticeProgress();
      state.simCode = decodeURIComponent(btn.dataset.skeleton || '');
      state.simInputs = decodeURIComponent(btn.dataset.inputs || '').replace(/\\n/g, '\n');
      state.simReturnTo = { view: 'lesson', chapterId, lessonId };
      navigate('simulator');
    });
  });
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

function init() {
  renderSidebar();
  updateProgressUI();
  render();

  document.querySelectorAll('.tool-link').forEach(btn => {
    btn.addEventListener('click', () => {
      navigate(btn.dataset.view);
      closeSidebar();
    });
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
  });

  document.getElementById('sidebar-close').addEventListener('click', closeSidebar);
  updateSidebarActive();

  const params = new URLSearchParams(window.location.search);
  const ch = params.get('capitulo');
  const le = params.get('leccion');
  if (ch && le && findLesson(ch, le)) {
    navigate('lesson', ch, le);
  }
}

document.addEventListener('DOMContentLoaded', init);
