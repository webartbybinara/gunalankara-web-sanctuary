import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-meditation.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Peaceful Buddhist meditation hall" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Uplifting Lives Through
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-primary mt-2">
              Buddhist Values
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us in spreading compassion through education, service, and community programs across Sri Lanka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="donate" 
              size="xl"
              onClick={() => scrollToSection('donate')}
              className="text-lg"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            
            <Button 
              variant="peaceful" 
              size="xl"
              onClick={() => scrollToSection('programs')}
              className="text-lg"
            >
              See Our Work
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-primary"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;