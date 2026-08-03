import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone, Mail, MessageSquare, Terminal, FileText, Sparkles, Layers } from 'lucide-react';

const roles = [
  "Solo Full Stack Developer",
  "React & Node.js Engineer",
  "Laravel & PHP Architect",
  "UI/UX Web Developer"
];

export default function Hero({ onOpenResume }) {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#FAFAFA]">
      
      {/* 1. Background Grid & Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-grid-lines opacity-60 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none z-0" />

      {/* 2. Soft Ambient Glowing Radial Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-neutral-300/40 via-neutral-200/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-neutral-200/30 rounded-full blur-2xl pointer-events-none z-0 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neutral-300/30 rounded-full blur-2xl pointer-events-none z-0 animate-float-reverse" />

      {/* 3. Floating Geometric Graphic Shapes */}
      {/* Top Left Floating Square */}
      <div className="absolute top-24 left-[8%] w-16 h-16 border border-neutral-300 rounded-2xl rotate-12 bg-white/50 backdrop-blur-sm shadow-sm pointer-events-none z-0 hidden lg:block animate-float-slow">
        <div className="w-full h-full flex items-center justify-center text-neutral-400">
          <Layers className="w-6 h-6" />
        </div>
      </div>

      {/* Top Right Floating Code Ring */}
      <div className="absolute top-28 right-[10%] w-20 h-20 border-2 border-dashed border-neutral-300 rounded-full bg-white/40 backdrop-blur-sm shadow-sm pointer-events-none z-0 hidden lg:block animate-float-reverse">
        <div className="w-full h-full flex items-center justify-center text-neutral-400">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom Floating Tech Box */}
      <div className="absolute bottom-20 left-[12%] w-14 h-14 border border-neutral-300 rounded-xl -rotate-6 bg-white/60 backdrop-blur-sm shadow-sm pointer-events-none z-0 hidden lg:block animate-float-slow">
        <div className="w-full h-full flex items-center justify-center text-neutral-400 font-mono text-xs font-bold">
          &lt;/&gt;
        </div>
      </div>

      {/* 4. High-Density Vector Constellation Polygon Mesh SVG */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-[0.14]" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <polygon points="50,60 280,220 50,420" fill="#EAEAEA" fillOpacity="0.8" stroke="#111111" strokeWidth="1" />
          <polygon points="280,220 500,120 440,460" fill="#EAEAEA" fillOpacity="0.6" stroke="#111111" strokeWidth="1" />
          <polygon points="440,460 280,220 180,620" fill="#EAEAEA" fillOpacity="0.4" stroke="#111111" strokeWidth="1" />
          <polygon points="500,120 780,240 680,60" fill="#EAEAEA" fillOpacity="0.7" stroke="#111111" strokeWidth="1" />
          <polygon points="780,240 920,500 680,440" fill="#EAEAEA" fillOpacity="0.5" stroke="#111111" strokeWidth="1" />
          
          <line x1="50" y1="420" x2="180" y2="620" stroke="#111111" strokeWidth="1" />
          <line x1="680" y1="440" x2="540" y2="680" stroke="#111111" strokeWidth="1" />
          
          <circle cx="50" cy="60" r="5" fill="#111111" />
          <circle cx="280" cy="220" r="6" fill="#111111" />
          <circle cx="500" cy="120" r="5.5" fill="#111111" />
          <circle cx="440" cy="460" r="6" fill="#111111" />
          <circle cx="780" cy="240" r="6" fill="#111111" />
          <circle cx="920" cy="500" r="5.5" fill="#111111" />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        
        {/* 1. Floating Availability Chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 border border-[#EAEAEA] rounded-full text-xs font-bold text-black shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[11px] uppercase tracking-wider text-black">
            Available for Hiring & Remote Projects
          </span>
        </motion.div>

        {/* 2. Primary Main Title: Prabhat Sagar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#111111] leading-none tracking-tighter">
            Prabhat Sagar
          </h1>
          <div className="pt-2">
            <span className="inline-block px-4.5 py-1.5 bg-[#111111] text-white text-[11px] font-mono font-bold uppercase tracking-[0.18em] rounded-full shadow-sm">
              Full Stack Software Developer • Agra, India
            </span>
          </div>
        </motion.div>

        {/* 3. Animated Role Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 flex items-center justify-center"
        >
          <div className="text-lg sm:text-2xl font-semibold text-[#5F6368] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-black shrink-0" />
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-black font-bold border-b-2 border-black pb-0.5"
            >
              {roles[roleIdx]}
            </motion.span>
          </div>
        </motion.div>

        {/* 4. Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#5F6368] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Independent Solo Full Stack Web Developer building responsive, scalable applications with React, Node.js, Express, PHP, Laravel, MySQL, and Tailwind CSS. Handling complete end-to-end execution from database design to live deployment.
        </motion.p>

        {/* 5. Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4" />
            <span>Get Resume</span>
          </button>

          <a
            href="https://wa.me/916398449403"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp: 6398449403</span>
          </a>

          <a
            href="tel:6398449403"
            className="px-6 py-3.5 bg-white border border-[#EAEAEA] hover:border-black text-[#111111] hover:text-black text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 6398449403</span>
          </a>
        </motion.div>

        {/* 6. Direct Email Callout */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border border-[#EAEAEA] rounded-lg text-xs font-mono font-bold text-[#5F6368] shadow-sm backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-black" />
            <span>Email:</span>
            <a href="mailto:prabhatsagar2408@gmail.com" className="text-black underline font-bold hover:text-neutral-700">
              prabhatsagar2408@gmail.com
            </a>
          </div>
        </div>

        {/* 7. Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-6 flex justify-center"
        >
          <a
            href="#about"
            className="p-2.5 border border-[#EAEAEA] rounded-full text-[#5F6368] hover:text-black hover:border-black transition-all animate-bounce bg-white shadow-sm"
            aria-label="Scroll Down"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
