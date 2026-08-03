import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Layout, Image, PenTool, Sparkles, CheckCircle2, ArrowUpRight, Layers, Figma } from 'lucide-react';

export default function DesignShowcase() {
  const [activeTab, setActiveTab] = useState('all');

  const capabilities = [
    {
      id: "figma",
      tool: "Figma (UI/UX)",
      badge: "UI/UX & Wireframing",
      level: "Intermediate",
      icon: Layout,
      color: "from-purple-500/10 to-indigo-500/0 text-purple-600 border-purple-200",
      description: "Crafting clean web & mobile interface layouts, responsive wireframes, and interactive component design systems in Figma.",
      features: [
        "Low & High-Fidelity Web Wireframes",
        "Responsive Grid Layout Systems",
        "Atomic UI Component Libraries",
        "Interactive Clickable Prototypes"
      ]
    },
    {
      id: "photoshop",
      tool: "Photoshop (Adobe PS)",
      badge: "Graphics & Retouching",
      level: "Intermediate",
      icon: Image,
      color: "from-blue-500/10 to-cyan-500/0 text-blue-600 border-blue-200",
      description: "Editing product photography, background removals, e-commerce promotional banners, and optimizing web image assets.",
      features: [
        "E-Commerce Product Banner Compositions",
        "Precision Image Editing & Retouching",
        "Background Removal & Cutouts",
        "Web Media Compression & Optimization"
      ]
    },
    {
      id: "illustrator",
      tool: "Illustrator (Adobe AI)",
      badge: "Vector & Brand Assets",
      level: "Intermediate",
      icon: PenTool,
      color: "from-amber-500/10 to-orange-500/0 text-amber-600 border-amber-200",
      description: "Designing crisp vector logos, custom SVG icons, and scalable graphics that look sharp on high-DPI retina displays.",
      features: [
        "Scalable Vector Logos & Marks",
        "Custom SVG Icon Sets",
        "Brand Identity Assets",
        "High-DPI Resolution Graphics"
      ]
    },
    {
      id: "designsystem",
      tool: "UI Design Systems",
      badge: "Tokens & Typography",
      level: "Intermediate",
      icon: Palette,
      color: "from-emerald-500/10 to-teal-500/0 text-emerald-600 border-emerald-200",
      description: "Establishing cohesive color palettes, high-contrast typography hierarchies, dark mode tokens, and accessible WCAG contrast ratios.",
      features: [
        "Tailwind CSS v4 Token Architecture",
        "High-Contrast Typography Systems",
        "Dark & Light Mode Palette Tokens",
        "Smooth Micro-Animations & Motion"
      ]
    }
  ];

  const filteredCapabilities = activeTab === 'all'
    ? capabilities
    : capabilities.filter(c => c.id === activeTab || c.tool.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="design" className="py-24 border-t border-[#EAEAEA] bg-white relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-neutral-100 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      {/* Floating Accent Shape */}
      <div className="absolute top-12 right-[8%] w-16 h-16 border border-neutral-300 rounded-2xl rotate-12 bg-white/70 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-400 animate-float-slow">
        <Palette className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 block">
              // Visual & UI Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Design & UI Engineering Workflow
            </h2>
          </div>

          {/* Tool Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Design Tools' },
              { id: 'figma', label: 'Figma (UI/UX)' },
              { id: 'photoshop', label: 'Photoshop (PS)' },
              { id: 'illustrator', label: 'Illustrator (AI)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-[#F5F5F5] border border-[#EAEAEA] text-[#5F6368] hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Design Capabilities Bento Grid - 2x2 on Mobile */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12">
          <AnimatePresence>
            {filteredCapabilities.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className={`p-4 sm:p-8 bg-gradient-to-br ${item.color} bg-white border border-[#EAEAEA] rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:border-black transition-all flex flex-col justify-between group backdrop-blur-sm relative overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-6">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white border border-[#EAEAEA] text-[9px] sm:text-[11px] font-mono font-bold text-black uppercase tracking-wider rounded-md sm:rounded-lg shadow-2xs">
                        {item.level}
                      </span>
                    </div>

                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#5F6368] block mb-0.5 sm:mb-1 truncate">
                      {item.badge}
                    </span>
                    <h3 className="text-sm sm:text-2xl font-extrabold text-[#111111] mb-1.5 sm:mb-3 leading-snug">{item.tool}</h3>
                    <p className="text-[#5F6368] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 font-medium line-clamp-3 sm:line-clamp-none">{item.description}</p>

                    <div className="space-y-1.5 sm:space-y-2 pt-2.5 sm:pt-4 border-t border-[#F5F5F5]">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-black block mb-1 sm:mb-2">
                        Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#5F6368]">
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="p-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="text-xs font-bold text-[#111111]">
              Combining UI/UX Design tools with clean React & Tailwind CSS code for seamless product execution.
            </span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 bg-black text-white rounded-xl text-xs font-bold shrink-0 hover:bg-neutral-800 transition-colors"
          >
            Discuss Project
          </a>
        </div>

      </div>
    </section>
  );
}

