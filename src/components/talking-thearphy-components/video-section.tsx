import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const videos = [
  { id: "Nz9eAaXRzGg", title: "What is Talking Therapy?" },
  { id: "UQ1wDXtPxxI", title: "The Benefits of Talking Therapy" },
  { id: "rmeGVhhbGrM", title: "How to Get the Most Out of Therapy" },
  { id: "8jPQjjsBbIc", title: "Understanding Different Types of Therapy" },
  { id: "4ZQkYSpmOdU", title: "Overcoming Stigma in Mental Health" },
  { id: "m3-O7gPsQK0", title: "Self-Care Techniques for Mental Health" },
  { id: "ZidGozDhOjg", title: "The Science Behind Cognitive Behavioral Therapy" },
 
  { id: "1I9ADpXbD6c", title: "Understanding and Managing Panic Attacks" },
]

export default function VideosSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">Helpful Videos on Talking Therapy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <Card key={index} className="transition-transform duration-300 hover:scale-105">
            <div className="aspect-video relative group">
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{video.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                  Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}