import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SketchyButtonProps extends ButtonProps {
  sketchiness?: "light" | "medium" | "heavy"
}

export default function SketchyButton({ children, className, sketchiness = "medium", ...props }: SketchyButtonProps) {
  const getFilterId = () => {
    switch (sketchiness) {
      case "light":
        return "sketchy-button-light"
      case "heavy":
        return "sketchy-button-heavy"
      default:
        return "sketchy-button-medium"
    }
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="sketchy-button-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
        <filter id="sketchy-button-medium">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
        <filter id="sketchy-button-heavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
        </filter>
      </svg>
      <Button
        className={cn("font-sketch rounded-none border-2 border-black", className)}
        style={{
          filter: `url(#${getFilterId()})`,
          transform: "rotate(-0.5deg)",
        }}
        {...props}
      >
        {children}
      </Button>
    </>
  )
}

