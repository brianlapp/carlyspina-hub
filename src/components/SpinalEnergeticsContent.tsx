import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";

export const SpinalEnergeticsContent = () => {
  const sections = [
    {
      title: "What is Spinal Energetics?",
      content: [
        "Spinal Energetics is a transformative modality that combines physical and energetic practices to promote healing, balance, and alignment within the body. Rooted in the understanding that the spine and nervous system are the gateways to our overall health, this technique works to release stored tension, resistance, and emotional blockages, empowering the body to heal itself naturally.",
        "This unique approach integrates principles of energy healing, intuitive movement, and sound therapy, creating a deeply personalized experience tailored to your body's needs. Spinal Energetics recognizes the intricate connection between mind, body, and soul, helping individuals achieve holistic well-being."
      ],
      showButton: true
    },
    {
      title: "How Does Spinal Energetics Work?",
      content: [
        "During a Spinal Energetics session, Carly works with your spine, nervous system, and energetic field through light yet powerful touch—and often no touch at all. This method engages your body's innate wisdom, encouraging it to intuitively unwind, shift, and release deeply held tension and stored stories within the body.",
        "An organic flow of movement and sound often emerges as part of the process. These movements and sounds are natural, primordial expressions driven by your energy, intuition, and instincts. They reflect the body's innate response to the treatment, unlocking layers of physical and emotional blockages for profound healing."
      ],
      showButton: true
    },
    {
      title: "What to Expect During a Session",
      content: [
        "During our session, I will support and honor your individual needs while working with you to reach homeostasis, moving you towards overall wellness. Through light yet powerful touch (and often no touch), I will interact with your spine, nervous system, and energetic field, harnessing your own innate wisdom to know and heal yourself. An organic flow of movement and sound will naturally progress, helping to shift, unwind, and release tension, resistance, and stories stored within the body. These natural, primordial movements and sounds are driven by your energy, intuition, and instinct, creating a unique and transformative experience."
      ]
    },
    {
      title: "Benefits of Spinal Energetics",
      content: ["Spinal Energetics offers a wide range of benefits for the body, mind, and soul:"],
      lists: [
        {
          title: "Physical Benefits:",
          items: [
            "Alleviates chronic pain and tension",
            "Improves posture and spinal alignment",
            "Enhances nervous system regulation",
            "Boosts energy flow throughout the body"
          ]
        },
        {
          title: "Emotional Benefits:",
          items: [
            "Releases stored trauma and emotional blockages",
            "Promotes emotional resilience and balance",
            "Cultivates self-awareness and emotional clarity"
          ]
        },
        {
          title: "Mental Benefits:",
          items: [
            "Reduces stress and anxiety",
            "Encourages mindfulness and presence",
            "Enhances mental clarity and focus"
          ]
        },
        {
          title: "Spiritual Benefits:",
          items: [
            "Deepens connection with your intuition and higher self",
            "Fosters spiritual growth and alignment",
            "Opens pathways for self-discovery and transformation"
          ]
        }
      ],
      showButton: true
    },
    {
      title: "Who Can Benefit from Spinal Energetics?",
      content: [
        "Spinal Energetics is suitable for individuals seeking holistic healing, whether addressing specific physical issues or pursuing overall well-being. This modality can benefit:"
      ],
      lists: [
        {
          items: [
            "Those with chronic pain or tension",
            "Individuals dealing with stress, anxiety, or emotional blockages",
            "People seeking greater alignment and balance in their lives",
            "Anyone open to exploring the profound wisdom of their body's natural healing capabilities"
          ]
        }
      ]
    },
    {
      title: "Why Choose Spinal Energetics?",
      content: [
        "Spinal Energetics goes beyond conventional approaches to healing by addressing the root causes of imbalance. It acknowledges the interconnectedness of your physical, emotional, and energetic systems, empowering you to reclaim your health and vitality in a profound and lasting way."
      ]
    },
    {
      title: "Book Your Session Today",
      content: [
        "Are you ready to unlock the power of your body's innate wisdom? Experience the transformative benefits of Spinal Energetics with Carly Spina. Each session is a journey towards holistic wellness, tailored to your unique needs and goals."
      ],
      showButton: true
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6 text-sage-900">{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg text-sage-600 mb-4">
                {paragraph}
              </p>
            ))}
            
            {section.lists && section.lists.map((list, lIndex) => (
              <div key={lIndex} className="mt-6">
                {list.title && (
                  <h3 className="text-xl font-semibold mb-3 text-sage-800">{list.title}</h3>
                )}
                <ul className="list-disc list-inside space-y-2 text-lg text-sage-600 ml-4">
                  {list.items.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            {section.showButton && (
              <div className="mt-8">
                <Button 
                  className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
                >
                  Book Your Session Now
                </Button>
              </div>
            )}
          </motion.div>
        ))}
        
        <CallToAction />
      </div>
    </div>
  );
};