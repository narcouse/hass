import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Calculator,
  Compass,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenEstimator: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#020205]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/80'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group flex items-center space-x-3"
              id="navbar-brand-logo"
            >
              <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37] to-[#F5E1A4] rounded-lg rotate-12 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:rotate-0 transition-transform duration-300">
                <span className="text-black font-black text-xs">Y</span>
              </div>
              <span className="text-2xl font-bold tracking-widest text-white">
                YOUBA <span className="text-[#D4AF37] opacity-80 font-bold">LLC</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === link.href.substring(1)
                      ? 'text-white font-bold'
                      : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={onOpenEstimator}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                id="navbar-estimator-btn"
              >
                <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Estimator</span>
              </button>

              <button
                onClick={onOpenEstimator}
                className="border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all text-[11px] uppercase tracking-wider font-bold text-white cursor-pointer"
                id="navbar-start-project-btn"
              >
                Start Project
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="navbar-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#07090e]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Accepting Q3 / Q4 Digital Agency Partnerships</span>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between px-4 py-3 text-left text-lg font-display font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-900/60 rounded-xl transition-all"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Project Cost Calculator</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 shadow-xl shadow-amber-500/20"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2 text-[11px] text-slate-400 font-mono">
                {COMPANY_INFO.address.full}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
