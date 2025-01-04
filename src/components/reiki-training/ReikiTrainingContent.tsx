import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContentSection } from "../spinal-energetics/ContentSection";
import { SectionTitle } from "../spinal-energetics/SectionTitle";
import { BookingCard } from "../spinal-energetics/BookingCard";

export const ReikiTrainingContent = () => {
  const sections = [
    {
      title: "What is Reiki Training?",
      content: [
        "Reiki Training is an empowering journey where individuals learn to harness and channel universal life energy to heal themselves and others. Rooted in ancient Japanese healing traditions, Reiki training equips you with the knowledge and techniques to work with energy fields, align chakras, and promote balance and well-being.",
        "Whether you're new to energy healing or looking to deepen your practice, Reiki Training provides a transformative experience that integrates physical, emotional, and spiritual growth."
      ],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      imageAlt: "Peaceful training environment",
      showButton: true
    }
  ];

  const levels = {
    title: "How Does Reiki Training Work?",
    content: ["Reiki Training typically progresses through three levels, each building upon the last to deepen your understanding and ability:"],
    lists: [
      {
        title: "Level 1: Reiki Practitioner",
        items: [
          "Learn the basics of Reiki, including its history, principles, and foundational techniques",
          "Receive an attunement, a sacred process where the teacher opens your energy channels",
          "Practice self-healing and begin offering Reiki to others"
        ]
      },
      {
        title: "Level 2: Advanced Practitioner",
        items: [
          "Delve deeper into Reiki symbols and their meanings",
          "Learn distance healing techniques",
          "Develop your intuition and expand your energetic awareness"
        ]
      },
      {
        title: "Level 3: Reiki Master and Teacher",
        items: [
          "Achieve mastery of advanced Reiki techniques and symbols",
          "Learn how to teach and attune others to Reiki energy",
          "Embark on a spiritual journey of self-discovery and leadership"
        ]
      }
    ],
    showButton: true,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    imageAlt: "Serene nature scene representing spiritual growth"
  };

  const benefits = {
    title: "Benefits of Reiki Training",
    content: ["Reiki Training offers profound benefits that extend beyond the practice itself:"],
    lists: [
      {
        title: "Personal Growth",
        items: [
          "Deepen your self-awareness and spiritual connection",
          "Release emotional blockages and cultivate inner peace"
        ]
      },
      {
        title: "Professional Opportunities",
        items: [
          "Gain the skills to start your own Reiki practice",
          "Enhance your existing healing or wellness services"
        ]
      },
      {
        title: "Holistic Healing",
        items: [
          "Develop tools to manage stress, anxiety, and physical discomfort",
          "Support friends, family, and clients in their healing journeys"
        ]
      },
      {
        title: "Community and Connection",
        items: [
          "Join a global community of healers and spiritual practitioners",
          "Share your gifts and make a positive impact in the world"
        ]
      }
    ],
    showButton: true,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    imageAlt: "Community of healers"
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
          <SectionTitle>{levels.title}</SectionTitle>
          {levels.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg text-sage-600 mb-6 px-8">
              {paragraph}
            </p>
          ))}

          <div className="grid md:grid-cols-3 gap-8 mb-8 px-8">
            {levels.lists.map((list, lIndex) => (
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

          {levels.showButton && (
            <div className="text-center mt-8">
              <Button 
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-12 py-6 text-lg h-auto"
                onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
              >
                Enroll in Reiki Training Now
              </Button>
            </div>
          )}
        </motion.div>

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

          {benefits.showButton && (
            <div className="text-center mt-8">
              <Button 
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-12 py-6 text-lg h-auto"
                onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
              >
                Enroll in Reiki Training Now
              </Button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>What to Expect During Reiki Training</SectionTitle>
          <p className="text-lg text-sage-600 mb-6">
            Reiki Training combines theoretical learning, hands-on practice, and spiritual exploration. Under the guidance of Carly Spina, a certified Karuna Reiki Master, you will:
          </p>
          <ul className="list-none space-y-4 mb-8">
            {[
              "Participate in guided meditations and energy exercises",
              "Receive attunements to align with Reiki energy",
              "Practice Reiki techniques with peers in a supportive environment",
              "Explore ethical considerations and best practices for professional Reiki sessions"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-lg text-sage-600">
                <span className="mr-3 text-emerald-500">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg text-sage-600 mb-8">
            Carly creates a nurturing and inclusive space for all learners, ensuring you feel confident and supported throughout your training journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>Why Train with Carly Spina?</SectionTitle>
          <p className="text-lg text-sage-600 mb-8">
            Carly Spina is an experienced Reiki Master with expertise in Usui Reiki, Holy Fire III, and Karuna Reiki. Her teaching style is compassionate, intuitive, and tailored to each student's unique path. Carly's courses are designed to empower you with the confidence, knowledge, and skills to become a proficient Reiki practitioner or teacher.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>Is Reiki Training Right for You?</SectionTitle>
          <p className="text-lg text-sage-600 mb-8">
            Reiki Training is ideal for anyone with a passion for healing, self-discovery, and spiritual growth. Whether you're seeking personal transformation or looking to help others, this journey offers limitless possibilities for expansion and fulfillment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>Begin Your Reiki Training Journey Today</SectionTitle>
          <p className="text-lg text-sage-600 mb-8">
            Are you ready to unlock your healing potential? Join Carly Spina for an immersive Reiki Training experience and step into the world of energy healing. With personalized guidance and a supportive community, you'll gain the tools to create meaningful change in your life and the lives of others.
          </p>
          <div className="text-center">
            <Button 
              className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-12 py-6 text-lg h-auto"
              onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
            >
              Enroll in Reiki Training Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};