import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-[70vh] flex items-center bg-gradient-to-b from-sage-50/50 to-white">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url("/lovable-uploads/61801c01-93d2-4f03-861b-8c3c984ec7a6.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sage-100/80 to-white backdrop-blur-sm" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-sage-900 mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
          Meet Carly Spina
        </h1>
        <p className="text-xl text-sage-700 max-w-3xl mx-auto font-light">
          Certified Spinal Energetics Practitioner & Karuna Reiki Master
        </p>
      </motion.div>
    </section>
  );
};