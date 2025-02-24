"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { type YouTubeVideo } from "@/lib/youtube";

interface VideoPlayerProps {
  video: YouTubeVideo;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{video.title}</CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{video.duration}</span>
          <span>•</span>
          <span>{video.category}</span>
          {video.viewCount && (
            <>
              <span>•</span>
              <span>{parseInt(video.viewCount).toLocaleString()} views</span>
            </>
          )}
          {video.publishedAt && (
            <>
              <span>•</span>
              <span>{video.publishedAt}</span>
            </>
          )}
        </div>
        {video.description && (
          <p className="mt-4 text-sm text-muted-foreground whitespace-pre-line line-clamp-3">
            {video.description}
          </p>
        )}
      </CardHeader>
    </Card>
  );
}