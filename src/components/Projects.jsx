import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, AlertCircle, Lightbulb, Sparkles, Layers } from 'lucide-react';
import { projectsData } from '../data/projects.js';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(projectsData[0].id);

  const selectedProject = projectsData.find(p => p.id === activeTab) || projectsData[0];

  return (
    <section id="projects" className="py-24 border-t border-[#EAEAEA] bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-50 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      {/* Floating Accent Shape */}
      <div className="absolute top-16 right-[6%] w-16 h-16 border border-neutral-300 rounded-2xl rotate-12 bg-white/70 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-400 animate-float-reverse">
        <Layers className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 block">
              // Portfolio Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Featured Full-Stack Work
            </h2>
          </div>

          {/* Project Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === project.id
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white border border-[#EAEAEA] text-[#5F6368] hover:text-black'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Showcase Frame */}
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-cursor-label="VIEW PROJECT"
          className="p-8 sm:p-12 bg-white border border-[#EAEAEA] rounded-3xl shadow-xl space-y-8 hover-scale-card project-card-wrap"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Browser Mockup Frame */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#FAFAFA] shadow-md group">
                <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] border-b border-[#EAEAEA]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  {selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-0.5 rounded text-[11px] font-mono bg-white border border-[#EAEAEA] text-black font-bold hover:border-black transition-all flex items-center gap-1"
                    >
                      <span>{selectedProject.liveDemo.replace('https://', '').replace('http://', '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-3 h-3 text-emerald-600" />
                    </a>
                  ) : (
                    <span className="px-3 py-0.5 rounded text-[11px] font-mono bg-white border border-[#EAEAEA] text-[#5F6368]">
                      {selectedProject.id}.app
                    </span>
                  )}
                </div>

                <a
                  href={selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? selectedProject.liveDemo : '#'}
                  target={selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block aspect-[16/10] w-full overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-4 py-2 bg-white text-black font-bold text-xs rounded-xl shadow-lg flex items-center gap-2">
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-4 h-4 text-emerald-600" />
                      </span>
                    </div>
                  )}
                </a>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5F6368] block mb-1">
                  {selectedProject.subtitle}
                </span>
                {selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group/title"
                  >
                    <h3 className="text-3xl font-extrabold text-[#111111] group-hover/title:text-emerald-600 transition-colors">
                      {selectedProject.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-[#5F6368] group-hover/title:text-emerald-600 transition-colors" />
                  </a>
                ) : (
                  <h3 className="text-3xl font-extrabold text-[#111111]">{selectedProject.title}</h3>
                )}
              </div>

              <p className="text-[#5F6368] text-sm leading-relaxed">{selectedProject.description}</p>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 gap-3 p-4 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl text-xs">
                <div>
                  <span className="font-bold text-amber-600 uppercase tracking-wider block mb-0.5">Problem:</span>
                  <p className="text-[#5F6368] leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div className="pt-2 border-t border-[#EAEAEA]">
                  <span className="font-bold text-emerald-600 uppercase tracking-wider block mb-0.5">Solution:</span>
                  <p className="text-[#5F6368] leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#F5F5F5] border border-[#EAEAEA] rounded-full text-xs font-semibold text-[#5F6368]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* External Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 hover:scale-[1.02]"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                  </a>
                )}
                <a
                  href={selectedProject.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white border border-[#EAEAEA] hover:border-black text-[#5F6368] hover:text-black text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
