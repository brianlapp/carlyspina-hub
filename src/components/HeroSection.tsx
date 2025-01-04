import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-sage-900"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%'
        }}
        role="img"
        aria-label="Hero background"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {!isMobile && (
        <>
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
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Awaken Your Inner Energy: Holistic Healing and Spiritual Wellness
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Discover the transformative power of energy healing and spiritual alignment with Carly Spina, your guide to holistic well-being.
        </p>
      </motion.div>
    </section>
  );
};