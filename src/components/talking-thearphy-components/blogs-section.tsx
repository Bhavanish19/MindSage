import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const blogs = [
  {
    image: "/images2/blog-1.jpg",
    date: "JUNE 23, 2022",
    author: "MAHEVASH SHAIKH",
    title: "Does Depression Make You Feel Worthless? You Are Not Alone",
    excerpt:
      "Has depression made you feel worthless? If so, you are not alone. You may even believe that you are worthless due to depression. Read on to find out how to fight this.",
    link: "https://www.healthyplace.com/blogs/copingwithdepression/2022/6/does-depression-make-you-feel-worthless-you-are-not-alone",
  },
  {
    image: "/images2/blog-2.jpg",
    date: "JUNE 8, 2022",
    author: "TJ DESALVO",
    title: "Talking to Others About My Mental Health",
    excerpt:
      "I've never been good at talking about my mental health with others, even those who I've known for years. In the past, I didn't have enough self-knowledge to be able to talk about it with anyone in an adequate way.",
    link: "https://www.healthyplace.com/blogs/anxiety-schmanxiety/2022/6/talking-to-others-about-my-mental-health",
  },
  {
    image: "/images2/blog-3.jpg",
    date: "January 25, 2021",
    author: "KELLY BILODEAU",
    title: "Stress Management - Simple strategies for stress relief",
    excerpt:
      "The last few months of any year, with deadlines and holidays, often create a harried pace. The beginning of a new year can give you a chance to exhale. But even if you experience a few serene days or weeks, tight shoulders and tension are never far off.",
    link: "https://www.health.harvard.edu/blog/3-simple-strategies-for-stress-relief-2021012521806",
  },
  {
    image: "/images2/blog-4.jpg",
    date: "May 15, 2023",
    author: "SARAH JOHNSON",
    title: "The Power of Mindfulness in Daily Life",
    excerpt:
      "Discover how incorporating mindfulness practices into your daily routine can significantly improve your mental well-being and overall quality of life.",
    link: "https://www.mindful.org/how-to-practice-mindfulness/",
  },
  {
    image: "/images2/blog-5.jpg",
    date: "April 3, 2023",
    author: "MICHAEL CHANG",
    title: "Breaking the Stigma: Men's Mental Health",
    excerpt:
      "Exploring the unique challenges men face in addressing mental health issues and the importance of seeking help and support.",
    link: "https://www.verywellmind.com/men-and-mental-health-5207110",
  },
  {
    image: "/images2/blog-6.jpg",
    date: "March 20, 2023",
    author: "EMMA WATSON",
    title: "The Impact of Social Media on Mental Health",
    excerpt:
      "An in-depth look at how social media usage affects our mental well-being and strategies for maintaining a healthy digital lifestyle.",
    link: "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm",
  },
];

export default function BlogsSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12">
        Latest Insights from Our Blog
      </h2>
      <ScrollArea className="h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <p className="text-sm text-muted-foreground">
                  {blog.date} • {blog.author}
                </p>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{blog.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}
