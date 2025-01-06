import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-4xl font-bold mb-6 bg-gradient-to-r from-custom-sage-light to-custom-sage bg-clip-text text-transparent"
    >
      {children}
    </motion.h2>
  );
};