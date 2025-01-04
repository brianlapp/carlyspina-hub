import { motion } from "framer-motion";

export const ReikiHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/Reiki.png")',
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
          Reiki: Restore Balance and Harness Universal Energy
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Experience deep relaxation and healing through the gentle power of Reiki energy work.
        </p>
      </motion.div>
    </section>
  );
};