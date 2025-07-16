import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Sri Gunalankara Buddhist Center\nSri Lanka',
      description: 'Our temple welcomes all visitors'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@srigunalankarabc.org\nwelcome@srigunalankarabc.org',
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+94 XX XXX XXXX',
      description: 'Direct communication available'
    },
    {
      icon: Clock,
      title: 'Temple Hours',
      content: 'Daily: 6:00 AM - 8:00 PM\nSpecial Programs: Check Schedule',
      description: 'Open for prayer and meditation'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reach out to learn more about our programs, volunteer opportunities, or to get involved 
              in our mission of spreading compassion throughout Sri Lankan communities.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-golden transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif font-semibold">
                    {info.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground whitespace-pre-line font-medium">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;