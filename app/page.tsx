import Hero from "./components/Hero/Hero";
import MovingBanner from "./components/MovingBanner/MovingBanner";
import Section_Second from "./components/Section_2/Seaction_Header/Section_Second";
import Third_Section from "./components/Third_Section/Third_Section";
import Forth_Section from "./components/Forth_Section/Forth_Section";
import FifthSection from "./components/Fifth-Section/FifthSection";
import Sixth_Section from "./components/Sixth_Section/Sixth_Section";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MovingBanner />
        <Section_Second />
        <Third_Section />
        <Forth_Section />
        <FifthSection />
        <Sixth_Section />
        <Footer />
      </main>
    </>
  );
}
