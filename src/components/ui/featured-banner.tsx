import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const featuredBannerVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      align: {
        left: "",
        center: "",
        right: "",
      },
      height: {
        sm: "min-h-[300px]",
        md: "min-h-[400px]",
        lg: "min-h-[500px]",
        xl: "min-h-[600px]",
      },
    },
    defaultVariants: {
      align: "left",
      height: "md",
    },
  }
)

export interface FeaturedBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featuredBannerVariants> {
  /** Background image URL */
  image: string
  /** Main headline text */
  title: string
  /** Optional supporting description */
  description?: string
  /** CTA button text */
  ctaText?: string
  /** CTA button link URL */
  ctaLink?: string
  /** Button variant style */
  ctaVariant?: "default" | "secondary" | "outline" | "outlineLight"
  /** Overlay style: light opacity, dark opacity, or gradient */
  overlay?: "light" | "dark" | "gradient"
  /** Show decorative border pattern on top/bottom */
  showDecorativeBorder?: boolean
}

function FeaturedBanner({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  ctaVariant = "default",
  align = "left",
  height = "md",
  overlay = "gradient",
  showDecorativeBorder = false,
  className,
  ...props
}: FeaturedBannerProps) {
  // Overlay styles based on alignment and overlay prop
  const getOverlayClasses = () => {
    switch (overlay) {
      case "light":
        return "bg-dark/30"
      case "dark":
        return "bg-dark/70"
      case "gradient":
      default:
        // Gradient direction based on alignment
        if (align === "left") {
          return "bg-gradient-to-r from-dark/80 via-dark/50 to-transparent"
        }
        if (align === "right") {
          return "bg-gradient-to-l from-dark/80 via-dark/50 to-transparent"
        }
        // Center alignment uses radial gradient
        return "bg-gradient-to-t from-dark/80 via-dark/50 to-dark/30"
    }
  }

  // Content alignment classes
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  // Content width constraints based on alignment
  const contentWidthClasses = {
    left: "max-w-xl",
    center: "max-w-3xl mx-auto",
    right: "max-w-xl ml-auto",
  }

  return (
    <section
      className={cn(
        featuredBannerVariants({ align, height }),
        showDecorativeBorder && "border-y-4 border-primary",
        className
      )}
      role="region"
      aria-label={title}
      {...props}
    >
      {/* Background Image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className={cn("absolute inset-0", getOverlayClasses())}
        aria-hidden="true"
      />

      {/* Decorative Border Pattern */}
      {showDecorativeBorder && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
            aria-hidden="true"
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={cn(
              "flex flex-col gap-4 md:gap-6",
              alignmentClasses[align || "left"],
              contentWidthClasses[align || "left"]
            )}
          >
            <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-light drop-shadow-lg">
              {title}
            </h2>

            {description && (
              <p className="text-light/90 text-base md:text-lg lg:text-xl drop-shadow-md max-w-prose">
                {description}
              </p>
            )}

            {ctaText && ctaLink && (
              <div
                className={cn(
                  "mt-2",
                  align === "center" && "mx-auto",
                  align === "right" && "ml-auto"
                )}
              >
                <Button variant={ctaVariant} size="lg" asChild>
                  <a href={ctaLink}>{ctaText}</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { FeaturedBanner, featuredBannerVariants }
