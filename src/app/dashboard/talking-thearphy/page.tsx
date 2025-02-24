// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, ArrowRight } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// const causes = [
//   {
//     title: "Depression",
//     description: "Persistent feelings of sadness, emptiness, and loss of joy.",
//     link: "https://www.medicalnewstoday.com/articles/8933#definition",
//     icon: "🌧️",
//     bgImage: "/images2/cause-0.jpg",
//   },
//   {
//     title: "Anxiety",
//     description: "Fear or apprehension about what's going to happen.",
//     link: "https://www.health.harvard.edu/blog/anxiety-what-it-is-what-to-do-2018060113955",
//     icon: "😰",
//     bgImage: "/images2/cause-1.jpg",
//   },
//   {
//     title: "Stress",
//     description: "Emotional or physical tension from any event or thought.",
//     link: "https://www.medicalnewstoday.com/articles/145855",
//     icon: "😓",
//     bgImage: "/images2/cause-2.jpg", // feel free to use the same image ! i will do update later !
//   },
// ];

// const blogs = [
//   {
//     image: "/images2/blog-1.jpg",
//     date: "JUNE 23, 2022",
//     author: "MAHEVASH SHAIKH",
//     title: "Does Depression Make You Feel Worthless? You Are Not Alone",
//     excerpt:
//       "Has depression made you feel worthless? If so, you are not alone. You may even believe that you are worthless due to depression. Read on to find out how to fight this.",
//     link: "https://www.healthyplace.com/blogs/copingwithdepression/2022/6/does-depression-make-you-feel-worthless-you-are-not-alone",
//   },
//   {
//     image: "/images2/blog-2.jpg",
//     date: "JUNE 8, 2022",
//     author: "TJ DESALVO",
//     title: "Talking to Others About My Mental Health",
//     excerpt:
//       "I've never been good at talking about my mental health with others, even those who I've known for years. In the past, I didn't have enough self-knowledge to be able to talk about it with anyone in an adequate way.",
//     link: "https://www.healthyplace.com/blogs/anxiety-schmanxiety/2022/6/talking-to-others-about-my-mental-health",
//   },
//   {
//     image: "/images2/blog-3.jpg",
//     date: "January 25, 2021",
//     author: "KELLY BILODEAU",
//     title: "Stress Management - Simple strategies for stress relief",
//     excerpt:
//       "The last few months of any year, with deadlines and holidays, often create a harried pace. The beginning of a new year can give you a chance to exhale. But even if you experience a few serene days or weeks, tight shoulders and tension are never far off.",
//     link: "https://www.health.harvard.edu/blog/3-simple-strategies-for-stress-relief-2021012521806",
//   },
// ];

// const videos = [
//   { id: "Nz9eAaXRzGg", title: "What is Talking Therapy?" },
//   { id: "UQ1wDXtPxxI", title: "The Benefits of Talking Therapy" },
//   { id: "rmeGVhhbGrM", title: "How to Get the Most Out of Therapy" },
//   { id: "8jPQjjsBbIc", title: "Understanding Different Types of Therapy" },
//   { id: "4ZQkYSpmOdU", title: "Overcoming Stigma in Mental Health" },
//   { id: "m3-O7gPsQK0", title: "Self-Care Techniques for Mental Health" },
// ];

// export default function TalkingTherapy() {
//   return (
//     <div className="min-h-screen ">
//       <header className="relative h-[70vh] md:h-[80vh] rounded-b-[32px] overflow-hidden">
//         <Image
//           src="/images2/talking-1.jpg"
//           alt="Talking Therapy"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <div className="text-center text-white z-10 px-4 max-w-4xl">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
//               Welcome to Our{" "}
//               <span className="text-orange-500">Talking Therapy</span>
//             </h1>
//             <p className="text-lg md:text-xl mb-8 animate-fade-in-up max-w-2xl mx-auto">
//               Discover the power of conversation in shifting the direction of
//               change. Explore our resources on talking therapy, its benefits,
//               and professional counseling.
//             </p>
//             <Button size="lg" className="animate-fade-in-up">
//               Learn More <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </header>

//       <main className="   mx-auto px-4 py-16 space-y-24">
//         <Tabs defaultValue="signs" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 mb-8">
//             <TabsTrigger value="signs">Signs</TabsTrigger>
//             <TabsTrigger value="blogs">Blogs</TabsTrigger>
//             <TabsTrigger value="videos">Videos</TabsTrigger>
//           </TabsList>
//           <TabsContent value="signs">
//             <section>
//               <h2 className="text-3xl font-bold text-center mb-12">
//                 Signs That You May Need Talking Therapy
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {causes.map((cause, index) => (
//                   <Card
//                     key={index}
//                     className="transition-transform duration-300 hover:scale-105 overflow-hidden relative group"
//                   >
//                     <div className="absolute bg-black/50  inset-0 w-full h-full">
//                       <Image
//                         src={cause.bgImage}
//                         alt={cause.title}
//                         layout="fill"
//                         objectFit="cover"
//                         className="transition-opacity  duration-300 opacity-30 group-hover:opacity-40"
//                       />
//                     </div>
//                     <div className="relative z-10">
//                       {" "}
//                       {/* Add this wrapper for content */}
//                       <CardHeader>
//                         <CardTitle className="flex  text-white items-center">
//                           {/* <span className="text-4xl mr-2">{cause.icon}</span> */}
//                           {cause.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-foreground/90">
//                           {cause.description}
//                         </p>
//                       </CardContent>
//                       <CardFooter>
//                         <Button asChild>
//                           <Link href={cause.link}>
//                             Learn More <ArrowRight className="ml-2 h-4 w-4" />
//                           </Link>
//                         </Button>
//                       </CardFooter>
//                     </div>
//                   </Card>
//                 ))}
//               </div>

//             </section>
//           </TabsContent>
//           <TabsContent value="blogs">
//             <section>
//               <h2 className="text-3xl font-bold text-center mb-12">
//                 Latest Insights from Our Blog
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {blogs.map((blog, index) => (
//                   <Card
//                     key={index}
//                     className="transition-transform  duration-300 hover:scale-105"
//                   >
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       width={400}
//                       height={250}
//                       className="w-full h-48 object-cover rounded-t-lg"
//                     />
//                     <CardHeader>
//                       <p className="text-sm text-muted-foreground">
//                         {blog.date} • {blog.author}
//                       </p>
//                       <CardTitle className="line-clamp-2">
//                         {blog.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="line-clamp-3">{blog.excerpt}</p>
//                     </CardContent>
//                     <CardFooter>
//                       <Button variant="outline" asChild>
//                         <Link href={blog.link}>
//                           Read More <ArrowRight className="ml-2 h-4 w-4" />
//                         </Link>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//             </section>
//           </TabsContent>
//           <TabsContent value="videos">
//             <section>
//               <h2 className="text-3xl font-bold text-center mb-12">
//                 Helpful Videos on Talking Therapy
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {videos.map((video, index) => (
//                   <Card key={index}>
//                     <div className="aspect-video">
//                       <iframe
//                         src={`https://www.youtube.com/embed/${video.id}`}
//                         title={video.title}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="w-full h-full rounded-t-lg"
//                       ></iframe>
//                     </div>
//                     <CardHeader>
//                       <CardTitle className="text-lg">{video.title}</CardTitle>
//                     </CardHeader>
//                   </Card>
//                 ))}
//               </div>
//             </section>
//           </TabsContent>
//         </Tabs>
//       </main>
//     </div>
//   );
// }
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/talking-thearphy-components/talking-therapy-header";
import SignsSection from "@/components/talking-thearphy-components/signs-section";
import BlogsSection from "@/components/talking-thearphy-components/blogs-section";
import VideosSection from "@/components/talking-thearphy-components/video-section";

export default function TalkingTherapy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        <Tabs defaultValue="signs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="signs">Signs</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="signs">
            <SignsSection />
          </TabsContent>
          <TabsContent value="blogs">
            <BlogsSection />
          </TabsContent>
          <TabsContent value="videos">
            <VideosSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
