import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  highlight?: string
  description?: string
  align?: "left" | "center" | "right"
}

function SectionHeader({
  title,
  highlight,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  // Parse title to wrap highlight word in span
  const renderTitle = () => {
    if (!highlight) return title

    const parts = title.split(new RegExp(`(${highlight})`, 'i'))
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={i} className="text-primary">{part}</span>
        : part
    )
  }

  return (
    <div className={cn(alignClasses[align], "mb-12", className)} {...props}>
      <h2 className="font-title font-bold text-3xl md:text-4xl text-dark mb-4">
        {renderTitle()}
      </h2>
      {description && (
        <p className={cn(
          "text-dark/60 max-w-xl",
          align === "center" && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}

export { SectionHeader }
