import * as React from "react"
import { ShoppingCart, Book, Smile, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"
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

  // Find the currently selected book
  const selectedBook = React.useMemo(() => {
    // Map format ID to book format string
    const formatMap: Record<string, string[]> = {
      'board-book': ['Board book', 'Board Book'],
      'hardcover': ['Hardcover'],
      'paperback': ['Paperback'],
      'kindle': ['E-Book (Kindle)', 'E-Book', 'Kindle'],
    }

    const matchingFormats = formatMap[selectedFormatId] || []
    return books.find(book =>
      matchingFormats.some(f => book.format.toLowerCase().includes(f.toLowerCase()))
    ) || books[0]
  }, [selectedFormatId, books])

  // Find the selected format details from series
  const selectedFormat = series.formats.find(f => f.id === selectedFormatId) || series.formats[0]

  const isHorizontal = layout === "horizontal"

  return (
    <article className={cn(
      "flex flex-col gap-8",
      isHorizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"),
      className
    )}>
      {/* Image Gallery */}
      <div className={cn(isHorizontal ? "md:w-1/2" : "w-full")}>
        <div className="bg-tertiary aspect-square relative overflow-hidden rounded-lg">
          <img
            src={selectedBook.image}
            alt={selectedBook.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
          {selectedBook.isOnSale && (
            <Badge variant="destructive" className="absolute top-4 right-4">
              Sale
            </Badge>
          )}
        </div>
        {selectedBook.images && selectedBook.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {selectedBook.images.slice(0, 4).map((img, i) => (
              <div key={i} className="aspect-square bg-tertiary rounded overflow-hidden">
                <img
                  src={img}
                  alt={`${selectedBook.title} preview ${i + 1}`}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col justify-center",
        isHorizontal ? "md:w-1/2" : "w-full"
      )}>
        {/* Series Title */}
        <h2 className="font-title font-bold text-2xl md:text-3xl text-dark mb-2">
          {series.name}
        </h2>
        <p className="text-dark/60 text-sm mb-4">{series.description}</p>

        {/* Format Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
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
                    : "bg-white text-dark/70 border-dark/20 hover:border-primary hover:text-primary"
                )}
                aria-pressed={isSelected}
              >
                {format.name}
              </button>
            )
          })}
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          {selectedBook.isOnSale && selectedBook.salePrice ? (
            <>
              <span className="text-3xl font-bold text-primary">${selectedBook.salePrice}</span>
              <span className="text-xl text-dark/40 line-through">${selectedBook.regularPrice}</span>
            </>
          ) : (
            <span className="text-3xl font-bold text-dark">${selectedBook.regularPrice}</span>
          )}
        </div>

        {/* Format Details */}
        <div className="flex flex-wrap gap-4 text-sm text-dark/60 mb-4">
          <span className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            {selectedBook.format}
          </span>
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

        {/* Format-specific description */}
        {selectedFormat.description && (
          <p className="text-primary font-medium text-sm mb-2">
            {selectedFormat.description}
          </p>
        )}

        <p className="text-dark/70 mb-4">{selectedBook.description}</p>
        {selectedBook.longDescription && (
          <p className="text-dark/60 text-sm mb-6">{selectedBook.longDescription}</p>
        )}

        {/* Amazon Button */}
        <Button variant="amazon" asChild className="self-start">
          <a
            href={`https://www.amazon.com/dp/${selectedBook.amazonAsin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy {selectedFormat.name} on Amazon
          </a>
        </Button>

        {selectedBook.isbn && (
          <p className="text-dark/40 text-xs mt-4">ISBN: {selectedBook.isbn}</p>
        )}
      </div>
    </article>
  )
}

export { BookSeriesCard }
