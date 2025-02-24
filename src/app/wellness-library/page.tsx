// import { VideoSectionPage } from '@/components/VideoSectionPage';
// import React from 'react'

// const WellnessPage = () => {
//   return (
//      <VideoSectionPage/>
//   )
// }
// export default WellnessPage ;

"use client";

import { motion } from "framer-motion";
import { type YouTubeVideo } from "@/lib/youtube";
import { useState } from "react";
import { Categories } from "@/components/Categories";
import { VideoGrid } from "@/components/VideoGrid";

export default function WellnessLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full pb-10  mx-auto px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Wellness <span className="text-primary">Library</span>
      </h2>

      <div className="flex flex-col gap-8">
        <Categories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <VideoGrid selectedCategory={selectedCategory} />
      </div>
    </motion.div>
  );
}
