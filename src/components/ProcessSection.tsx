import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Search,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp,
  Sparkles,
  Clock,
  Check
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (num: string) => {
    const props = { className: "w-5 h-5 text-amber-300" };
    switch (num) {
      case '01':
        return <Search {...props} />;
      case '02':
        return <Compass {...props} />;
      case '03':
        return <Layout {...props} />;
      case '04':
        return <Code2 {...props} />;
      case '05':
        return <CheckCircle2 {...props} />;
      case '06':
        return <Rocket {...props} />;
      case '07':
        return <TrendingUp {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative py-28 bg-[#020205] border-t border-white/10 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Execution Framework</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our 7-Step <span className="text-[#D4AF37] italic font-serif">Agile Process</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            From initial concept discovery to continuous post-launch optimization, every step is structured for speed, precision, and predictability.
          </p>
        </div>

        {/* Timeline Stepper Navigation */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`relative z-10 p-3 rounded-2xl flex flex-col items-center gap-2 transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-[#D4AF37] text-black font-bold shadow-lg scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                activeStepIndex === idx
                  ? 'bg-black text-[#D4AF37]'
                  : 'bg-white/10 text-gray-300'
              }`}>
                {step.number}
              </div>
              <span className="text-xs font-bold">{step.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile / Tablet Process Selector Buttons */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-[#D4AF37] text-black'
                  : 'bg-white/5 text-gray-300 border border-white/10'
              }`}
            >
              {step.number}. {step.name}
            </button>
          ))}
        </div>

        {/* Active Process Step Showcase Card */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getStepIcon(activeStep.number)}
                </div>
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Phase {activeStep.number} of 07</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeStep.name}: <span className="text-gray-400 font-normal">{activeStep.tagline}</span>
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              {/* Outputs List */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase text-[#D4AF37] font-bold">Key Deliverables in this Phase:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStep.keyOutputs.map((output, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-gray-200">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/80 border border-white/10 flex flex-col justify-between space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <div className="text-xs font-mono text-gray-400 flex items-center justify-center lg:justify-start gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Estimated Timeframe</span>
                </div>
                <div className="text-3xl font-bold text-[#D4AF37]">
                  {activeStep.duration}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-mono space-y-1">
                <div className="text-[#D4AF37] font-bold">YOUBA Quality Gate</div>
                <div>Client Signoff Required Before Phase Transition</div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                <span>Phase Progress</span>
                <span className="text-[#D4AF37] font-bold">{Math.round(((activeStepIndex + 1) / 7) * 100)}% Complete</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
