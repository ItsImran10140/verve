import Hero from "./components/Hero/Hero";
import MovingBanner from "./components/MovingBanner/MovingBanner";
import Section_Second from "./components/Section_2/Seaction_Header/Section_Second";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MovingBanner />
        <Section_Second />
      </main>
    </>
  );
}
