"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const musicPlaylists = [
  {
    title: "Stress Relief Sounds",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator",
  },
  {
    title: "Peaceful Guitar",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator",
  },
  {
    title: "Relaxing Jazz",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator",
  },
  {
    title: "Focus Music",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator",
  },
  {
    title: "Ambient Relaxation",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVV27DiNWxkR?utm_source=generator",
  },
  {
    title: "Calm Meditation",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator",
  },
  {
    title: "Deep Focus",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator",
  },
  {
    title: "Relax & Unwind",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx?utm_source=generator",
  },
  {
    title: "Nature Sounds",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator",
  },
  {
    title: "Peaceful Piano",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator",
  },
  {
    title: "Mindful Meditation",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7EF8wVxBVhG?utm_source=generator",
  },
  {
    title: "Soothing Strings",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8?utm_source=generator",
  },
  {
    title: "Serene Study",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator",
  },
  {
    title: "Binaural Beats",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2MyUCsl25eb?utm_source=generator",
  },
  {
    title: "Gentle Acoustic",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX6VdMW310YC7?utm_source=generator",
  },
  {
    title: "Sleepy Piano",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp?utm_source=generator",
  },
  {
    title: "Meditative Flow",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator",
  },
  {
    title: "Quiet Moments",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4E3UdUs7fUx?utm_source=generator",
  },
  {
    title: "Soft Focus",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DX6tTW0xDxScH?utm_source=generator",
  },
  {
    title: "Study Beats",
    src: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator",
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

export default function MusicSection() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {musicPlaylists.map((playlist, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="overflow-hidden p-2.5">
            <CardHeader>
              <CardTitle>{playlist.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src={playlist.src}
                width="100%"
                height="380"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className=" rounded-[14px] "
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
