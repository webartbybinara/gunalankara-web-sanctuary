import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EventGallery = () => {
  const eventImages = [
    {
      src: '/lovable-uploads/ab3f2dba-dc53-4056-b483-b71e8559c667.png',
      alt: 'Young monks in training during educational session',
      title: 'Dhamma School for Young Monks'
    },
    {
      src: '/lovable-uploads/6346f266-e4ac-4139-b8a5-bfd296703a0d.png',
      alt: 'Community meditation gathering with families',
      title: 'Community Meditation Session'
    },
    {
      src: '/lovable-uploads/817560d2-11f1-4f5c-8716-d4f9e9188a4d.png',
      alt: 'Large community gathering for religious ceremony',
      title: 'Monthly Poya Day Celebration'
    },
    {
      src: '/lovable-uploads/33d5f412-b144-41fb-8f10-776740be3512.png',
      alt: 'Monk teaching community members and children',
      title: 'Dhamma Teaching & Community Education'
    },
    {
      src: '/lovable-uploads/ad72ddaf-2f72-4bb7-859d-d6521b0489ca.png',
      alt: 'Senior monks sitting in traditional meditation pose',
      title: 'Senior Monks Meditation'
    },
    {
      src: '/lovable-uploads/c5bade97-a77f-49bc-85fd-b4d59fb1840a.png',
      alt: 'Families with children participating in temple activities',
      title: 'Parent-Child Bonding Programs'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Event Memories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cherished moments from our community programs, religious ceremonies, and educational activities 
              that bring our temple family together in the spirit of Dhamma.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-golden transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-foreground font-serif font-semibold text-lg leading-tight">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              "Through community service and shared practice, we cultivate compassion and wisdom together"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;