import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Sparkles, MapPin, CheckCircle, Award, Layers, ExternalLink } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Solo Full Stack Web Developer",
      company: "Independent Freelance Engineer · Agra / Remote · India",
      period: "2023 - Present",
      summary: "Engineered full-stack web applications independently for client and personal projects using React, Node.js, Express, PHP, Laravel, Tailwind CSS, and MySQL. Handled the entire product lifecycle from Figma mockups to database design, REST APIs, Razorpay payments, and server hosting.",
      projects: [
        { name: "Roast & Brews", desc: "Live Craft Coffee E-Commerce & ordering (React & Node.js).", link: "https://roastbrews.shop/" },
        { name: "Astha Animation Institute", desc: "Live client portal with dynamic courses, forms & schedule.", link: "https://asthaanimation.com/" },
        { name: "MockPros", desc: "NET exam platform with timed tests & admin dashboard.", link: "https://mockpros.com/" },
        { name: "Dressly", desc: "Fashion E-commerce platform with Razorpay checkout & stock sync.", link: "#" }
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science (Hons.), Mathematics",
      institution: "Agra College, Agra",
      status: "In Progress"
    },
    {
      degree: "Web Development Course",
      institution: "Astha Animation Institute",
      status: "Completed"
    },
    {
      degree: "Higher Secondary (12th), Science (PCM)",
      institution: "Agra, Uttar Pradesh",
      status: "2023–2024 Completed"
    }
  ];

  const aiTools = ["Claude", "GPT", "Claude Code", "Cursor", "Codex", "Antigravity"];

  return (
    <section id="experience" className="py-24 border-t border-[#EAEAEA] bg-white relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-neutral-100 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-neutral-200/40 rounded-full blur-3xl pointer-events-none z-0 animate-float-reverse" />

      {/* Floating Accent Shape */}
      <div className="absolute top-16 right-[10%] w-16 h-16 border-2 border-dashed border-neutral-300 rounded-2xl rotate-12 bg-white/60 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-400 animate-float-slow">
        <Briefcase className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 block">
              // Background & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Experience & Education
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 p-1.5 bg-[#F5F5F5] border border-[#EAEAEA] rounded-2xl w-max shadow-sm">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'experience'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#5F6368] hover:text-black'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'education'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#5F6368] hover:text-black'
              }`}
            >
              Education & AI
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="exp"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-8 bg-[#FAFAFA] border border-[#EAEAEA] rounded-3xl shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAEAEA] pb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111111]">{exp.title}</h3>
                      <p className="text-xs font-bold text-[#5F6368] uppercase tracking-wider mt-0.5">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-white border border-[#EAEAEA] text-xs font-mono font-bold rounded-lg text-black w-max">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[#5F6368] text-sm leading-relaxed">{exp.summary}</p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-black block">Featured Projects Delivered:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exp.projects.map((p, pIdx) => {
                        const isExternal = p.link && p.link !== '#';
                        return (
                          <a
                            key={pIdx}
                            href={p.link || '#'}
                            target={isExternal ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`p-4 bg-white border border-[#EAEAEA] rounded-2xl shadow-sm transition-all block ${
                              isExternal ? 'hover:border-black hover:shadow-md group' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <strong className="text-xs font-bold text-black group-hover:text-emerald-600 transition-colors">
                                {p.name}
                              </strong>
                              {isExternal && <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-600 transition-colors" />}
                            </div>
                            <p className="text-[11px] text-[#5F6368] leading-normal">{p.desc}</p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="edu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Education Cards */}
              <div className="lg:col-span-7 space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-[#111111]">{edu.degree}</h4>
                      <p className="text-xs text-[#5F6368] font-medium">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-white border border-[#EAEAEA] text-[11px] font-bold uppercase rounded-lg text-black shrink-0">
                      {edu.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* AI & Tools Card */}
              <div className="lg:col-span-5 p-8 bg-[#0A0A0A] text-white rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">AI Agents & Workflow Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {aiTools.map((tool) => (
                      <span key={tool} className="px-3 py-1.5 bg-[#1C1C1C] border border-neutral-800 rounded-xl text-xs font-bold text-white">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>Location: <strong>Agra, UP, India</strong></span>
                  <span>Hindi & English</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
