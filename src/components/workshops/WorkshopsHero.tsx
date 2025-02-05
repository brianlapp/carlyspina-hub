import { motion } from "framer-motion";
import { ShootingStars } from "../ui/shooting-stars";

export const WorkshopsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/4a264193-201c-4481-9fd9-3d48eb773d9b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2.5px]" />
      </div>

      <ShootingStars
        starColor="#aeb791"
        trailColor="rgba(174, 183, 145, 0.3)"
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
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Transformative Group Healing Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
        >
          Discover the Power of Group Energy
        </motion.p>
      </div>
    </section>
  );
};