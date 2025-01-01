import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  content: string;
  author: string;
  delay?: number;
}

export const TestimonialCard = ({ content, author, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <p className="text-earth-600 italic">{content}</p>
          <p className="text-earth-800 font-semibold">- {author}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};