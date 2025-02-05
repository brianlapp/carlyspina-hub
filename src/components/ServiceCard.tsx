import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
  path: string;
}

export const ServiceCard = ({ title, description, icon, delay, path }: ServiceCardProps) => {
  return (
    <Link to={path}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 h-full backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative z-10">
          <div className="mb-4 inline-block rounded-xl bg-sage-100 p-3">
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-sage-900">{title}</h3>
          <p className="text-sage-600">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};