import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib";

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className="invisible     lg:visible  absolute top-[90px] -right-[16px] z-90">
      <Button
        onClick={() => setIsOpen?.()}
        className="rounded-md w-6 z-90 border-2 h-6"
        variant="secondaryOutline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-5 w-5 transition-transform ease-in-out z-90 duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}
