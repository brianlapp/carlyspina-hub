import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
export const IntroSection = () => {
  const handleBookNow = () => {
    window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank');
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="relative py-24 bg-[#f4f4f2] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShootingStars starColor="#8c947d" trailColor="rgba(140, 148, 125, 0.3)" minSpeed={4} maxSpeed={8} minDelay={800} maxDelay={2000} starWidth={15} starHeight={2} />
        <ShootingStars starColor="#aeb791" trailColor="rgba(174, 183, 145, 0.3)" minSpeed={5} maxSpeed={9} minDelay={1000} maxDelay={2200} starWidth={18} starHeight={2} />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-custom-sage-light to-custom-sage bg-clip-text text-transparent">Healing Meets Transformation</h2>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed">Carly Spina is a dedicated practitioner specializing in Spinal Energetics, Reiki, Akashic Records Reading, and a variety of holistic modalities. With a passion for empowering others to embrace their highest potential, Carly offers personalized sessions and group experiences designed to nurture the body, mind, and soul.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={handleBookNow} className="bg-custom-sage hover:bg-custom-sage/90 text-white transition-colors" size="lg">
              Book Now
            </Button>
            <Button onClick={scrollToAbout} variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};