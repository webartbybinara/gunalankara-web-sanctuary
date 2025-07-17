import React, { useState } from 'react';
import { BookOpen, School, Users, TreePine, Heart, Home, Calendar, Baby, Volleyball, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const programCategories = [
    {
      id: 'education',
      name: 'Education',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      programs: [
        {
          title: 'Dhamma School Excellence',
          description: 'Comprehensive Buddhist education program with modern teaching methods and digital resources',
          icon: BookOpen,
          impact: '500+ children enrolled',
          featured: true
        },
        {
          title: 'Academic Support Hub',
          description: 'Free tutoring and educational resources for underprivileged students',
          icon: School,
          impact: '200+ students supported'
        },
        {
          title: 'Pirivena Innovation',
          description: 'Modernizing monastic education with technology and contemporary teaching approaches',
          icon: BookOpen,
          impact: '15 institutions upgraded'
        },
        {
          title: 'Youth Leadership Training',
          description: 'Developing next-generation community leaders through mentorship and skills training',
          icon: Users,
          impact: '100+ leaders trained'
        }
      ]
    },
    {
      id: 'community',
      name: 'Community',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      programs: [
        {
          title: 'Green Sri Lanka Initiative',
          description: 'Large-scale reforestation and environmental conservation projects across the island',
          icon: TreePine,
          impact: '10,000+ trees planted',
          featured: true
        },
        {
          title: 'Village Unity Project',
          description: 'Community-driven development projects that strengthen temple-village relationships',
          icon: Users,
          impact: '50+ villages reached'
        },
        {
          title: 'Sustainable Living Program',
          description: 'Teaching eco-friendly practices and sustainable agriculture to rural communities',
          icon: TreePine,
          impact: '1,000+ families trained'
        }
      ]
    },
    {
      id: 'welfare',
      name: 'Welfare',
      color: 'text-lotus',
      bgColor: 'bg-lotus/10',
      programs: [
        {
          title: 'Home for Hope',
          description: 'Building quality housing for homeless families with community involvement',
          icon: Home,
          impact: '75 homes built',
          featured: true
        },
        {
          title: 'Elder Care Network',
          description: 'Comprehensive support system for elderly community members',
          icon: Heart,
          impact: '300+ elders supported'
        },
        {
          title: 'Children\'s Joy Festival',
          description: 'Annual celebrations bringing happiness to children in rural areas',
          icon: Baby,
          impact: '2,000+ children celebrated'
        },
        {
          title: 'Sports for All',
          description: 'Youth sports programs promoting physical health and teamwork',
          icon: Volleyball,
          impact: '15 sports centers'
        }
      ]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Programs' },
    { id: 'education', name: 'Education' },
    { id: 'community', name: 'Community' },
    { id: 'welfare', name: 'Welfare' }
  ];

  const getFilteredPrograms = () => {
    if (activeFilter === 'all') {
      return programCategories.flatMap(category => 
        category.programs.map(program => ({ ...program, category: category.name, categoryColor: category.color }))
      );
    }
    const category = programCategories.find(cat => cat.id === activeFilter);
    return category ? category.programs.map(program => ({ ...program, category: category.name, categoryColor: category.color })) : [];
  };

  return (
    <section id="programs" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
              <span className="text-accent font-medium">Programs & Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Transforming Lives</span>
              <span className="block text-foreground">Through Action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive programs designed to create lasting positive change 
              in communities across Sri Lanka and beyond.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-primary to-primary-glow shadow-lg' 
                    : 'border-2 border-muted hover:border-primary/50 hover-electric'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {getFilteredPrograms().map((program, index) => (
              <Card key={index} className={`card-glass group hover-lift transition-all duration-500 ${program.featured ? 'lg:scale-105 border-2 border-primary/30' : ''}`}>
                <CardHeader className="space-y-4">
                  {program.featured && (
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary w-fit">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow-pulse"></div>
                      Featured Program
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 ${program.categoryColor === 'text-primary' ? 'bg-primary/10' : program.categoryColor === 'text-accent' ? 'bg-accent/10' : 'bg-lotus/10'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className={`w-7 h-7 ${program.categoryColor || 'text-primary'}`} />
                    </div>
                    {program.category && (
                      <span className={`text-xs font-medium px-2 py-1 rounded-md ${program.categoryColor === 'text-primary' ? 'bg-primary/10 text-primary' : program.categoryColor === 'text-accent' ? 'bg-accent/10 text-accent' : 'bg-lotus/10 text-lotus'}`}>
                        {program.category}
                      </span>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                  
                  {program.impact && (
                    <div className="flex items-center gap-2 p-3 bg-card/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                      <span className="text-sm font-medium text-foreground">{program.impact}</span>
                    </div>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full text-primary hover:bg-primary/10 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '50,000+', label: 'Lives Impacted', icon: Heart },
              { number: '100+', label: 'Active Programs', icon: BookOpen },
              { number: '25+', label: 'Countries Reached', icon: TreePine },
              { number: '15 Years', label: 'of Service', icon: Calendar }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-electric/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block p-8 lg:p-12 bg-gradient-electric/5 rounded-3xl border border-primary/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Create Impact?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our mission and help us expand these life-changing programs to reach 
                even more communities in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Programs
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent/50 text-accent hover:bg-accent/10"
                >
                  Volunteer With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;