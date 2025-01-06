import { motion } from "framer-motion";
import { ShootingStars } from "../ui/shooting-stars";

export const ReikiTrainingHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/7213da59-c33d-4488-8954-761d0a0374f4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <ShootingStars
        starColor="#8c947d"
        trailColor="rgba(140, 148, 125, 0.3)"
        minSpeed={4}
        maxSpeed={8}
        minDelay={800}
        maxDelay={2000}
        starWidth={15}
        starHeight={2}
      />
      <ShootingStars
        starColor="#aeb791"
        trailColor="rgba(174, 183, 145, 0.3)"
        minSpeed={5}
        maxSpeed={9}
        minDelay={1000}
        maxDelay={2200}
        starWidth={18}
        starHeight={2}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Reiki Training: Learn to Channel Healing Energy
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Master the art of energy healing and embark on a transformative journey of spiritual growth
        </p>
      </motion.div>
    </section>
  );
};