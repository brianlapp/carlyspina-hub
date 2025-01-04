import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6 text-center bg-white">
          <h3 className="text-xl font-semibold text-sage-900 mb-2">{title}</h3>
          <p className="text-sage-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};