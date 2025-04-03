import { Input, type InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SketchyInputProps extends InputProps {
  sketchiness?: "light" | "medium" | "heavy"
}

export default function SketchyInput({ className, sketchiness = "medium", ...props }: SketchyInputProps) {
  const getFilterId = () => {
    switch (sketchiness) {
      case "light":
        return "sketchy-input-light"
      case "heavy":
        return "sketchy-input-heavy"
      default:
        return "sketchy-input-medium"
    }
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="sketchy-input-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <filter id="sketchy-input-medium">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
        <filter id="sketchy-input-heavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>
      <div
        className="relative w-full"
        style={{
          filter: `url(#${getFilterId()})`,
        }}
      >
        <Input
          className={cn(
            "border-0 border-b-2 border-black/20 bg-transparent p-2 rounded-none focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0",
            className,
          )}
          style={{
            transform: "rotate(-0.3deg)",
          }}
          {...props}
        />
      </div>
    </>
  )
}

