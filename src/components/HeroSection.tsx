import React, { useState, useEffect } from 'react';
import { Zap, ArrowDown, Sparkles, Play } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden floating-shapes">
      {/* Modern Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-75"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)'
        }}></div>
      </div>

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full animate-float-gentle" />
        <div className="absolute top-32 right-32 w-6 h-6 bg-accent/20 rounded-full animate-float-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-lotus/25 rounded-full animate-float-gentle" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-1/3 right-1/4 h-8 w-8 text-primary/30 animate-glow-pulse" />
        <Zap className="absolute bottom-1/3 left-1/3 h-6 w-6 text-accent/40 animate-electric-pulse" />
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block gradient-text mb-4">
                Transform
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-foreground font-light">
                Lives Through Compassion
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Join our global mission of spreading Buddhist values through 
            <span className="text-primary font-medium"> education</span>, 
            <span className="text-accent font-medium"> community service</span>, and 
            <span className="text-lotus font-medium"> spiritual growth</span>
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => scrollToSection('donate')}
              className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300 hover-glow group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-electric-pulse" />
              Start Your Impact
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('programs')}
              className="text-lg px-8 py-4 border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 hover-electric"
            >
              <Play className="w-5 h-5 mr-2" />
              Explore Programs
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span>Verified Non-Profit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>Global Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lotus rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              <span>Transparent Funding</span>
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-primary-glow transition-colors duration-300"
            >
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;