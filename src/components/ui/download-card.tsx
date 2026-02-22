import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./card"

export interface DownloadCardProps {
  title: string
  description: string
  image: string
  downloadUrl: string
  category?: string
  className?: string
}

function DownloadCard({
  title,
  description,
  image,
  downloadUrl,
  category,
  className
}: DownloadCardProps) {
  return (
    <Card className={cn(
      "group overflow-hidden hover:shadow-lg hover:-translate-y-1 h-full flex flex-col",
      className
    )}>
      <div className="aspect-square relative overflow-hidden bg-tertiary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          FREE
        </span>
        {/* Download icon button — Arrow + Tray, frosted glass */}
        <button
          type="button"
          data-download-url={downloadUrl}
          data-download-title={title}
          aria-label={`Download ${title}`}
          className="dl-popup-trigger absolute bottom-3 right-3 w-11 h-11 rounded-full bg-white text-primary border-2 border-primary/20 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v9m0 0l-3-3m3 3l3-3" />
          </svg>
        </button>
      </div>
      <CardHeader className="pb-2">
        {category && (
          <span className="text-xs text-primary font-semibold uppercase tracking-wide">
            {category}
          </span>
        )}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export { DownloadCard }
