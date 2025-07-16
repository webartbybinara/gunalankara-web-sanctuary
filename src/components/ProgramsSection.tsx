import React from 'react';
import { Heart, Users, BookOpen, Home, Flower, Calendar, TreePine, HandHeart, School, Smile, Leaf, Baby, Globe, Wheat, Volleyball, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Elderly Programs',
      description: 'Bringing joy to seniors through special care events',
      icon: Heart,
    },
    {
      title: 'Full Moon Alms Giving',
      description: 'Monthly Poya Day rituals and offerings',
      icon: Calendar,
    },
    {
      title: 'Honoring Monks',
      description: 'Supporting those who protect the Dhamma',
      icon: HandHeart,
    },
    {
      title: 'Dhamma School',
      description: 'Guiding children through righteous education',
      icon: BookOpen,
    },
    {
      title: 'Free Classes',
      description: 'Supporting school children with education',
      icon: School,
    },
    {
      title: 'Moral Education',
      description: 'Nurturing disciplined, compassionate youth',
      icon: Smile,
    },
    {
      title: 'Shramadana & Public Work',
      description: 'Serving the village community',
      icon: Users,
    },
    {
      title: 'Green Programs',
      description: 'Tree planting for a sustainable future',
      icon: TreePine,
    },
    {
      title: 'Support for Vulnerable Families',
      description: 'Shelter, relief, school supplies',
      icon: Home,
    },
    {
      title: 'New Year Festivals',
      description: 'Celebrations that unite families and culture',
      icon: Flower,
    },
    {
      title: 'Pirivena Development',
      description: 'Enhancing monastic learning',
      icon: BookOpen,
    },
    {
      title: 'Sports & Wellness',
      description: 'Engaging youth through health and sports',
      icon: Volleyball,
    },
    {
      title: 'Clean Environment Drives',
      description: 'Voluntary efforts for beauty and hygiene',
      icon: Recycle,
    },
    {
      title: 'Parent-Child Programs',
      description: 'Strengthening family bonds',
      icon: Baby,
    },
    {
      title: 'Global Meditation Events',
      description: 'Connecting foreign and local communities',
      icon: Globe,
    },
    {
      title: 'Crop Cultivation Projects',
      description: 'Sustainability through farming',
      icon: Wheat,
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover various paths to spiritual growth through our carefully designed programs 
              that cater to practitioners of all experience levels.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-golden transition-all duration-300 border-border/50 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif font-semibold">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-peaceful rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-4">
              Join Our Mission of Compassion
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every program we offer is designed to spread compassion and support those in need. 
              Your participation and support help us expand our reach across Sri Lankan communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="donate" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Support Our Programs
              </Button>
              <Button variant="peaceful" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;