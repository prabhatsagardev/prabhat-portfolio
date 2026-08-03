import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel-light py-3.5 shadow-sm border-b border-[#EAEAEA]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Minimalist Logo */}
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Prabhat Sagar Homepage">
            <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-display font-extrabold text-sm transition-transform duration-300 group-hover:scale-105 shadow-sm">
              P
            </span>
            <span className="font-display font-black text-black tracking-tight text-sm uppercase">
              Prabhat Sagar
            </span>
          </a>

          {/* Clean Essential Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors underline-hover ${
                    isActive ? 'text-black' : 'text-[#5F6368] hover:text-black'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Single Essential Action Button: Get Resume */}
          <div className="hidden sm:block">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#5F6368] hover:text-black transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white/98 z-50 flex flex-col justify-between p-8 backdrop-blur-xl animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-display font-extrabold text-sm">
                P
              </span>
              <span className="font-display font-black text-black tracking-tight text-base">Prabhat Sagar</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#5F6368] hover:text-black transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-center py-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-[#111111] hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 bg-black text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Get Resume</span>
            </button>
            <p className="text-xs text-[#5F6368]">prabhatsagar2408@gmail.com · +91 6398449403</p>
          </div>
        </div>
      )}
    </>
  );
}
