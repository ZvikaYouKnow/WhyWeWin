"use client";

import { useEffect, useState } from "react";

export default function KeyboardNav({
  sectionIds,
}: {
  sectionIds: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      let nextIndex = currentIndex;

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "j":
        case " ":
          e.preventDefault();
          nextIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "k":
          e.preventDefault();
          nextIndex = Math.max(currentIndex - 1, 0);
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = sectionIds.length - 1;
          break;
        default:
          return;
      }

      if (nextIndex !== currentIndex) {
        setCurrentIndex(nextIndex);
        document
          .getElementById(sectionIds[nextIndex])
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, sectionIds]);

  return (
    <>
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded-full text-xs text-zinc-400 transition-all duration-700 ${
          showHint
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300 font-mono">
            \u2191
          </kbd>
          <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300 font-mono">
            \u2193
          </kbd>
        </span>
        <span>Navigate sections</span>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-zinc-900">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out"
          style={{
            width: `${((currentIndex + 1) / sectionIds.length) * 100}%`,
          }}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-50 text-xs text-zinc-600 font-mono">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(sectionIds.length).padStart(2, "0")}
      </div>
    </>
  );
}
