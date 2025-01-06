import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "../spinal-energetics/SectionTitle";

export const TrainingLevels = () => {
  const levels = [
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24 bg-white rounded-2xl p-8 shadow-lg"
    >
      <SectionTitle>How Does Reiki Training Work?</SectionTitle>
      <p className="text-lg text-sage-600 mb-6 px-8">
        Reiki Training typically progresses through three levels, each building upon the last to deepen your understanding and ability:
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-8 px-8">
        {levels.map((level, lIndex) => (
          <div 
            key={lIndex} 
            className="bg-white/80 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-sage-800">{level.title}</h3>
            <ul className="space-y-3">
              {level.items.map((item, iIndex) => (
                <li key={iIndex} className="text-sage-600 flex items-start">
                  <span className="mr-2 mt-1 text-sage-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button 
          className="bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors px-12 py-6 text-lg h-auto"
          onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
        >
          Enroll in Reiki Training Now
        </Button>
      </div>
    </motion.div>
  );
};
