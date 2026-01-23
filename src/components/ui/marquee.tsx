import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
}

function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s"
  }

  return (
    <div
      className={cn(
        "flex overflow-hidden relative",
        pauseOnHover && "[&:hover_.marquee-content]:pause",
        className
      )}
    >
      <div
        className="marquee-content flex gap-8 animate-marquee whitespace-nowrap"
        style={{ animationDuration: speedMap[speed] }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  )
}

interface MarqueeItemProps {
  children: React.ReactNode
  className?: string
}

function MarqueeItem({ children, className }: MarqueeItemProps) {
  return (
    <span className={cn(
      "text-4xl md:text-5xl lg:text-6xl font-title font-bold tracking-tight",
      className
    )}>
      {children}
    </span>
  )
}

export { Marquee, MarqueeItem }
