import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, ArrowRight, CheckCircle2, Sparkles, DollarSign, Clock, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Custom Website Development']
  );
  const [budgetTier, setBudgetTier] = useState<string>('$25,000 - $50,000');
  const [timeline, setTimeline] = useState<string>('4 - 6 Weeks');
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  // Calculate estimated range
  const basePricePerService = 12000;
  const estimatedMin = selectedServices.length * basePricePerService;
  const estimatedMax = estimatedMin * 1.8;

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#020205] border border-[#D4AF37]/30 p-6 sm:p-10 shadow-2xl my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Project Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Calculate Your Custom Digital Agency Investment
            </h3>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">
                  Estimate Proposal Generated
                </h4>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you, {formData.name}! Your custom scope estimate of{' '}
                  <span className="text-[#D4AF37] font-bold font-mono">
                    ${estimatedMin.toLocaleString()} - ${estimatedMax.toLocaleString()}
                  </span>{' '}
                  has been sent to our executive board.
                </p>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white transition-all cursor-pointer"
              >
                Close Estimator
              </button>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#D4AF37] font-bold">
                      Step 1: Select Desired Services (Multiple Allowed)
                    </label>
                    <p className="text-xs text-gray-400">
                      Choose all disciplines required for your initiative:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-2">
                    {SERVICES_DATA.map((srv) => {
                      const selected = selectedServices.includes(srv.title);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleService(srv.title)}
                          className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                            selected
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white font-bold'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-medium">{srv.title}</span>
                          {selected && <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Estimate Display Box */}
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-gray-400">Estimated Investment Range</div>
                      <div className="text-xl font-bold text-[#D4AF37]">
                        ${estimatedMin.toLocaleString()} – ${estimatedMax.toLocaleString()} USD
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleFinish} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#D4AF37] font-bold">
                      Step 2: Contact & Company Details
                    </label>
                    <p className="text-xs text-gray-400">
                      Where should we send your formal scope breakdown?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Mitchell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-gray-300">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-300">Company Name</label>
                    <input
                      type="text"
                      placeholder="Nexus Technologies"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white cursor-pointer"
                    >
                      Back to Services
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white transition-all shadow-xl cursor-pointer"
                    >
                      Generate Custom Proposal
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
