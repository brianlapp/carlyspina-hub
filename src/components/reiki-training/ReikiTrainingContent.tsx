import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "../spinal-energetics/SectionTitle";
import { TrainingOverview } from "./TrainingOverview";
import { TrainingLevels } from "./TrainingLevels";
import { TrainingBenefits } from "./TrainingBenefits";

export const ReikiTrainingContent = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4">
        <TrainingOverview />
        <TrainingLevels />
        <TrainingBenefits />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8"
        >
          <SectionTitle>What to Expect During Reiki Training</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/7c4ed573-b878-4d55-b030-f5e53a7ad0e0.png"
                alt="Carly Spina teaching Reiki"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 bg-white rounded-2xl p-8 shadow-lg"
        >
          <SectionTitle>Why Train with Carly Spina?</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-sage-600 mb-8">
                Carly Spina is an experienced Reiki Master with expertise in Usui Reiki, Holy Fire III, and Karuna Reiki. Her teaching style is compassionate, intuitive, and tailored to each student's unique path. Carly's courses are designed to empower you with the confidence, knowledge, and skills to become a proficient Reiki practitioner or teacher.
              </p>
              <Button 
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-12 py-6 text-lg h-auto"
                onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
              >
                Start Your Training with Carly
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/936ac5d7-e4ff-44ed-b35c-91f6fde4f4e6.png"
                alt="Carly Spina, Reiki Master Teacher"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24 px-8 text-center"
        >
          <SectionTitle>Begin Your Reiki Training Journey Today</SectionTitle>
          <p className="text-lg text-sage-600 mb-8 max-w-3xl mx-auto">
            Are you ready to unlock your healing potential? Join Carly Spina for an immersive Reiki Training experience and step into the world of energy healing. With personalized guidance and a supportive community, you'll gain the tools to create meaningful change in your life and the lives of others.
          </p>
          <Button 
            className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-12 py-6 text-lg h-auto"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Enroll in Reiki Training Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};