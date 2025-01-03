import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "My experience with Carly was transformative. The Spinal Energetics session helped me release deep-seated tension and emotional blocks I didn't even know I had.",
      author: "Sarah M."
    },
    {
      text: "Carly has a true gift. Her intuitive approach and gentle guidance created a safe space for healing. I left feeling lighter and more aligned.",
      author: "Michael R."
    },
    {
      text: "The combination of physical and energetic work in Spinal Energetics is unlike anything I've experienced before. Carly's expertise is evident in every session.",
      author: "Emma L."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">What People Are Saying</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-sage-100"
            >
              <p className="text-sage-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-sage-800 font-medium">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};