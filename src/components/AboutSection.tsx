import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Sparkles,
  Award,
  ShieldCheck,
  Zap,
  Gem,
  TrendingUp,
  CheckCircle2,
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_VALUES, TIMELINE_EVENTS } from '../data/agencyData';

export const AboutSection: React.FC = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(3);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gem':
        return <Gem className="w-5 h-5 text-amber-300" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="about" className="relative py-28 bg-[#020205] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Story & Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Montana Heritage Meets <span className="text-[#D4AF37] italic font-serif">Silicon Valley Standards</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            YOUBA LLC was founded with a singular conviction: ambitious businesses deserve bespoke digital platforms engineered with artistic craftsmanship, cutting-edge AI, and sub-second performance.
          </p>
        </div>

        {/* Company Overview & Headquarters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                Our Purpose & Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                We bridge the gap between creative visual artistry and scalable software engineering.
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Most web agencies build generic sites using bloated templates that perform poorly and look like everyone else. At YOUBA LLC, we write modular code from scratch using React, Express, and Gemini AI. Every client receives an exclusive platform designed to capture market dominance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">100% Custom</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Zero Pre-Made Templates</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#D4AF37]">Sub-0.8s</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Global Load Speed</div>
              </div>
            </div>
          </div>

          {/* Headquarters Location Highlight */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/30 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Headquarters</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[#D4AF37] text-[10px] font-mono border border-white/10 uppercase tracking-widest font-bold">
                  KALISPELL, MT • USA
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Anchored in Kalispell, Montana. Serving Enterprise Leaders Worldwide.
              </h3>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs text-gray-300 space-y-2 font-mono">
                <div className="text-gray-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>YOUBA LLC Corporate Address:</span>
                </div>
                <div className="text-white font-bold text-sm">
                  1001 S MAIN ST, STE 600
                </div>
                <div>KALISPELL, MT 59901, USA</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
              <span>Timezone: Mountain Standard Time (MST)</span>
              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active HQ
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Company Values */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Our Core Operating Values</h3>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-mono">Principles of Excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val) => (
              <div
                key={val.id}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                    {getIcon(val.iconName)}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-[#D4AF37]">
                  {val.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Company Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
              Evolution & Growth
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              The YOUBA LLC Journey
            </h3>
          </div>

          {/* Timeline Selector */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {TIMELINE_EVENTS.map((event, idx) => (
              <button
                key={event.year}
                onClick={() => setActiveTimelineIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
                  activeTimelineIndex === idx
                    ? 'bg-[#D4AF37] text-black shadow-lg font-bold'
                    : 'bg-white/5 border border-white/10 hover:border-white/20 text-gray-300'
                }`}
              >
                <div className={`text-xl font-bold ${activeTimelineIndex === idx ? 'text-black' : 'gold-gradient-text'}`}>{event.year}</div>
                <div className="text-xs font-bold mt-1">{event.title}</div>
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <motion.div
            key={activeTimelineIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-white/5 text-[#D4AF37] font-mono text-xs border border-white/10">
                Milestone: {TIMELINE_EVENTS[activeTimelineIndex].milestone}
              </span>
              <h4 className="text-xl font-bold text-white pt-1">
                {TIMELINE_EVENTS[activeTimelineIndex].title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {TIMELINE_EVENTS[activeTimelineIndex].description}
              </p>
            </div>

            <div className="text-center md:text-right shrink-0">
              <div className="text-3xl font-bold text-[#D4AF37]">
                {TIMELINE_EVENTS[activeTimelineIndex].year}
              </div>
              <div className="text-xs text-gray-400 font-mono mt-1">Verified Milestone</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
