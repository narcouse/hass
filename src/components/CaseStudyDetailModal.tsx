import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ExternalLink, CheckCircle2, Star, Quote, Award } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyDetailModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  caseStudy,
  onClose,
  onStartProject
}) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl glass-card border border-amber-400/30 p-6 sm:p-10 shadow-2xl bg-[#090d16] my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge & Title */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-mono border border-amber-400/20">
                Case Study • {caseStudy.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Client: {caseStudy.client}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {caseStudy.title}
            </h3>
          </div>

          {/* Project Featured Image */}
          <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-800">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
          </div>

          {/* Results Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-amber-400/20 text-center">
                <div className="text-2xl sm:text-3xl font-display font-black gold-gradient-text">
                  {res.metric}
                </div>
                <div className="text-xs font-medium text-slate-300 mt-1">{res.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300">
                The Business Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                YOUBA Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mt-6">
            <div className="text-xs font-mono text-slate-400 mb-2">Technologies & Frameworks Stack:</div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-400/20 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-400/20" />
            <div className="space-y-3 relative z-10">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm italic text-slate-200">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-white">{caseStudy.testimonial.author}</div>
                  <div className="text-[11px] text-slate-400">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <span className="text-xs text-slate-400 font-mono">
              Want similar results for your business?
            </span>

            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-100 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build A Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
