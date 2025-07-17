import React from 'react';
import { BookOpen, School, Users, TreePine, Recycle, Baby, Volleyball, Heart, Home, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramsSection = () => {
  const programCategories = [
    {
      category: "Educational Programs",
      programs: [
        {
          title: 'Dhamma School for Children',
          description: 'Regular Sunday classes to guide children with Buddhist teachings and values',
          icon: BookOpen,
        },
        {
          title: 'Free Extra Classes for Students',
          description: 'Educational support for schoolchildren who need academic help at no cost',
          icon: School,
        },
        {
          title: 'Pirivena Quality Development Program',
          description: 'Improving teaching standards and facilities in monastic schools',
          icon: BookOpen,
        },
        {
          title: 'Moral Education Workshops',
          description: 'Training sessions to instill discipline and ethical thinking in youth',
          icon: Users,
        },
      ]
    },
    {
      category: "Community & Environment Programs",
      programs: [
        {
          title: 'Tree Planting Campaigns',
          description: 'Reforestation and eco-awareness events for a greener Sri Lanka',
          icon: TreePine,
        },
        {
          title: 'Community Service (Shramadana)',
          description: 'Clean-up and maintenance drives connecting temples and local villagers',
          icon: Users,
        },
        {
          title: 'Beautification Projects',
          description: 'Volunteer-driven efforts to create clean, welcoming public spaces',
          icon: Recycle,
        },
        {
          title: 'Crop Cultivation Projects',
          description: 'Events to promote essential agricultural practices for national sustainability',
          icon: TreePine,
        },
      ]
    },
    {
      category: "Child & Youth Empowerment",
      programs: [
        {
          title: 'Support for Novice Monks',
          description: 'Collecting school supplies and donations to assist young monks in education',
          icon: BookOpen,
        },
        {
          title: 'Parent-Child Bonding Programs',
          description: 'Activities that strengthen the relationship between children and their families',
          icon: Baby,
        },
        {
          title: 'New Year Celebrations for Children',
          description: 'Fun-filled Avurudu events to spread joy among children in rural areas',
          icon: Heart,
        },
        {
          title: 'Youth Sports Development',
          description: 'Sports events to encourage teamwork, health, and personal growth',
          icon: Volleyball,
        },
      ]
    },
    {
      category: "Social Welfare Initiatives",
      programs: [
        {
          title: 'Elderly Care Programs',
          description: 'Events organized to engage and support senior citizens with respect and joy',
          icon: Heart,
        },
        {
          title: 'Support for the Vulnerable',
          description: 'Providing aid to underprivileged and marginalized communities',
          icon: Users,
        },
        {
          title: 'Home Building for the Homeless',
          description: 'Projects to construct safe housing for people in need',
          icon: Home,
        },
        {
          title: 'Poya Day Alms-Giving',
          description: 'Monthly alms-giving events held on every full moon day to promote generosity and merit',
          icon: Calendar,
        },
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Community Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover various paths to spiritual growth and community service through our carefully designed programs 
              that cater to practitioners of all experience levels.
            </p>
          </div>

          {/* Programs by Category */}
          <div className="space-y-12 mb-16">
            {programCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.programs.map((program, programIndex) => (
                    <Card key={programIndex} className="group hover:shadow-golden transition-all duration-300 border-border/50 text-center">
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
              </div>
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