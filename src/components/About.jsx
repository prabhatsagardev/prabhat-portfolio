import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2, Zap, Layers, GraduationCap, MapPin, UserCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "React & Node.js Ecosystem",
      desc: "Building interactive frontend interfaces with React and fast RESTful APIs using Node.js & Express."
    },
    {
      title: "PHP & Laravel Full-Stack",
      desc: "Architecting robust backend web apps with MVC structure, session auth, and MySQL database engines."
    },
    {
      title: "Database & Payment Systems",
      desc: "Designing normalized schemas, REST APIs, and integrating Razorpay payment gateways for checkout flows."
    },
    {
      title: "Solo End-to-End Execution",
      desc: "Managing the entire lifecycle independently—from UI/UX wireframes to backend logic and live server hosting."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0A0A0A] text-white border-y border-neutral-900 relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-neutral-800/30 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none z-0 animate-float-reverse" />

      {/* Floating Accent Shapes */}
      <div className="absolute top-12 right-[8%] w-16 h-16 border border-neutral-800 rounded-2xl rotate-12 bg-white/5 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-600 animate-float-slow">
        <Layers className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
            // ABOUT ME & SOLO ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-snug sm:leading-tight tracking-tight">
            Full Stack Developer combining mathematical logic with React, Node & modern web tools.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Main Bio Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              <p>
                Hi, I'm <strong className="text-white font-bold">Prabhat Sagar</strong>, an independent <strong className="text-white font-bold">Solo Full Stack Developer</strong> based in <strong className="text-white font-bold">Agra, Uttar Pradesh, India</strong>. Currently pursuing my <strong className="text-white font-bold">B.Sc. (Hons.) in Mathematics</strong> at Agra College, I apply mathematical logic and problem-solving to build high-performance software.
              </p>
              <p>
                I work independently without agency overhead, taking full ownership of every project from start to finish. My tech stack spans <span className="text-emerald-400 font-semibold">React, Node.js, Express, PHP, Laravel, JavaScript, Tailwind CSS, MongoDB and MySQL</span>.
              </p>
              <p>
                Whether developing client portals like <strong className="text-white">Astha Animation Institute</strong>, e-commerce applications like <strong className="text-white">Dressly</strong>, or online examination platforms like <strong className="text-white">MockPros</strong>, I handle design, frontend, backend API architecture, and server deployment solo with fast turnaround times.
              </p>
            </div>

            {/* Editorial Quote Box */}
            <div
              data-cursor-label="ABOUT ME"
              className="p-4 sm:p-6 bg-[#141414] border border-neutral-800 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-3 shadow-xl relative overflow-hidden hover-scale-card"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500/80" />
              <p className="text-neutral-200 text-xs sm:text-base leading-relaxed font-medium italic">
                "Working as a solo full-stack engineer means direct communication, zero agency friction, and complete end-to-end accountability for code quality and project speed."
              </p>
              <div className="pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-[11px] sm:text-xs text-neutral-400">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  Prabhat Sagar (Solo Developer)
                </span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" /> Agra, Uttar Pradesh
                </span>
              </div>
            </div>

            {/* Quick Fact Grid - Mobile Optimized 3 Columns */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              <div data-cursor-label="B.SC MATHS" className="p-3 sm:p-4 bg-[#121212] border border-neutral-800 rounded-xl sm:rounded-2xl hover-scale-card text-center sm:text-left">
                <GraduationCap className="w-4 h-4 text-emerald-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[9px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Degree</span>
                <span className="text-[11px] sm:text-xs font-bold text-white block mt-0.5 leading-tight">B.Sc Maths</span>
              </div>
              <div data-cursor-label="LOCATION" className="p-3 sm:p-4 bg-[#121212] border border-neutral-800 rounded-xl sm:rounded-2xl hover-scale-card text-center sm:text-left">
                <MapPin className="w-4 h-4 text-blue-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[9px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Location</span>
                <span className="text-[11px] sm:text-xs font-bold text-white block mt-0.5 leading-tight">Agra, India</span>
              </div>
              <div data-cursor-label="FOR HIRE" className="p-3 sm:p-4 bg-[#121212] border border-neutral-800 rounded-xl sm:rounded-2xl hover-scale-card text-center sm:text-left">
                <UserCheck className="w-4 h-4 text-amber-400 mb-1 mx-auto sm:mx-0" />
                <span className="text-[9px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Status</span>
                <span className="text-[11px] sm:text-xs font-bold text-white block mt-0.5 leading-tight">Freelance</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Highlights & Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            <div className="p-5 sm:p-8 bg-[#121212] border border-neutral-800 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3.5 sm:pb-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                  <span>Core Expertise & Value</span>
                </h3>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-mono font-bold uppercase rounded-md">
                  React & Node
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {highlights.map((h, idx) => (
                  <div key={idx} data-cursor-label="CAPABILITY" className="p-3.5 sm:p-4 bg-[#1A1A1A] border border-neutral-800/90 rounded-xl sm:rounded-2xl space-y-1 hover-scale-card">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                      <strong className="text-xs sm:text-xs font-bold text-white">{h.title}</strong>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 pl-5.5 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stat Badges - Mobile Optimized 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="p-3 sm:p-4 bg-[#1A1A1A] border border-neutral-800 rounded-xl sm:rounded-2xl text-center">
                  <span className="text-xl sm:text-3xl font-black text-white block">05+</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Live Projects</span>
                </div>
                <div className="p-3 sm:p-4 bg-[#1A1A1A] border border-neutral-800 rounded-xl sm:rounded-2xl text-center flex flex-col justify-center items-center">
                  <span className="text-xs sm:text-base font-black text-white block leading-tight">React & Node</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-neutral-400 tracking-wider mt-0.5">Full Stack</span>
                </div>
                <div className="p-3 sm:p-4 bg-[#1A1A1A] border border-neutral-800 rounded-xl sm:rounded-2xl text-center">
                  <span className="text-xl sm:text-3xl font-black text-emerald-400 block">100%</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Clean Code</span>
                </div>
                <div className="p-3 sm:p-4 bg-[#1A1A1A] border border-neutral-800 rounded-xl sm:rounded-2xl text-center">
                  <span className="text-xl sm:text-3xl font-black text-amber-400 block">Fast</span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Turnaround</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



