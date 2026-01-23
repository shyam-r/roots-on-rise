import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonialCarouselVariants = cva(
  "py-16 px-5",
  {
    variants: {
      background: {
        default: "bg-white",
        light: "bg-light",
        tertiary: "bg-tertiary",
        dark: "bg-dark text-light",
        gradient: "bg-gradient-to-br from-tertiary via-white to-secondary/10",
      },
    },
    defaultVariants: {
      background: "default",
    },
  }
)

export interface Testimonial {
  id: string | number
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
  authorName: string
  authorTitle?: string
  authorImage?: string
}

export interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof testimonialCarouselVariants> {
  testimonials: Testimonial[]
  autoRotate?: boolean
  autoRotateInterval?: number
  showNavigation?: "dots" | "arrows" | "both" | "none"
  container?: "sm" | "md" | "lg" | "xl"
}

const containerClasses = {
  sm: "max-w-3xl mx-auto",
  md: "max-w-4xl mx-auto",
  lg: "max-w-5xl mx-auto",
  xl: "max-w-6xl mx-auto",
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-5 h-5 transition-colors duration-300",
            star <= rating
              ? "fill-primary text-primary"
              : "fill-transparent text-secondary/40"
          )}
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  isDark,
}: {
  testimonial: Testimonial
  isDark: boolean
}) {
  return (
    <article
      className={cn(
        "flex flex-col items-center text-center p-6 md:p-8 rounded-xl transition-all duration-300",
        isDark
          ? "bg-light/5 hover:bg-light/10"
          : "bg-white shadow-lg hover:shadow-xl border border-secondary/10"
      )}
    >
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className="relative mb-6">
        <span
          className={cn(
            "absolute -top-4 -left-2 text-5xl font-serif leading-none",
            isDark ? "text-primary/30" : "text-primary/20"
          )}
          aria-hidden="true"
        >
          "
        </span>
        <p
          className={cn(
            "text-base md:text-lg italic leading-relaxed",
            isDark ? "text-light/90" : "text-dark/80"
          )}
        >
          {testimonial.quote}
        </p>
      </blockquote>

      {/* Author */}
      <footer className="flex flex-col items-center gap-2">
        {testimonial.authorImage && (
          <img
            src={testimonial.authorImage}
            alt={testimonial.authorName}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
        )}
        <div>
          <cite
            className={cn(
              "not-italic font-semibold text-sm",
              isDark ? "text-light" : "text-dark"
            )}
          >
            {testimonial.authorName}
          </cite>
          {testimonial.authorTitle && (
            <p
              className={cn(
                "text-xs",
                isDark ? "text-light/60" : "text-dark/50"
              )}
            >
              {testimonial.authorTitle}
            </p>
          )}
        </div>
      </footer>
    </article>
  )
}

function TestimonialCarousel({
  testimonials,
  autoRotate = false,
  autoRotateInterval = 5000,
  showNavigation = "both",
  background,
  container = "xl",
  className,
  ...props
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const totalSlides = testimonials.length
  const isDark = background === "dark"

  // Calculate how many testimonials to show based on screen size
  // We'll use CSS to handle responsive display, but track single index for mobile
  const slidesPerView = {
    mobile: 1,
    desktop: Math.min(3, totalSlides),
  }

  // Auto-rotate effect
  React.useEffect(() => {
    if (!autoRotate || isPaused || totalSlides <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides)
    }, autoRotateInterval)

    return () => clearInterval(timer)
  }, [autoRotate, autoRotateInterval, isPaused, totalSlides])

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const showArrows = showNavigation === "arrows" || showNavigation === "both"
  const showDots = showNavigation === "dots" || showNavigation === "both"

  // For desktop, we show 3 cards starting from activeIndex
  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = []
    for (let i = 0; i < slidesPerView.desktop; i++) {
      const index = (activeIndex + i) % totalSlides
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section
      className={cn(testimonialCarouselVariants({ background }), className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...props}
    >
      <div className={containerClasses[container]}>
        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows - positioned outside on larger screens */}
          {showArrows && totalSlides > 1 && (
            <>
              <button
                onClick={goToPrev}
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10",
                  "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center",
                  "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  isDark
                    ? "bg-light/10 hover:bg-light/20 text-light"
                    : "bg-white hover:bg-tertiary text-dark shadow-md hover:shadow-lg border border-secondary/20"
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={goToNext}
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10",
                  "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center",
                  "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  isDark
                    ? "bg-light/10 hover:bg-light/20 text-light"
                    : "bg-white hover:bg-tertiary text-dark shadow-md hover:shadow-lg border border-secondary/20"
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Testimonials grid */}
          <div className="overflow-hidden px-6 md:px-16">
            {/* Mobile: Single card */}
            <div className="md:hidden">
              <TestimonialCard
                testimonial={testimonials[activeIndex]}
                isDark={isDark}
              />
            </div>

            {/* Desktop: Multiple cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <TestimonialCard
                  key={`${testimonial.id}-${idx}`}
                  testimonial={testimonial}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        {showDots && totalSlides > 1 && (
          <nav
            className="flex justify-center gap-2 mt-8"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to testimonial ${index + 1}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  index === activeIndex
                    ? "bg-primary scale-110"
                    : isDark
                      ? "bg-light/30 hover:bg-light/50"
                      : "bg-secondary/40 hover:bg-secondary/60"
                )}
              />
            ))}
          </nav>
        )}
      </div>
    </section>
  )
}

export { TestimonialCarousel, testimonialCarouselVariants, StarRating }
