import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-28 bg-[#020205] border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What Business Leaders Say About <span className="text-[#D4AF37] italic font-serif">YOUBA LLC</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Read authentic reviews from enterprise CEOs, Founders, and Marketing Directors who partnered with us.
          </p>
        </div>

        {/* Testimonial Slider Stage */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/30 shadow-2xl overflow-hidden">
            <Quote className="absolute top-8 right-8 w-20 h-20 text-[#D4AF37]/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 relative z-10"
              >
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                    <span className="ml-2 font-bold text-white text-sm">
                      5.0 Verified Review
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Executive</span>
                  </span>
                </div>

                {/* Main Quote */}
                <p className="text-xl sm:text-3xl font-serif italic text-gray-100 leading-relaxed">
                  "{activeTestimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {activeTestimonial.author}
                      </h4>
                      <div className="text-xs text-[#D4AF37] font-medium">
                        {activeTestimonial.role} • <span className="text-gray-300">{activeTestimonial.company}</span>
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                        Industry: {activeTestimonial.industry}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer"
                      aria-label="Previous Testimonial"
                      id="testimonial-prev-btn"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer"
                      aria-label="Next Testimonial"
                      id="testimonial-next-btn"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#D4AF37]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
