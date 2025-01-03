import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      title: "Spinal Energetics",
      description: "Experience deep healing through this innovative modality that combines physical and energetic alignment.",
      image: "/lovable-uploads/Spinal-Energetics.png",
      link: "/spinal-energetics",
      icon: "sparkles",
      delay: 0.2
    },
    {
      title: "Reiki",
      description: "Restore balance and promote healing with this gentle yet powerful energy healing technique.",
      image: "/lovable-uploads/Reiki.png",
      link: "#",
      icon: "leaf",
      delay: 0.4
    },
    {
      title: "Akashic Records Reading",
      description: "Gain insight and clarity by accessing the wisdom of your soul's journey.",
      image: "/lovable-uploads/Akashic-Records-Reading.png",
      link: "#",
      icon: "book",
      delay: 0.6
    },
    {
      title: "Reiki Training",
      description: "Learn to channel healing energy and become a certified Reiki practitioner.",
      image: "/lovable-uploads/Reiki-Training.png",
      link: "#",
      icon: "graduation",
      delay: 0.8
    },
    {
      title: "Workshops",
      description: "Join group sessions focused on spiritual growth and energy healing techniques.",
      image: "/lovable-uploads/workshops.png",
      link: "#",
      icon: "users",
      delay: 1.0
    }
  ];

  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Services</h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Discover our range of holistic healing services designed to support your journey to wellness and spiritual growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};