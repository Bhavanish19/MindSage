"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, NotebookIcon as Lotus, Wind } from "lucide-react";

const facts = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Meditation",
    content:
      "Regular meditation can increase gray matter in the brain, improving memory, learning, and emotional regulation.",
  },
  {
    icon: <Lotus className="h-6 w-6" />,
    title: "Yoga",
    content:
      "Practicing yoga can reduce stress, anxiety, and depression while improving flexibility and cardiovascular health.",
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Breathing Exercises",
    content:
      "Deep breathing exercises can activate the parasympathetic nervous system, reducing stress and promoting relaxation.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Mental Health",
    content:
      "1 in 4 people globally will experience a mental health condition at some point in their lives.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function MentalHealthFacts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black300/50   rounded-[16px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold md:text-2xl mb-2">
            Facts on Mental Health
          </h3>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {facts.map((fact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {fact.icon}
                    <span>{fact.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{fact.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
