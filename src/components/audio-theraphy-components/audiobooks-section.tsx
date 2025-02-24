"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

// const audiobooks = [
//     {
//       title: "Atomic Habits",
//       author: "James Clear",
//       image: "https://m.media-amazon.com/images/I/41wuB-s8vRL._SL300_.jpg",
//       link: "https://www.audible.in/pd/Atomic-Habits-Audiobook/B07J1PK5Q7",
//     },
//     {
//       title: "The Psychology of Money",
//       author: "Morgan Housel",
//       image: "https://m.media-amazon.com/images/I/51jRBz6Ug3L._SL500_.jpg",
//       link: "https://www.audible.in/pd/The-Psychology-of-Money-Audiobook/B08D9WJCBT",
//     },
//     {
//       title: "The Subtle Art of Not Giving a F*ck",
//       author: "Mark Manson",
//       image: "https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg",
//       link: "https://www.audible.in/pd/The-Subtle-Art-of-Not-Giving-a-F-ck-Audiobook/B079BC54JT",
//     },
//     {
//       title: "Ikigai",
//       author: "Héctor García and Francesc Miralles",
//       image: "https://m.media-amazon.com/images/I/511HccWipML._SL500_.jpg",
//       link: "https://www.audible.in/pd/Ikigai-Audiobook/B0759Y4LYM",
//     },
//     {
//       title: "Think Like A Monk",
//       author: "Jay Shetty",
//       image: "https://m.media-amazon.com/images/I/51n4UO2a+VS._SL500_.jpg",
//       link: "https://www.audible.in/pd/Think-Like-A-Monk-Audiobook/B07YSQ8GT5",
//     },
//     {
//       title: "Life's Amazing Secrets",
//       author: "Gaur Gopal Das",
//       image: "https://m.media-amazon.com/images/I/514sscPA15L._SL500_.jpg",
//       link: "https://www.audible.in/pd/Lifes-Amazing-Secrets-Audiobook/B081S9NKRP",
//     },

//   ]

const audiobooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/41wuB-s8vRL._SL300_.jpg",
    link: "https://www.audible.in/pd/Atomic-Habits-Audiobook/B07J1PK5Q7",
    description:
      "Tiny changes, remarkable results: transform your life with small habits.",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "https://m.media-amazon.com/images/I/51jRBz6Ug3L._SL500_.jpg",
    link: "https://www.audible.in/pd/The-Psychology-of-Money-Audiobook/B08D9WJCBT",
    description: "Timeless lessons on wealth, greed, and happiness.",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image: "https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg",
    link: "https://www.audible.in/pd/The-Subtle-Art-of-Not-Giving-a-F-ck-Audiobook/B079BC54JT",
    description: "A counterintuitive approach to living a good life.",
  },
  {
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    image: "https://m.media-amazon.com/images/I/511HccWipML._SL500_.jpg",
    link: "https://www.audible.in/pd/Ikigai-Audiobook/B0759Y4LYM",
    description: "The Japanese secret to a long and happy life.",
  },
  {
    title: "Think Like A Monk",
    author: "Jay Shetty",
    image: "https://m.media-amazon.com/images/I/51n4UO2a+VS._SL500_.jpg",
    link: "https://www.audible.in/pd/Think-Like-A-Monk-Audiobook/B07YSQ8GT5",
    description: "Train your mind for peace and purpose every day.",
  },
  {
    title: "Life's Amazing Secrets",
    author: "Gaur Gopal Das",
    image: "https://m.media-amazon.com/images/I/514sscPA15L._SL500_.jpg",
    link: "https://www.audible.in/pd/Lifes-Amazing-Secrets-Audiobook/B081S9NKRP",
    description: "How to find balance and purpose in your life.",
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    image: "https://m.media-amazon.com/images/I/51ejXdSceNL._SL500_.jpg",
    link: "https://www.audible.in/pd/The-Four-Agreements-Audiobook/B078KKQV9R",
    description: "A practical guide to personal freedom.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    image: "https://m.media-amazon.com/images/I/41wI53OEpCL._SL500_.jpg",
    link: "https://www.audible.in/pd/Thinking-Fast-and-Slow-Audiobook/B07FSNSLZ1",
    description: "How we think and make choices.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SL500_.jpg",
    link: "https://www.audible.in/pd/The-Alchemist-Audiobook/B07BW9GX2P",
    description: "A fable about following your dream.",
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

export default function AudiobooksSection() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {audiobooks.map((book, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="flex flex-col h-full">
            <CardContent className="flex-grow p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
