import deck from "@/data/deck.json";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import WhyWeWinSection from "@/components/WhyWeWinSection";
import ClosingSection from "@/components/ClosingSection";
import Navigation from "@/components/Navigation";
import KeyboardNav from "@/components/KeyboardNav";

export default function Home() {
  const sectionIds = deck.sections.map((s) => s.id);
  const navSections = deck.sections.map((s) => ({
    id: s.id,
    number: "number" in s ? (s.number as number) : undefined,
    title: s.title,
    type: s.type,
  }));

  return (
    <main className="relative">
      <Navigation sections={navSections} />
      <KeyboardNav sectionIds={sectionIds} />

      {deck.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return (
              <HeroSection
                key={section.id}
                data={
                  section as {
                    id: string;
                    type: string;
                    title: string;
                    subtitle: string;
                    body: string[];
                  }
                }
              />
            );
          case "feature":
            return (
              <FeatureSection
                key={section.id}
                data={
                  section as {
                    id: string;
                    type: string;
                    number: number;
                    title: string;
                    body: string[];
                    columns: { heading: string; items: string[] }[];
                    callout: string;
                  }
                }
              />
            );
          case "why":
            return (
              <WhyWeWinSection
                key={section.id}
                data={
                  section as {
                    id: string;
                    type: string;
                    title: string;
                    body: string[];
                    competitors: { heading: string; items: string[] };
                    us: { heading: string; value: string };
                    pillars: string[];
                    principle: string;
                  }
                }
              />
            );
          case "closing":
            return (
              <ClosingSection
                key={section.id}
                data={
                  section as {
                    id: string;
                    type: string;
                    title: string;
                    body: string;
                    emphasis: string;
                  }
                }
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
