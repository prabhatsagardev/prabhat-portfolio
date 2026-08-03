import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Layout, Database, Wrench, Sparkles, Terminal, Code2, Layers, 
  Cpu, Globe, GitBranch, Zap, Send, Cloud, Palette, Box, Bot, Star
} from 'lucide-react';

export default function SkillsBento() {
  const [activeTab, setActiveTab] = useState('all');

  const skillsList = [
    { name: "React", category: "frontend", level: "Expert", icon: Code2, color: "from-cyan-500/10 to-cyan-500/0 text-cyan-600 border-cyan-300", featured: true },
    { name: "Node.js", category: "backend", level: "Intermediate", icon: Server, color: "from-emerald-500/10 to-emerald-500/0 text-emerald-600 border-emerald-300", featured: true },
    { name: "Tailwind CSS v4", category: "frontend", level: "Expert", icon: Palette, color: "from-sky-500/10 to-sky-500/0 text-sky-600 border-sky-300", featured: true },
    { name: "Laravel", category: "backend", level: "Good", icon: Box, color: "from-rose-500/10 to-rose-500/0 text-rose-600 border-rose-300", featured: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Expert", icon: Terminal, color: "from-amber-500/10 to-amber-500/0 text-amber-600 border-amber-300", featured: true },

    { name: "Express", category: "backend", level: "Good", icon: Cpu, color: "from-slate-500/10 to-slate-500/0 text-slate-700 border-slate-300" },
    { name: "REST APIs", category: "backend", level: "Expert", icon: Globe, color: "from-indigo-500/10 to-indigo-500/0 text-indigo-600 border-indigo-300" },
    { name: "PHP 8.2", category: "backend", level: "Expert", icon: Layers, color: "from-purple-500/10 to-purple-500/0 text-purple-600 border-purple-300" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Expert", icon: Layout, color: "from-orange-500/10 to-orange-500/0 text-orange-600 border-orange-300" },

    { name: "MySQL", category: "database", level: "Expert", icon: Database, color: "from-blue-500/10 to-blue-500/0 text-blue-600 border-blue-300" },
    { name: "MongoDB", category: "database", level: "Good", icon: Database, color: "from-emerald-500/10 to-emerald-500/0 text-emerald-600 border-emerald-300" },

    { name: "Git & GitHub", category: "tools", level: "Good", icon: GitBranch, color: "from-amber-600/10 to-amber-600/0 text-amber-700 border-amber-400" },
    { name: "VS Code", category: "tools", level: "Expert", icon: Code2, color: "from-blue-600/10 to-blue-600/0 text-blue-700 border-blue-400" },
    { name: "Hostinger hPanel", category: "tools", level: "Expert", icon: Cloud, color: "from-indigo-600/10 to-indigo-600/0 text-indigo-700 border-indigo-400" },
    { name: "Postman", category: "tools", level: "Good", icon: Send, color: "from-orange-600/10 to-orange-600/0 text-orange-700 border-orange-400" },
    { name: "Figma", category: "tools", level: "Expert", icon: Palette, color: "from-purple-600/10 to-purple-600/0 text-purple-700 border-purple-400" },

    { name: "Claude & ChatGPT", category: "ai", level: "Expert", icon: Bot, color: "from-amber-500/10 to-amber-500/0 text-amber-600 border-amber-300" },
    { name: "Cursor & Codex", category: "ai", level: "Expert", icon: Zap, color: "from-cyan-500/10 to-cyan-500/0 text-cyan-600 border-cyan-300" },
    { name: "Antigravity", category: "ai", level: "Expert", icon: Sparkles, color: "from-emerald-500/10 to-emerald-500/0 text-emerald-600 border-emerald-300" },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsList
    : skillsList.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 border-t border-[#EAEAEA] bg-white relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-neutral-200/40 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      {/* Floating Accent Shape */}
      <div className="absolute top-16 right-[8%] w-16 h-16 border border-neutral-300 rounded-2xl rotate-12 bg-white/70 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-400 animate-float-slow">
        <Code2 className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 block">
              // Tech Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Skills & Stack Modules
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'backend', label: 'Backend' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'database', label: 'Database' },
              { id: 'tools', label: 'Tools & DevOps' },
              { id: 'ai', label: 'AI Agents' },
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

        {/* Dynamic Interactive Skill Matrix Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-12"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-4 bg-gradient-to-b ${skill.color} bg-white border rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-black transition-all shadow-sm group cursor-pointer relative overflow-hidden ${
                    skill.featured ? 'border-black/30 shadow-md' : 'border-[#EAEAEA]'
                  }`}
                >
                  {skill.featured && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 bg-black text-white rounded-full text-[8px] font-extrabold uppercase tracking-widest">
                      <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      <span>Core</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-8 h-8 rounded-xl bg-white border border-[#EAEAEA] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-black transition-all ${skill.color.split(' ')[2]}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-black text-[#111111] block mb-1 group-hover:text-black leading-tight">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        skill.level === 'Expert' ? 'bg-emerald-500 animate-pulse' : skill.level === 'Advanced' ? 'bg-blue-500' : 'bg-amber-500'
                      }`} />
                      <span className="text-[9px] font-mono font-bold text-[#5F6368] group-hover:text-black uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Live Interactive Code Terminal Sandbox */}
        <div className="p-8 bg-[#0A0A0A] text-white rounded-3xl border border-neutral-800 shadow-2xl font-mono text-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold">prabhat-sagar-stack.js</span>
            </div>
            <span className="text-[10px] text-neutral-400">React • Node.js • Laravel • MySQL</span>
          </div>

          <pre className="text-neutral-300 leading-relaxed overflow-x-auto text-[11px] font-mono">
            <code>
{`// Full-Stack Engineering Profile
const developer = {
  name: "Prabhat Sagar",
  location: "Agra, UP, India",
  techStack: ["React", "Node.js", "Express", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
  status: "Available for Freelance & Remote Work",
  contact: { phone: "+91 6398449403", email: "prabhatsagar2408@gmail.com" }
};

export async function buildFullStackApp(specifications) {
  const frontend = await buildReactUI(specifications);
  const backend = await buildAPI(specifications);
  return { status: 200, system: { ...frontend, ...backend }, ready: true };
}`}
            </code>
          </pre>
        </div>

      </div>
    </section>
  );
}

