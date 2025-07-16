import React from 'react';
import { Flower, Users, Heart, Star } from 'lucide-react';
import lotusImage from '@/assets/lotus-flower.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-peaceful">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
                Our Mission of Compassion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At our core, we are a compassionate community-driven foundation committed to building a disciplined, spiritually enriched, and united society. Guided by the timeless teachings of the Buddha, we work to uplift individuals and families through meaningful educational, religious, and social initiatives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We organize Dhamma education for children, provide free extra classes for students, and support novice monks in their spiritual journey. Our outreach extends to honoring elderly communities, helping the underprivileged, planting trees for future generations, and building homes for those in need.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By strengthening the bond between temples and villages, creating opportunities for youth through sports and community service, and cultivating moral values, we strive to leave a lasting impact on society — one rooted in kindness, unity, and spiritual progress.
              </p>
            </div>

            <div className="relative">
              <img 
                src={lotusImage} 
                alt="Beautiful lotus flower" 
                className="w-full h-80 object-cover rounded-2xl shadow-golden"
              />
              <div className="absolute inset-0 bg-gradient-hero/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Flower,
                title: 'Community Service',
                description: 'Tree planting, building homes, shramadana, providing relief to the underprivileged.'
              },
              {
                icon: Heart,
                title: 'Dhamma & Education',
                description: 'Dhamma school, pirivena education, free extra classes, youth guidance, meditation.'
              },
              {
                icon: Users,
                title: 'Cultural & Spiritual Harmony',
                description: 'Alms-giving events, honoring monks, New Year festivals, supporting novice monks.'
              },
              {
                icon: Star,
                title: 'International Support',
                description: 'Connecting global communities through compassion and meaningful action.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;