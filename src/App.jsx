import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ProfileProvider, useProfile } from './context/ProfileContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import ProfileSelector from './components/ProfileSelector';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function AppContent() {
  const { profile } = useProfile();

  return (
    <AnimatePresence mode="wait">
      {!profile ? (
        <ProfileSelector key="selector" />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProfileProvider>
          <AppContent />
        </ProfileProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
