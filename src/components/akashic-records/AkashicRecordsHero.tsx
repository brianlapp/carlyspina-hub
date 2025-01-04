import { motion } from "framer-motion";

export const AkashicRecordsHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Akashic Records Reading: Unlock the Secrets of Your Soul
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Access your soul's journey, gain profound insights, and discover your true purpose through the wisdom of the Akashic Records.
        </p>
      </motion.div>
    </section>
  );
};