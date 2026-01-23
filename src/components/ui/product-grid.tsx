import * as React from "react"
import { Eye, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"

export interface Product {
  id: string
  title: string
  image: string
  price: string
  salePrice?: string
  isOnSale?: boolean
  href?: string
  amazonAsin?: string
}

export interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
  showQuickView?: boolean
  onQuickView?: (product: Product) => void
  className?: string
}

interface ProductCardProps {
  product: Product
  showQuickView?: boolean
  onQuickView?: (product: Product) => void
}

function ProductCard({ product, showQuickView, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onQuickView?.(product)
  }

  const CardWrapper = product.href ? "a" : "div"
  const cardProps = product.href
    ? { href: product.href }
    : {}

  return (
    <CardWrapper
      {...cardProps}
      className={cn(
        "group relative block bg-white rounded-lg overflow-hidden",
        "border border-gray-100",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:-translate-y-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-tertiary overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className={cn(
            "w-full h-full object-cover",
            "transition-transform duration-500",
            "group-hover:scale-105"
          )}
          loading="lazy"
        />

        {/* Sale Badge */}
        {product.isOnSale && (
          <Badge variant="destructive" className="absolute top-3 right-3">
            Sale
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
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={handleQuickView}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              Quick View
            </Button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-title font-semibold text-dark text-sm md:text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.isOnSale && product.salePrice ? (
            <>
              <span className="text-lg font-bold text-primary">
                ${product.salePrice}
              </span>
              <span className="text-sm text-dark/40 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-dark">${product.price}</span>
          )}
        </div>

        {/* Amazon Button */}
        {product.amazonAsin && (
          <Button
            variant="amazon"
            size="sm"
            asChild
            className="w-full mt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={`https://www.amazon.com/dp/${product.amazonAsin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy on Amazon
            </a>
          </Button>
        )}
      </div>
    </CardWrapper>
  )
}

function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 animate-pulse">
      <div className="aspect-square bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-6 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  )
}

function ProductGrid({
  products,
  isLoading = false,
  showQuickView = false,
  onQuickView,
  className,
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
          className
        )}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-dark/60">No products found.</p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showQuickView={showQuickView}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  )
}

export { ProductGrid, ProductCard, ProductCardSkeleton }
