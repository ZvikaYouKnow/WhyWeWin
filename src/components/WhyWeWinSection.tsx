import SectionReveal from "./SectionReveal";
import SectionIcon from "./SectionIcon";

interface WhyData {
  id: string;
  title: string;
  body: string[];
  competitors: {
    heading: string;
    items: string[];
  };
  us: {
    heading: string;
    value: string;
  };
  pillars: string[];
  principle: string;
}

export default function WhyWeWinSection({ data }: { data: WhyData }) {
  return (
    <section
      id={data.id}
      className="relative min-h-screen flex items-center py-32 px-6"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        <SectionReveal>
          <div className="flex items-center gap-5 mb-6">
            <SectionIcon sectionId={data.id} className="w-12 h-12 text-indigo-400" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">{data.title}</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-16">
            {data.body[0]}
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Competitors */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {data.competitors.heading}
              </h3>
              <ul className="space-y-3">
                {data.competitors.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-zinc-500 text-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Us */}
            <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 glow">
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
                {data.us.heading}
              </h3>
              <p className="text-2xl font-semibold text-white leading-snug">
                {data.us.value}
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
              YouKnow
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.pillars.map((pillar, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="relative pl-6 border-l-2 border-indigo-500/40">
            <p className="text-xl text-indigo-300 font-medium">
              With one core principle:
            </p>
            <p className="text-2xl text-white font-semibold mt-2">
              {data.principle}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
