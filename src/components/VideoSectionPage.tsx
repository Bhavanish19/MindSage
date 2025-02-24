"use client";

import * as React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getVideoDetails, type YouTubeVideo } from "@/lib/youtube";
import { Skeleton } from "@/components/ui/skeleton";

const videoIds = [
  // Mental Health & Psychology
  { id: "uw7kllUlI_g", category: "Mental Health" },
  { id: "gzLPa6NbcrE", category: "Mental Health" },
  { id: "gR_f-iwUGY4", category: "Mental Health" },
  { id: "bV_NdUZEmnE", category: "Mental Health" },
  { id: "c8hjhRqIwHE", category: "Mental Health" },
  { id: "inpok4MKVLM", category: "Mental Health" },
  { id: "VaoV1PrYft4", category: "Mental Health" },
  { id: "DxIDKZHW3-E", category: "Mental Health" },
  { id: "8jPQjjsBbIc", category: "Mental Health" },
  { id: "MB5IX-np5fE", category: "Mental Health" },

  // Motivation & Self Improvement
  { id: "BvpmZktlBFs", category: "Motivation" },
  { id: "9QiE-M1LrZk", category: "Self Improvement" },
  { id: "KwHcTrYgBhg", category: "Motivation" },
  { id: "vmIUvp0e58w", category: "Motivation" },
  { id: "g-jwWYX7Jlo", category: "Self Improvement" },
  { id: "LrhSJ1FUq1k", category: "Motivation" },
  { id: "ZwYy4scOJi8", category: "Self Improvement" },
  { id: "mNeXuCYiE0U", category: "Motivation" },
  { id: "2iPFTZGEqPs", category: "Self Improvement" },
  { id: "YFUIPg6P5q8", category: "Motivation" },

  // Meditation & Mindfulness
  { id: "hJbRpHZr_d0", category: "Meditation" },
  { id: "O-6f5wQXSu8", category: "Meditation" },
  { id: "ZToicYcHIOU", category: "Meditation" },
  { id: "U9YKY7fdwyg", category: "Meditation" },
  { id: "inpok4MKVLM", category: "Mindfulness" },
  { id: "SEfs5TJZ6Nk", category: "Mindfulness" },
  { id: "6p_yaNFSbCk", category: "Meditation" },
  { id: "wruCWicGBA4", category: "Mindfulness" },

  // Physical Health & Fitness
  { id: "brjAjq4zEIE", category: "Fitness" },
  { id: "0XBcrjkkwQo", category: "Health" },
  { id: "UBMk30rjy0o", category: "Fitness" },
  { id: "s2NQhpFGIOg", category: "Exercise" },
  { id: "ml6cT4AZdqI", category: "Health" },
  { id: "7DOE1wbQpzE", category: "Exercise" },
  { id: "q2NZyW5pKrE", category: "Fitness" },

  // Sleep & Relaxation
  { id: "7Vqv5SmSKHY", category: "Sleep" },
  { id: "g_tea8ZNk5A", category: "Morning" },
  { id: "1ZYbU82GVz4", category: "Sleep" },
  { id: "EwQkfoKxjzo", category: "Relaxation" },
  { id: "aEqlQvczMJQ", category: "Sleep" },
  { id: "acHd-HkQfWM", category: "Relaxation" },

  // Anxiety & Stress Management
  { id: "WWloIAQpMcQ", category: "Anxiety" },
  { id: "8jPQjjsBbIc", category: "Stress" },
  { id: "ptUj8JRAYu8", category: "Anxiety" },
  { id: "qvaB2d5yDf8", category: "Stress" },
  { id: "kEqvtbR5Hz4", category: "Anxiety" },
  { id: "sTJ7AzBIJoI", category: "Stress" },

  // Positive Psychology
  { id: "WPPPFqsECz0", category: "Positive Psychology" },
  { id: "RwxC5J8LI4Q", category: "Positive Psychology" },
  { id: "1qanDVZHliw", category: "Positive Psychology" },
  { id: "xp2lJXEeEM8", category: "Positive Psychology" },
];

const categories = [...new Set(videoIds.map((video) => video.category))];

export function VideoSectionPage () {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [videos, setVideos] = React.useState<YouTubeVideo[]>([]);
  const [activeVideo, setActiveVideo] = React.useState<YouTubeVideo | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchVideos() {
      try {
        const videoDetails = await Promise.all(
          videoIds.map(async ({ id, category }) => {
            const details = await getVideoDetails(id);
            return details ? { ...details, category } : null;
          })
        );

        const validVideos = videoDetails.filter(
          (v): v is YouTubeVideo => v !== null
        );
        setVideos(validVideos);
        setActiveVideo(validVideos[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[400px] w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-12 container mx-auto px-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Wellness <span className="text-primary">Library</span>
      </h2>

      <div className="flex flex-col gap-8">
        {/* Main Video Player */}
        {activeVideo && (
          <div className="w-full">
            <Card className="overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{activeVideo.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{activeVideo.duration}</span>
                  <span>{activeVideo.category}</span>
                </div>
              </CardHeader>
            </Card>
          </div>
        )}

        {/* Categories */}
        <div className="w-full">
          <ScrollArea className="w-full">
            <div className="flex gap-2 pb-4 px-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="cursor-pointer group"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
              <h3 className="font-medium line-clamp-2 text-base">
                {video.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>{video.duration}</span>
                <span>•</span>
                <span>{video.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
