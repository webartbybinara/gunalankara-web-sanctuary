import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: "Thank you for subscribing!",
        description: "You have successfully joined our global community of compassionate supporters.",
      });
      setEmail('');
      setName('');
    }
  };

  return (
    <section className="py-20 bg-gradient-peaceful">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Join Our Global Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our global community of compassionate supporters. Stay updated with our latest 
              programs, impact stories, and spiritual teachings.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
            </div>
            <Button type="submit" variant="donate" size="lg" className="w-full sm:w-auto">
              <Send className="w-5 h-5 mr-2" />
              Subscribe to Updates
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            We respect your privacy. Unsubscribe at any time. No spam, just meaningful updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;