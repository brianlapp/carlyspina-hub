import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AboutContent = () => {
  const introText = [
    "Carly Spina has always felt a profound connection to the spiritual realm. From a young age, she recognized her soul's mission: to work with energy and frequency to help others heal and grow. Her journey has been one of passion, dedication, and continuous learning.",
    "Carly began her path as a Usui Reiki Master Practitioner, a foundational step that ignited her deep love for energy healing. She then achieved mastery in Holy Fire III Reiki and became a Karuna Reiki Master Practitioner (5th degree) under the esteemed guidance of William Lee Rand. These practices allowed Carly to refine her ability to channel universal energy and support others in their healing journeys."
  ];

  const middleText = [
    "Her exploration didn't stop there. Carly became certified in reading the Akashic Records, accessing the profound wisdom of the Akashic field to offer clients clarity and insight into their soul's journey. She also expanded her expertise into working with the frequencies of crystals and singing bowls, incorporating these powerful tools into her healing sessions.",
    "The most transformative chapter of Carly's journey began when she was selected from a large group of applicants to learn Spinal Energetics, an innovative healing modality from Australia. This practice resonated deeply with her, feeling like a true homecoming."
  ];

  const closingText = [
    "Spinal Energetics combines physical and energetic alignment to facilitate profound emotional, mental, spiritual, and soulful healing. In 2024, Carly achieved her goal of becoming a certified Spinal Energetics Practitioner, solidifying her ability to hold space for others in their healing journeys.",
    "Today, Carly is committed to empowering individuals to unlock their highest potential and embrace holistic well-being. Her unique blend of modalities and unwavering compassion make her a trusted guide for those seeking transformation and alignment.",
    "Join Carly on your journey to healing and discover the profound power of energy work."
  ];

  return (
    <section className="py-20 px-4 bg-sage-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        {/* First Text Block with Right Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {introText.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-sage-600 leading-relaxed text-lg"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group h-fit"
          >
            <div className="absolute inset-0 bg-emerald-200/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0" />
            <img
              src="/lovable-uploads/f96317dc-e3da-4419-9f9a-200143db7669.png"
              alt="Carly Spina"
              className="rounded-2xl relative z-10 w-full object-cover transform transition-transform group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>

        {/* Middle Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 mb-20"
        >
          {middleText.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-sage-600 leading-relaxed text-lg"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Final Text Block with Left Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group h-fit order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-emerald-200/20 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0" />
            <img
              src="/lovable-uploads/6b2d2326-1b63-4d8a-aad6-6231146c118f.png"
              alt="Carly Spina"
              className="rounded-2xl relative z-10 w-full object-cover transform transition-transform group-hover:scale-[1.02]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            {closingText.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-sage-600 leading-relaxed text-lg"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
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