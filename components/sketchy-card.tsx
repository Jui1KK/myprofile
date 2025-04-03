import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SketchyCardProps extends CardProps {
  sketchiness?: "light" | "medium" | "heavy"
}

export default function SketchyCard({ children, className, sketchiness = "medium", ...props }: SketchyCardProps) {
  const getFilterId = () => {
    switch (sketchiness) {
      case "light":
        return "sketchy-card-light"
      case "heavy":
        return "sketchy-card-heavy"
      default:
        return "sketchy-card-medium"
    }
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="sketchy-card-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
        <filter id="sketchy-card-medium">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>
        <filter id="sketchy-card-heavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
        </filter>
      </svg>
      <Card
        className={cn("border-2 border-black", className)}
        style={{
          filter: `url(#${getFilterId()})`,
          transform: "rotate(-0.3deg)",
        }}
        {...props}
      >
        {children}
      </Card>
    </>
  )
}

