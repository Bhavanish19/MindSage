// talking-therapy_header.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="relative h-[70vh] md:h-[80vh] rounded-b-[32px] overflow-hidden">
      <Image
        src="/images2/talking-1.jpg"
        alt="Talking Therapy"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white z-10 px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our{" "}
            <span className="text-orange-500">Talking Therapy</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the power of conversation in shifting the direction of
            change. Explore our resources on talking therapy, its benefits, and
            professional counseling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button> */}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
