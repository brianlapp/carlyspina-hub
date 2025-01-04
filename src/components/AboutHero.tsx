import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/a0ea630d-e5c7-45c7-a7b8-bcda7e1a5e79.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Shooting Stars Effects - Adjusted for better visibility */}
      <ShootingStars
        starColor="#8B5CF6"
        trailColor="rgba(139, 92, 246, 0.3)"
        minSpeed={8}
        maxSpeed={15}
        minDelay={800}
        maxDelay={2000}
        starWidth={15}
        starHeight={2}
      />
      <ShootingStars
        starColor="#D946EF"
        trailColor="rgba(217, 70, 239, 0.3)"
        minSpeed={6}
        maxSpeed={12}
        minDelay={1200}
        maxDelay={2500}
        starWidth={12}
        starHeight={2}
      />
      <ShootingStars
        starColor="#F97316"
        trailColor="rgba(249, 115, 22, 0.3)"
        minSpeed={10}
        maxSpeed={18}
        minDelay={1000}
        maxDelay={2200}
        starWidth={18}
        starHeight={2}
      />
      <ShootingStars
        starColor="#0EA5E9"
        trailColor="rgba(14, 165, 233, 0.3)"
        minSpeed={7}
        maxSpeed={14}
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
          Meet Carly Spina
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Certified Spinal Energetics Practitioner & Karuna Reiki Master
        </p>
      </motion.div>
    </section>
  );
};