import heroImage from '@/assets/hero-temple.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Peaceful Buddhist Temple" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-text mb-6">
          Welcome to Sri Gunalankara Buddhist Center
        </h1>
        <p className="text-xl md:text-2xl text-peaceful mb-8 max-w-2xl mx-auto">
          A sanctuary of peace, wisdom, and compassion where ancient Buddhist teachings 
          guide us toward inner harmony and enlightenment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-peaceful"
          >
            Learn More
          </button>
          <button 
            onClick={() => document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-donate"
          >
            Support Our Mission
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;