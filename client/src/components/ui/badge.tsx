import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow hover:shadow-md",
        outline:
          "border text-foreground shadow-sm hover:shadow-md hover:bg-accent hover:text-accent-foreground",
        success: 
          "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow hover:shadow-md",
        warning: 
          "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow hover:shadow-md",
        info: 
          "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow hover:shadow-md",
        navy: 
          "bg-gradient-to-r from-mlm-navy to-blue-700 text-white shadow hover:shadow-md",
        gold: 
          "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow hover:shadow-md",
        purple: 
          "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow hover:shadow-md",
      },
      size: {
        default: "h-6 px-2.5 py-0.5 text-xs",
        sm: "h-5 px-2 text-xs",
        lg: "h-7 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
