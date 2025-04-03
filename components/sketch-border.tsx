import type React from "react"
import { cn } from "@/lib/utils"

interface SketchBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number
}

export default function SketchBorder({ className, borderWidth = 2, ...props }: SketchBorderProps) {
  return (
    <div
      className={cn("pointer-events-none border-2 border-black", className)}
      style={{
        borderWidth,
        borderStyle: "solid",
        borderRadius: "2px",
        filter: "url(#sketch-filter)",
      }}
      {...props}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="sketch-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </svg>
    </div>
  )
}

