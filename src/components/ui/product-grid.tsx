import * as React from "react"
import { Eye, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"

// =============================================================================
// Types
// =============================================================================

export interface Product {
  id: string
  title: string
  image: string
  price: string
  salePrice?: string
  href: string
  badge?: string
  isbn?: string              // Primary identifier for physical books
  asin?: string              // Only for Amazon-exclusive formats (Kindle)
}

export interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
  showQuickView?: boolean
  onQuickView?: (product: Product) => void
  isLoading?: boolean
  skeletonCount?: number
  className?: string
}

interface ProductCardProps {
  product: Product
  showQuickView?: boolean
  onQuickView?: (product: Product) => void
}

// =============================================================================
// Column Configuration
// =============================================================================

const columnClasses = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
} as const

// =============================================================================
// ProductCard Component
// =============================================================================

function ProductCard({ product, showQuickView, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const isOnSale = Boolean(product.salePrice)

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onQuickView?.(product)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onQuickView?.(product)
    }
  }

  return (
    <article
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden",
        "border border-gray-100",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:-translate-y-1",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-labelledby={`product-title-${product.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-tertiary overflow-hidden">
        <a
          href={product.href}
          className="block w-full h-full focus:outline-none"
          aria-label={`View ${product.title}`}
        >
          <img
            src={product.image}
            alt=""
            aria-hidden="true"
            className={cn(
              "w-full h-full object-cover",
              "transition-transform duration-500 ease-out",
              "group-hover:scale-105"
            )}
            loading="lazy"
            decoding="async"
          />
        </a>

        {/* Badge - Sale or Custom */}
        {(isOnSale || product.badge) && (
          <Badge
            variant={isOnSale ? "destructive" : "default"}
            className="absolute top-3 right-3 shadow-md"
          >
            {isOnSale ? "Sale" : product.badge}
          </Badge>
        )}

        {/* Quick View Overlay */}
        {showQuickView && (
          <div
            className={cn(
              "absolute inset-0 bg-dark/40 backdrop-blur-sm",
              "flex items-center justify-center",
              "transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-hidden={!isHovered}
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={handleQuickView}
              onKeyDown={handleKeyDown}
              className="gap-2"
              aria-label={`Quick view ${product.title}`}
            >
              <Eye className="w-4 h-4" aria-hidden="true" />
              Quick View
            </Button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <a
          href={product.href}
          className="block focus:outline-none"
        >
          <h3
            id={`product-title-${product.id}`}
            className={cn(
              "font-title font-semibold text-dark",
              "text-sm md:text-base",
              "line-clamp-2 mb-2",
              "group-hover:text-primary transition-colors duration-200"
            )}
          >
            {product.title}
          </h3>
        </a>

        {/* Price */}
        <div className="flex items-center gap-2" aria-label={`Price: ${isOnSale ? product.salePrice : product.price}`}>
          {isOnSale && product.salePrice ? (
            <>
              <span className="text-lg font-bold text-primary">
                {product.salePrice.startsWith("$") ? product.salePrice : `$${product.salePrice}`}
              </span>
              <span className="text-sm text-dark/40 line-through" aria-label={`Original price: ${product.price}`}>
                {product.price.startsWith("$") ? product.price : `$${product.price}`}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-dark">
              {product.price.startsWith("$") ? product.price : `$${product.price}`}
            </span>
          )}
        </div>

        {/* Amazon Button */}
        {(product.isbn || product.asin) && (
          <Button
            variant="amazon"
            size="sm"
            asChild
            className="w-full mt-3"
          >
            <a
              href={`https://www.amazon.com/dp/${product.asin ?? product.isbn}?tag=rootsonrise-20`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Buy ${product.title} on Amazon`}
            >
              <ShoppingCart className="w-4 h-4" aria-hidden="true" />
              Order on Amazon
            </a>
          </Button>
        )}
      </div>
    </article>
  )
}

ProductCard.displayName = "ProductCard"

// =============================================================================
// ProductCardSkeleton Component
// =============================================================================

function ProductCardSkeleton() {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden border border-gray-100"
      role="status"
      aria-label="Loading product"
    >
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200 animate-pulse" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title lines */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        </div>

        {/* Price */}
        <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3" />

        {/* Button placeholder */}
        <div className="h-9 bg-gray-200 rounded animate-pulse w-full" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  )
}

ProductCardSkeleton.displayName = "ProductCardSkeleton"

// =============================================================================
// ProductGridSkeleton Component
// =============================================================================

interface ProductGridSkeletonProps {
  count?: number
  columns?: 2 | 3 | 4
  className?: string
}

function ProductGridSkeleton({
  count = 8,
  columns = 4,
  className,
}: ProductGridSkeletonProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        columnClasses[columns],
        className
      )}
      role="status"
      aria-label="Loading products"
      aria-busy="true"
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  )
}

ProductGridSkeleton.displayName = "ProductGridSkeleton"

// =============================================================================
// ProductGrid Component
// =============================================================================

function ProductGrid({
  products,
  columns = 4,
  showQuickView = false,
  onQuickView,
  isLoading = false,
  skeletonCount = 8,
  className,
}: ProductGridProps) {
  // Loading state
  if (isLoading) {
    return (
      <ProductGridSkeleton
        count={skeletonCount}
        columns={columns}
        className={className}
      />
    )
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div
        className="text-center py-12"
        role="status"
        aria-label="No products available"
      >
        <p className="text-dark/60 text-base">No products found.</p>
      </div>
    )
  }

  // Product grid
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        columnClasses[columns],
        className
      )}
      role="list"
      aria-label="Product list"
    >
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard
            product={product}
            showQuickView={showQuickView}
            onQuickView={onQuickView}
          />
        </div>
      ))}
    </div>
  )
}

ProductGrid.displayName = "ProductGrid"

// =============================================================================
// Exports
// =============================================================================

export { ProductGrid, ProductCard, ProductCardSkeleton, ProductGridSkeleton }
