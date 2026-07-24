import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Share2, Sparkles } from 'lucide-react';
import { BlogArticle } from '../types';

interface ArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#020205] border border-[#D4AF37]/30 p-6 sm:p-10 shadow-2xl my-8 overflow-hidden max-h-[90vh] flex flex-col justify-between"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto space-y-6 pr-2">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 text-[#D4AF37] text-xs font-mono border border-white/10">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                {article.title}
              </h2>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-white">{article.author.name}</div>
                  <div className="text-[11px] text-gray-400">{article.author.role} • {article.publishedDate}</div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Main Content Body */}
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-white/10 pt-6">
              {article.content}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
            <span className="text-xs text-gray-400 font-mono">
              YOUBA LLC Agency Insights • {article.publishedDate}
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-bold cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Share Article</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
