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
    image: "/lovable-uploads/536764db-e4d2-45b3-b8a2-a7297306c263.png",
    imageAlt: "Atmospheric healing space with warm lighting where a Reiki practitioner stands centered among seated participants in a circle, with singing bowls and peaceful decorative elements creating a serene environment"
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
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    imageAlt: "Peaceful setting with sound healing instruments"
  }
];

export const WorkshopsContent = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-sage-50">
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
            className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg h-auto w-full max-w-xl mx-auto"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Explore Upcoming Workshops and Reserve Your Spot Today
          </Button>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
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
              <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.imageAlt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-sage-900">{workshop.title}</h3>
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
                    className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 h-auto text-lg"
                    onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
                  >
                    Explore Upcoming {workshop.title} Workshops
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-sage-900">How Do Our Workshops Work?</h2>
            <p className="text-sage-600 mb-4">
              Each workshop begins with a grounding exercise to help participants settle into the space and connect with their intention for the session. Carly Spina expertly guides the group through the chosen modality, creating a harmonious and inclusive environment. The workshops are accessible to individuals of all experience levels, making them ideal for anyone seeking physical, emotional, or spiritual healing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-sage-900">Why Choose Group Healing Workshops?</h2>
            <p className="text-sage-600 mb-4">
              Healing in a group amplifies the energetic field, creating a powerful synergy that enhances individual and collective experiences. These workshops offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sage-600">
              <li>A sense of connection and shared purpose</li>
              <li>Increased motivation and accountability for personal growth</li>
              <li>A safe and supportive space to explore and release emotions</li>
              <li>The opportunity to learn from and inspire one another</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-sage-900">Who Are These Workshops For?</h2>
            <p className="text-sage-600 mb-4">Our workshops are perfect for:</p>
            <ul className="list-disc list-inside space-y-2 text-sage-600">
              <li>Individuals seeking stress relief and relaxation</li>
              <li>Those looking to deepen their spiritual practice</li>
              <li>People curious about energy healing and holistic wellness</li>
              <li>Groups of friends or family members wanting a shared healing experience</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-sage-900">Join Us for a Workshop</h2>
            <p className="text-sage-600 mb-8">
              Are you ready to embark on a transformative journey of self-discovery and healing? Join Carly Spina for one of our workshops and experience the profound benefits of group energy. Whether you're new to holistic practices or a seasoned wellness enthusiast, our workshops are designed to meet you where you are and guide you toward greater well-being.
            </p>
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg h-auto w-full max-w-xl mx-auto"
              onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
            >
              Explore Upcoming Workshops and Reserve Your Spot Today
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
