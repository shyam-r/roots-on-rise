import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface HeroSlide {
  image: string
  title: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

export interface HeroCarouselProps {
  slides: HeroSlide[]
  autoRotate?: boolean
  interval?: number
  className?: string
}

function HeroCarousel({
  slides,
  autoRotate = true,
  interval = 5000,
  className,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)
  const [announceSlide, setAnnounceSlide] = React.useState("")
  const carouselRef = React.useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Transition duration based on motion preference
  const transitionDuration = prefersReducedMotion ? 0 : 500

  const goToSlide = React.useCallback(
    (index: number, announce = true) => {
      if (isTransitioning && !prefersReducedMotion) return
      setIsTransitioning(true)
      setCurrentIndex(index)

      // Announce slide change for screen readers
      if (announce) {
        setAnnounceSlide(
          `Slide ${index + 1} of ${slides.length}: ${slides[index].title}`
        )
      }

      setTimeout(() => setIsTransitioning(false), transitionDuration)
    },
    [isTransitioning, prefersReducedMotion, transitionDuration, slides]
  )

  const goToNext = React.useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length)
  }, [currentIndex, slides.length, goToSlide])

  const goToPrev = React.useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length)
  }, [currentIndex, slides.length, goToSlide])

  // Auto-rotate effect
  React.useEffect(() => {
    // Don't auto-rotate if disabled, paused, only one slide, or user prefers reduced motion
    if (!autoRotate || isPaused || slides.length <= 1 || prefersReducedMotion)
      return

    const timer = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(timer)
  }, [autoRotate, isPaused, interval, slides.length, goToNext, prefersReducedMotion])

  // Keyboard navigation
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          goToPrev()
          break
        case "ArrowRight":
          event.preventDefault()
          goToNext()
          break
        case "Home":
          event.preventDefault()
          goToSlide(0)
          break
        case "End":
          event.preventDefault()
          goToSlide(slides.length - 1)
          break
      }
    },
    [goToPrev, goToNext, goToSlide, slides.length]
  )

  if (slides.length === 0) return null

  return (
    <div
      ref={carouselRef}
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
    >
      {/* Live region for screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announceSlide}
      </div>

      {/* Slides container */}
      <div
        className="relative aspect-[4/3] md:aspect-[16/9] w-full"
        aria-live={autoRotate && !isPaused ? "off" : "polite"}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={index}
              id={`carousel-slide-${index}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 ease-in-out",
                prefersReducedMotion
                  ? isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                  : cn(
                      "transition-opacity duration-500",
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                    )
              )}
              style={
                !prefersReducedMotion
                  ? { transitionDuration: `${transitionDuration}ms` }
                  : undefined
              }
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                {...(index === 0 ? { fetchPriority: "high" } : {})}
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                  <div className="max-w-2xl">
                    <h2
                      className="font-title font-bold text-3xl md:text-5xl lg:text-6xl text-light mb-4 drop-shadow-lg"
                      id={`slide-title-${index}`}
                    >
                      {slide.title}
                    </h2>
                    {slide.description && (
                      <p className="text-light/90 text-lg md:text-xl mb-6 drop-shadow-md">
                        {slide.description}
                      </p>
                    )}
                    {slide.ctaText && slide.ctaLink && (
                      <Button
                        variant="default"
                        size="lg"
                        asChild
                        tabIndex={isActive ? 0 : -1}
                      >
                        <a href={slide.ctaLink}>{slide.ctaText}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-20",
              "w-10 h-10 md:w-12 md:h-12 rounded-full",
              "bg-light/20 hover:bg-light/40 backdrop-blur-sm",
              "flex items-center justify-center",
              "text-light",
              prefersReducedMotion ? "" : "transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            )}
            aria-label="Go to previous slide"
            aria-controls="carousel-slides"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-20",
              "w-10 h-10 md:w-12 md:h-12 rounded-full",
              "bg-light/20 hover:bg-light/40 backdrop-blur-sm",
              "flex items-center justify-center",
              "text-light",
              prefersReducedMotion ? "" : "transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            )}
            aria-label="Go to next slide"
            aria-controls="carousel-slides"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {slides.length > 1 && (
        <nav
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`carousel-slide-${index}`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                tabIndex={isActive ? 0 : -1}
                className={cn(
                  "h-2.5 rounded-full",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
                  prefersReducedMotion ? "" : "transition-all duration-300",
                  isActive
                    ? "bg-light w-8"
                    : "bg-light/50 hover:bg-light/70 w-2.5"
                )}
              />
            )
          })}
        </nav>
      )}

      {/* Auto-rotate indicator (hidden but announced) */}
      {autoRotate && !prefersReducedMotion && (
        <div className="sr-only" role="status">
          {isPaused
            ? "Carousel paused"
            : `Carousel auto-rotating every ${interval / 1000} seconds`}
        </div>
      )}
    </div>
  )
}

export { HeroCarousel }
