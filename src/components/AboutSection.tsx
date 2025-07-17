import React from 'react';
import { Heart, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import lotusImage from '@/assets/lotus-flower.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Action',
      description: 'Every program is designed to spread love and help those in need',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Users,
      title: 'Community Unity',
      description: 'Building stronger connections between temples and villages',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Reaching communities across Sri Lanka and beyond',
      color: 'text-lotus',
      bgColor: 'bg-lotus/10'
    },
    {
      icon: Award,
      title: 'Spiritual Excellence',
      description: 'Guided by authentic Buddhist teachings and traditions',
      color: 'text-meditation-blue',
      bgColor: 'bg-meditation-blue/10'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-peaceful"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-electric"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-primary font-medium">Our Mission</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Building Tomorrow's
              <span className="block text-foreground">Buddhist Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're transforming lives through authentic Buddhist values, creating lasting impact 
              in communities across Sri Lanka and around the world.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Compassion in Action
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At our foundation, we believe that true spiritual growth comes through service to others. 
                    Our comprehensive approach combines <span className="text-primary font-medium">traditional Buddhist wisdom</span> with 
                    <span className="text-accent font-medium"> modern community engagement</span>.
                  </p>
                  <p>
                    From Dhamma education for children to building homes for the needy, every initiative 
                    reflects our commitment to creating a more compassionate world. We bridge the gap 
                    between ancient teachings and contemporary needs.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Our Impact Areas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-glow transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Education & Dharma</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-glow transition-all duration-300">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Housing & Shelter</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-glow transition-all duration-300">
                    <div className="w-2 h-2 bg-lotus rounded-full"></div>
                    <span className="text-sm">Environmental Care</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover-glow transition-all duration-300">
                    <div className="w-2 h-2 bg-meditation-blue rounded-full"></div>
                    <span className="text-sm">Youth Development</span>
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative group">
                <img 
                  src={lotusImage} 
                  alt="Buddhist lotus symbolizing spiritual growth" 
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-electric/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-glass">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">25+ Years</div>
                  <div className="text-sm text-muted-foreground">of Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-glass group hover-lift border-none">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 lg:mt-32">
            <div className="inline-block p-8 lg:p-12 bg-gradient-electric/5 rounded-3xl border border-primary/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of compassionate individuals who are creating positive change 
                in communities across Sri Lanka and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Join Our Mission
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent/50 text-accent hover:bg-accent/10"
                >
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;