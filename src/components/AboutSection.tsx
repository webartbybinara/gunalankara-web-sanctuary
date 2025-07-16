import React from 'react';
import { Flower, Users, Heart, Star } from 'lucide-react';
import lotusImage from '@/assets/lotus-flower.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-peaceful">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              A Place of Peace, Learning, and Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sri Gunalankara Buddhist Center is dedicated to preserving the timeless teachings of the Buddha while uplifting lives.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
                Our Mission of Compassion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sri Gunalankara Buddhist Center is dedicated to preserving the timeless teachings of the Buddha 
                while uplifting the lives of individuals and communities through compassion-driven programs. 
                From supporting elders and children to promoting Dhamma education and environmental care, 
                our mission blends spiritual development with meaningful action.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true spiritual growth comes through service to others, and our programs 
                reflect this philosophy by addressing both the spiritual and material needs of our community.
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