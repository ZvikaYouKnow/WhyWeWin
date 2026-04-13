"use client";

import { useEffect, useState } from "react";
import SectionReveal from "./SectionReveal";
import Visual from "./Visuals";

interface Section {
  id: string;
  type: string;
  [key: string]: unknown;
}

export default function Deck({ sections }: { sections: Section[] }) {
  const ids = sections.map((s) => s.id);
  const [current, setCurrent] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = ids.indexOf(e.target.id);
            if (idx !== -1) setCurrent(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  // Keyboard nav
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      let next = current;
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "j" || e.key === " ") {
        e.preventDefault();
        next = Math.min(current + 1, ids.length - 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "k") {
        e.preventDefault();
        next = Math.max(current - 1, 0);
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = ids.length - 1;
      }
      if (next !== current) {
        setCurrent(next);
        document.getElementById(ids[next])?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [current, ids]);

  return (
    <main className="relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-zinc-900/80">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-400 transition-all duration-500"
          style={{ width: `${((current + 1) / ids.length) * 100}%` }}
        />
      </div>

      {/* Counter */}
      <div className="fixed bottom-6 right-6 z-50 text-xs text-zinc-600 font-mono tabular-nums">
        {String(current + 1).padStart(2, "0")} / {String(ids.length).padStart(2, "0")}
      </div>

      {/* Keyboard hint */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 backdrop-blur border border-zinc-800 text-xs text-zinc-500 transition-all duration-700 ${showHint ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-400 font-mono text-[10px]">\u2191\u2193</kbd>
        navigate
      </div>

      {/* Dot nav */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {ids.map((id, i) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center justify-end gap-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${current === i ? "bg-indigo-400 scale-150" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
          </button>
        ))}
      </nav>

      {/* Slides */}
      {sections.map((section) => {
        switch (section.type) {
          case "hero":
            return <HeroSlide key={section.id} data={section} />;
          case "statement":
            return <StatementSlide key={section.id} data={section} />;
          case "visual":
            return <VisualSlide key={section.id} data={section} />;
          case "flow":
            return <FlowSlide key={section.id} data={section} />;
          case "contrast":
            return <ContrastSlide key={section.id} data={section} />;
          case "closing":
            return <ClosingSlide key={section.id} data={section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}

/* \u2500\u2500\u2500 Slide types \u2500\u2500\u2500 */

function HeroSlide({ data }: { data: Section }) {
  return (
    <section id={data.id} className="min-h-screen flex items-center justify-center px-6 relative grid-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-3xl text-center">
        <SectionReveal>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-4">
            <span className="gradient-text">{data.title as string}</span>
          </h1>
        </SectionReveal>
        <SectionReveal>
          <p className="text-2xl sm:text-3xl text-zinc-400 font-light tracking-wide mb-12">
            {data.subtitle as string}
          </p>
        </SectionReveal>
        <SectionReveal>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
            {data.body as string}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function StatementSlide({ data }: { data: Section }) {
  return (
    <section id={data.id} className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <SectionReveal>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-6 block">
            {data.label as string}
          </span>
        </SectionReveal>
        <SectionReveal>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            {data.headline as string}
          </h2>
        </SectionReveal>
        <SectionReveal>
          <p className="text-xl text-zinc-500 max-w-lg mx-auto">
            {data.body as string}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function VisualSlide({ data }: { data: Section }) {
  return (
    <section id={data.id} className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionReveal>
            <span className="text-xs font-mono text-indigo-400/60 mb-4 block">{data.label as string}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              {data.headline as string}
            </h2>
          </SectionReveal>
          <SectionReveal>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-md">
              {data.body as string}
            </p>
          </SectionReveal>
        </div>
        <SectionReveal>
          <div className="flex justify-center">
            <Visual name={data.visual as string} className="w-full max-w-[400px] h-auto" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function FlowSlide({ data }: { data: Section }) {
  const steps = data.steps as string[];
  return (
    <section id={data.id} className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full text-center">
        <SectionReveal>
          <span className="text-xs font-mono text-indigo-400/60 mb-4 block">{data.label as string}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16">
            {data.headline as string}
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-16">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border transition-all ${
                    i === steps.length - 1
                      ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300"
                      : "bg-zinc-900/50 border-zinc-800 text-zinc-400"
                  }`}>
                    <span className="text-xs sm:text-sm font-semibold">{step}</span>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-700 shrink-0">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <p className="text-xl text-zinc-500 max-w-lg mx-auto italic">
            {data.body as string}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function ContrastSlide({ data }: { data: Section }) {
  const them = data.them as string[];
  return (
    <section id={data.id} className="min-h-screen flex items-center px-6 py-24 relative">
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto w-full">
        <SectionReveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-16">
            <span className="gradient-text">{data.headline as string}</span>
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
              <span className="text-xs text-zinc-600 uppercase tracking-wider font-semibold">Others</span>
              <div className="mt-6 space-y-4">
                {them.map((item) => (
                  <p key={item} className="text-2xl text-zinc-600 line-through decoration-zinc-800">{item}</p>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 glow">
              <span className="text-xs text-indigo-400 uppercase tracking-wider font-semibold">YouKnow</span>
              <p className="mt-6 text-2xl sm:text-3xl text-white font-semibold leading-snug">
                {data.us as string}
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="border-l-2 border-indigo-500/30 pl-6">
            <p className="text-xl text-indigo-300 font-medium">{data.principle as string}</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ClosingSlide({ data }: { data: Section }) {
  return (
    <section id={data.id} className="min-h-[80vh] flex items-center justify-center px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xl sm:text-2xl text-zinc-500 mb-8 leading-relaxed">
            {data.body as string}
          </p>
        </SectionReveal>
        <SectionReveal>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug">
            <span className="gradient-text">{data.emphasis as string}</span>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
