import { Quote } from 'lucide-react';

const StoriesSection = () => {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Community Member",
      story: "Finding Sri Gunalankara changed my life. The meditation classes helped me discover inner peace during a difficult time. The compassionate community here feels like family.",
      duration: "Member for 3 years"
    },
    {
      name: "Michael Rodriguez",
      role: "Volunteer",
      story: "Volunteering in the community outreach programs has taught me the true meaning of compassion. Every act of service brings joy and deeper understanding of Buddhist teachings.",
      duration: "Volunteer for 2 years"
    },
    {
      name: "Dr. Priya Patel",
      role: "Dharma Student",
      story: "The wisdom I've gained through studying here has transformed how I approach both my medical practice and personal relationships. Buddhism has made me a better healer.",
      duration: "Student for 5 years"
    }
  ];

  return (
    <section id="stories" className="section-peaceful bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Transformation
          </h2>
          <p className="text-peaceful text-lg max-w-2xl mx-auto">
            Hear from our community members about their journey of spiritual growth 
            and the positive impact of Buddhist practice in their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="card-temple relative">
              <Quote className="text-primary opacity-20 absolute top-4 right-4" size={32} />
              <div className="relative z-10">
                <p className="text-peaceful italic text-lg mb-6 leading-relaxed">
                  "{story.story}"
                </p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">{story.name}</h4>
                  <p className="text-primary text-sm font-medium">{story.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{story.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-peaceful">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;