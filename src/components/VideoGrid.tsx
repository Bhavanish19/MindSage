"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Play } from "lucide-react";
import { getVideoDetails, type YouTubeVideo } from "@/lib/youtube";
 
import { Skeleton } from "@/components/ui/skeleton";
import { videoIds } from "@/lib/video-data";

interface VideoGridProps {
  selectedCategory: string;
}

export function VideoGrid({ selectedCategory }: VideoGridProps) {
  const router = useRouter();
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredVideos.map((video) => (
        <div
          key={video.id}
          onClick={() => router.push(`/wellness-library/${video.id}`)}
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
          <h3 className="font-medium line-clamp-2 text-base">{video.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <span>{video.duration}</span>
            <span>•</span>
            <span>{video.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
