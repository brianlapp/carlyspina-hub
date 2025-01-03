import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Shooting Stars Effects */}
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
        starColor="#D946EF"
        trailColor="rgba(217, 70, 239, 0.3)"
        minSpeed={3}
        maxSpeed={7}
        minDelay={1200}
        maxDelay={2500}
        starWidth={12}
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
      <ShootingStars
        starColor="#a3e635"
        trailColor="rgba(163, 230, 53, 0.3)"
        minSpeed={4}
        maxSpeed={8}
        minDelay={900}
        maxDelay={2300}
        starWidth={14}
        starHeight={2}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Awaken Your Inner Energy: Holistic Healing and Spiritual Wellness
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Discover the transformative power of energy healing and spiritual alignment with Carly Spina, your guide to holistic well-being.
        </p>
      </motion.div>
    </section>
  );
};