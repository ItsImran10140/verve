import Hero from "./components/Hero/Hero";
import MovingBanner from "./components/MovingBanner/MovingBanner";
import Section_Second from "./components/Section_2/Seaction_Header/Section_Second";
import Third_Section from "./components/Third_Section/Third_Section";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MovingBanner />
        <Section_Second />
        <Third_Section />
      </main>
    </>
  );
}
