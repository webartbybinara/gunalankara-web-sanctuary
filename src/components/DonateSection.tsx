import React from 'react';
import { Heart, Zap, Shield, Globe, ArrowRight, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DonateSection = () => {
  const donationTiers = [
    {
      amount: '$25',
      title: 'Supporter',
      description: 'Provides educational materials for 5 children',
      impact: 'Monthly Dhamma classes',
      icon: Heart,
      popular: false
    },
    {
      amount: '$75',
      title: 'Advocate',
      description: 'Funds a complete student support package',
      impact: 'Full academic assistance',
      icon: Gift,
      popular: true
    },
    {
      amount: '$150',
      title: 'Champion',
      description: 'Supports a family housing project',
      impact: 'Builds hope & shelter',
      icon: Shield,
      popular: false
    }
  ];

  const impactAreas = [
    {
      icon: Heart,
      title: 'Education & Development',
      description: 'Fund Dhamma schools, free tutoring, and skill development programs',
      percentage: '40%',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Globe,
      title: 'Community Projects',
      description: 'Support housing, environmental, and infrastructure initiatives',
      percentage: '35%',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Shield,
      title: 'Emergency Relief',
      description: 'Provide immediate assistance during crises and natural disasters',
      percentage: '15%',
      color: 'text-lotus',
      bgColor: 'bg-lotus/10'
    },
    {
      icon: Zap,
      title: 'Operations & Growth',
      description: 'Maintain programs and expand our reach to new communities',
      percentage: '10%',
      color: 'text-meditation-blue',
      bgColor: 'bg-meditation-blue/10'
    }
  ];

  return (
    <section id="donate" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="w-64 h-64 bg-gradient-electric rounded-full blur-3xl absolute top-20 left-20 animate-float-gentle"></div>
        <div className="w-48 h-48 bg-gradient-to-r from-accent to-lotus rounded-full blur-2xl absolute bottom-20 right-20 animate-float-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-primary font-medium">Make an Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Transform Lives</span>
              <span className="block text-foreground">With Your Support</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every donation directly funds programs that provide education, shelter, spiritual guidance, 
              and community support across Sri Lankan communities.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {donationTiers.map((tier, index) => (
              <Card key={index} className={`card-glass group hover-lift transition-all duration-500 text-center ${tier.popular ? 'scale-105 border-2 border-primary/50' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="space-y-4 pt-8">
                  <div className="w-16 h-16 bg-gradient-electric/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <tier.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">{tier.amount}</div>
                    <CardTitle className="text-xl font-bold text-foreground mt-2">
                      {tier.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {tier.description}
                  </CardDescription>
                  
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm font-medium text-primary">{tier.impact}</div>
                  </div>
                  
                  <Button 
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                    className={`w-full transition-all duration-300 group/btn ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-primary to-primary-glow hover:scale-105' 
                        : 'border-2 border-primary/30 text-primary hover:bg-primary/10 hover-electric'
                    }`}
                  >
                    <Heart className="w-5 h-5 mr-2 group-hover/btn:animate-electric-pulse" />
                    Donate {tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How Your Money is Used */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Transparent Impact Distribution
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See exactly how your donations create meaningful change in communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactAreas.map((area, index) => (
                <Card key={index} className="card-glass group hover-lift">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 ${area.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <area.icon className={`w-6 h-6 ${area.color}`} />
                      </div>
                      <div className={`text-2xl font-bold ${area.color}`}>
                        {area.percentage}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <div className="inline-block p-8 lg:p-12 bg-gradient-electric/5 rounded-3xl border border-primary/20 max-w-4xl">
              <div className="w-20 h-20 bg-gradient-electric/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Start Your Journey of Giving
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of compassionate supporters who are creating lasting change. 
                Every contribution, no matter the size, makes a meaningful difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  variant="default" 
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300 group"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-electric-pulse" />
                  Donate Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-accent/50 text-accent hover:bg-accent/10 hover-electric"
                >
                  Set Up Monthly Giving
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <span>Registered Non-Profit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-lotus" />
                  <span>100% Transparent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;