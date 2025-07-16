import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import DonateSection from '@/components/DonateSection';
import StoriesSection from '@/components/StoriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <DonateSection />
      <StoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
