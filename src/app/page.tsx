import deck from "@/data/deck.json";
import Deck from "@/components/Deck";

export default function Home() {
  return <Deck sections={deck.sections} />;
}
