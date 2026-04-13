import SectionReveal from "./SectionReveal";
import SectionIcon from "./SectionIcon";

interface ClosingData {
  id: string;
  title: string;
  body: string;
  emphasis: string;
}

export default function ClosingSection({ data }: { data: ClosingData }) {
  return (
    <section
      id={data.id}
      className="relative min-h-[70vh] flex items-center justify-center py-32 px-6"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <SectionReveal>
          <div className="flex justify-center mb-8">
            <SectionIcon sectionId={data.id} className="w-12 h-12 text-indigo-400" />
          </div>
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-12">
            {data.title}
          </h2>
        </SectionReveal>

        <SectionReveal>
          <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed mb-8">
            {data.body}
          </p>
        </SectionReveal>

        <SectionReveal>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug">
            <span className="gradient-text">{data.emphasis}</span>
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-16 flex justify-center gap-8 text-zinc-600 text-sm">
            <span className="font-mono">youknow.ai</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
