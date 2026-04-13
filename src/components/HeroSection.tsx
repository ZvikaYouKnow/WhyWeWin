import SectionReveal from "./SectionReveal";

interface HeroData {
  id: string;
  title: string;
  subtitle: string;
  body: string[];
}

export default function HeroSection({ data }: { data: HeroData }) {
  return (
    <section
      id={data.id}
      className="relative min-h-screen flex items-center justify-center px-6 grid-bg"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Pitch Deck
          </div>
        </SectionReveal>

        <SectionReveal>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{data.title}</span>
          </h1>
        </SectionReveal>

        <SectionReveal>
          <p className="text-xl sm:text-2xl text-zinc-400 font-light mb-16 tracking-wide">
            {data.subtitle}
          </p>
        </SectionReveal>

        <div className="max-w-2xl mx-auto space-y-6">
          {data.body.map((paragraph, i) => (
            <SectionReveal key={i}>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  i === 1
                    ? "text-indigo-300 font-medium text-lg sm:text-xl"
                    : "text-zinc-400"
                }`}
              >
                {paragraph}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="mt-20 flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
