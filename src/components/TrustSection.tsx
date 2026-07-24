import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, ShieldCheck, CheckCircle2, TrendingUp, Users, Sparkles } from 'lucide-react';
import { CLIENT_LOGOS, COMPANY_INFO } from '../data/agencyData';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: COMPANY_INFO.stats.projectsDelivered,
      label: 'Projects Delivered',
      subtext: 'Across 18 Global Industries'
    },
    {
      value: COMPANY_INFO.stats.satisfaction,
      label: 'Client Satisfaction',
      subtext: 'Verified Clutch & Google Audits'
    },
    {
      value: COMPANY_INFO.stats.yearsExperience,
      label: 'Years Experience',
      subtext: 'Founded in Kalispell, Montana'
    },
    {
      value: COMPANY_INFO.stats.partners,
      label: 'Business Partners',
      subtext: 'Enterprise & Series A-C Growth'
    }
  ];

  return (
    <section className="relative py-16 bg-[#020205] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Rating Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="ml-1 text-white">{COMPANY_INFO.stats.rating} Rating</span>
            </div>
            <span className="text-gray-400 text-xs font-medium hidden md:inline">
              Verified by Clutch, Google & Design Awards
            </span>
          </div>

          <p className="text-sm sm:text-base font-serif italic text-gray-300 text-center sm:text-right">
            "Trusted by market leaders and ambitious businesses across multiple industries."
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="py-12">
          <div className="text-center text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-8">
            Featured Among Industry Innovators
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06]"
              >
                <span className="font-display font-extrabold text-xs tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center relative overflow-hidden group hover:bg-white/[0.05]"
            >
              <div className="text-3xl sm:text-5xl font-bold gold-gradient-text tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
