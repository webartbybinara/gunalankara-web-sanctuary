import React from 'react';
import { DollarSign, BookOpen, Home, TreePine, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowToHelpSection = () => {
  const helpOptions = [
    {
      icon: DollarSign,
      title: 'Donate Monthly',
      description: 'Provide ongoing support for our programs',
      emoji: '💸'
    },
    {
      icon: BookOpen,
      title: 'Sponsor School Supplies',
      description: 'Help children access education',
      emoji: '🎒'
    },
    {
      icon: Home,
      title: 'Help Build a Home',
      description: 'Provide shelter for families in need',
      emoji: '🏠'
    },
    {
      icon: TreePine,
      title: 'Fund Tree Planting',
      description: 'Support environmental sustainability',
      emoji: '🌱'
    },
    {
      icon: Globe,
      title: 'Join Our Global Meditations',
      description: 'Connect with our worldwide community',
      emoji: '🧘‍♀️'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              How You Can Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Support a cause that uplifts lives through compassion and action.
            </p>
          </div>

          {/* Help Options Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {helpOptions.map((option, index) => (
              <Card key={index} className="text-center group hover:shadow-golden transition-all duration-300 border-border/50">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-3">{option.emoji}</div>
                  <CardTitle className="text-lg font-serif font-semibold">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {option.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="donate" size="xl" className="text-lg">
              Make a Donation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelpSection;