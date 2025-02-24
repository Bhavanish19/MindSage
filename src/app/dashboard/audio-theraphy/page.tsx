// // @ts-nocheck

// import * as React from "react";
// import Image from "next/image";
// import { Book, Music, Podcast } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const musicPlaylists = [
//   {
//     title: "Stress Relief Sounds",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator",
//   },
//   {
//     title: "Peaceful Guitar",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator",
//   },

//   {
//     title: "Relaxing Jazz",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator",
//   },

//   {
//     title: "Focus Music",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator",
//   },
// ];

// const podcastEpisodes = [
//   "4feTGTT8jp9e18w90mBtXc",
//   "5ZxgpIlnsT8kILxQItEQ5f",
//   "4ahVo34YZsDDtCgXX5KS5P",
//   "3ZvJ1jpxtjFIZ8sTghil7u",
//   "0vEWGG6S1wL6IbxJsxb3sF",
//   "0PLXymZ2KH89Ty2KGFpREP",
//   "3qZRmQtsUgHyOVNmZzxxPw",
//   "3rG0WSWKcQ4iEM4JkLQRGg",
//   "2UmljSQsLNonJRZ88b2zfx",
//   "24JEpPldCxgeqGprKO7kMI",
//   "5nWxL1XA1Jr3C3aJLem5ZK",
//   "06OxqMY33JiZ23Pxw8NmDs",
//   "1496yN5qwJAwbLB30XzrvR",
//   "54UlEUdnxJ96kGkrcskhGf",
//   "6lbYN222AInVmmLj674vKB",
//   "19XfB2nyuc1Uh3BservSyf",
// ];

// const audiobooks = [
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     image: "https://m.media-amazon.com/images/I/41wuB-s8vRL._SL300_.jpg",
//     link: "https://www.audible.in/pd/Atomic-Habits-Audiobook/B07J1PK5Q7",
//   },
//   {
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     image: "https://m.media-amazon.com/images/I/51jRBz6Ug3L._SL500_.jpg",
//     link: "https://www.audible.in/pd/The-Psychology-of-Money-Audiobook/B08D9WJCBT",
//   },
//   {
//     title: "The Subtle Art of Not Giving a F*ck",
//     author: "Mark Manson",
//     image: "https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg",
//     link: "https://www.audible.in/pd/The-Subtle-Art-of-Not-Giving-a-F-ck-Audiobook/B079BC54JT",
//   },
//   {
//     title: "Ikigai",
//     author: "Héctor García and Francesc Miralles",
//     image: "https://m.media-amazon.com/images/I/511HccWipML._SL500_.jpg",
//     link: "https://www.audible.in/pd/Ikigai-Audiobook/B0759Y4LYM",
//   },
//   {
//     title: "Think Like A Monk",
//     author: "Jay Shetty",
//     image: "https://m.media-amazon.com/images/I/51n4UO2a+VS._SL500_.jpg",
//     link: "https://www.audible.in/pd/Think-Like-A-Monk-Audiobook/B07YSQ8GT5",
//   },
//   {
//     title: "Life's Amazing Secrets",
//     author: "Gaur Gopal Das",
//     image: "https://m.media-amazon.com/images/I/514sscPA15L._SL500_.jpg",
//     link: "https://www.audible.in/pd/Lifes-Amazing-Secrets-Audiobook/B081S9NKRP",
//   },
// ];

// export default function AudioContent() {
//   return (
//     <div className=" py-12 px-4">
//       <h1 className="text-4xl font-bold text-center mb-12">Audio Therapy</h1>

//       <Tabs defaultValue="music" className="w-full">
//         <TabsList className="grid w-full grid-cols-3 mb-8">
//           <TabsTrigger value="music">
//             <Music className="mr-2 h-4 w-4" />
//             Music
//           </TabsTrigger>
//           <TabsTrigger value="podcasts">
//             <Podcast className="mr-2 h-4 w-4" />
//             Podcasts
//           </TabsTrigger>
//           <TabsTrigger value="audiobooks">
//             <Book className="mr-2 h-4 w-4" />
//             Audiobooks
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent className="w-full" value="music">
//           <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 items-baseline gap-3 p-1  ">
//             {musicPlaylists.map((playlist, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
//               >
//                 <div className="px-4 py-5 sm:px-6">
//                   <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
//                     {playlist.title}
//                   </h3>
//                 </div>
//                 <div className="px-4 py-5 sm:p-6">
//                   <iframe
//                     src={playlist.src}
//                     width="100%"
//                     height="380"
//                     frameBorder="0"
//                     allowFullScreen=""
//                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                     className="rounded-[30px]"
//                   ></iframe>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="podcasts">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {podcastEpisodes.map((episodeId, index) => (
//               <Card key={index}>
//                 <CardContent className="pt-6">
//                   <iframe
//                     src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
//                     width="100%"
//                     height="152"
//                     frameBorder="0"
//                     allowFullScreen=""
//                     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                     className="rounded-lg"
//                   ></iframe>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>

//         <TabsContent value="audiobooks">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {audiobooks.map((book, index) => (
//               <Card key={index}>
//                 <CardContent className="pt-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="flex-shrink-0">
//                       <Image
//                         src={book.image}
//                         alt={book.title}
//                         width={100}
//                         height={100}
//                         className="rounded-lg"
//                       />
//                     </div>
//                     <div>
//                       <CardTitle className="text-lg">{book.title}</CardTitle>
//                       <p className="text-sm text-muted-foreground">
//                         {book.author}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button asChild className="w-full">
//                     <a
//                       href={book.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Listen Now
//                     </a>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

//GOOD down !

// "use client"

// import * as React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Book, Music, Podcast } from "lucide-react"
// import { motion } from "framer-motion"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ScrollArea } from "@/components/ui/scroll-area"

// const musicPlaylists = [
//   {
//     title: "Stress Relief Sounds",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator",
//   },
//   {
//     title: "Peaceful Guitar",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator",
//   },
//   {
//     title: "Relaxing Jazz",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator",
//   },
//   {
//     title: "Focus Music",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator",
//   },
//   {
//     title: "Ambient Relaxation",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVV27DiNWxkR?utm_source=generator",
//   },
//   {
//     title: "Instrumental Study",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWUS3jbm4YExP?utm_source=generator",
//   },
//   {
//     title: "Calm Meditation",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator",
//   },
//   {
//     title: "Evening Chill",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1rVvRgjX59F?utm_source=generator",
//   },
//   {
//     title: "Deep Focus",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator",
//   },
//   {
//     title: "Relax & Unwind",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx?utm_source=generator",
//   },
//   {
//     title: "Nature Sounds",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator",
//   },
//   {
//     title: "Soft Pop Hits",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8vAahjzdXGC?utm_source=generator",
//   },
//   {
//     title: "Piano in the Background",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator",
//   },
//   {
//     title: "Classical Essentials",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0?utm_source=generator",
//   },
//   {
//     title: "Serene Morning",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator",
//   },
//   {
//     title: "Mindfulness Meditation",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator",
//   },
//   {
//     title: "Spa Music",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3yvAYDslnv8?utm_source=generator",
//   },
//   {
//     title: "Gentle Acoustic",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX6VdMW310YC7?utm_source=generator",
//   },
//   {
//     title: "Mellow Beats",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?utm_source=generator",
//   },
//   {
//     title: "Ambient Chill",
//     src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4E3UdUs7fUx?utm_source=generator",
//   },
// ];

// const podcastEpisodes = [
//   "4feTGTT8jp9e18w90mBtXc",
//   "5ZxgpIlnsT8kILxQItEQ5f",
//   "4ahVo34YZsDDtCgXX5KS5P",
//   "3ZvJ1jpxtjFIZ8sTghil7u",
//   "0vEWGG6S1wL6IbxJsxb3sF",
//   "0PLXymZ2KH89Ty2KGFpREP",
//   "3qZRmQtsUgHyOVNmZzxxPw",
//   "3rG0WSWKcQ4iEM4JkLQRGg",
//   "2UmljSQsLNonJRZ88b2zfx",
//   "24JEpPldCxgeqGprKO7kMI",
//   "5nWxL1XA1Jr3C3aJLem5ZK",
//   "06OxqMY33JiZ23Pxw8NmDs",
//   "1496yN5qwJAwbLB30XzrvR",
//   "54UlEUdnxJ96kGkrcskhGf",
//   "6lbYN222AInVmmLj674vKB",
//   "19XfB2nyuc1Uh3BservSyf",
// ]

// const audiobooks = [
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     image: "https://m.media-amazon.com/images/I/41wuB-s8vRL._SL300_.jpg",
//     link: "https://www.audible.in/pd/Atomic-Habits-Audiobook/B07J1PK5Q7",
//   },
//   {
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     image: "https://m.media-amazon.com/images/I/51jRBz6Ug3L._SL500_.jpg",
//     link: "https://www.audible.in/pd/The-Psychology-of-Money-Audiobook/B08D9WJCBT",
//   },
//   {
//     title: "The Subtle Art of Not Giving a F*ck",
//     author: "Mark Manson",
//     image: "https://m.media-amazon.com/images/I/51MT0MbpD7L._SL500_.jpg",
//     link: "https://www.audible.in/pd/The-Subtle-Art-of-Not-Giving-a-F-ck-Audiobook/B079BC54JT",
//   },
//   {
//     title: "Ikigai",
//     author: "Héctor García and Francesc Miralles",
//     image: "https://m.media-amazon.com/images/I/511HccWipML._SL500_.jpg",
//     link: "https://www.audible.in/pd/Ikigai-Audiobook/B0759Y4LYM",
//   },
//   {
//     title: "Think Like A Monk",
//     author: "Jay Shetty",
//     image: "https://m.media-amazon.com/images/I/51n4UO2a+VS._SL500_.jpg",
//     link: "https://www.audible.in/pd/Think-Like-A-Monk-Audiobook/B07YSQ8GT5",
//   },
//   {
//     title: "Life's Amazing Secrets",
//     author: "Gaur Gopal Das",
//     image: "https://m.media-amazon.com/images/I/514sscPA15L._SL500_.jpg",
//     link: "https://www.audible.in/pd/Lifes-Amazing-Secrets-Audiobook/B081S9NKRP",
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// }

// export default function AudioTherapy() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.h1
//           className="text-4xl font-bold text-center mb-12 text-primary"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Audio Therapy
//         </motion.h1>

//         <Tabs defaultValue="music" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 mb-8">
//             <TabsTrigger value="music" className="text-lg">
//               <Music className="mr-2 h-5 w-5" />
//               Music
//             </TabsTrigger>
//             <TabsTrigger value="podcasts" className="text-lg">
//               <Podcast className="mr-2 h-5 w-5" />
//               Podcasts
//             </TabsTrigger>
//             <TabsTrigger value="audiobooks" className="text-lg">
//               <Book className="mr-2 h-5 w-5" />
//               Audiobooks
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="music">
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {musicPlaylists.map((playlist, index) => (
//                 <motion.div key={index} variants={itemVariants}>
//                   <Card className="overflow-hidden">
//                     <CardHeader>
//                       <CardTitle>{playlist.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-0">
//                       <iframe
//                         src={playlist.src}
//                         width="100%"
//                         height="380"
//                         frameBorder="0"
//                         allowFullScreen=""
//                         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                         className="rounded-b-lg"
//                       ></iframe>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           <TabsContent value="podcasts">
//             <ScrollArea className="h-[70vh]">
//               <motion.div
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {podcastEpisodes.map((episodeId, index) => (
//                   <motion.div key={index} variants={itemVariants}>
//                     <Card>
//                       <CardContent className="p-4">
//                         <iframe
//                           src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
//                           width="100%"
//                           height="152"
//                           frameBorder="0"
//                           allowFullScreen=""
//                           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                           className="rounded-lg"
//                         ></iframe>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </ScrollArea>
//           </TabsContent>

//           <TabsContent value="audiobooks">
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {audiobooks.map((book, index) => (
//                 <motion.div key={index} variants={itemVariants}>
//                   <Card className="flex flex-col h-full">
//                     <CardContent className="flex-grow p-6">
//                       <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
//                         <div className="flex-shrink-0">
//                           <Image
//                             src={book.image}
//                             alt={book.title}
//                             width={100}
//                             height={100}
//                             className="rounded-lg object-cover"
//                           />
//                         </div>
//                         <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//                           <CardTitle className="text-lg">{book.title}</CardTitle>
//                           <p className="text-sm text-muted-foreground">{book.author}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                     <CardFooter>
//                       <Button asChild className="w-full">
//                         <Link href={book.link} target="_blank" rel="noopener noreferrer">
//                           Listen Now
//                         </Link>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Book, Music, Podcast } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShimmerUI } from "@/components/shimmer-ui";

const MusicSection = dynamic(
  () => import("@/components/audio-theraphy-components/music-section"),
  {
    loading: () => <ShimmerUI type="music" />,
  }
);
const PodcastsSection = dynamic(
  () => import("@/components/audio-theraphy-components/podcasts-section"),
  {
    loading: () => <ShimmerUI type="podcasts" />,
  }
);
const AudiobooksSection = dynamic(
  () => import("@/components/audio-theraphy-components/audiobooks-section"),
  {
    loading: () => <ShimmerUI type="audiobooks" />,
  }
);

export default function AudioTherapy() {
  return (
    <div className="min-h-screen   bg-gradient-to-b from-primary/5 to-secondary/5 py-3  md:py-6  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 ">
          Audio <span className="text-primary"> Therapy</span>
        </h1>

        <Tabs defaultValue="music" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 dark:bg-black200 ">
            <TabsTrigger value="music" className=" text-sm md:text-lg">
              <Music className="mr-2  h-5 w-5 md:block hidden font-semibold " />
              Music
            </TabsTrigger>
            <TabsTrigger value="podcasts" className=" text-sm md:text-lg">
              <Podcast className="mr-2 h-5 w-5 md:block hidden font-semibold " />
              Podcasts
            </TabsTrigger>
            <TabsTrigger value="audiobooks" className=" text-sm md:text-lg">
              <Book className="mr-2 h-5 w-5 md:block hidden font-semibold " />
              Audiobooks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="music">
            <Suspense fallback={<ShimmerUI type="music" />}>
              <MusicSection />
            </Suspense>
          </TabsContent>

          <TabsContent value="podcasts">
            <Suspense fallback={<ShimmerUI type="podcasts" />}>
              <PodcastsSection />
            </Suspense>
          </TabsContent>

          <TabsContent value="audiobooks">
            <Suspense fallback={<ShimmerUI type="audiobooks" />}>
              <AudiobooksSection />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
