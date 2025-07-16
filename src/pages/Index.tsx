import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import DonateSection from '@/components/DonateSection';
import HowToHelpSection from '@/components/HowToHelpSection';
import StoriesSection from '@/components/StoriesSection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <DonateSection />
      <HowToHelpSection />
      <StoriesSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
