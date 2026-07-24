import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

export default function App() {
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [estimatorService, setEstimatorService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  const handleOpenEstimator = (serviceTitle?: string) => {
    setEstimatorService(serviceTitle);
    setEstimatorOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#020205] text-white font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar
        onOpenEstimator={() => handleOpenEstimator()}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onStartProject={() => handleOpenEstimator()}
          onViewWork={() => handleScrollToSection('portfolio')}
        />

        {/* Trust & Social Proof Section */}
        <TrustSection />

        {/* About YOUBA LLC Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onOpenEstimator={handleOpenEstimator} />

        {/* Case Studies & Portfolio */}
        <PortfolioSection onStartProject={() => handleOpenEstimator()} />

        {/* Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Why Choose Us */}
        <WhyChooseUs onStartProject={() => handleOpenEstimator()} />

        {/* 7-Step Process */}
        <ProcessSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Agency Insights & Magazine */}
        <BlogSection />

        {/* Contact Section */}
        <ContactSection initialService={estimatorService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenEstimator={() => handleOpenEstimator()}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Project Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        initialService={estimatorService}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyTermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
