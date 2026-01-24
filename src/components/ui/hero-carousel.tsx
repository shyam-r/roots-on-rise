import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [isHovering, setIsHovering] = React.useState(false)
  const [contentVisible, setContentVisible] = React.useState(true)
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
  const transitionDuration = prefersReducedMotion ? 0 : 800

  const goToSlide = React.useCallback(
    (index: number, announce = true) => {
      if (isTransitioning && !prefersReducedMotion) return

      // Fade out content first
      setContentVisible(false)

      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentIndex(index)

        // Announce slide change for screen readers
        if (announce) {
          setAnnounceSlide(
            `Slide ${index + 1} of ${slides.length}: ${slides[index].title}`
          )
        }

        // Fade in content after slide transition starts
        setTimeout(() => {
          setContentVisible(true)
        }, 400)

        setTimeout(() => setIsTransitioning(false), transitionDuration)
      }, 200)
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
      className={cn("relative w-full overflow-hidden bg-dark", className)}
      onMouseEnter={() => {
        setIsPaused(true)
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsPaused(false)
        setIsHovering(false)
      }}
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

      {/* Slides container - Full viewport height on desktop, golden ratio on mobile */}
      <div
        className="relative h-[70vh] md:h-[85vh] w-full"
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
                "absolute inset-0",
                prefersReducedMotion
                  ? isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                  : cn(
                      "transition-all ease-out",
                      isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                    )
              )}
              style={
                !prefersReducedMotion
                  ? { transitionDuration: `${transitionDuration}ms` }
                  : undefined
              }
            >
              {/* Background Image with Ken Burns effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover",
                    !prefersReducedMotion && isActive && "animate-ken-burns"
                  )}
                  loading={index === 0 ? "eager" : "lazy"}
                  {...(index === 0 ? { fetchPriority: "high" } : {})}
                />
              </div>

              {/* Apple-style gradient overlay - subtle vignette effect */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Content - Bottom-left positioning like Apple */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
                  <div
                    className={cn(
                      "max-w-3xl",
                      !prefersReducedMotion && "transition-all duration-700 ease-out",
                      contentVisible && isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                  >
                    {/* Title - Large, bold, Apple-style */}
                    <h2
                      className="font-title font-bold text-4xl md:text-6xl lg:text-7xl text-light mb-4 md:mb-6 tracking-tight leading-[1.1]"
                      id={`slide-title-${index}`}
                    >
                      {slide.title}
                    </h2>

                    {/* Description - Clean, readable */}
                    {slide.description && (
                      <p className="text-light/80 text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed font-light">
                        {slide.description}
                      </p>
                    )}

                    {/* CTA - Minimal, elegant button */}
                    {slide.ctaText && slide.ctaLink && (
                      <a
                        href={slide.ctaLink}
                        tabIndex={isActive ? 0 : -1}
                        className={cn(
                          "inline-flex items-center gap-2",
                          "px-8 py-4 rounded-full",
                          "bg-primary hover:bg-primary-dark",
                          "text-light font-semibold text-lg",
                          "transition-all duration-300 ease-out",
                          "hover:scale-105 hover:shadow-2xl hover:shadow-primary/30",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-4 focus-visible:ring-offset-dark"
                        )}
                      >
                        {slide.ctaText}
                        <ChevronRight className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows - Ultra minimal, appear on hover */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className={cn(
              "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20",
              "w-12 h-12 md:w-14 md:h-14 rounded-full",
              "bg-light/10 hover:bg-light/25 backdrop-blur-md",
              "flex items-center justify-center",
              "text-light/70 hover:text-light",
              "border border-light/10",
              prefersReducedMotion ? "" : "transition-all duration-300 ease-out",
              isHovering ? "opacity-100" : "opacity-0 md:opacity-50",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            )}
            aria-label="Go to previous slide"
            aria-controls="carousel-slides"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className={cn(
              "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20",
              "w-12 h-12 md:w-14 md:h-14 rounded-full",
              "bg-light/10 hover:bg-light/25 backdrop-blur-md",
              "flex items-center justify-center",
              "text-light/70 hover:text-light",
              "border border-light/10",
              prefersReducedMotion ? "" : "transition-all duration-300 ease-out",
              isHovering ? "opacity-100" : "opacity-0 md:opacity-50",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            )}
            aria-label="Go to next slide"
            aria-controls="carousel-slides"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </>
      )}

      {/* Progress Indicators - Elegant thin lines like Apple */}
      {slides.length > 1 && (
        <nav
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-4"
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
                  "h-1 rounded-full overflow-hidden",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
                  prefersReducedMotion ? "" : "transition-all duration-500 ease-out",
                  isActive
                    ? "bg-light w-12 md:w-16"
                    : "bg-light/30 hover:bg-light/50 w-8 md:w-10"
                )}
              >
                {/* Progress fill animation for active slide */}
                {isActive && autoRotate && !isPaused && !prefersReducedMotion && (
                  <div
                    className="h-full bg-primary/80 animate-progress-fill"
                    style={{ animationDuration: `${interval}ms` }}
                  />
                )}
              </button>
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

      {/* Ken Burns animation keyframes */}
      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.08) translate(-1%, -1%);
          }
        }

        .animate-ken-burns {
          animation: ken-burns ${interval + 2000}ms ease-out forwards;
        }

        @keyframes progress-fill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress-fill {
          animation: progress-fill linear forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ken-burns,
          .animate-progress-fill {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export { HeroCarousel }
