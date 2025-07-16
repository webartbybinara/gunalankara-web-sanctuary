import { Heart, Home, BookOpen, Users } from 'lucide-react';
import prayerBeadsImage from '@/assets/prayer-beads.jpg';

const DonateSection = () => {
  const donationImpacts = [
    {
      icon: Home,
      title: "Temple Maintenance",
      description: "Help preserve our sacred space for future generations"
    },
    {
      icon: BookOpen,
      title: "Educational Programs",
      description: "Support Dharma classes and spiritual education"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Fund charitable activities and community support"
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Enable meditation retreats and spiritual guidance"
    }
  ];

  return (
    <section id="donate" className="section-peaceful bg-gradient-sunset">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Support Our Sacred Mission
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Your generous donations help us maintain our temple, support our community, 
              and share the gift of Buddhist wisdom with all who seek peace and understanding. 
              Every contribution, no matter the size, makes a meaningful difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {donationImpacts.map((impact, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <impact.icon className="text-white" size={20} />
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {impact.title}
                      </h4>
                      <p className="text-white/80 text-xs">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors duration-300">
                Donate Now
              </button>
              <button className="bg-white/20 text-white border border-white/30 font-medium px-8 py-4 rounded-lg hover:bg-white/30 transition-colors duration-300">
                Monthly Giving
              </button>
            </div>
          </div>

          <div className="relative">
            <img 
              src={prayerBeadsImage} 
              alt="Prayer beads in meditation" 
              className="rounded-xl shadow-lotus w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;