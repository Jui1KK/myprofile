import type React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-md border bg-card text-card-foreground shadow-sm", className)} {...props} />
}

