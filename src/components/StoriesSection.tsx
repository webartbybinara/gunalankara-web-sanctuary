import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import monksImage from '@/assets/monks-meditation.jpg';

const StoriesSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'International Donor',
      content: 'Supporting Sri Gunalankara gives me peace knowing I am making a difference in the lives of people across Sri Lanka.',
      rating: 5
    },
    {
      name: 'Kumari Perera',
      role: 'Parent',
      content: 'My child now attends school thanks to the free classes. The education and moral guidance have transformed our family.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Global Meditation Participant',
      content: 'The online meditation sessions connect me with this beautiful community. The teachings have brought peace to my daily life.',
      rating: 5
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-peaceful">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Stories of Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our community members about their journey of spiritual growth and 
              the positive impact our center has had on their lives.
            </p>
          </div>

          {/* Featured Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={monksImage} 
                alt="Monks in meditation" 
                className="w-full h-80 object-cover rounded-2xl shadow-golden"
              />
              <div className="absolute inset-0 bg-gradient-hero/10 rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary">
                <Quote className="w-8 h-8" />
                <span className="text-sm font-semibold uppercase tracking-wide">Featured Story</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
                Real Impact Stories
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                "Thanks to the support from donors like you, we built a new home for the Rajapaksa family 
                whose house was destroyed in the floods. The children can now focus on their studies 
                in a safe, dry environment. This is what compassion in action looks like."
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-serif font-semibold">VT</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Venerable Thero</p>
                  <p className="text-sm text-muted-foreground">Project Coordinator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-golden transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-6 h-6 text-primary/50 mb-4" />
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                  
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;