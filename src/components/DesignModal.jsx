import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { designsData } from '../data/designs.js';

export default function DesignModal({ selectedIdx, onClose, onNavigate }) {
  if (selectedIdx === null || selectedIdx === undefined) return null;

  const currentItem = designsData[selectedIdx];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(selectedIdx === 0 ? designsData.length - 1 : selectedIdx - 1);
      if (e.key === 'ArrowRight') onNavigate(selectedIdx === designsData.length - 1 ? 0 : selectedIdx + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIdx, onClose, onNavigate]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={() => onNavigate(selectedIdx === 0 ? designsData.length - 1 : selectedIdx - 1)}
          className="absolute left-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hidden sm:block z-10"
          aria-label="Previous Item"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate(selectedIdx === designsData.length - 1 ? 0 : selectedIdx + 1)}
          className="absolute right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hidden sm:block z-10"
          aria-label="Next Item"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh]"
        >
          {/* Image */}
          <div className="w-full md:w-3/5 bg-[#FAFAFA] flex items-center justify-center p-6 min-h-[300px] md:min-h-[500px]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#EAEAEA] bg-white">
            <div className="space-y-4">
              <span className="text-xs font-bold text-black uppercase tracking-widest block bg-[#F5F5F5] border border-[#EAEAEA] px-3 py-1 rounded-full w-max">
                {currentItem.category}
              </span>
              <h3 className="text-2xl font-extrabold text-[#111111]">{currentItem.title}</h3>
              <p className="text-[#5F6368] text-sm leading-relaxed">{currentItem.description}</p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#EAEAEA] mt-8">
              <span className="text-xs font-mono font-bold text-[#5F6368]">
                {selectedIdx + 1} / {designsData.length}
              </span>
              <div className="flex gap-2 sm:hidden">
                <button
                  onClick={() => onNavigate(selectedIdx === 0 ? designsData.length - 1 : selectedIdx - 1)}
                  className="px-3 py-1.5 border border-[#EAEAEA] rounded-lg text-xs font-bold"
                >
                  Prev
                </button>
                <button
                  onClick={() => onNavigate(selectedIdx === designsData.length - 1 ? 0 : selectedIdx + 1)}
                  className="px-3 py-1.5 border border-[#EAEAEA] rounded-lg text-xs font-bold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
