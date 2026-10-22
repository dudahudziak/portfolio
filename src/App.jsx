import FluidBackground from './components/FluidBackground/FluidBackground';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { sections } from './data/portfolio';
import useActiveSection from './hooks/useActiveSection';

export default function App() {
  // Descobre qual seção está visível para destacar o link no menu
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <>
      <FluidBackground />
      <Header sections={sections} active={active} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
