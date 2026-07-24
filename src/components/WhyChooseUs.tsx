import React from 'react';
import { motion } from 'motion/react';
import {
  Lightbulb,
  Layers,
  Code2,
  SearchCheck,
  Clock,
  Users,
  MessageSquare,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US_CARDS } from '../data/agencyData';

interface WhyChooseUsProps {
  onStartProject: () => void;
}

export const WhyChooseUs: React.FC = ({ onStartProject }) => {
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-amber-300" };
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'SearchCheck':
        return <SearchCheck {...props} />;
      case 'Clock':
        return <Clock {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'MessageSquareCheck':
        return <MessageSquare {...props} />;
      case 'Target':
        return <Target {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-us" className="relative py-28 bg-[#020205] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The YOUBA Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why High-Growth Brands <span className="text-[#D4AF37] italic font-serif">Choose YOUBA LLC</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We don't operate like a slow traditional agency or low-budget freelance shop. We deliver world-class engineering with white-glove communication.
          </p>
        </div>

        {/* 8 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-all duration-300">
                    {renderIcon(card.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {card.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                <span>YOUBA Standard</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Schedule a strategy call with our Montana-based executive team.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white shadow-xl transition-all shrink-0 cursor-pointer"
            id="whyus-start-project-btn"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};
