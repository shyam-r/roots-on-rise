import * as React from "react"
import { ShoppingCart, Smile, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"
import { ReviewSummary, BestsellerBadge, PrimeShipping, GuaranteeBadge } from "./trust-signals"
import { getOptimizedImage, getImageSrcSet } from "@/lib/images"
import { AMAZON_AFFILIATE_TAG } from "@/lib/constants"
import type { Book as BookType, BookSeries } from "@/data/products"


export interface BookSeriesCardProps {
  series: BookSeries
  books: BookType[]
  defaultFormat?: string
  layout?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

function BookSeriesCard({
  series,
  books,
  defaultFormat,
  layout = "horizontal",
  reverse = false,
  className
}: BookSeriesCardProps) {
  // Find the default format or use the first one
  const initialFormat = defaultFormat || series.formats[0]?.id || ""
  const [selectedFormatId, setSelectedFormatId] = React.useState(initialFormat)

  // Track the currently displayed image (can be changed by clicking thumbnails)
  const [displayedImage, setDisplayedImage] = React.useState<string | null>(null)

  // Find the currently selected book
  const selectedBook = React.useMemo(() => {
    // Map format ID to book format string
    const formatMap: Record<string, string[]> = {
      'board-book': ['Board book', 'Board Book'],
      'hardcover': ['Hardcover'],
      'paperback': ['Paperback'],
      'paperback-standard': ['Standard Edition', 'Paperback - Standard'],
      'paperback-premium': ['Premium Edition', 'Paperback - Premium'],
      'kindle': ['E-Book (Kindle)', 'E-Book', 'Kindle'],
    }

    const matchingFormats = formatMap[selectedFormatId] || []
    return books.find(book =>
      matchingFormats.some(f => book.format.toLowerCase().includes(f.toLowerCase()))
    ) || books[0]
  }, [selectedFormatId, books])

  // Determine edition ribbon to display
  const editionRibbon = React.useMemo(() => {
    if (selectedFormatId === 'paperback-standard') {
      return '/images/books/shloka-mantra/paperback/standard-edition-ribbon.svg'
    }
    if (selectedFormatId === 'paperback-premium') {
      return '/images/books/shloka-mantra/paperback/premium-edition-ribbon.svg'
    }
    return null
  }, [selectedFormatId])

  // Reset displayed image when format changes (so it shows the book's main image)
  React.useEffect(() => {
    setDisplayedImage(null)
  }, [selectedFormatId])

  // The actual image to display - either user-selected or the book's default
  const currentImage = displayedImage || selectedBook.image

  // Find the selected format details from series
  const selectedFormat = series.formats.find(f => f.id === selectedFormatId) || series.formats[0]

  const isHorizontal = layout === "horizontal"

  return (
    <article data-product className={cn(
      "flex flex-col gap-8",
      isHorizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"),
      className
    )}>
      {/* Image Gallery */}
      <div className={cn(isHorizontal ? "md:w-1/2" : "w-full")}>
        <div className="aspect-[3/4] relative rounded-lg bg-transparent">
          {/* Product image - optimized WebP with srcset */}
          <img
            src={getOptimizedImage(currentImage, 'product')}
            srcSet={getImageSrcSet(currentImage)}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={selectedBook.title}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-300"
            loading="lazy"
            decoding="async"
          />
          {selectedBook.isOnSale && (
            <Badge variant="destructive" className="absolute top-4 right-4 z-10">
              Sale
            </Badge>
          )}
          {/* Edition Ribbon - bottom center, half-in */}
          {editionRibbon && (
            <img
              src={editionRibbon}
              alt={selectedFormatId === 'paperback-premium' ? 'Premium Edition' : 'Standard Edition'}
              className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ bottom: '-10px', width: '85px', height: '20px' }}
            />
          )}
        </div>
        {selectedBook.images && selectedBook.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 mt-3">
            {selectedBook.images.slice(0, 4).map((img, i) => {
              const isActive = currentImage === img
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setDisplayedImage(img)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden transition-all duration-200 bg-transparent",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isActive
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  )}
                  aria-label={`View ${selectedBook.title} image ${i + 1}`}
                  aria-pressed={isActive}
                >
                  <img
                    src={getOptimizedImage(img, 'thumb')}
                    alt={`${selectedBook.title} preview ${i + 1}`}
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col justify-center",
        isHorizontal ? "md:w-1/2" : "w-full"
      )}>
        {/* Series Title */}
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h2 className="font-title font-bold text-2xl md:text-3xl text-dark">
            {series.name}
          </h2>
          <BestsellerBadge variant="compact" />
        </div>
        <p className="text-dark/60 text-sm mb-4">{series.description}</p>

        {/* Format Pills with inline benefit */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {series.formats.map((format) => {
              const isSelected = format.id === selectedFormatId
              return (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormatId(format.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    "border-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isSelected
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-dark/70 border-dark/20 hover:border-primary hover:text-primary"
                  )}
                  aria-pressed={isSelected}
                >
                  {format.name}
                </button>
              )
            })}
          </div>
          {/* Format benefit shown inline */}
          {selectedFormat.description && (
            <p className="text-primary text-sm mt-2 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {selectedFormat.description}
            </p>
          )}
        </div>

        {/* Price + Reviews */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            {selectedBook.isOnSale && selectedBook.salePrice ? (
              <>
                <span className="text-3xl font-bold text-primary">${selectedBook.salePrice}</span>
                <span className="text-xl text-dark/40 line-through">${selectedBook.regularPrice}</span>
              </>
            ) : (
              <span className="text-3xl font-bold text-dark">${selectedBook.regularPrice}</span>
            )}
          </div>
          <ReviewSummary rating={4.8} reviewCount={847} size="sm" />
        </div>

        {/* Product Specs */}
        <div className="flex flex-wrap gap-4 text-sm text-dark/60 mb-4">
          <span className="flex items-center gap-1">
            <Smile className="w-4 h-4" />
            Ages {selectedBook.ageRange}
          </span>
          {selectedBook.pages && (
            <span className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {selectedBook.pages} pages
            </span>
          )}
        </div>

        {/* Description */}
        <div className="mb-6 space-y-3">
          <p className="text-dark/70">{selectedBook.description}</p>
          {selectedBook.longDescription && (
            <p className="text-dark/60 text-sm">{selectedBook.longDescription}</p>
          )}
        </div>

        {/* Amazon Button */}
        <Button variant="amazon" asChild className="self-start">
          <a
            href={`https://www.amazon.com/dp/${selectedBook.asin ?? selectedBook.isbn}?tag=${AMAZON_AFFILIATE_TAG}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="w-5 h-5" />
            Get It With Prime Delivery
          </a>
        </Button>

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center gap-4 mt-3">
          <PrimeShipping />
          <GuaranteeBadge />
        </div>

        {selectedBook.isbn && (
          <p className="text-dark/40 text-xs mt-4">ISBN: {selectedBook.isbn}</p>
        )}
      </div>
    </article>
  )
}

export { BookSeriesCard }
