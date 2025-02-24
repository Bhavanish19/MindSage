//@ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const benefits = [
  {
    title: "Reduces stress",
    icon: "🧘‍♂️",
    description: "Reading can lower your heart rate and ease muscle tension",
  },
  {
    title: "Increases empathy",
    icon: "❤️",
    description: "Stories help us understand different perspectives",
  },
  {
    title: "Prevents cognitive decline",
    icon: "🧠",
    description: "Keeps your mind sharp and active",
  },
  {
    title: "Builds vocabulary",
    icon: "📚",
    description: "Expand your language skills naturally",
  },
  {
    title: "Improves sleep",
    icon: "😴",
    description: "Perfect way to wind down before bed",
  },
  {
    title: "Alleviates depression",
    icon: "🌟",
    description: "Provides escape and emotional relief",
  },
  {
    title: "Enhances focus",
    icon: "🎯",
    description: "Strengthens concentration abilities",
  },
  {
    title: "Boosts creativity",
    icon: "🎨",
    description: "Stimulates imagination and innovation",
  },
];

const articles = [
  {
    title:
      "The Reading Brain in the Digital Age: The Science of Paper versus Screens",
    description:
      "Explore how different reading mediums affect comprehension and cognition",
    url: "https://www.scientificamerican.com/article/reading-paper-screens/",
    category: "Science",
  },
  {
    title: "How Reading Rewires Your Brain for More Intelligence and Empathy",
    description: "Discover the neurological benefits of regular reading",
    url: "https://bigthink.com/neuropsych/reading-rewires-your-brain-for-more-intelligence-and-empathy/",
    category: "Neuroscience",
  },
  {
    title: "The Importance of Deep Reading",
    description: "Learn about the cognitive benefits of immersive reading",
    url: "https://www.psychologytoday.com/us/blog/the-athletes-way/201401/reading-fiction-improves-brain-connectivity-and-function",
    category: "Psychology",
  },
  {
    title: "How Reading Fiction Increases Empathy and Encourages Understanding",
    description: "Explore the social benefits of reading fiction",
    url: "https://www.discovermagazine.com/mind/how-reading-fiction-increases-empathy-and-encourages-understanding",
    category: "Social Science",
  },
  {
    title: "The Mental Health Benefits of Reading",
    description: "Understand how reading can improve your mental wellbeing",
    url: "https://www.medicalnewstoday.com/articles/326964",
    category: "Mental Health",
  },
  {
    title: "Reading Books Has Become a Competitive Edge",
    description: "Discover why reading is crucial in the modern workplace",
    url: "https://hbr.org/2019/02/reading-books-has-become-a-competitive-edge",
    category: "Career Development",
  },
];

const quotes = [
  {
    text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    author: "George R.R. Martin",
    image: "/images2/motivation.png",
    category: "Imagination",
  },
  {
    text: "Reading is essential for those who seek to rise above the ordinary.",
    author: "Jim Rohn",
    image: "/images2/inspiration.png",
    category: "Self-Improvement",
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
    image: "/images2/inspiration (1).png",
    category: "Learning",
  },
  {
    text: "Reading is to the mind what exercise is to the body.",
    author: "Joseph Addison",
    image: "/images2/motivation (3).png",
    category: "Mental Fitness",
  },
  {
    text: "A book is a dream that you hold in your hand.",
    author: "Neil Gaiman",
    image: "/images2/boy.png",
    category: "Dreams",
  },
  {
    text: "Reading is an exercise in empathy; an exercise in walking in someone else's shoes for a while.",
    author: "Malorie Blackman",
    image: "/images2/boy2.png",
    category: "Empathy",
  },
];

// const fallbackImageUrl = "/bookdummy.jpg"; // Path to your fallback image

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/41wuB-s8vRL._SL300_.jpg",
    link: "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/",
    category: "Self-Help",
    rating: 4.7,
    description:
      "Timeless principles for personal and professional effectiveness",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/51jRBz6Ug3L._SL500_.jpg",
    link: "https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/",
    category: "Finance",
    rating: 4.6,
    description: "Timeless lessons on wealth, greed, and happiness",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image: "https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg",
    link: "https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549/",
    category: "Self-Help",
    rating: 4.5,
    description: "A counterintuitive approach to living a good life",
  },
  {
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    image: "https://m.media-amazon.com/images/I/511HccWipML._SL500_.jpg",
    link: "https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/",
    category: "Self-Help",
    rating: 4.6,
    description: "The Japanese secret to a long and happy life",
  },
];

const fallbackImageUrl =
  "https://via.placeholder.com/300x450?text=Book+Cover+Not+Available";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ReadingTherapy() {
  return (
    <div className="min-h-screen   ">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-books h-[68vh] bg-cover bg-center rounded-b-[3rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white z-10 px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-heading"
          >
            Reading Therapy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl font-light"
          >
            Discover the healing power of words and stories
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg"
              onClick={() =>
                document
                  .getElementById("recommended-books")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-32">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">
            Benefits of Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="recommended-books" // Corrected id
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-16"
        >
          <h2 className=" text-3xl md:text-4xl font-bold text-center mb-14 font-heading">
            Recommended Books
          </h2>
          {/* <ScrollArea className="h-[600px] pr-4"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <motion.div key={index} variants={item}>
                <Card className="flex flex-col md:flex-row overflow-hidden h-full">
                  <div className="relative w-full md:w-48 h-64 md:h-auto">
                    <Image
                      src={book.image}
                      alt={book.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null; // Prevents looping if fallback image also fails
                        e.currentTarget.src = fallbackImageUrl;
                      }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="mb-2 line-clamp-2">
                        {book.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
                    </CardHeader>
                    <div className="mb-4">
                      <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        {book.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(book.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {book.rating}
                        </span>
                      </div>
                    </div>
                    <Button asChild variant="default" className="w-full">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={book.link}
                      >
                        Read Now
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* </ScrollArea> */}
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="dark:bg-black100 rounded-3xl  "
        >
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">
            Word of Advice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quotes.map((quote, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={quote.image}
                      alt="Inspirational image"
                      height={200}
                      width={139}
                      objectFit="contain"
                      className=" duration-300 p-4 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-white/80 bg-primary/80 px-2 py-1 rounded-full">
                        {quote.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-base mb-4 italic">{quote.text}</p>
                    <p className="text-sm text-muted-foreground">
                      — {quote.author}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <h2 className="text-4xl font-bold text-center mb-16 font-heading">
            Curated Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div key={index} variants={item}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      <span className="inline-block bg-secondary/10 text-secondary rounded-full px-3 py-1 text-sm">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 mb-2">
                      {article.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Link href={article.url}>Read Article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
