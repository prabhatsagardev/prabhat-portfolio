import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Phone, Mail, MapPin, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-3xl my-8">
          {/* Action Bar */}
          <div className="flex items-center justify-between p-4 bg-[#0A0A0A] text-white rounded-t-2xl border-b border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              Prabhat_Sagar_Resume.pdf
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 bg-white text-black hover:bg-neutral-200 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close Resume"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white text-black p-8 sm:p-12 rounded-b-2xl shadow-2xl max-h-[80vh] overflow-y-auto font-sans"
          >
            {/* Header */}
            <div className="border-b border-[#EAEAEA] pb-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-black text-[#111111] tracking-tight">Prabhat Sagar</h1>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#5F6368] mt-1">
                  Solo Full Stack Web Developer
                </h2>
              </div>
              <div className="text-xs text-[#5F6368] space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5 font-semibold text-black">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+91 6398449403</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5 font-semibold text-black">
                  <Mail className="w-3.5 h-3.5" />
                  <span>prabhatsagar2408@gmail.com</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Agra, Uttar Pradesh, India</span>
                </p>
              </div>
            </div>

            {/* About */}
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2 border-b border-[#EAEAEA] pb-1">
                About
              </h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Solo Full Stack Web Developer specializing in React, Node.js, Express, PHP, Laravel, Tailwind CSS, and MySQL. Experienced in managing end-to-end web engineering independently—from requirements and UI wireframes to REST API development, database architecture, payment gateway integration, and server deployment.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-6 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2 border-b border-[#EAEAEA] pb-1">
                Experience
              </h3>
              <div>
                <h4 className="text-sm font-bold text-black">Solo Full Stack Web Developer</h4>
                <p className="text-[11px] font-semibold text-[#5F6368]">Independent Freelance Engineer · Agra / Remote · India</p>
                <ul className="list-disc list-inside text-xs text-[#5F6368] mt-2 space-y-1">
                  <li>Engineered end-to-end web applications solo using React, Node.js, Express, PHP, Laravel, Tailwind CSS, and MySQL.</li>
                  <li>Handled the full software development lifecycle independently from UI design to backend APIs and production hosting.</li>
                  <li>Integrated authentication systems, Razorpay payment gateways, and database CRUD architectures.</li>
                </ul>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a href="https://roastbrews.shop/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-lg hover:border-black transition-colors block">
                  <strong className="block text-black hover:underline">Roast & Brews — Craft Coffee</strong>
                  <span className="text-[11px] text-[#5F6368]">Live React & Node.js app (roastbrews.shop ↗)</span>
                </a>
                <a href="https://asthaanimation.com/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-lg hover:border-black transition-colors block">
                  <strong className="block text-black hover:underline">Astha Animation Institute</strong>
                  <span className="text-[11px] text-[#5F6368]">Live Client Portal (asthaanimation.com ↗)</span>
                </a>
                <a href="https://mockpros.com/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-lg hover:border-black transition-colors block">
                  <strong className="block text-black hover:underline">MockPros — NET Exam Hub</strong>
                  <span className="text-[11px] text-[#5F6368]">Live Exam Simulator (mockpros.com ↗)</span>
                </a>
                <div className="p-2.5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-lg">
                  <strong className="block text-black">Dressly — Fashion E-commerce</strong>
                  <span className="text-[11px] text-[#5F6368]">Laravel, MySQL, Tailwind CSS, Razorpay.</span>
                </div>
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2 border-b border-[#EAEAEA] pb-1">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "Core PHP & OOP", "Laravel", "Node.js", "React", "MySQL", "MongoDB", "REST APIs", "Payment Integration", "UI/UX Design"].map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-[#F5F5F5] border border-[#EAEAEA] text-[10px] font-bold rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2 border-b border-[#EAEAEA] pb-1">
                  Tools & AI
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["VS Code", "Git & GitHub", "XAMPP", "Postman", "Hostinger hPanel", "Figma", "Photoshop", "Illustrator", "Claude", "GPT", "Claude Code", "Cursor", "Antigravity"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#F5F5F5] border border-[#EAEAEA] text-[10px] font-bold rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2 border-b border-[#EAEAEA] pb-1">
                Education
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <div>
                    <strong className="text-black">Bachelor of Science (Hons.), Mathematics</strong>
                    <p className="text-[#5F6368] text-[11px]">Agra College, Agra</p>
                  </div>
                  <span className="font-semibold text-black">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <strong className="text-black">Web Development Course</strong>
                    <p className="text-[#5F6368] text-[11px]">Astha Animation Institute</p>
                  </div>
                  <span className="font-semibold text-black">Completed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
