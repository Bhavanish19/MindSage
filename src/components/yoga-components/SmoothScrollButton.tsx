// components/SmoothScrollButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function SmoothScrollButton({ targetId, children }:any) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button size="lg" variant="secondary" onClick={handleClick}>
      {children} <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
