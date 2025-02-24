import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const causes = [
  {
    title: "Depression",
    description: "Persistent feelings of sadness, emptiness, and loss of joy.",
    link: "https://www.medicalnewstoday.com/articles/8933#definition",
    icon: "🌧️",
    bgImage: "/images2/cause-0.jpg",
  },
  {
    title: "Anxiety",
    description: "Fear or apprehension about what's going to happen.",
    link: "https://www.health.harvard.edu/blog/anxiety-what-it-is-what-to-do-2018060113955",
    icon: "😰",
    bgImage: "/images2/cause-1.jpg",
  },
  {
    title: "Stress",
    description: "Emotional or physical tension from any event or thought.",
    link: "https://www.medicalnewstoday.com/articles/145855",
    icon: "😓",
    bgImage: "/images2/cause-2.jpg",
  },
  {
    title: "Relationship Issues",
    description: "Difficulties in personal or professional relationships.",
    link: "https://www.psychologytoday.com/us/basics/relationships",
    icon: "💔",
    bgImage: "/images2/cause-2.jpg",
  },
  {
    title: "Trauma",
    description: "Emotional response to a distressing experience or event.",
    link: "https://www.apa.org/topics/trauma",
    icon: "🚨",
    bgImage: "/images2/cause-1.jpg",
  },
  {
    title: "Low Self-Esteem",
    description: "Negative perception of oneself and one's abilities.",
    link: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/self-esteem/about-self-esteem/",
    icon: "🔻",
    bgImage: "/images2/cause-0.jpg",
  },
];

export default function SignsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">
        Signs That You May Need Talking Therapy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {causes.map((cause, index) => (
          <Card
            key={index}
            className="transition-transform duration-300 hover:scale-105 overflow-hidden relative group"
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={cause.bgImage}
                alt={cause.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 opacity-30 group-hover:opacity-40"
              />
            </div>
            <div className="relative z-10 bg-black/50 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex text-white items-center">
                  <span className="text-4xl mr-2">{cause.icon}</span>
                  {cause.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/90">{cause.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <Link
                    href={cause.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
