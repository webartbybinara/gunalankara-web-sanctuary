import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import EventGallery from '@/components/EventGallery';
import DonateSection from '@/components/DonateSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <EventGallery />
      <DonateSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
