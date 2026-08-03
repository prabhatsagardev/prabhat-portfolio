import React from 'react';
import { ArrowUp, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-neutral-900 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 font-medium">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs">
            P
          </span>
          <div>
            <p className="text-white font-bold text-sm">Prabhat Sagar</p>
            <p>© 2026 Prabhat Sagar. All rights reserved.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href="tel:6398449403" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 6398449403</span>
          </a>
          <a href="mailto:prabhatsagar2408@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>prabhatsagar2408@gmail.com</span>
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-white transition-all flex items-center gap-1"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
