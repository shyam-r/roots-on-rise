import * as React from "react"
import { cn } from "@/lib/utils"

interface AnnouncementBarProps {
  message: string
  link?: string
  className?: string
}

function AnnouncementBar({ message, link, className }: AnnouncementBarProps) {
  const content = (
    <div className={cn(
      "bg-primary text-light text-center py-2 px-4 text-sm font-medium tracking-wide",
      link && "hover:bg-primary-dark transition-colors cursor-pointer",
      className
    )}>
      {message}
    </div>
  )

  if (link) {
    return <a href={link}>{content}</a>
  }

  return content
}

export { AnnouncementBar }
