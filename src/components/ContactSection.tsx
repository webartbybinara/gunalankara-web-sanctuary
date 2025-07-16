import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Peaceful Lane", "Harmony City, HC 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Available 9 AM - 6 PM"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@srigunalankara.org", "meditation@srigunalankara.org"]
    },
    {
      icon: Clock,
      title: "Temple Hours",
      details: ["Mon-Fri: 6 AM - 8 PM", "Sat-Sun: 5 AM - 9 PM"]
    }
  ];

  return (
    <section id="contact" className="section-peaceful">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Center
          </h2>
          <p className="text-peaceful text-lg max-w-2xl mx-auto">
            We welcome you to visit our peaceful sanctuary. Come as you are, 
            leave with inner peace and wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg flex-shrink-0">
                  <info.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-peaceful">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="card-temple">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you on your spiritual journey?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-donate"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;