import * as React from "react"
import { cn } from "@/lib/utils"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
  variant?: "default" | "centered" | "numbered"
  number?: number
}

function FeatureCard({
  icon,
  title,
  description,
  variant = "default",
  number,
  className,
  ...props
}: FeatureCardProps) {
  const isNumbered = variant === "numbered" && number !== undefined

  return (
    <div
      className={cn(
        "p-4",
        variant === "centered" && "text-center",
        className
      )}
      {...props}
    >
      {isNumbered ? (
        <div className="w-16 h-16 bg-primary text-light rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          {number}
        </div>
      ) : (
        <div className={cn(
          "w-12 h-12 bg-tertiary rounded-full flex items-center justify-center mb-3",
          variant === "centered" && "mx-auto"
        )}>
          {typeof icon === "string" ? (
            <span className="text-2xl">{icon}</span>
          ) : (
            icon
          )}
        </div>
      )}
      <h3 className={cn(
        "font-semibold text-dark mb-1",
        variant === "numbered" && "font-title font-bold text-lg mb-2"
      )}>
        {title}
      </h3>
      <p className="text-dark/60 text-sm">{description}</p>
    </div>
  )
}

export { FeatureCard }
