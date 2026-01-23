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
  autoRotateInterval?: number
  className?: string
}

function HeroCarousel({
  slides,
  autoRotateInterval = 5000,
  className,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const goToSlide = React.useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToNext = React.useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length)
  }, [currentIndex, slides.length, goToSlide])

  const goToPrev = React.useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length)
  }, [currentIndex, slides.length, goToSlide])

  // Auto-rotate
  React.useEffect(() => {
    if (isPaused || slides.length <= 1) return

    const interval = setInterval(() => {
      goToNext()
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [isPaused, autoRotateInterval, slides.length, goToNext])

  if (slides.length === 0) return null

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-2xl">
                  <h2 className="font-title font-bold text-3xl md:text-5xl lg:text-6xl text-light mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.description && (
                    <p className="text-light/90 text-lg md:text-xl mb-6 drop-shadow-md">
                      {slide.description}
                    </p>
                  )}
                  {slide.ctaText && slide.ctaLink && (
                    <Button variant="default" size="lg" asChild>
                      <a href={slide.ctaLink}>{slide.ctaText}</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-20",
              "w-10 h-10 md:w-12 md:h-12 rounded-full",
              "bg-light/20 hover:bg-light/40 backdrop-blur-sm",
              "flex items-center justify-center",
              "text-light transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-light/50"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-20",
              "w-10 h-10 md:w-12 md:h-12 rounded-full",
              "bg-light/20 hover:bg-light/40 backdrop-blur-sm",
              "flex items-center justify-center",
              "text-light transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-light/50"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-light/50",
                index === currentIndex
                  ? "bg-light w-8"
                  : "bg-light/50 hover:bg-light/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { HeroCarousel }
