import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Programs', id: 'programs' },
    { label: 'Stories', id: 'stories' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-primary to-primary-glow shadow-md' 
                : 'bg-primary shadow-lg'
            } group-hover:scale-110 animate-lotus-float`}>
              <span className="text-xs">🪷</span>
            </div>
            <span className={`text-lg lg:text-xl font-serif font-semibold transition-all duration-300 ${
              isScrolled ? 'text-foreground' : 'text-foreground'
            }`}>
              Sri Gunalankara
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="nav"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="mx-1 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 focus-ring"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Enhanced Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="donate"
              size="lg"
              onClick={() => scrollToSection('donate')}
              className="hidden sm:flex hover-glow focus-ring shadow-md"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Button>
            
            <Button
              variant="donate"
              size="sm"
              onClick={() => scrollToSection('donate')}
              className="sm:hidden hover-glow focus-ring"
            >
              <Heart className="w-4 h-4" />
            </Button>

            {/* Enhanced Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden hover-scale focus-ring"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start text-left px-3 py-2 transition-all duration-300 hover:translate-x-2 focus-ring animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;