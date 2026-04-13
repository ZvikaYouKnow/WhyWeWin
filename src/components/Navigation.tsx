"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  number?: number;
  title: string;
  type: string;
}

export default function Navigation({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActive(top.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={`group flex items-center gap-3 px-3 py-1.5 rounded-lg border border-transparent transition-all duration-300 ${
            active === s.id ? "nav-active" : "hover:bg-zinc-800/50"
          }`}
          aria-label={`Navigate to ${s.title}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              active === s.id
                ? "bg-accent scale-125"
                : "bg-zinc-600 group-hover:bg-zinc-400"
            }`}
          />
          <span
            className={`text-xs font-medium transition-all duration-300 max-w-0 overflow-hidden group-hover:max-w-[200px] whitespace-nowrap ${
              active === s.id
                ? "max-w-[200px] text-accent-light"
                : "text-zinc-500 group-hover:text-zinc-300"
            }`}
          >
            {s.type === "hero"
              ? "Intro"
              : s.type === "closing"
                ? "Bottom line"
                : s.number
                  ? `${s.number}. ${s.title.split("\u2014")[0].trim()}`
                  : s.title}
          </span>
        </button>
      ))}
    </nav>
  );
}
