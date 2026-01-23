import * as React from "react"
import { cn } from "@/lib/utils"

interface CollectionCardProps {
  title: string
  image: string
  href: string
  ctaText?: string
  className?: string
  variant?: "default" | "featured"
}

function CollectionCard({
  title,
  image,
  href,
  ctaText = "Shop Now",
  className,
  variant = "default"
}: CollectionCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg bg-tertiary",
      variant === "featured" ? "aspect-[4/5]" : "aspect-square",
      className
    )}>
      <a href={href} className="block w-full h-full">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="text-light/80 text-xs uppercase tracking-wider mb-1">
            {title}
          </span>
          <span className="text-light font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {ctaText} →
          </span>
        </div>
      </a>
    </div>
  )
}

export { CollectionCard }
