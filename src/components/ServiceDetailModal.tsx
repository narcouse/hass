import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Clock, TrendingUp, Cpu, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenEstimator: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenEstimator
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl glass-card border border-amber-400/30 p-6 sm:p-10 shadow-2xl bg-[#0b0f19] my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>YOUBA Service Deep Dive</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {service.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300">
              Core Deliverables & Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Metrics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Typical Timeline</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">{service.averageTimeline}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Historical Impact</span>
              </div>
              <div className="text-sm font-bold text-emerald-300 mt-1">{service.typicalROI}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>Tech Stack</span>
              </div>
              <div className="text-xs font-medium text-slate-300 mt-1 truncate">
                {service.techStack.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div className="text-xs text-slate-400 font-mono">
              Ready to implement {service.title} for your business?
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenEstimator(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-100 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Estimate Project Cost</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
