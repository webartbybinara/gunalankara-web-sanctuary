import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

          {/* Main Contact Card */}
          <div className="bg-gradient-peaceful rounded-2xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-6">
                  Plan Your First Visit
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We encourage you to join us for any of our regular programs. No prior experience 
                  or registration is required - simply arrive with an open heart and mind.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Sunday Meditation</p>
                      <p className="text-sm text-muted-foreground">Perfect for first-time visitors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Wednesday Dharma Study</p>
                      <p className="text-sm text-muted-foreground">Interactive learning sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Saturday Beginners Class</p>
                      <p className="text-sm text-muted-foreground">Gentle introduction to meditation</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" size="lg">
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </Button>
                  <Button variant="peaceful" size="lg">
                    <Mail className="w-5 h-5" />
                    Send Message
                  </Button>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Comfortable, quiet environment for meditation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Welcoming community of practitioners</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Guidance for beginners available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>No cost or obligation to attend</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Parking available on-site</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;