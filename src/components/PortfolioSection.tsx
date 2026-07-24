import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Star,
  ExternalLink,
  Layers,
  Filter
} from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';
import { CaseStudyDetailModal } from './CaseStudyDetailModal';

interface PortfolioSectionProps {
  onStartProject: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onStartProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Website', 'Branding', 'Marketing', 'SEO', 'AI', 'E-commerce'];

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#020205] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Award-Winning Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Case Studies & <span className="text-[#D4AF37] italic font-serif">Proven Results</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Explore how YOUBA LLC engineers market-leading digital experiences that double traffic, drive revenue, and elevate brand perception.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
              id={`portfolio-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-90" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/80 text-[#D4AF37] text-xs font-mono border border-white/10">
                      {study.category}
                    </span>
                    {study.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider">
                        Featured Case
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Client: {study.client}</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {study.solution}
                    </p>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-black/60 border border-white/10">
                    {study.results.map((res, rIdx) => (
                      <div key={rIdx} className="text-center">
                        <div className="text-lg font-bold gold-gradient-text">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-gray-400 font-medium truncate">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <img
                        src={study.testimonial.avatar}
                        alt={study.testimonial.author}
                        className="w-7 h-7 rounded-full object-cover border border-[#D4AF37]"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-xs text-gray-300 font-medium truncate max-w-[150px]">
                        "{study.testimonial.quote.substring(0, 30)}..."
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="px-5 py-2 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                      id={`portfolio-case-${study.id}-btn`}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal */}
      <CaseStudyDetailModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
