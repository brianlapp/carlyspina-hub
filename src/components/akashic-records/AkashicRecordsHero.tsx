import { motion } from "framer-motion";
import { ShootingStars } from "../ui/shooting-stars";

export const AkashicRecordsHero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-4 min-h-[60vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/Akashic-Records-Reading.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Akashic Records Reading: Unlock the Secrets of Your Soul
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
          Access your soul's journey, gain profound insights, and discover your true purpose through the wisdom of the Akashic Records.
        </p>
      </motion.div>
    </section>
  );
};