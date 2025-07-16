import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import EventGallery from '@/components/EventGallery';
import DonateSection from '@/components/DonateSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { ScrollAnimatedSection } from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ScrollAnimatedSection delay={100}>
        <AboutSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection delay={200}>
        <ProgramsSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection delay={100}>
        <EventGallery />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection delay={200}>
        <DonateSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection delay={100}>
        <ContactSection />
      </ScrollAnimatedSection>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
