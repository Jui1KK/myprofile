import type React from "react"
import { cn } from "@/lib/utils"

interface SketchDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SketchDivider({ className, ...props }: SketchDividerProps) {
  return (
    <div className={cn("py-4", className)} {...props}>
      <div
        className="mx-auto h-px w-full max-w-md bg-black"
        style={{
          filter: "url(#sketch-divider-filter)",
        }}
      >
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <filter id="sketch-divider-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
        </svg>
      </div>
    </div>
  )
}

