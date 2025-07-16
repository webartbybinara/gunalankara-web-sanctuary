import React from 'react';
import { Heart, Lightbulb, Home, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DonateSection = () => {
  const donationImpacts = [
    {
      icon: Home,
      title: 'Maintain Our Center',
      description: 'Help us keep our doors open and maintain our peaceful sanctuary.'
    },
    {
      icon: BookOpen,
      title: 'Educational Programs',
      description: 'Support our dharma classes, workshops, and spiritual education.'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Enable us to serve those in need through compassionate action.'
    },
    {
      icon: Lightbulb,
      title: 'Special Events',
      description: 'Fund retreats, guest teachers, and special ceremonies.'
    }
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Your Support Can Transform Lives
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With your help, we can expand our reach and continue our mission. International donations fund 
              educational programs, housing, spiritual guidance, and community care.
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {donationImpacts.map((impact, index) => (
              <Card key={index} className="text-center group hover:shadow-golden transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <impact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif font-semibold">
                    {impact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {impact.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Donation Call to Action */}
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-golden">
            <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 animate-golden-glow">
              <Heart className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-4">
              Be a Part of Something Meaningful
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Support a cause that uplifts lives through compassion and action. Your contribution directly 
              funds programs that provide education, shelter, spiritual guidance, and community support 
              across Sri Lankan communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="donate" size="xl" className="text-lg">
                <Heart className="w-5 h-5" />
                Donate Now
              </Button>
              <Button variant="peaceful" size="xl" className="text-lg">
                View Impact Stories
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Secure payment processing. All donations go directly to projects.
              Sri Gunalankara Buddhist Center is a registered non-profit organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;