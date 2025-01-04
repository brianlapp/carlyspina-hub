import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContentSection } from "./spinal-energetics/ContentSection";
import { SectionTitle } from "./spinal-energetics/SectionTitle";
import { BookingCard } from "./spinal-energetics/BookingCard";

export const SpinalEnergeticsContent = () => {
  const sections = [
    {
      title: "What is Spinal Energetics?",
      content: [
        "Spinal Energetics is a transformative modality that combines physical and energetic practices to promote healing, balance, and alignment within the body. Rooted in the understanding that the spine and nervous system are the gateways to our overall health, this technique works to release stored tension, resistance, and emotional blockages, empowering the body to heal itself naturally.",
        "This unique approach integrates principles of energy healing, intuitive movement, and sound therapy, creating a deeply personalized experience tailored to your body's needs. Spinal Energetics recognizes the intricate connection between mind, body, and soul, helping individuals achieve holistic well-being."
      ],
      image: "/lovable-uploads/bfda3c76-3feb-4464-9ae6-17f6edcd025a.png",
      imageAlt: "Artistic representation of spinal energetics showing glowing spine and energy fields",
      showButton: true
    },
    {
      title: "How Does Spinal Energetics Work?",
      content: [
        "During a Spinal Energetics session, Carly works with your spine, nervous system, and energetic field through light yet powerful touch—and often no touch at all. This method engages your body's innate wisdom, encouraging it to intuitively unwind, shift, and release deeply held tension and stored stories within the body.",
        "An organic flow of movement and sound often emerges as part of the process. These movements and sounds are natural, primordial expressions driven by your energy, intuition, and instincts. They reflect the body's innate response to the treatment, unlocking layers of physical and emotional blockages for profound healing."
      ],
      image: "/lovable-uploads/6d7c021d-2274-4314-88ec-9e6739342679.png",
      imageAlt: "Artistic visualization of energy work showing a glowing spine and ethereal energy patterns",
      showButton: true
    },
    {
      title: "What to Expect During a Session",
      content: [
        "During our session, I will support and honor your individual needs while working with you to reach homeostasis, moving you towards overall wellness. Through light yet powerful touch (and often no touch), I will interact with your spine, nervous system, and energetic field, harnessing your own innate wisdom to know and heal yourself. An organic flow of movement and sound will naturally progress, helping to shift, unwind, and release tension, resistance, and stories stored within the body. These natural, primordial movements and sounds are driven by your energy, intuition, and instinct, creating a unique and transformative experience."
      ],
      image: "/lovable-uploads/47ada071-774c-4c37-b26e-a5d826e0e14a.png",
      imageAlt: "Artistic representation of healing energy work with golden light and flowing energy patterns",
    }
  ];

  const benefits = {
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
    showButton: true,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    imageAlt: "Aerial view of peaceful landscape"
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <ContentSection
            key={section.title}
            title={section.title}
            content={section.content}
            image={section.image}
            imageAlt={section.imageAlt}
            showButton={section.showButton}
            reverse={index % 2 !== 0}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 bg-white rounded-2xl p-8 shadow-lg"
        >
          <SectionTitle>{benefits.title}</SectionTitle>
          {benefits.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg text-sage-600 mb-6 px-8">
              {paragraph}
            </p>
          ))}

          <div className="grid md:grid-cols-2 gap-8 mb-8 px-8">
            {benefits.lists.map((list, lIndex) => (
              <div key={lIndex} className="bg-sage-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-sage-800">{list.title}</h3>
                <ul className="space-y-3">
                  {list.items.map((item, iIndex) => (
                    <li key={iIndex} className="text-sage-600 flex items-start">
                      <span className="mr-2 mt-1 text-emerald-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {benefits.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg mb-8"
            >
              <img 
                src={benefits.image} 
                alt={benefits.imageAlt}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>Who Can Benefit from Spinal Energetics?</SectionTitle>
          <p className="text-lg text-sage-600 mb-6">
            Spinal Energetics is suitable for individuals seeking holistic healing, whether addressing specific physical issues or pursuing overall well-being. This modality can benefit:
          </p>
          <ul className="list-none space-y-4 mb-8">
            {[
              "Those with chronic pain or tension",
              "Individuals dealing with stress, anxiety, or emotional blockages",
              "People seeking greater alignment and balance in their lives",
              "Anyone open to exploring the profound wisdom of their body's natural healing capabilities"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-lg text-sage-600">
                <span className="mr-3 text-emerald-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>Why Choose Spinal Energetics?</SectionTitle>
          <p className="text-lg text-sage-600 mb-8">
            Spinal Energetics goes beyond conventional approaches to healing by addressing the root causes of imbalance. It acknowledges the interconnectedness of your physical, emotional, and energetic systems, empowering you to reclaim your health and vitality in a profound and lasting way.
          </p>
        </motion.div>

        <BookingCard />
      </div>
    </div>
  );
};
