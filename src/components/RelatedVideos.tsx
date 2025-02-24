// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { getRelatedVideos, type YouTubeVideo } from "@/lib/youtube";
// import { Skeleton } from "@/components/ui/skeleton";

// interface RelatedVideosProps {
//   currentVideoId: string;
//   category: string;
// }

// export function RelatedVideos({ currentVideoId, category }: RelatedVideosProps) {
//   const router = useRouter();
//   const [videos, setVideos] = useState<YouTubeVideo[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchRelatedVideos() {
//       try {
//         const relatedVideos = await getRelatedVideos(currentVideoId, category, 5);
//         setVideos(relatedVideos);
//       } catch (error) {
//         console.error("Error fetching related videos:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRelatedVideos();
//   }, [currentVideoId, category]);

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         {[...Array(5)].map((_, i) => (
//           <div key={i} className="flex gap-4">
//             <Skeleton className="w-40 h-24 rounded-lg" />
//             <div className="flex-1 space-y-2">
//               <Skeleton className="h-4 w-full" />
//               <Skeleton className="h-3 w-2/3" />
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (videos.length === 0) {
//     return (
//       <div className="text-center text-muted-foreground py-8">
//         No related videos found
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <h3 className="font-semibold text-lg mb-4">Related Videos</h3>
//       {videos.map((video) => (
//         <div
//           key={video.id}
//           onClick={() => router.push(`/wellness-library/${video.id}`)}
//           className="flex gap-4 cursor-pointer group"
//         >
//           <div className="relative w-40 h-24">
//             <Image
//               src={video.thumbnail}
//               alt={video.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="flex-1">
//             <h4 className="font-medium line-clamp-2 group-hover:text-primary transition">
//               {video.title}
//             </h4>
//             <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
//               <span>{video.duration}</span>
//               <span>•</span>
//               <span>{video.category}</span>
//               {video.viewCount && (
//                 <>
//                   <span>•</span>
//                   <span>{parseInt(video.viewCount).toLocaleString()} views</span>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// best 

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { getRelatedVideos, type YouTubeVideo } from "@/lib/youtube";
// import { Skeleton } from "@/components/ui/skeleton";

// interface RelatedVideosProps {
//   currentVideoId: string;
//   category: string;
// }

// export function RelatedVideos({
//   currentVideoId,
//   category,
// }: RelatedVideosProps) {
//   const router = useRouter();
//   const [videos, setVideos] = useState<YouTubeVideo[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchRelatedVideos() {
//       try {
//         const relatedVideos = await getRelatedVideos(
//           currentVideoId,
//           category,
//           5
//         );
//         setVideos(relatedVideos);
//       } catch (error) {
//         console.error("Error fetching related videos:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchRelatedVideos();
//   }, [currentVideoId, category]);

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         {[...Array(5)].map((_, i) => (
//           <div key={i} className="flex gap-4">
//             <Skeleton className="w-40 h-24 rounded-lg" />
//             <div className="flex-1 space-y-2">
//               <Skeleton className="h-4 w-full" />
//               <Skeleton className="h-3 w-2/3" />
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (videos.length === 0) {
//     return (
//       <div className="text-center text-muted-foreground py-8">
//         No related videos found
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <h3 className="font-semibold text-lg mb-4">Related Videos</h3>
//       {videos.map((video) => (
//         <div
//           key={video.id}
//           onClick={() => router.push(`/wellness-library/${video.id}`)}
//           className="flex gap-4 cursor-pointer group"
//         >
//           <div className="relative w-40 h-24">
//             <Image
//               src={video.thumbnail}
//               alt={video.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="flex-1">
//             <h4 className="font-medium line-clamp-2 group-hover:text-primary transition">
//               {video.title}
//             </h4>
//             <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
//               <span>{video.duration} Minuites</span>
//               <span>•</span>
//               <span>{video.category}</span>
//               {video.viewCount && (
//                 <>
//                   <span>•</span>
//                   <span>
//                     {parseInt(video.viewCount).toLocaleString()} views
//                   </span>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getRelatedVideos, type YouTubeVideo } from "@/lib/youtube";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RelatedVideosProps {
  currentVideoId: string;
  category: string;
}

export function RelatedVideos({ currentVideoId, category }: RelatedVideosProps) {
  const router = useRouter();
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedVideos() {
      try {
        const relatedVideos = await getRelatedVideos(currentVideoId, category, 8);
        setVideos(relatedVideos);
      } catch (error) {
        console.error("Error fetching related videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedVideos();
  }, [currentVideoId, category]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-40 h-24 rounded-lg" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No related videos found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Related Videos</h3>
      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <div className="space-y-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => router.push(`/wellness-library/${video.id}`)}
              className="flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-3">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium line-clamp-2 text-base group-hover:text-primary transition">
                  {video.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <span>{video.category}</span>
                  {video.viewCount && (
                    <>
                      <span>•</span>
                      <span>{parseInt(video.viewCount).toLocaleString()} views</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}