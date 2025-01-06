import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "../spinal-energetics/SectionTitle";
import { TrainingOverview } from "./TrainingOverview";
import { TrainingLevels } from "./TrainingLevels";
import { TrainingBenefits } from "./TrainingBenefits";

export const ReikiTrainingContent = () => {
  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4">
        <TrainingOverview />
        <TrainingLevels />
        <TrainingBenefits />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 px-4 md:px-8"
        >
          <SectionTitle>What to Expect During Reiki Training</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-base md:text-lg text-sage-600 mb-6">
                Reiki Training combines theoretical learning, hands-on practice, and spiritual exploration. Under the guidance of Carly Spina, a certified Karuna Reiki Master, you will:
              </p>
              <ul className="list-none space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Participate in guided meditations and energy exercises",
                  "Receive attunements to align with Reiki energy",
                  "Practice Reiki techniques with peers in a supportive environment",
                  "Explore ethical considerations and best practices for professional Reiki sessions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-base md:text-lg text-sage-600">
                    <span className="mr-3 text-emerald-500 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg order-1 md:order-2 h-[250px] md:h-[400px]">
              <img 
                src="/lovable-uploads/723879b6-af4b-4074-83f2-80c37e69165b.png"
                alt="Spiritual energy visualization representing Reiki training journey"
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
          className="mb-12 md:mb-24 bg-white rounded-2xl p-4 md:p-8 shadow-lg"
        >
          <SectionTitle>Why Train with Carly Spina?</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-sage-600 mb-6 md:mb-8">
                Carly Spina is an experienced Reiki Master with expertise in Usui Reiki, Holy Fire III, and Karuna Reiki. Her teaching style is compassionate, intuitive, and tailored to each student's unique path. Carly's courses are designed to empower you with the confidence, knowledge, and skills to become a proficient Reiki practitioner or teacher.
              </p>
              <Button 
                className="w-full md:w-auto bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors px-6 md:px-12 py-4 md:py-6 text-base md:text-lg h-auto"
                onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
              >
                Start Your Training with Carly
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[250px] md:h-[400px]">
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
          className="mb-12 md:mb-24 px-4 md:px-8 text-center"
        >
          <SectionTitle>Begin Your Reiki Training Journey Today</SectionTitle>
          <p className="text-base md:text-lg text-sage-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Are you ready to unlock your healing potential? Join Carly Spina for an immersive Reiki Training experience and step into the world of energy healing. With personalized guidance and a supportive community, you'll gain the tools to create meaningful change in your life and the lives of others.
          </p>
          <Button 
            className="w-full md:w-auto bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-6 md:px-12 py-4 md:py-6 text-base md:text-lg h-auto"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Enroll in Reiki Training Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};