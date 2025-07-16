import { Heart, Users, BookOpen, Flower2 } from 'lucide-react';
import meditationImage from '@/assets/meditation-monks.jpg';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Heart,
      title: "Meditation Classes",
      description: "Weekly guided meditation sessions for beginners and experienced practitioners.",
      schedule: "Every Tuesday & Thursday, 7:00 PM"
    },
    {
      icon: BookOpen,
      title: "Dharma Study",
      description: "In-depth study of Buddhist teachings, sutras, and philosophical texts.",
      schedule: "Saturdays, 2:00 PM"
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Volunteer opportunities to practice compassion through helping others.",
      schedule: "Monthly community outreach"
    },
    {
      icon: Flower2,
      title: "Mindfulness Retreats",
      description: "Day-long and weekend retreats for deeper spiritual practice and reflection.",
      schedule: "Quarterly retreats"
    }
  ];

  return (
    <section id="programs" className="section-peaceful">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-peaceful text-lg max-w-2xl mx-auto">
            Discover various paths to spiritual growth and community connection through 
            our diverse offerings rooted in Buddhist wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="card-temple">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <program.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-peaceful mb-2">
                      {program.description}
                    </p>
                    <p className="text-primary font-medium text-sm">
                      {program.schedule}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <img 
              src={meditationImage} 
              alt="Monks in meditation" 
              className="rounded-xl shadow-temple w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-peaceful">
            View Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;