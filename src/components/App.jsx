import React, { useState } from 'react';
import Preloader from './components/Preloader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import SkillsBento from './components/SkillsBento.jsx';
import Projects from './components/Projects.jsx';
import WorkflowTimeline from './components/WorkflowTimeline.jsx';
import DesignShowcase from './components/DesignShowcase.jsx';
import DesignModal from './components/DesignModal.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedDesignIdx, setSelectedDesignIdx] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#111111] selection:bg-black selection:text-white">
      {/* Luxury Preloader Screen */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          <CustomCursor />
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          <main className="relative z-10 animate-fade-in">
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <About />
            <Experience />
            <Services />
            <SkillsBento />
            <Projects />
            <WorkflowTimeline />
            <DesignShowcase onSelectDesign={(idx) => setSelectedDesignIdx(idx)} />
            <FAQ />
            <Contact />
          </main>

          <Footer />

          {selectedDesignIdx !== null && (
            <DesignModal
              selectedIdx={selectedDesignIdx}
              onClose={() => setSelectedDesignIdx(null)}
              onNavigate={(newIdx) => setSelectedDesignIdx(newIdx)}
            />
          )}

          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </>
      )}
    </div>
  );
}
