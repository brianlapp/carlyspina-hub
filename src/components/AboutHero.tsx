import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center">
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