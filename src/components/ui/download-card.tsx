import * as React from "react"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"

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
        <Badge
          variant="free"
          className="absolute top-3 right-3 text-sm font-bold px-3 py-1"
        >
          FREE
        </Badge>
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
        <Button asChild className="w-full">
          <a href={downloadUrl} download>
            <Download className="w-5 h-5" />
            Download Free
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export { DownloadCard }
