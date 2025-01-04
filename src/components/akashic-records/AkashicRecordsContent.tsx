import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AkashicRecordsContent = () => {
  const benefits = [
    {
      title: "Clarity and Direction",
      items: [
        "Understand your life's purpose and soul mission",
        "Gain insight into challenges and patterns holding you back"
      ]
    },
    {
      title: "Healing and Growth",
      items: [
        "Release emotional pain and limiting beliefs",
        "Heal past-life traumas and karmic imbalances"
      ]
    },
    {
      title: "Empowerment and Self-Awareness",
      items: [
        "Cultivate a deeper connection with your true self",
        "Discover your innate gifts and potential"
      ]
    },
    {
      title: "Spiritual Alignment",
      items: [
        "Strengthen your connection to divine guidance and intuition",
        "Align your actions with your soul's highest good"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do I need to believe in the Akashic Records for the reading to work?",
      answer: "No. While an open mind enhances the experience, the records exist independently of belief systems."
    },
    {
      question: "Can I ask about anything during the reading?",
      answer: "Yes, you can explore a wide range of topics, including relationships, career, health, and spiritual growth."
    },
    {
      question: "Is an Akashic Records Reading the same as a psychic reading?",
      answer: "Not exactly. While both offer guidance, the Akashic Records focus on your soul's journey and higher purpose rather than predicting specific future events."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-6">What Are the Akashic Records?</h2>
          <p className="text-lg text-sage-600 mb-8">
            The Akashic Records are a metaphysical database containing the energetic imprint of every thought, emotion, action, and experience that has ever occurred in the universe. Often described as a cosmic library or a spiritual archive, the Akashic Records hold the blueprint of your soul—including past lives, present experiences, and future possibilities.
          </p>
          <p className="text-lg text-sage-600 mb-8">
            Accessing the Akashic Records can provide profound insights, guidance, and healing, enabling you to better understand your soul's journey and purpose.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-6">How Does an Akashic Records Reading Work?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Preparation</h3>
              <p className="text-sage-600 mb-6">
                Before the session, you'll reflect on areas of your life where you seek guidance or clarity. You may prepare specific questions to explore during the reading.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Opening the Records</h3>
              <p className="text-sage-600 mb-6">
                During the session, Carly Spina will use a sacred prayer or invocation to access your Akashic Records. This creates a safe and sacred space for exploration and healing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Exploration and Insights</h3>
              <p className="text-sage-600 mb-6">
                Carly will connect with your soul's energy and relay the messages, images, and insights received from your records. These may include past life experiences, emotional patterns, and guidance on your path.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Integration</h3>
              <p className="text-sage-600 mb-6">
                After the reading, you'll have time to reflect on the insights and discuss ways to integrate the guidance into your daily life.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-8">Benefits of an Akashic Records Reading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-sage-800 mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sage-600 flex items-start">
                      <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-sage-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-sage-200 pb-6">
                <h3 className="text-xl font-semibold text-sage-800 mb-2">{faq.question}</h3>
                <p className="text-sage-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Book Your Akashic Records Reading Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};