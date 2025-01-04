import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContentSection } from "../spinal-energetics/ContentSection";
import { SectionTitle } from "../spinal-energetics/SectionTitle";
import { BookingCard } from "../spinal-energetics/BookingCard";

export const ReikiContent = () => {
  const sections = [
    {
      title: "What is Reiki?",
      content: [
        "Reiki is a powerful, non-invasive energy healing practice that promotes balance, relaxation, and overall well-being. Originating from Japan, the word \"Reiki\" translates to \"Universal Life Energy.\" It involves channeling this energy to clear blockages, restore harmony, and support the body's natural healing processes.",
        "This ancient practice is based on the belief that energy flows through all living beings. When this energy is disrupted or blocked, it can lead to physical, emotional, or spiritual imbalances. Reiki works to realign and restore this flow, creating a state of balance and vitality."
      ],
      image: "/lovable-uploads/b0b88245-e029-48f7-bb11-f62ce439eaa1.png",
      imageAlt: "Hands channeling healing energy with ethereal light and a peaceful candle setting",
      showButton: true
    },
    {
      title: "How Does Reiki Work?",
      content: [
        "A Reiki session typically involves the practitioner placing their hands lightly on or just above specific areas of your body. Through this process, universal energy is channeled into your energetic field and physical body, encouraging deep relaxation and healing.",
        "Reiki is unique because it requires no physical manipulation or use of tools. Instead, it relies on the practitioner's attunement to the universal energy and their ability to direct it to areas of need. This allows Reiki to work on multiple levels—physical, emotional, mental, and spiritual—simultaneously."
      ],
      image: "/lovable-uploads/23f33bc6-eedf-4f29-9975-99929d712fb9.png",
      imageAlt: "Reiki healing session showing energy work with glowing ethereal effects",
      showButton: true
    },
    {
      title: "What to Expect During a Reiki Session",
      content: [
        "During a session with Carly Spina, you can expect a calming and supportive environment. The process is deeply personal and tailored to your individual needs. As the universal energy flows, you may experience:",
        "• Gentle warmth or tingling sensations\n• A sense of deep relaxation and calm\n• Emotional releases or insights\n• A feeling of lightness or renewed energy",
        "Each session is unique and unfolds according to your body's natural rhythm and healing priorities."
      ],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      imageAlt: "Peaceful healing session",
      showButton: true
    }
  ];

  const benefits = {
    title: "Benefits of Reiki",
    content: ["Reiki offers a multitude of benefits for the body, mind, and spirit:"],
    lists: [
      {
        title: "Physical Benefits:",
        items: [
          "Reduces pain and tension",
          "Supports the body's natural healing processes",
          "Enhances energy levels and vitality",
          "Improves sleep quality"
        ]
      },
      {
        title: "Emotional Benefits:",
        items: [
          "Eases stress and anxiety",
          "Encourages emotional release and healing",
          "Cultivates inner peace and resilience"
        ]
      },
      {
        title: "Mental Benefits:",
        items: [
          "Promotes clarity and focus",
          "Reduces mental chatter and overwhelm",
          "Encourages mindfulness and presence"
        ]
      },
      {
        title: "Spiritual Benefits:",
        items: [
          "Deepens connection to your higher self and intuition",
          "Promotes spiritual growth and alignment",
          "Opens pathways for self-discovery and transformation"
        ]
      }
    ],
    showButton: true,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    imageAlt: "Serene nature scene representing healing energy"
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
              <div key={lIndex} className="bg-white/80 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300 rounded-xl p-6">
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
          <SectionTitle>Who Can Benefit from Reiki?</SectionTitle>
          <p className="text-lg text-sage-600 mb-6">
            Reiki is suitable for individuals of all ages and backgrounds. Whether you're seeking relief from specific physical or emotional challenges or simply looking to enhance your overall well-being, Reiki can be a gentle yet powerful tool. It's especially beneficial for:
          </p>
          <ul className="list-none space-y-4 mb-8">
            {[
              "Those experiencing stress, anxiety, or burnout",
              "Individuals recovering from illness or injury",
              "People seeking emotional balance and clarity",
              "Anyone on a spiritual journey of self-discovery"
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
          <SectionTitle>Why Choose Reiki with Carly Spina?</SectionTitle>
          <p className="text-lg text-sage-600 mb-8">
            Carly Spina is a certified Reiki Master Practitioner with extensive training in Usui Reiki, Holy Fire III, and Karuna Reiki. Her approach is compassionate, intuitive, and tailored to your unique needs. Carly creates a safe, nurturing space where you can fully relax and embrace the healing process.
          </p>
          <p className="text-lg text-sage-600 mb-8">
            Reiki is more than just a healing practice; it's a pathway to holistic well-being. By addressing the root causes of imbalance and restoring harmony on all levels, Reiki empowers you to live a more balanced, vibrant, and fulfilling life.
          </p>
        </motion.div>

        <BookingCard />
      </div>
    </div>
  );
};
