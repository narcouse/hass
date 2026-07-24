import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Code2,
  Layout,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Play,
  Cpu,
  Globe
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'code' | 'design' | 'growth'>('analytics');

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#020205] flex flex-col justify-center">
      {/* Background Ambient Glowing Orbs & Grid Patterns */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-xl shadow-xl shadow-black/40 hover:border-white/20 transition-all cursor-default"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">
              Montana's Premier Digital Partner • Kalispell, MT
            </span>
          </motion.div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[48px] sm:text-[68px] md:text-[76px] leading-[0.92] font-bold tracking-tighter text-white"
          >
            Building Digital <br />
            <span className="text-[#D4AF37] italic font-serif">Experiences</span> That <br />
            Grow Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            YOUBA LLC helps ambitious businesses grow through modern websites, custom AI solutions, and scalable digital strategies crafted with precision.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto bg-white text-black hover:bg-[#D4AF37] transition-all px-10 py-4.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl shadow-white/10 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-start-project-btn"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewWork}
              className="w-full sm:w-auto border border-white/20 text-white hover:bg-white hover:text-black transition-all px-9 py-4.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              id="hero-view-work-btn"
            >
              <span>View Case Studies</span>
              <Globe className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </motion.div>

          {/* Rating Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6 pt-6 text-[10px] uppercase tracking-wider text-gray-500 font-bold"
          >
            <div className="flex items-center gap-1">
              <span className="text-[#D4AF37] text-sm">★★★★★</span>
              <span className="text-gray-300 ml-1">5.0 Avg Rating</span>
            </div>
            <span>•</span>
            <div>250+ Projects Delivered</div>
            <span>•</span>
            <div>98% Client Retention</div>
          </motion.div>
        </div>

        {/* Hero Interactive Stage Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          {/* Container Card */}
          <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-4 backdrop-blur-xl shadow-2xl shadow-black/80">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 px-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-gray-500 hidden sm:inline-block">
                  https://youba.agency/live-preview
                </span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-1 bg-black/60 p-1 rounded-full border border-white/10">
                {(['analytics', 'code', 'design', 'growth'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-[#D4AF37] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Screen */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#050508] border border-white/10">
              {activeTab === 'analytics' && (
                <div className="relative w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0a0a0f] via-[#050508] to-[#0a0a0f]">
                  <img
                    src="/src/assets/images/hero_agency_showcase_1784916128705.jpg"
                    alt="YOUBA LLC Agency Dashboard Showcase"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/60 to-transparent" />

                  {/* Overlaid Widgets */}
                  <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Monthly Revenue</div>
                      <div className="text-xl font-bold text-[#D4AF37] mt-1">$248,500</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +142% vs Q1
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Performance</div>
                      <div className="text-xl font-bold text-emerald-400 mt-1">99 / 100</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">0.4s load speed</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Conversion Rate</div>
                      <div className="text-xl font-bold text-white mt-1">5.82%</div>
                      <div className="text-[10px] text-[#D4AF37] mt-0.5">+3.2% industry avg</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">AI Automations</div>
                      <div className="text-xl font-bold text-blue-400 mt-1">12 Active</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Gemini Engine</div>
                    </div>
                  </div>

                  {/* Graph Visual Mock */}
                  <div className="relative z-10 hidden sm:block p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white tracking-wide">
                        Organic Traffic Acceleration Protocol
                      </span>
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20">
                        YOUBA Engine v4.2
                      </span>
                    </div>
                    <div className="h-20 w-full flex items-end gap-1.5 pt-4">
                      {[30, 45, 40, 60, 55, 75, 80, 95, 110, 140, 180, 220, 260].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                          <div
                            style={{ height: `${h / 2.8}px` }}
                            className="w-full rounded-t bg-gradient-to-t from-[#AA7C11] via-[#D4AF37] to-[#F5E1A4] group-hover:brightness-125 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="w-full h-full p-6 bg-[#040408] font-mono text-xs text-gray-300 flex flex-col justify-between overflow-hidden">
                  <div className="space-y-2">
                    <div className="text-gray-500">// YOUBA LLC - High Performance Architecture</div>
                    <div>
                      <span className="text-purple-400">import</span> &#123; GoogleGenAI &#125;{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-emerald-300">'@google/genai'</span>;
                    </div>
                    <div>
                      <span className="text-purple-400">export async function</span>{' '}
                      <span className="text-[#D4AF37]">orchestrateDigitalExperience</span>(
                      <span className="text-blue-300">clientGoals</span>) &#123;
                    </div>
                    <div className="pl-4 text-gray-400">
                      <span className="text-purple-400">const</span> engine ={' '}
                      <span className="text-[#D4AF37] font-bold">new YOUBAEngine</span>(&#123;
                    </div>
                    <div className="pl-8 text-amber-200">
                      speedTarget: <span className="text-emerald-300">'sub-second'</span>,
                    </div>
                    <div className="pl-8 text-amber-200">
                      designStandard: <span className="text-emerald-300">'Sophisticated Dark'</span>,
                    </div>
                    <div className="pl-8 text-amber-200">
                      securityLevel: <span className="text-emerald-300">'Enterprise 256-bit'</span>
                    </div>
                    <div className="pl-4 text-gray-400">&#125;);</div>
                    <div className="pl-4 text-emerald-400">
                      return await engine.deployScalableGrowth();
                    </div>
                    <div>&#125;</div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Build Completed in 0.42 seconds • All 250 Tests Passed</span>
                    </div>
                    <span className="font-bold">STATUS: DEPLOYED</span>
                  </div>
                </div>
              )}

              {activeTab === 'design' && (
                <div className="relative w-full h-full bg-[#050508] p-6 flex flex-col justify-between">
                  <img
                    src="/src/assets/images/project_ecom_luxe_1784916142667.jpg"
                    alt="Luxury E-commerce UI Design"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/80 text-[#D4AF37] text-xs font-mono border border-white/10">
                      Design System • Token Palette #D4AF37
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider">
                      Sophisticated Dark Standard
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'growth' && (
                <div className="relative w-full h-full bg-[#050508] p-6 flex flex-col justify-between">
                  <img
                    src="/src/assets/images/project_ai_automation_1784916156657.jpg"
                    alt="AI Growth Pipeline"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/80 text-blue-300 text-xs font-mono border border-white/10">
                      Multi-Channel ROAS: 4.8x
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider">
                      Verified Client Growth
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -top-6 -left-6 hidden lg:flex items-center gap-2 p-3 rounded-2xl glass-card border border-[#D4AF37]/30 text-xs text-[#D4AF37] shadow-xl animate-float-slow">
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-semibold text-white">0.4s Sub-second Speed</span>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden lg:flex items-center gap-2 p-3.5 rounded-2xl glass-card border border-white/10 text-xs text-gray-200 shadow-xl animate-float-slow">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                className="w-6 h-6 rounded-full border border-[#D4AF37] object-cover"
                alt="Client"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                className="w-6 h-6 rounded-full border border-[#D4AF37] object-cover"
                alt="Client"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
                className="w-6 h-6 rounded-full border border-[#D4AF37] object-cover"
                alt="Client"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-bold text-[#D4AF37]">★★★★★ 5.0 Rating</div>
              <div className="text-[10px] text-gray-400">250+ Verified Businesses</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
