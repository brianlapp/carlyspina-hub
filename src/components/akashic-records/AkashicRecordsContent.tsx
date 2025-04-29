import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContentSection } from "../spinal-energetics/ContentSection";
import { SectionTitle } from "../spinal-energetics/SectionTitle";
import { BookingCard } from "../spinal-energetics/BookingCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AkashicRecordsContent = () => {
  const sections = [
    {
      title: "What Are the Akashic Records?",
      content: [
        "The Akashic Records are a metaphysical database containing the energetic imprint of every thought, emotion, action, and experience that has ever occurred in the universe. Often described as a cosmic library or a spiritual archive, the Akashic Records hold the blueprint of your soul—including past lives, present experiences, and future possibilities.",
        "This sacred space exists in a non-physical plane and serves as a repository of all universal knowledge and human experience. When accessed, it can provide profound insights into your soul's journey and life purpose."
      ],
      image: "/lovable-uploads/61744c8b-24f6-411c-af2c-c09fc3693c12.png",
      imageAlt: "Mystical library with glowing energy and ancient wisdom",
      showButton: true
    },
    {
      title: "Journey Through Your Soul's Records",
      content: [
        "During an Akashic Records reading, we access this cosmic database to explore your soul's journey, understand your life's purpose, and gain clarity on your path forward. The records reveal patterns, challenges, and opportunities that can help you make more aligned choices in your life.",
        "Each reading is unique and tailored to your specific questions and needs. Whether you're seeking guidance about relationships, career, spiritual growth, or past life influences, the Akashic Records can provide valuable insights and clarity."
      ],
      image: "/lovable-uploads/feb5c4bd-e7b2-460d-b63c-583a8f3807bb.png",
      imageAlt: "Spiritual meditation with mystical symbols and energy",
      showButton: true,
      reverse: true
    }
  ];

  const benefits = [
    {
      title: "Clarity and Direction",
      items: [
        "Understand your life's purpose and soul mission",
        "Gain insight into challenges and patterns holding you back",
        "Receive guidance for important life decisions"
      ]
    },
    {
      title: "Healing and Growth",
      items: [
        "Release emotional pain and limiting beliefs",
        "Heal past-life traumas and karmic imbalances",
        "Transform recurring patterns and behaviors"
      ]
    },
    {
      title: "Empowerment and Self-Awareness",
      items: [
        "Cultivate a deeper connection with your true self",
        "Discover your innate gifts and potential",
        "Strengthen your intuitive abilities"
      ]
    },
    {
      title: "Spiritual Alignment",
      items: [
        "Strengthen your connection to divine guidance",
        "Align your actions with your soul's highest good",
        "Enhance your spiritual practice and growth"
      ]
    }
  ];

  const faqs = [
    {
      question: "What can I expect during a reading?",
      answer: "During a reading, you'll be guided through a sacred process of accessing your Akashic Records. You can ask questions about any area of your life, and receive insights and guidance directly from your soul's records. The session is interactive, allowing for deep exploration of the topics most important to you."
    },
    {
      question: "How should I prepare for a reading?",
      answer: "Come with an open mind and heart, and prepare any questions you'd like to explore. It's helpful to be in a quiet, comfortable space where you can fully focus on the session. You may want to have a journal ready to take notes on the insights received."
    },
    {
      question: "How often should I have a reading?",
      answer: "The frequency of readings depends on your personal journey and needs. Some clients benefit from monthly sessions during major life transitions, while others find quarterly or annual readings sufficient for their spiritual growth and guidance."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#f4f4f2] to-[#626857] pt-16 md:pt-24">
      <div className="container mx-auto">
        {sections.map((section, index) => (
          <ContentSection
            key={section.title}
            title={section.title}
            content={section.content}
            image={section.image}
            imageAlt={section.imageAlt}
            showButton={section.showButton}
            reverse={section.reverse}
          />
        ))}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          <SectionTitle>Benefits of an Akashic Records Reading</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 h-full bg-white/80 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-semibold text-sage-800 mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sage-600 flex items-start text-base md:text-lg">
                        <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-sage-400 to-sage-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Card className="p-8 md:p-12 bg-white shadow-lg">
              <SectionTitle>Frequently Asked Questions</SectionTitle>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-sage-200">
                      <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-sage-800 hover:text-sage-900 hover:no-underline px-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sage-600 px-4 text-base md:text-lg">
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
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-white shadow-lg text-center">
              <SectionTitle>Join Us for a Workshop</SectionTitle>
              <p className="text-base md:text-lg text-sage-600 mb-8">
                Experience the transformative power of Akashic Records in our immersive workshops. 
                Learn to access and interpret the records under expert guidance, and connect with 
                like-minded individuals on their spiritual journey.
              </p>
              <Button 
                className="w-full md:w-auto bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors px-6 md:px-12 py-4 md:py-6 text-base md:text-lg h-auto"
                onClick={() => window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank')}
              >
                Register Now
              </Button>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
};