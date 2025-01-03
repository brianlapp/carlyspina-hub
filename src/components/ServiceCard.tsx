import { motion } from "framer-motion";
import { Leaf, Sparkles, BookOpen, GraduationCap, Users } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
  delay: number;
}

export const ServiceCard = ({ title, description, image, link, icon, delay }: ServiceCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-6 h-6" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "book":
        return <BookOpen className="w-6 h-6" />;
      case "graduation":
        return <GraduationCap className="w-6 h-6" />;
      case "users":
        return <Users className="w-6 h-6" />;
      default:
        return <Leaf className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-sm transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-xl bg-sage-100 p-3">
          {getIcon(icon)}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-sage-900">{title}</h3>
        <p className="text-sage-600">{description}</p>
      </div>
    </motion.div>
  );
};