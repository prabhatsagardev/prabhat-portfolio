import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "I specialize in Full-Stack Web Development with React on the frontend and Node.js (Express) & PHP (Laravel) on the backend, with MySQL for relational databases and Tailwind CSS for responsive styling."
    },
    {
      q: "Do you work solo or with a team/agency?",
      a: "I work 100% independently as a solo full-stack developer. You work directly with me—meaning faster communication, zero agency middleman fees, and single-point accountability."
    },
    {
      q: "How fast can you deliver a custom web application?",
      a: "Depending on project scope, landing pages and portfolio sites are delivered within 2-4 days. Full-scale web platforms with React frontends, Node/Laravel APIs, and databases take 1-2 weeks."
    },
    {
      q: "Can I contact you directly via Phone or WhatsApp?",
      a: "Yes! You can reach me directly on Phone at +91 6398449403, WhatsApp (+91 6398449403), or Email at prabhatsagar2408@gmail.com."
    }
  ];

  return (
    <section id="faq" className="py-24 border-t border-[#EAEAEA] bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-50 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      {/* Floating Accent Graphic Shape */}
      <div className="absolute top-12 left-[8%] w-16 h-16 border border-neutral-300 rounded-2xl rotate-12 bg-white/70 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-400 animate-float-slow">
        <MessageCircle className="w-6 h-6" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 block">
            // Client Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#EAEAEA] rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#111111] hover:text-black"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-black shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-black' : 'text-[#5F6368]'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-[#5F6368] leading-relaxed border-t border-[#EAEAEA]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
