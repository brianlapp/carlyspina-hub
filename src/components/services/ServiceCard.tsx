import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  path: string;
  delay?: number;
}

export const ServiceCard = ({ title, description, image, index, path, delay }: ServiceCardProps) => {
  return (
    <Link to={path}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay || index * 0.1 }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-6 text-center bg-white flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sage-900 mb-2">{title}</h3>
              <p className="text-sage-600">{description}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};