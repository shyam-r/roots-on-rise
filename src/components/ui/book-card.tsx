import * as React from "react"
import { ShoppingCart, Book, Smile, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"

export interface BookCardProps {
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  regularPrice: string
  salePrice?: string
  amazonAsin: string
  format: string
  ageRange: string
  pages?: string
  isbn?: string
  isOnSale?: boolean
  layout?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

function BookCard({
  title,
  subtitle,
  description,
  longDescription,
  image,
  images = [],
  regularPrice,
  salePrice,
  amazonAsin,
  format,
  ageRange,
  pages,
  isbn,
  isOnSale = false,
  layout = "horizontal",
  reverse = false,
  className
}: BookCardProps) {
  const isHorizontal = layout === "horizontal"

  // Track the currently displayed image (can be changed by clicking thumbnails)
  const [displayedImage, setDisplayedImage] = React.useState<string>(image)

  return (
    <article className={cn(
      "flex flex-col gap-8",
      isHorizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"),
      className
    )}>
      {/* Image Gallery */}
      <div className={cn(isHorizontal ? "md:w-1/2" : "w-full")}>
        <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-transparent">
          {/* Product image - uses object-contain to prevent cropping */}
          <img
            src={displayedImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-300"
            loading="lazy"
          />
          {isOnSale && (
            <Badge variant="destructive" className="absolute top-4 right-4 z-10">
              Sale
            </Badge>
          )}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 mt-3">
            {images.slice(0, 4).map((img, i) => {
              const isActive = displayedImage === img
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
                  aria-label={`View ${title} image ${i + 1}`}
                  aria-pressed={isActive}
                >
                  <img
                    src={img}
                    alt={`${title} preview ${i + 1}`}
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
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
        <Badge variant="default" className="self-start mb-2">
          {format}
        </Badge>
        <h2 className="font-title font-bold text-2xl md:text-3xl text-dark mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-dark/50 text-sm mb-4">{subtitle}</p>
        )}

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          {isOnSale && salePrice ? (
            <>
              <span className="text-3xl font-bold text-primary">${salePrice}</span>
              <span className="text-xl text-dark/40 line-through">${regularPrice}</span>
            </>
          ) : (
            <span className="text-3xl font-bold text-dark">${regularPrice}</span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-wrap gap-4 text-sm text-dark/60 mb-6">
          <span className="flex items-center gap-1">
            <Book className="w-4 h-4" />
            {format}
          </span>
          <span className="flex items-center gap-1">
            <Smile className="w-4 h-4" />
            Ages {ageRange}
          </span>
          {pages && (
            <span className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              {pages} pages
            </span>
          )}
        </div>

        <p className="text-dark/70 mb-4">{description}</p>
        {longDescription && (
          <p className="text-dark/60 text-sm mb-6">{longDescription}</p>
        )}

        {/* Amazon Button */}
        <Button variant="amazon" asChild className="self-start">
          <a
            href={`https://www.amazon.com/dp/${amazonAsin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy on Amazon
          </a>
        </Button>

        {isbn && (
          <p className="text-dark/40 text-xs mt-4">ISBN: {isbn}</p>
        )}
      </div>
    </article>
  )
}

export { BookCard }
