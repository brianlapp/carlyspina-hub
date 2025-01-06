import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "../spinal-energetics/SectionTitle";

export const TrainingBenefits = () => {
  const benefits = [
    {
      title: "Personal Growth",
      items: [
        "Deepen your self-awareness and spiritual connection",
        "Release emotional blockages and cultivate inner peace"
      ]
    },
    {
      title: "Professional Opportunities",
      items: [
        "Gain the skills to start your own Reiki practice",
        "Enhance your existing healing or wellness services"
      ]
    },
    {
      title: "Holistic Healing",
      items: [
        "Develop tools to manage stress, anxiety, and physical discomfort",
        "Support friends, family, and clients in their healing journeys"
      ]
    },
    {
      title: "Community and Connection",
      items: [
        "Join a global community of healers and spiritual practitioners",
        "Share your gifts and make a positive impact in the world"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24 bg-white rounded-2xl p-8 shadow-lg"
    >
      <SectionTitle>Benefits of Reiki Training</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-sage-800">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, iIndex) => (
                  <li key={iIndex} className="text-sage-600 flex items-start">
                    <span className="mr-2 mt-1 text-sage-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/0df5fb94-f421-4a68-9a96-faec4a80c84d.png"
            alt="Chakra energy visualization with ethereal effects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};