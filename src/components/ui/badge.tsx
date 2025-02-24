import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center  cursor-pointer  justify-center rounded-[16px] border px-3 py-1 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-transparent text-white bg-primary leading-none text-sm font-semibold hover:bg-primary/80 dark:bg-primary-dark dark:text-primary-dark-foreground hover:bg-orange-400 ",
        outline:
          "border border-foreground/30 text-foreground hover:bg-slate-300/10 dark:border-foreground-dark/30 dark:text-foreground-dark dark:hover:bg-foreground-dark/10",
      },
      size: {
        sm: "px-2 py-2 rounded-md font-semibold text-[12px] leading-[1] w-full", // Smaller size, still full-width
        md: "px-3 py-1 text-sm leading-[1.2]", // Default size, adaptive for medium text
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
