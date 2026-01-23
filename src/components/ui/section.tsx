import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "py-16 px-5",
  {
    variants: {
      background: {
        default: "bg-white",
        light: "bg-light",
        tertiary: "bg-tertiary",
        dark: "bg-dark text-light",
        gradient: "bg-gradient-to-b from-tertiary to-light",
        gradientWarm: "bg-gradient-to-br from-primary/5 via-tertiary to-secondary/5",
      },
      padding: {
        none: "py-0",
        sm: "py-8 px-5",
        default: "py-16 px-5",
        lg: "py-20 px-5",
        xl: "py-24 px-5",
      },
    },
    defaultVariants: {
      background: "default",
      padding: "default",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "article"
  container?: "sm" | "md" | "lg" | "xl" | "full"
}

const containerClasses = {
  sm: "max-w-3xl mx-auto",
  md: "max-w-4xl mx-auto",
  lg: "max-w-5xl mx-auto",
  xl: "max-w-6xl mx-auto",
  full: "w-full",
}

function Section({
  className,
  background,
  padding,
  as: Component = "section",
  container = "xl",
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(sectionVariants({ background, padding }), className)}
      {...props}
    >
      <div className={containerClasses[container]}>
        {children}
      </div>
    </Component>
  )
}

export { Section, sectionVariants }
