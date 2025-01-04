import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";

export const SpinalEnergeticsHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/f3163abc-dfbd-4afd-82ab-82b84afe2d3c.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
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
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Spinal Energetics: Unlocking Your Body's Innate Wisdom
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Experience profound healing through the harmonious alignment of your spine and energy systems
        </p>
      </motion.div>
    </section>
  );
};