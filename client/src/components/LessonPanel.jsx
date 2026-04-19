import { useEffect, useState } from "react";
import { lessonReactions } from "../data/mockData";

export function LessonPanel({ lesson, onComplete, planets, onSelectLesson }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [reaction, setReaction] = useState("");

  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
    setReaction("");
  }, [lesson.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = lesson.quiz.reduce(
      (total, question) => total + Number(answers[question.id] === question.answer),
      0
    );
    const pool = score === lesson.quiz.length ? lessonReactions.perfect : lessonReactions.good;
    setReaction(pool[Math.floor(Math.random() * pool.length)]);
    setSubmitted(true);
    onComplete(score === lesson.quiz.length ? lesson.rewardXp : Math.round(lesson.rewardXp * 0.65));
  };

  const score = lesson.quiz.reduce(
    (total, question) => total + Number(answers[question.id] === question.answer),
    0
  );

  return (
    <section className="glass-card hover-lift overflow-hidden">
      <div className="border-b border-white/10 p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">Маршрут уроков</p>
            <h3 className="mt-2 font-display text-xl text-white sm:text-2xl">7 планет по 10 занятий</h3>
          </div>
          <div className="max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 sm:text-sm">
            Сейчас открыт: {lesson.title}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {planets.map((planet) => {
            const level = planet.levels[0];
            const isActive = level.id === lesson.id;

            return (
              <button
                key={planet.id}
                type="button"
                onClick={() => onSelectLesson(level.id)}
                className={`rounded-[1.4rem] border p-4 text-left transition ${
                  isActive
                    ? "border-cyanGlow/40 bg-cyanGlow/10 text-white shadow-neon"
                    : "border-white/10 bg-white/[0.03] text-slate-200 hover:border-pinkGlow/30 hover:bg-white/5"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{planet.orbit}</p>
                <p className="mt-2 font-display text-lg">{planet.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{planet.theme}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">Текущий урок</p>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl">{lesson.title}</h3>
          <div className="mt-6 rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-pinkGlow">Теория</p>
            <div className="mt-4 space-y-4 text-slate-300">
              {lesson.theory.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-[1.7rem] border border-cyanGlow/20 bg-cyanGlow/10 p-5 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.24em] text-cyanGlow">{lesson.videoTitle}</p>
            <div className="mt-4 flex min-h-[180px] items-center justify-center rounded-[1.4rem] border border-white/10 bg-black/30 p-4 text-center text-slate-300 sm:p-6">
              {lesson.videoPlaceholder}
            </div>
          </div>
          <div className="mt-4 rounded-[1.7rem] border border-pinkGlow/20 bg-pinkGlow/10 p-4 text-sm text-slate-200">
            Награда за этап эволюции:{" "}
            <span className="font-semibold text-white">{lesson.rewardXp} XP</span>
          </div>
          <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
            На этой планете: <span className="font-semibold text-white">{lesson.quiz.length} вопроса</span> для закрепления после теории.
          </div>
          <div className="mt-4 rounded-[1.7rem] border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
            Простыми словами: {lesson.theory[0]}
          </div>
        </div>
        <div className="min-h-[220px] bg-cover bg-center sm:min-h-[280px]" style={{ backgroundImage: `url(${lesson.image})` }} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-white/10 p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-pinkGlow">Закрепление материала</p>
          <h4 className="mt-2 font-display text-2xl text-white">Вопросы после теории</h4>
        </div>
        <div className="space-y-6">
          {lesson.quiz.map((question, index) => (
            <div key={question.id} className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="font-medium text-white">
                {index + 1}. {question.question}
              </p>
              <div className="mt-4 grid gap-3">
                {question.options.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 px-4 py-3 transition hover:border-cyanGlow/30 hover:bg-white/5"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => setAnswers({ ...answers, [question.id]: option })}
                    />
                    <span className="leading-6">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-2xl bg-gradient-to-r from-cyan-400 to-pinkGlow px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Завершить занятие
          </button>
          {submitted && (
            <div className="rounded-2xl border border-cyanGlow/20 bg-cyanGlow/10 px-4 py-3 text-sm text-slate-200">
              <p>
                Результат: {score}/{lesson.quiz.length}. XP начислен.
              </p>
              <p className="mt-1 text-cyanGlow">{reaction}</p>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
