"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink } from "lucide-react";

const podcastEpisodes = [
    {
        id: "1496yN5qwJAwbLB30XzrvR",
        title: "Managing Work Stress",
        author: "WorkLife with Adam Grant",
        description: "Strategies for maintaining well-being in the workplace.",
      },
      {
        id: "54UlEUdnxJ96kGkrcskhGf",
        title: "Cultivating Self-Compassion",
        author: "The Self-Compassion Podcast",
        description: "Learn to be kinder to yourself for better mental health.",
      },
  {
    id: "4feTGTT8jp9e18w90mBtXc",
    title: "The Science of Happiness",
    author: "The Greater Good Science Center",
    description:
      "Learn research-tested strategies for a happier, more meaningful life.",
  },
  {
    id: "3ZvJ1jpxtjFIZ8sTghil7u",
    title: "Meditation for Anxiety Relief",
    author: "Headspace",
    description: "Guided meditation to help reduce stress and anxiety.",
  },
  {
    id: "0vEWGG6S1wL6IbxJsxb3sF",
    title: "Building Resilience",
    author: "The Mindset Mentor",
    description: "Strategies to bounce back from life's challenges.",
  },
  {
    id: "3qZRmQtsUgHyOVNmZzxxPw",
    title: "Sleep Better Tonight",
    author: "Sleep With Me",
    description: "Bedtime stories to help you fall asleep.",
  },
  {
    id: "2UmljSQsLNonJRZ88b2zfx",
    title: "Mindfulness for Beginners",
    author: "Ten Percent Happier",
    description: "Introduction to mindfulness meditation practices.",
  },
  {
    id: "5nWxL1XA1Jr3C3aJLem5ZK",
    title: "Overcoming Negative Self-Talk",
    author: "Therapy for Black Girls",
    description:
      "Techniques to challenge and change negative thought patterns.",
  },
  {
    id: "06OxqMY33JiZ23Pxw8NmDs",
    title: "The Power of Gratitude",
    author: "Happier with Gretchen Rubin",
    description: "Exploring how gratitude can improve your mental health.",
  },

  {
    id: "6lbYN222AInVmmLj674vKB",
    title: "Nutrition and Mental Health",
    author: "The Food Medic",
    description: "Exploring the connection between diet and mental well-being.",
  },
  {
    id: "19XfB2nyuc1Uh3BservSyf",
    title: "Coping with Grief and Loss",
    author: "Terrible, Thanks for Asking",
    description: "Stories and advice on dealing with difficult emotions.",
  },
  {
    id: "7kIUjh1Lq8B3WZjZwxZJ9M",
    title: "Exercise for Mental Health",
    author: "The Mind Pump Podcast",
    description:
      "How physical activity can boost your mood and reduce anxiety.",
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

export default function PodcastsSection() {
  return (
    <ScrollArea className="h-[70vh]">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {podcastEpisodes.map((episode, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{episode.title}</CardTitle>
                <CardDescription>{episode.author}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">
                  {episode.description}
                </p>
                <div className="relative h-[152px] w-full">
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    // allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    className="rounded-lg absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </ScrollArea>
  );
}
