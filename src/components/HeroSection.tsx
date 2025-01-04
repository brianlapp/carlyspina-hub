import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${window.innerWidth <= 768 ? '/lovable-uploads/ed499d1c-b9e8-41c7-90c8-c2b63d7a7c1d.png' : '/lovable-uploads/6e73e5d4-c94c-4c3f-8ff1-b421f6d24323.png'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <ShootingStars
        starColor="#84cc16"
        trailColor="rgba(132, 204, 22, 0.3)"
        minSpeed={4}
        maxSpeed={8}
        minDelay={1200}
        maxDelay={2500}
        starWidth={15}
        starHeight={2}
      />
      <ShootingStars
        starColor="#bef264"
        trailColor="rgba(190, 242, 100, 0.3)"
        minSpeed={5}
        maxSpeed={9}
        minDelay={1500}
        maxDelay={3000}
        starWidth={18}
        starHeight={2}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Awaken Your Inner Energy: Holistic Healing and Spiritual Wellness
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
          Discover the transformative power of energy healing and spiritual alignment with Carly Spina, your guide to holistic well-being.
        </p>
      </motion.div>
    </section>
  );
};