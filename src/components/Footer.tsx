import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Mission */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-serif font-semibold">
                  Sri Gunalankara Buddhist Center
                </span>
              </div>
              <p className="text-background/80 leading-relaxed mb-6 max-w-md">
                Dedicated to preserving Buddhist teachings while uplifting lives through compassion-driven 
                programs across Sri Lankan communities. Join us in spreading compassion through education, 
                service, and spiritual development.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Our Programs', id: 'programs' },
                  { label: 'Stories', id: 'stories' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-background/80 hover:text-background transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-background/80">
                    <p>Sri Gunalankara Buddhist Center</p>
                    <p>Sri Lanka</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-background/80">+94 XX XXX XXXX</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-background/80">info@srigunalankarabc.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Sri Gunalankara Buddhist Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;