import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#020205] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl my-8 overflow-hidden max-h-[85vh] flex flex-col justify-between"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto space-y-4 pr-2">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>YOUBA LLC Corporate Legal Compliance</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs sm:text-sm text-gray-300 space-y-3 leading-relaxed border-t border-white/10 pt-4">
              <p>
                <strong>Effective Date:</strong> July 2026
              </p>
              <p>
                YOUBA LLC ("Agency", "We", "Us") operates under the registered address 1001 S MAIN ST, STE 600, KALISPELL, MT 59901, USA.
              </p>
              {type === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Information Collection:</strong> We collect client business contact information, project specifications, and inquiry data strictly for providing custom agency services. We do not sell or lease personal data to third parties.
                  </p>
                  <p>
                    <strong>2. Data Protection & Security:</strong> All client communications and code repositories are safeguarded under enterprise-grade 256-bit encryption standards and strict non-disclosure agreements (NDAs).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Intellectual Property Ownership:</strong> Upon full payment of engagement fees, YOUBA LLC transfers 100% of custom design assets, source code repositories, and brand tokens directly to the client.
                  </p>
                  <p>
                    <strong>2. Service Commitments:</strong> All project deliverables undergo rigorous multi-device testing and Core Web Vitals speed optimization prior to formal deployment.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
