import HUD from './components/HUD';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {

  return (
    <>
      <HUD />
      <div className="scanlines"></div>
      <div className="page mx-auto">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
