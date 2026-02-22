import * as React from "react"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./card"

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
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          FREE
        </span>
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
      <CardFooter className="pt-4 border-t border-gray-100">
        <a
          href={downloadUrl}
          download
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 active:opacity-80 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download Free
        </a>
      </CardFooter>
    </Card>
  )
}

export { DownloadCard }
