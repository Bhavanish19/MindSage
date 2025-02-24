"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
 
import { getVideoDetails, type YouTubeVideo } from "@/lib/youtube";
import { Skeleton } from "@/components/ui/skeleton";
import { VideoPlayer } from "@/components/VideoPlayer";
import { RelatedVideos } from "@/components/RelatedVideos";

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const [video, setVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideo() {
      if (!params.videoId) return;
      
      try {
        const details = await getVideoDetails(params.videoId as string);
        if (!details) {
          router.push("/wellness-library");
          return;
        }
        setVideo(details);
      } catch (error) {
        console.error("Error loading video:", error);
        router.push("/wellness-library");
      } finally {
        setLoading(false);
      }
    }

    loadVideo();
  }, [params.videoId, router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="aspect-video w-full rounded-lg" />
            <div className="mt-4 space-y-2">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[100px] w-full" />
            <Skeleton className="h-[100px] w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!video) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoPlayer video={video} />
        </div>
        <div>
          <RelatedVideos currentVideoId={video.id} category={video.category} />
        </div>
      </div>
    </div>
  );
}