import { useEffect, useMemo, useState } from "react";
import { quizQuestions } from "./quizData";

const STORAGE_KEY = "github-quiz-studio-state-v1";

function loadAnswers() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
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

export default function App() {
  const [answers, setAnswers] = useState(loadAnswers);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [answeredOnly, setAnsweredOnly] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers]);

  const answeredCount = useMemo(
    () => quizQuestions.filter((question) => (answers[question.id] || []).length > 0).length,
    [answers]
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
      const haystack = `${question.label} ${question.prompt} ${question.options.join(" ")}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      const matchesFilter =
        filter === "all" ? true :
        filter === "answered" ? isAnswered :
        filter === "unanswered" ? !isAnswered :
        question.choose > 1;

      return matchesSearch && matchesFilter && (!answeredOnly || isAnswered);
    });
  }, [answers, answeredOnly, filter, search]);

  const progress = quizQuestions.length
    ? Math.round((answeredCount / quizQuestions.length) * 100)
    : 0;

  function updateAnswer(question, optionIndex) {
    setAnswers((current) => {
      const next = new Set(current[question.id] || []);
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

      return { ...current, [question.id]: [...next].sort((a, b) => a - b) };
    });
  }

  function clearAll() {
    setAnswers({});
  }

  function jumpToFirstUnanswered() {
    const target = quizQuestions.find((question) => (answers[question.id] || []).length === 0);
    if (target) {
      document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="shell">
      <aside className="sidebar panel">
        <div className="brand">
          <span className="eyebrow">Quiz Studio</span>
          <h1>GitHub Mastery</h1>
          <div className="lede">
            A polished React quiz experience with progress memory, search, and a fast question navigator.
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>{quizQuestions.length}</strong>
            <span className="muted">total questions</span>
          </div>
          <div className="stat">
            <strong>{answeredCount}</strong>
            <span className="muted">answered</span>
          </div>
        </div>

        <div className="progress-wrap">
          <div className="progress-meta">
            <span>Progress</span>
            <strong>{progress}%</strong>
          </div>
          <div className="bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="navigator">
          {quizQuestions.map((question) => {
            const isAnswered = (answers[question.id] || []).length > 0;
            const isActive = visibleQuestions.some((item) => item.id === question.id);

            return (
              <button
                key={question.id}
                className={`nav-item ${isAnswered ? "answered" : ""} ${isActive ? "active" : ""}`}
                onClick={() => document.getElementById(question.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
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
          <button className="ghost" onClick={clearAll}>Reset</button>
        </div>
      </aside>

      <main className="main">
        <section className="hero panel">
          <div className="hero-grid">
            <div>
              <span className="eyebrow hero-eyebrow">Interactive Review</span>
              <h2>Study beautifully, move quickly.</h2>
              <p>
                Every answer you choose is saved locally in your browser. Search by keyword, focus on unanswered prompts,
                and jump through the full question bank without losing your place.
              </p>
            </div>
            <div className="hero-cards">
              <div className="hero-card">
                <strong>{multiCount}</strong>
                <span>multi-select questions</span>
              </div>
              <div className="hero-card">
                <strong>{quizQuestions.length - multiCount}</strong>
                <span>single-select questions</span>
              </div>
              <div className="hero-card">
                <strong>Auto-save</strong>
                <span>Selections persist in local storage</span>
              </div>
              <div className="hero-card">
                <strong>React SPA</strong>
                <span>Component-driven, ready for Vite</span>
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
              placeholder="Search questions, topics, or answer text"
            />
            <button className="primary" onClick={() => setAnsweredOnly((value) => !value)}>
              {answeredOnly ? "Show All Results" : "Show Answered Only"}
            </button>
          </div>

          <div className="filters">
            {[
              ["all", "All Questions"],
              ["unanswered", "Unanswered"],
              ["answered", "Answered"],
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

        <section className="questions">
          {visibleQuestions.length === 0 ? (
            <div className="results-empty">No questions match the current search and filter combination.</div>
          ) : (
            visibleQuestions.map((question, index) => {
              const selected = new Set(answers[question.id] || []);
              return (
                <article
                  key={question.id}
                  className="question"
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
                    <div className="choice-badge">
                      {question.choose > 1 ? `Choose ${question.choose}` : "Choose 1"}
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
                    <span>{question.options.length} options</span>
                  </div>
                </article>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}
