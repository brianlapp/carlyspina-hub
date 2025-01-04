import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const IntroSection = () => {
  const handleBookNow = () => {
    window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank');
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-sage-50/50 to-white overflow-hidden">
      {/* ShootingStars with lower z-index */}
      <div className="absolute inset-0 z-0">
        <ShootingStars
          starColor="#84cc16"
          trailColor="rgba(132, 204, 22, 0.3)"
          minSpeed={4}
          maxSpeed={8}
          minDelay={800}
          maxDelay={2000}
          starWidth={15}
          starHeight={2}
        />
        <ShootingStars
          starColor="#bef264"
          trailColor="rgba(190, 242, 100, 0.3)"
          minSpeed={5}
          maxSpeed={9}
          minDelay={1000}
          maxDelay={2200}
          starWidth={18}
          starHeight={2}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Welcome to CarlySpina.com
          </h2>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed">
            Welcome to CarlySpina.com, where healing meets transformation. Carly Spina is a dedicated practitioner specializing in Spinal Energetics, Reiki, Akashic Records Reading, and a variety of holistic modalities. With a passion for empowering others to embrace their highest potential, Carly offers personalized sessions and group experiences designed to nurture the body, mind, and soul.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={handleBookNow}
              className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              size="lg"
            >
              Book Now
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};