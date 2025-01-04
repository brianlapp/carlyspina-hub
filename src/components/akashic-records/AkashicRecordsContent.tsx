import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="bg-gradient-to-b from-sage-50 to-white">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                What Are the Akashic Records?
              </h2>
              <p className="text-lg text-sage-600 mb-8">
                The Akashic Records are a metaphysical database containing the energetic imprint of every thought, emotion, action, and experience that has ever occurred in the universe. Often described as a cosmic library or a spiritual archive, the Akashic Records hold the blueprint of your soul—including past lives, present experiences, and future possibilities.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 text-lg h-auto"
                onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
              >
                Book Your Reading Now
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/Akashic-Records-Reading.png"
                alt="Akashic Records Reading"
                className="rounded-lg shadow-xl w-full object-cover aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-sage-50/50 to-emerald-50/50 p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Benefits of an Akashic Records Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sage-600 flex items-start">
                        <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-sage-50/50 to-emerald-50/50 p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-sage-200">
                  <AccordionTrigger className="text-left text-lg font-medium text-sage-800 hover:text-sage-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sage-600">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center pb-16"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 text-lg h-auto"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Book Your Akashic Records Reading Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};