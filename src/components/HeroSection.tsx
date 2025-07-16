import React, { useState, useEffect } from 'react';
import { Heart, ArrowDown, Flower } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-meditation.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dharma-wheel">
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-75"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/60"></div>
      </div>

      {/* Floating Buddhist Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Flower className="absolute top-20 left-20 h-8 w-8 text-primary/20 animate-lotus-float" />
        <Flower className="absolute top-32 right-32 h-6 w-6 text-primary/15 animate-lotus-float" style={{ animationDelay: '1s' }} />
        <Flower className="absolute bottom-40 left-40 h-10 w-10 text-primary/10 animate-lotus-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 text-6xl opacity-5 animate-dharma-spin">☸</div>
      </div>

      {/* Enhanced Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="animate-parallax-float">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Uplifting Lives Through
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-primary mt-2 animate-fade-in-up">
              Buddhist Values
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Join us in spreading compassion through education, service, and community programs across Sri Lanka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="donate" 
              size="xl"
              onClick={() => scrollToSection('donate')}
              className="text-lg hover-glow focus-ring shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            
            <Button 
              variant="peaceful" 
              size="xl"
              onClick={() => scrollToSection('programs')}
              className="text-lg hover-lift focus-ring"
            >
              See Our Work
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-muted-foreground text-sm opacity-70">Scroll to explore</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-primary hover-scale focus-ring"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;