import { LanguageProvider } from './hooks/useLanguage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Certificates } from './sections/Certificates';
import { Activities } from './sections/Activities';
import { AnnualActivity } from './sections/AnnualActivity';
import { Contact } from './sections/Contact';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Activities />
        <AnnualActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
}

export default App;
