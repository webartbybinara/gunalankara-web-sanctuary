import { Heart, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background section-peaceful">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Center Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Sri Gunalankara Buddhist Center
            </h3>
            <p className="text-background/80 mb-4">
              A sanctuary of peace, wisdom, and compassion where ancient Buddhist 
              teachings guide us toward inner harmony and enlightenment.
            </p>
            <div className="flex space-x-4">
              <button className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors">
                <Facebook size={20} />
              </button>
              <button className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors">
                <Twitter size={20} />
              </button>
              <button className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors">
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#stories')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Schedule */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Upcoming Programs</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>Meditation Classes - Tue & Thu 7PM</li>
              <li>Dharma Study - Saturdays 2PM</li>
              <li>Community Service - Monthly</li>
              <li>Mindfulness Retreat - Quarterly</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Sri Gunalankara Buddhist Center. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-primary" /> for spiritual growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;