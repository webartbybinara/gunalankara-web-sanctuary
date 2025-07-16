import lotusImage from '@/assets/lotus-peaceful.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-peaceful bg-gradient-peaceful">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Sri Gunalankara Buddhist Center
            </h2>
            <div className="space-y-6">
              <p className="text-peaceful text-lg">
                For over three decades, Sri Gunalankara Buddhist Center has been a beacon of 
                Buddhist wisdom and compassion in our community. Founded on the timeless 
                teachings of the Buddha, we provide a sacred space for spiritual growth, 
                meditation, and the practice of loving-kindness.
              </p>
              <p className="text-peaceful text-lg">
                Our center welcomes people from all backgrounds and walks of life, offering 
                guidance on the path to inner peace and enlightenment. Through meditation, 
                study, and community service, we strive to embody the Buddhist principles 
                of compassion, wisdom, and mindfulness.
              </p>
              <p className="text-peaceful text-lg">
                Join us in creating a more peaceful world, one heart at a time.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={lotusImage} 
              alt="Peaceful lotus flowers" 
              className="rounded-xl shadow-temple w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;