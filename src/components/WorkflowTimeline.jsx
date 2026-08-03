import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSearch, Layers, Layout, Code2, Sparkles, TestTube, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    phase: "REQUIREMENT",
    icon: FileSearch,
    title: "Requirements & Scope Definition",
    desc: "Translating client goals into technical specifications, user journey maps, scope boundaries, and core milestone roadmaps.",
    tags: ["Product Specs", "User Stories", "Scope Analysis", "Milestone Roadmap"]
  },
  {
    num: "02",
    phase: "PLANNING",
    icon: Layers,
    title: "Database & API Architecture",
    desc: "Designing normalized MySQL schemas, ERD relations, Node.js/Laravel RESTful API endpoints, and authentication contracts.",
    tags: ["MySQL Schemas", "ERD Diagrams", "REST API Contracts", "Security Rules"]
  },
  {
    num: "03",
    phase: "UI-UX DESIGN",
    icon: Layout,
    title: "Figma Prototyping & Wireframing",
    desc: "Creating high-contrast UI layouts, React component systems, mobile-first responsive grids, and interactive prototypes in Figma.",
    tags: ["Figma Mockups", "React UI Systems", "Responsive Layouts", "Typography Specs"]
  },
  {
    num: "04",
    phase: "CORE DEV",
    icon: Code2,
    title: "Full-Stack Development (React & Node/PHP)",
    desc: "Writing production-grade code leveraging React frontend components, Node.js/Express or Laravel backend APIs, Razorpay payments, and clean code standards.",
    tags: ["React Frontend", "Node.js & Express", "Laravel PHP", "Razorpay Payments"]
  },
  {
    num: "05",
    phase: "AI ASSISTED",
    icon: Sparkles,
    title: "AI-Accelerated Solo Speed",
    desc: "Leveraging Claude, ChatGPT & Cursor for rapid feature prototyping, automated code audits, unit test generation, and instant debugging.",
    tags: ["Claude Code Audit", "ChatGPT Test Gen", "Log Trace Debug", "2x Faster Execution"]
  },
  {
    num: "06",
    phase: "QA TESTING",
    icon: TestTube,
    title: "Testing & Quality Assurance",
    desc: "Executing automated test suites, testing mobile views across devices, inspecting Lighthouse performance, and validating security controls.",
    tags: ["Lighthouse 90+", "Responsive Audit", "Cross-Browser QA", "Security Checks"]
  },
  {
    num: "07",
    phase: "DEPLOYMENT",
    icon: Rocket,
    title: "Production Launch & Hosting",
    desc: "Configuring SSL domain security, environment secrets, hostinger hPanel / cloud servers, CI/CD pipelines, and post-launch monitoring.",
    tags: ["SSL Security", "Hostinger hPanel", "Production Release", "Post-Launch Support"]
  }
];

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStepData = steps[activeStep];
  const IconComp = currentStepData.icon;

  return (
    <section id="workflow" className="py-24 bg-[#0A0A0A] text-white border-t border-neutral-900 relative overflow-hidden">
      {/* Background Visual System */}
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neutral-800/30 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
            // Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Development Workflow
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            A structured, 7-step engineering process designed to deliver reliable web platforms fast.
          </p>
        </div>

        {/* Step Progress Bar Header */}
        <div className="flex overflow-x-auto pb-4 mb-10 border-b border-neutral-800 no-scrollbar gap-3 justify-start lg:justify-center">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            const StepIcon = s.icon;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-white text-black border-white shadow-lg scale-105'
                    : 'bg-[#141414] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-600'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">{s.num}</span>
                <StepIcon className="w-3.5 h-3.5" />
                <span>{s.phase}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 bg-[#121212] border border-neutral-800 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Number & Icon Badge */}
              <div className="lg:col-span-4 space-y-6 border-b lg:border-b-0 lg:border-r border-neutral-800 pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-mono font-black text-neutral-600">
                    {currentStepData.num}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg">
                    <IconComp className="w-7 h-7" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                    Phase {currentStepData.num} / 07
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {currentStepData.title}
                  </h3>
                </div>
              </div>

              {/* Right Column: Description & Deliverables */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {currentStepData.desc}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                    Phase Deliverables & Artifacts:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStepData.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="p-3 bg-[#1A1A1A] border border-neutral-800 rounded-xl flex items-center gap-2 text-xs font-semibold text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Controls */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 bg-[#1A1A1A] border border-neutral-800 disabled:opacity-40 rounded-xl text-xs font-bold text-neutral-300 hover:text-white"
                  >
                    Previous Phase
                  </button>

                  <span className="text-xs font-mono text-neutral-500">
                    Step {activeStep + 1} of {steps.length}
                  </span>

                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="px-4 py-2 bg-white text-black disabled:opacity-40 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-neutral-200"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Step Nodes Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-12">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? 'bg-white text-black border-white shadow-xl scale-105'
                    : 'bg-[#121212] text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold">{step.num}</span>
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold block truncate">{step.phase}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
