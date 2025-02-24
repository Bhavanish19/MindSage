"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { videoIds } from "@/lib/video-data";
import { Badge } from "./ui/badge";

const categories = ["All", ...new Set(videoIds.map((video) => video.category))];

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Categories({
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <div className="w-full">
      <ScrollArea className="w-full">
        <div className="flex gap-2 ">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
