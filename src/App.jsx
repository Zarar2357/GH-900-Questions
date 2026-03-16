import { useEffect, useMemo, useState } from "react";
import { quizQuestions } from "./quizData";

const STORAGE_KEY = "github-quiz-studio-state-v2";
const EXAM_DURATION_SECONDS = 90 * 60;
const EMPTY_SCORE = null;

function loadExamState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        answers: {},
        flagged: {},
        submitted: false,
        timeLeft: EXAM_DURATION_SECONDS,
        startedAt: Date.now(),
        submittedAt: null
      };
    }

    const parsed = JSON.parse(raw);
    return {
      answers: parsed.answers || {},
      flagged: parsed.flagged || {},
      submitted: Boolean(parsed.submitted),
      timeLeft: typeof parsed.timeLeft === "number" ? parsed.timeLeft : EXAM_DURATION_SECONDS,
      startedAt: parsed.startedAt || Date.now(),
      submittedAt: parsed.submittedAt || null
    };
  } catch {
    return {
      answers: {},
      flagged: {},
      submitted: false,
      timeLeft: EXAM_DURATION_SECONDS,
      startedAt: Date.now(),
      submittedAt: null
    };
  }
}

function ordinalSuffix(value) {
  const mod10 = value % 10;
  const mod100 = value % 100;
  if (mod10 === 1 && mod100 !== 11) return `${value}st`;
  if (mod10 === 2 && mod100 !== 12) return `${value}nd`;
  if (mod10 === 3 && mod100 !== 13) return `${value}rd`;
  return `${value}th`;
}

function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function getQuestionStatus(question, answers, flagged) {
  const selected = answers[question.id] || [];
  if (flagged[question.id] && selected.length > 0) return "flagged-answered";
  if (flagged[question.id]) return "flagged";
  if (selected.length > 0) return "answered";
  return "unanswered";
}

export default function App() {
  const [examState, setExamState] = useState(loadExamState);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [focusMode, setFocusMode] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const { answers, flagged, submitted, timeLeft, submittedAt, startedAt } = examState;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(examState));
  }, [examState]);

  useEffect(() => {
    if (submitted) return undefined;

    const timer = window.setInterval(() => {
      setExamState((current) => {
        if (current.submitted) return current;
        if (current.timeLeft <= 1) {
          return {
            ...current,
            timeLeft: 0,
            submitted: true,
            submittedAt: Date.now()
          };
        }
        return { ...current, timeLeft: current.timeLeft - 1 };
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [submitted]);

  useEffect(() => {
    if (submitted) {
      setShowResults(true);
      setShowSubmitModal(false);
    }
  }, [submitted]);

  const answeredCount = useMemo(
    () => quizQuestions.filter((question) => (answers[question.id] || []).length > 0).length,
    [answers]
  );

  const flaggedCount = useMemo(
    () => Object.values(flagged).filter(Boolean).length,
    [flagged]
  );

  const multiCount = useMemo(
    () => quizQuestions.filter((question) => question.choose > 1).length,
    []
  );

  const visibleQuestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    return quizQuestions.filter((question) => {
      const selected = answers[question.id] || [];
      const isAnswered = selected.length > 0;
      const isFlagged = Boolean(flagged[question.id]);
      const haystack = `${question.label} ${question.prompt} ${question.options.join(" ")}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      const matchesFilter =
        filter === "all" ? true :
        filter === "answered" ? isAnswered :
        filter === "unanswered" ? !isAnswered :
        filter === "flagged" ? isFlagged :
        question.choose > 1;

      return matchesSearch && matchesFilter;
    });
  }, [answers, flagged, filter, search]);

  const progress = quizQuestions.length
    ? Math.round((answeredCount / quizQuestions.length) * 100)
    : 0;

  const completionScore = `${Math.round((answeredCount / quizQuestions.length) * 100)}%`;
  const unansweredCount = quizQuestions.length - answeredCount;
  const attemptedCount = answeredCount;
  const score = EMPTY_SCORE;
  const statusBreakdown = useMemo(() => {
    const counts = {
      answered: 0,
      unanswered: 0,
      flagged: 0,
      flaggedAnswered: 0
    };

    quizQuestions.forEach((question) => {
      const status = getQuestionStatus(question, answers, flagged);
      if (status === "answered") counts.answered += 1;
      if (status === "unanswered") counts.unanswered += 1;
      if (status === "flagged") counts.flagged += 1;
      if (status === "flagged-answered") counts.flaggedAnswered += 1;
    });

    return counts;
  }, [answers, flagged]);

  function updateAnswer(question, optionIndex) {
    if (submitted) return;

    setExamState((current) => {
      const next = new Set(current.answers[question.id] || []);
      if (question.choose === 1) {
        if (next.has(optionIndex)) {
          next.clear();
        } else {
          next.clear();
          next.add(optionIndex);
        }
      } else if (next.has(optionIndex)) {
        next.delete(optionIndex);
      } else if (next.size < question.choose) {
        next.add(optionIndex);
      } else {
        const ordered = [...next].sort((a, b) => a - b);
        next.delete(ordered[0]);
        next.add(optionIndex);
      }

      return {
        ...current,
        answers: {
          ...current.answers,
          [question.id]: [...next].sort((a, b) => a - b)
        }
      };
    });
  }

  function toggleFlag(questionId) {
    if (submitted) return;

    setExamState((current) => ({
      ...current,
      flagged: {
        ...current.flagged,
        [questionId]: !current.flagged[questionId]
      }
    }));
  }

  function clearAll() {
    if (submitted) return;

    setExamState((current) => ({
      ...current,
      answers: {},
      flagged: {}
    }));
  }

  function resetExam() {
    setExamState({
      answers: {},
      flagged: {},
      submitted: false,
      timeLeft: EXAM_DURATION_SECONDS,
      startedAt: Date.now(),
      submittedAt: null
    });
    setShowResults(false);
    setShowSubmitModal(false);
    setFocusMode(false);
    setFilter("all");
    setSearch("");
  }

  function jumpToFirstUnanswered() {
    const target = quizQuestions.find((question) => (answers[question.id] || []).length === 0);
    if (target) {
      document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function submitExam() {
    setExamState((current) => ({
      ...current,
      submitted: true,
      submittedAt: Date.now()
    }));
  }

  function scrollToQuestion(questionId) {
    document.getElementById(questionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className={`app-shell ${focusMode ? "focus-mode" : ""}`}>
      <header className="exam-topbar panel">
        <div className="topbar-group">
          <div>
            <div className="eyebrow">Professional Exam Mode</div>
            <h1 className="topbar-title">GitHub Certification Simulator</h1>
          </div>
          <p className="topbar-copy">
            Timed, review-friendly, and submission-ready. The exact correct-answer score will appear as soon as you provide the answer key.
          </p>
        </div>

        <div className="topbar-actions">
          <div className={`time-card ${timeLeft < 600 ? "time-low" : ""}`}>
            <span className="time-label">Time Left</span>
            <strong>{formatTime(timeLeft)}</strong>
          </div>
          <div className="time-card subtle">
            <span className="time-label">Progress</span>
            <strong>{progress}%</strong>
          </div>
          <button className="ghost" onClick={() => setFocusMode((value) => !value)}>
            {focusMode ? "Exit Focus" : "Focus Mode"}
          </button>
          <button className="primary submit-button" onClick={() => setShowSubmitModal(true)}>
            Submit Exam
          </button>
        </div>
      </header>

      <div className="shell">
        <aside className="sidebar panel">
          <div className="brand">
            <span className="eyebrow">Exam Dashboard</span>
            <h2 className="sidebar-title">Attempt Overview</h2>
            <div className="lede">
              Navigate quickly, flag questions for review, and submit once you are satisfied with your attempt.
            </div>
          </div>

          <div className="stats stats-three">
            <div className="stat">
              <strong>{quizQuestions.length}</strong>
              <span className="muted">questions</span>
            </div>
            <div className="stat">
              <strong>{answeredCount}</strong>
              <span className="muted">answered</span>
            </div>
            <div className="stat">
              <strong>{flaggedCount}</strong>
              <span className="muted">flagged</span>
            </div>
          </div>

          <div className="progress-wrap">
            <div className="progress-meta">
              <span>Attempt Completion</span>
              <strong>{completionScore}</strong>
            </div>
            <div className="bar">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="legend-grid">
            <span className="legend-chip answered">Answered</span>
            <span className="legend-chip unanswered">Unanswered</span>
            <span className="legend-chip flagged">Flagged</span>
            <span className="legend-chip flagged-answered">Flagged + answered</span>
          </div>

          <div className="question-palette">
            {quizQuestions.map((question, index) => {
              const status = getQuestionStatus(question, answers, flagged);
              return (
                <button
                  key={question.id}
                  className={`palette-item ${status}`}
                  onClick={() => scrollToQuestion(question.id)}
                  title={`${question.label}: ${status.replace("-", " ")}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <div className="navigator">
            {quizQuestions.map((question) => {
              const status = getQuestionStatus(question, answers, flagged);
              const isVisible = visibleQuestions.some((item) => item.id === question.id);
              return (
                <button
                  key={question.id}
                  className={`nav-item ${status} ${isVisible ? "active" : ""}`}
                  onClick={() => scrollToQuestion(question.id)}
                >
                  <div className="nav-topline">
                    <span>{question.label}</span>
                    <span>{question.choose > 1 ? `Pick ${question.choose}` : "Pick 1"}</span>
                  </div>
                  <div className="nav-title">{question.prompt}</div>
                </button>
              );
            })}
          </div>

          <div className="nav-actions">
            <button className="ghost" onClick={jumpToFirstUnanswered}>First Unanswered</button>
            <button className="ghost" onClick={clearAll}>Clear Attempt</button>
          </div>
        </aside>

        <main className="main">
          <section className="hero panel exam-hero">
            <div className="hero-grid">
              <div>
                <span className="eyebrow hero-eyebrow">Live Attempt</span>
                <h2>Simulate the pressure, keep the clarity.</h2>
                <p>
                  Search the exam, narrow by flagged or unanswered questions, and submit with a final review like a real certification practice environment.
                </p>
              </div>
              <div className="hero-cards">
                <div className="hero-card">
                  <strong>{multiCount}</strong>
                  <span>multi-select prompts</span>
                </div>
                <div className="hero-card">
                  <strong>{quizQuestions.length - multiCount}</strong>
                  <span>single-select prompts</span>
                </div>
                <div className="hero-card">
                  <strong>{attemptedCount}</strong>
                  <span>attempted so far</span>
                </div>
                <div className="hero-card">
                  <strong>{unansweredCount}</strong>
                  <span>still unanswered</span>
                </div>
              </div>
            </div>
          </section>

          <section className="toolbar panel">
            <div className="toolbar-top">
              <input
                className="search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search questions, keywords, or answer text"
              />
              <button className="primary" onClick={() => setShowResults((value) => !value)}>
                {showResults ? "Hide Results" : "Show Results"}
              </button>
            </div>

            <div className="filters">
              {[
                ["all", "All Questions"],
                ["unanswered", "Unanswered"],
                ["answered", "Answered"],
                ["flagged", "Flagged"],
                ["multi", "Multi-select"]
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={`pill ${filter === value ? "active" : ""}`}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          {showResults && (
            <section className="results-panel panel">
              <div className="results-head">
                <div>
                  <span className="eyebrow">Exam Result</span>
                  <h2 className="results-title">Attempt Summary</h2>
                </div>
                <div className="result-score-ring">
                  <span>{score === null ? completionScore : `${score}%`}</span>
                  <small>{score === null ? "completion" : "score"}</small>
                </div>
              </div>

              <div className="results-grid">
                <div className="result-card accent">
                  <strong>{attemptedCount}</strong>
                  <span>attempted</span>
                </div>
                <div className="result-card">
                  <strong>{unansweredCount}</strong>
                  <span>unanswered</span>
                </div>
                <div className="result-card">
                  <strong>{statusBreakdown.flagged + statusBreakdown.flaggedAnswered}</strong>
                  <span>flagged</span>
                </div>
                <div className="result-card">
                  <strong>{submittedAt ? new Date(submittedAt).toLocaleTimeString() : "In progress"}</strong>
                  <span>submitted at</span>
                </div>
              </div>

              <div className="results-note">
                {score === null
                  ? "Exact right-answer scoring is ready in the UI, but the correct-answer key has not been provided yet. Right now this dashboard shows your completion score and attempt breakdown."
                  : "Your exact score is shown above based on the configured answer key."}
              </div>

              <div className="results-actions">
                <button className="ghost" onClick={resetExam}>Restart Exam</button>
                <button className="ghost" onClick={jumpToFirstUnanswered}>Jump to Unanswered</button>
              </div>
            </section>
          )}

          <section className="questions">
            {visibleQuestions.length === 0 ? (
              <div className="results-empty">No questions match the current search and filter combination.</div>
            ) : (
              visibleQuestions.map((question, index) => {
                const selected = new Set(answers[question.id] || []);
                const status = getQuestionStatus(question, answers, flagged);
                return (
                  <article
                    key={question.id}
                    className={`question ${submitted ? "locked" : ""} ${status}`}
                    id={question.id}
                    style={{ animationDelay: `${Math.min(index * 18, 240)}ms` }}
                  >
                    <div className="question-head">
                      <div>
                        <div className="question-index">
                          {question.label} · {ordinalSuffix(question.ordinal)} in deck
                        </div>
                        <h3>{question.prompt}</h3>
                      </div>
                      <div className="question-actions">
                        <button
                          className={`flag-button ${flagged[question.id] ? "active" : ""}`}
                          onClick={() => toggleFlag(question.id)}
                          disabled={submitted}
                        >
                          {flagged[question.id] ? "Flagged" : "Flag for review"}
                        </button>
                        <div className="choice-badge">
                          {question.choose > 1 ? `Choose ${question.choose}` : "Choose 1"}
                        </div>
                      </div>
                    </div>

                    <div className="options">
                      {question.options.map((option, optionIndex) => (
                        <label
                          key={`${question.id}-${optionIndex}`}
                          className={`option ${selected.has(optionIndex) ? "selected" : ""}`}
                        >
                          <input
                            hidden
                            disabled={submitted}
                            type={question.choose > 1 ? "checkbox" : "radio"}
                            checked={selected.has(optionIndex)}
                            onChange={() => updateAnswer(question, optionIndex)}
                          />
                          <span className="option-key">{String.fromCharCode(65 + optionIndex)}</span>
                          <span className="option-text">{option}</span>
                          <span className="option-mark" aria-hidden="true" />
                        </label>
                      ))}
                    </div>

                    <div className="question-foot">
                      <span>{selected.size ? `${selected.size} selected` : "No answer selected yet"}</span>
                      <span>{flagged[question.id] ? "Marked for review" : `${question.options.length} options`}</span>
                    </div>
                  </article>
                );
              })
            )}
          </section>
        </main>
      </div>

      {showSubmitModal && !submitted && (
        <div className="modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="modal-card panel" onClick={(event) => event.stopPropagation()}>
            <span className="eyebrow">Submit Attempt</span>
            <h2 className="modal-title">Ready to finish your exam?</h2>
            <p className="modal-copy">
              You have answered {answeredCount} of {quizQuestions.length} questions, with {unansweredCount} still blank and {flaggedCount} flagged for review.
            </p>
            <div className="modal-grid">
              <div className="result-card accent">
                <strong>{answeredCount}</strong>
                <span>answered</span>
              </div>
              <div className="result-card">
                <strong>{unansweredCount}</strong>
                <span>unanswered</span>
              </div>
              <div className="result-card">
                <strong>{flaggedCount}</strong>
                <span>flagged</span>
              </div>
            </div>
            <div className="modal-actions">
              <button className="ghost" onClick={() => setShowSubmitModal(false)}>Keep Reviewing</button>
              <button className="primary submit-button" onClick={submitExam}>Confirm Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
