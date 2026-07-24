import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Linkedin,
  Twitter,
  Dribbble,
  Github,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/agencyData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Custom Website Development',
    budget: '$25,000 - $50,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#020205] border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Call To Action Banner Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start A Conversation</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            "Let's build something <span className="text-[#D4AF37] italic font-serif">exceptional together.</span>"
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to elevate your digital presence? Fill out the form below or contact our executive team in Kalispell, Montana directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Details & Interactive Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                YOUBA LLC Headquarters
              </h3>

              <div className="space-y-4 text-sm text-gray-300 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Business Address</div>
                    <div className="text-gray-300">{COMPANY_INFO.address.street}</div>
                    <div className="text-gray-300">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}, {COMPANY_INFO.address.country}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="font-bold text-white">Direct Email</div>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#D4AF37] hover:underline">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="font-bold text-white">Corporate Phone</div>
                    <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-[#D4AF37] hover:underline">
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="font-bold text-white">Office Hours</div>
                    <div className="text-gray-400 text-xs">{COMPANY_INFO.contact.hours}</div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-mono text-gray-400 mb-3">Follow YOUBA LLC:</div>
                <div className="flex items-center gap-3">
                  <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all">
                    <Dribbble className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Kalispell Montana Google Map View */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-[#D4AF37] font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Kalispell, Montana Coordinates
                </span>
                <span>48.1920° N, 114.3161° W</span>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/80 flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] mx-auto flex items-center justify-center animate-bounce">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-xs font-bold text-white">YOUBA LLC Montana Campus</div>
                  <div className="text-[10px] text-gray-400 font-mono">1001 S MAIN ST, STE 600 • KALISPELL, MT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Luxury Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/30 shadow-2xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">
                        Project Brief Received
                      </h3>
                      <p className="text-gray-300 text-sm max-w-md mx-auto">
                        Thank you, {formData.name}! Our Montana executive team is reviewing your project details. We will contact you at <span className="text-[#D4AF37] font-mono">{formData.email}</span> within 24 business hours.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: 'Custom Website Development',
                          budget: '$25,000 - $50,000',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="text-2xl font-bold text-white">
                        Project Consultation Request
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Tell us about your objectives. We will prepare a custom proposal and ROI projection.
                      </p>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-300">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah Mitchell"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                          id="contact-name-input"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-300">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                          id="contact-email-input"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-300">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                          id="contact-phone-input"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-300">Company Name</label>
                        <input
                          type="text"
                          placeholder="Nexus Tech Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                          id="contact-company-input"
                        />
                      </div>
                    </div>

                    {/* Service Interested */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Primary Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                        id="contact-service-select"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-black text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Estimated Budget Tier */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Target Budget Tier *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['$15k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              formData.budget === tier
                                ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                                : 'bg-black/60 text-gray-300 border-white/10 hover:border-white/20'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-300">Project Details & Goals *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your timeline, business goals, and current pain points..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                        id="contact-message-input"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Consultation Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
