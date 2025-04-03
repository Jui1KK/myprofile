import { Textarea, type TextareaProps } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface SketchyTextareaProps extends TextareaProps {
  sketchiness?: "light" | "medium" | "heavy"
}

export default function SketchyTextarea({ className, sketchiness = "medium", ...props }: SketchyTextareaProps) {
  const getFilterId = () => {
    switch (sketchiness) {
      case "light":
        return "sketchy-textarea-light"
      case "heavy":
        return "sketchy-textarea-heavy"
      default:
        return "sketchy-textarea-medium"
    }
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="sketchy-textarea-light">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        <filter id="sketchy-textarea-medium">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
        <filter id="sketchy-textarea-heavy">
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
        <Textarea
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

