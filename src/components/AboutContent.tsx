import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AboutContent = () => {
  const paragraphs = [
    "Carly Spina has always felt a profound connection to the spiritual realm. From a young age, she recognized her soul's mission: to work with energy and frequency to help others heal and grow. Her journey has been one of passion, dedication, and continuous learning.",
    "Carly began her path as a Usui Reiki Master Practitioner, a foundational step that ignited her deep love for energy healing. She then achieved mastery in Holy Fire III Reiki and became a Karuna Reiki Master Practitioner (5th degree) under the esteemed guidance of William Lee Rand. These practices allowed Carly to refine her ability to channel universal energy and support others in their healing journeys.",
    "Her exploration didn't stop there. Carly became certified in reading the Akashic Records, accessing the profound wisdom of the Akashic field to offer clients clarity and insight into their soul's journey. She also expanded her expertise into working with the frequencies of crystals and singing bowls, incorporating these powerful tools into her healing sessions.",
    "The most transformative chapter of Carly's journey began when she was selected from a large group of applicants to learn Spinal Energetics, an innovative healing modality from Australia. This practice resonated deeply with her, feeling like a true homecoming. Spinal Energetics combines physical and energetic alignment to facilitate profound emotional, mental, spiritual, and soulful healing. In 2024, Carly achieved her goal of becoming a certified Spinal Energetics Practitioner, solidifying her ability to hold space for others in their healing journeys.",
    "Today, Carly is committed to empowering individuals to unlock their highest potential and embrace holistic well-being. Her unique blend of modalities and unwavering compassion make her a trusted guide for those seeking transformation and alignment.",
    "Join Carly on your journey to healing and discover the profound power of energy work."
  ];

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="space-y-6">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-sage-600 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Book With Carly Spina
          </Button>
          <Button 
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            onClick={() => {
              const element = document.querySelector('form[name="newsletter"]');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Our Mailing List
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};