import SectionReveal from "./SectionReveal";

interface Column {
  heading: string;
  items: string[];
}

interface FeatureData {
  id: string;
  number: number;
  title: string;
  body: string[];
  columns: Column[];
  callout: string;
}

export default function FeatureSection({ data }: { data: FeatureData }) {
  return (
    <section
      id={data.id}
      className="relative min-h-screen flex items-center py-32 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-mono font-bold">
              {String(data.number).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
          </div>
        </SectionReveal>

        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            {data.title}
          </h2>
        </SectionReveal>

        <div className="mb-12">
          {data.body.map((paragraph, i) => (
            <SectionReveal key={i}>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-3">
                {paragraph}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div
            className={`grid gap-6 mb-12 ${
              data.columns.length > 1
                ? "md:grid-cols-2"
                : "md:grid-cols-1 max-w-2xl"
            }`}
          >
            {data.columns.map((col, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="relative pl-6 border-l-2 border-indigo-500/30">
            <p className="text-lg text-zinc-300 italic font-light">
              {data.callout}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
