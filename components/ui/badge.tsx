import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border border-secondary px-1.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "",
        paper:"rounded-lg border-none bg-[#FED585] !text-foreground",
      },
      badgeColor: {
        brand: "bg-none text-brand border border-brand",
        black:"bg-none text-foreground border border-ring",
        green: "bg-none text-green-800 border border-green-800",
        blue: "bg-none text-blue-800 border border-blue-800",
        yellow: "bg-none text-yellow-800 border border-yellow-800",
      },
    },
    defaultVariants: {
      variant: "default",
      badgeColor: "brand",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant,badgeColor, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant,badgeColor }), className)} {...props} />
  )
}

export { Badge, badgeVariants };
