import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./card"
import { Badge } from "./badge"

export interface ComingSoonCardProps {
  title: string
  description: string
  image: string
  className?: string
}

function ComingSoonCard({
  title,
  description,
  image,
  className
}: ComingSoonCardProps) {
  return (
    <Card className={cn(
      "group overflow-hidden h-full",
      className
    )}>
      <div className="aspect-square relative overflow-hidden bg-tertiary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/30 flex items-center justify-center">
          <Badge variant="comingSoon" className="text-sm font-bold px-4 py-2">
            Coming Soon
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export { ComingSoonCard }
