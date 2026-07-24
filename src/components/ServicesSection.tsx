import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layout,
  Sparkles,
  Search,
  TrendingUp,
  Cpu,
  ShoppingBag,
  BarChart3,
  Video,
  Zap,
  ArrowRight,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenEstimator: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimator }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-amber-300 transition-transform group-hover:scale-110" };
    switch (iconName) {
      case 'Code':
        return <Code {...props} />;
      case 'Layout':
        return <Layout {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#020205] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Digital Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            High-Impact Services Built For <span className="text-[#D4AF37] italic font-serif">Scalable Growth</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            We provide end-to-end digital capabilities designed to position your brand as the undisputed leader in your category.
          </p>
        </div>

        {/* 10 Luxury Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1.5"
            >
              <div className="relative z-10 space-y-6">
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37]/50 transition-all">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 border border-white/10">
                    {service.averageTimeline}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Deliverables Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#D4AF37] font-bold">
                  {service.typicalROI}
                </span>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                  id={`service-card-${service.id}-readmore`}
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenEstimator={onOpenEstimator}
      />
    </section>
  );
};
