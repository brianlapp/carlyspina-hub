import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const workshops = [
  {
    title: "Group Spinal Energetics",
    description: "Harness the power of collective energy to activate and align your body's natural healing mechanisms. In this workshop, participants experience gentle, intuitive movements and energy flow facilitated by Carly Spina, a certified Spinal Energetics Practitioner.",
    benefits: [
      "Relieve physical and emotional tension",
      "Improve posture and spinal alignment",
      "Deepen the connection between mind and body",
      "Foster a sense of community and shared healing"
    ],
    image: "/lovable-uploads/52eb17e6-e9b6-45b2-93b3-6f8522e67885.png",
    imageAlt: "Serene yoga studio with arched windows and natural light, showing a group meditation circle on yoga mats with sunbeams streaming through the windows"
  },
  {
    title: "Restorative Yoga",
    description: "Find stillness and renewal in this gentle yoga practice focused on relaxation and deep restoration. Restorative yoga uses props to support the body in passive poses, allowing for a meditative experience that soothes the nervous system and promotes healing.",
    benefits: [
      "Reduce stress and anxiety",
      "Enhance flexibility and joint mobility",
      "Balance the body's energy systems",
      "Cultivate mindfulness and inner calm"
    ],
    image: "/lovable-uploads/529063fd-0b09-46c7-831f-ca3f51f08878.png",
    imageAlt: "Peaceful yoga studio with warm lighting and wooden floors, showing participants in restorative poses using bolsters and props, surrounded by plants and natural decor"
  },
  {
    title: "Reiki in a Group Setting",
    description: "Experience the universal life force energy of Reiki within a supportive group. Carly Spina, a Karuna Reiki Master, will channel healing energy to each participant, addressing physical, emotional, and energetic imbalances.",
    benefits: [
      "Boost energy levels and vitality",
      "Release emotional blockages",
      "Enhance mental clarity and focus",
      "Strengthen spiritual connection and intuition"
    ],
    image: "/lovable-uploads/d98d9d1f-b5fa-4d66-b490-e8bb38f83766.png",
    imageAlt: "Atmospheric healing space with warm golden lighting where participants sit in meditation on cushions arranged in a circle, with singing bowls placed before them, while a practitioner stands centrally channeling healing energy, surrounded by candles and natural decor"
  },
  {
    title: "Sound Bath",
    description: "Immerse yourself in the soothing vibrations of sound therapy. This workshop features crystal singing bowls, gongs, and other resonant instruments that create a meditative soundscape. The frequencies promote deep relaxation.",
    benefits: [
      "Relieve tension and promote relaxation",
      "Stimulate the body's natural healing processes",
      "Balance the chakras and energy fields",
      "Induce a meditative state and enhance mindfulness"
    ],
    image: "/lovable-uploads/976c41e5-3cc7-4936-bd63-a5b80c40b16c.png",
    imageAlt: "Atmospheric sound healing space with wooden floors and warm lighting, featuring multiple singing bowls arranged in rows alongside meditation mats, blankets, and large gongs, creating an inviting environment for deep relaxation"
  }
];

export const WorkshopsContent = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white via-[#f4f4f2] to-[#626857]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-sage-600 max-w-4xl mx-auto">
            Our workshops offer a unique opportunity to experience transformative healing in a group setting. These sessions are designed to harmonize the mind, body, and spirit through a combination of modalities that include Group Spinal Energetics, Restorative Yoga, Reiki, and Sound Baths.
          </p>
          <Button 
            size="lg"
            className="mt-8 bg-custom-sage hover:bg-custom-sage/90 text-white px-6 py-4 text-base md:text-lg h-auto w-full md:w-auto"
            onClick={() => window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank')}
          >
            Book Workshop
          </Button>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#626857]">
          Our Signature Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-[#626857]/10 shadow-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.imageAlt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-[#626857]">{workshop.title}</h3>
                  <p className="text-sage-600 mb-6">{workshop.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sage-900">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sage-600">
                      {workshop.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="mt-6 w-full bg-[#626857] hover:bg-[#626857]/90 text-white py-4 h-auto text-base md:text-lg"
                    onClick={() => window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank')}
                  >
                    Book {workshop.title}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#626857]/10 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-sage-900 mb-4">How Do Our Workshops Work?</h2>
                  <div className="h-1 w-20 bg-custom-sage rounded-full mb-4"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sage-600 text-lg leading-relaxed">
                    Each workshop begins with a grounding exercise to help participants settle into the space and connect with their intention for the session. Carly Spina expertly guides the group through the chosen modality, creating a harmonious and inclusive environment. The workshops are accessible to individuals of all experience levels, making them ideal for anyone seeking physical, emotional, or spiritual healing.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#626857]/10 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-sage-900 mb-4">Why Choose Group Healing Workshops?</h2>
                  <div className="h-1 w-20 bg-custom-sage rounded-full mb-4"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sage-600 text-lg leading-relaxed mb-6">
                    Healing in a group amplifies the energetic field, creating a powerful synergy that enhances individual and collective experiences. These workshops offer:
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "A sense of connection and shared purpose",
                      "Increased motivation and accountability for personal growth",
                      "A safe and supportive space to explore and release emotions",
                      "The opportunity to learn from and inspire one another"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center text-sage-600">
                        <span className="h-2 w-2 bg-custom-sage rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#626857]/10 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-sage-900 mb-4">Who Are These Workshops For?</h2>
                  <div className="h-1 w-20 bg-custom-sage rounded-full mb-4"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sage-600 text-lg leading-relaxed mb-6">Our workshops are perfect for:</p>
                  <ul className="list-none space-y-3">
                    {[
                      "Individuals seeking stress relief and relaxation",
                      "Those looking to deepen their spiritual practice",
                      "People curious about energy healing and holistic wellness",
                      "Groups of friends or family members wanting a shared healing experience"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sage-600">
                        <span className="h-2 w-2 bg-custom-sage rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-white shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-6 text-sage-900">Join Us for a Workshop</h2>
              <p className="text-sage-600 mb-8">
                Are you ready to embark on a transformative journey of self-discovery and healing? Join Carly Spina for one of our workshops and experience the profound benefits of group energy. Whether you're new to holistic practices or a seasoned wellness enthusiast, our workshops are designed to meet you where you are and guide you toward greater well-being.
              </p>
              <Button 
                size="lg"
                className="bg-custom-sage hover:bg-custom-sage/90 text-white px-6 py-4 text-base md:text-lg h-auto w-full md:w-auto"
                onClick={() => window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank')}
              >
                Book Workshop
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};