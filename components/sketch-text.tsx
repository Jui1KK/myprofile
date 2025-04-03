import type React from "react"
import { cn } from "@/lib/utils"

interface SketchTextProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  children: React.ReactNode
  sketchiness?: "light" | "medium" | "heavy"
}

export default function SketchText({
  as: Component = "div",
  children,
  className,
  sketchiness = "medium",
  ...props
}: SketchTextProps) {
  const getFilterId = () => {
    switch (sketchiness) {
      case "light":
        return "sketch-text-light"
      case "heavy":
        return "sketch-text-heavy"
      default:
        return "sketch-text-medium"
    }
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="sketch-text-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <filter id="sketch-text-medium">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
        <filter id="sketch-text-heavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>
      <Component
        className={cn("font-sketch", className)}
        style={{
          filter: `url(#${getFilterId()})`,
          textShadow: "0.5px 0.5px 0px rgba(0,0,0,0.1)",
        }}
        {...props}
      >
        {children}
      </Component>
    </>
  )
}

