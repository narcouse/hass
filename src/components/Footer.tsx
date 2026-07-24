import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Dribbble,
  Github,
  Instagram,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/agencyData';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator, onOpenLegal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020205] border-t border-white/10 pt-20 pb-12 text-gray-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Newsletter & Executive CTA Row */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Subscribe to <span className="text-[#D4AF37] italic font-serif">The YOUBA Executive Brief</span>
            </h3>
            <p className="text-gray-400 text-xs">
              Receive monthly insights on AI automation, high-converting digital design, and market growth strategies. Zero spam.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing! Check your inbox for our latest agency insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    placeholder="Enter executive email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    id="footer-newsletter-email"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full font-bold text-black uppercase tracking-wider text-xs bg-[#D4AF37] hover:bg-white transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                  id="footer-newsletter-submit"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37] p-[1px]">
                <div className="w-full h-full bg-[#020205] rounded-[11px] flex items-center justify-center">
                  <span className="text-[#D4AF37] font-black text-lg">Y</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-wider">
                YOUBA LLC
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              YOUBA LLC is an award-winning digital agency headquartered in Kalispell, Montana, USA. We build bespoke websites, custom AI pipelines, luxury brand identities, and high-ROI digital growth strategies.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-[11px] text-gray-300 space-y-1">
              <div className="text-[#D4AF37] font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Montana Headquarters
              </div>
              <div>{COMPANY_INFO.address.full}</div>
              <div className="text-gray-400">{COMPANY_INFO.contact.phone}</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#D4AF37] font-bold">
              Core Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-[#D4AF37] font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Case Studies</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Company Story</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-[#D4AF37] transition-colors">7-Step Process</a></li>
              <li><a href="#blog" className="hover:text-[#D4AF37] transition-colors">Agency Insights</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Col 4: Action & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#D4AF37] font-bold">
              Start Partnership
            </h4>
            <p className="text-gray-400 text-xs">
              Calculate project scope & budget tier instantly with our calculator.
            </p>
            <button
              onClick={onOpenEstimator}
              className="w-full py-2.5 px-4 rounded-full font-bold uppercase tracking-wider text-xs text-black bg-[#D4AF37] hover:bg-white transition-all shadow-md cursor-pointer"
            >
              Project Estimator
            </button>

            <div className="pt-2 flex flex-col space-y-1">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors text-[11px] cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenLegal('terms')}
                className="text-left text-gray-400 hover:text-[#D4AF37] transition-colors text-[11px] cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 font-mono">
          <div>
            © {new Date().getFullYear()} YOUBA LLC. All Rights Reserved. Headquartered in Kalispell, Montana, USA.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React, Next & Gemini AI</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-[#D4AF37] border border-white/10 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
