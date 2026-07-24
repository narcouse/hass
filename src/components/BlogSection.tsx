import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Clock, Search, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/agencyData';
import { BlogArticle } from '../types';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & Automation', 'Web Design', 'SEO & Growth', 'Brand Strategy'];

  const featuredArticle = BLOG_ARTICLES.find(a => a.featured) || BLOG_ARTICLES[0];

  const filteredArticles = BLOG_ARTICLES.filter(a => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="relative py-28 bg-[#020205] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>YOUBA Agency Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Digital Strategy & <span className="text-[#D4AF37] italic font-serif">Thought Leadership</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            In-depth guides on AI, custom web engineering, luxury brand design, and search engine domination.
          </p>
        </div>

        {/* Featured Article Card */}
        <div className="mb-16">
          <div
            onClick={() => setSelectedArticle(featuredArticle)}
            className="group relative rounded-3xl bg-white/[0.03] border border-[#D4AF37]/30 overflow-hidden cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:bg-white/[0.06] transition-all"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider">
                    Featured Playbook
                  </span>
                  <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{featuredArticle.author.name}</div>
                    <div className="text-[10px] text-gray-400">{featuredArticle.publishedDate}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.filter(a => a.id !== featuredArticle.id).map((article) => (
            <motion.div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/[0.06] overflow-hidden cursor-pointer flex flex-col justify-between transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-[#D4AF37] text-xs font-mono border border-white/10">
                  {article.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    {article.readTime} • {article.publishedDate}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#D4AF37]">
                  <span>Read Insight</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
