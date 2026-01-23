import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const newsletterSectionVariants = cva(
  "py-16 px-5 relative overflow-hidden",
  {
    variants: {
      background: {
        light: "bg-tertiary text-dark",
        dark: "bg-dark text-light",
        gradient: "bg-gradient-to-br from-primary/10 via-tertiary to-secondary/10 text-dark",
      },
      pattern: {
        none: "",
        dots: "before:absolute before:inset-0 before:bg-[radial-gradient(circle,_var(--color-primary)_1px,_transparent_1px)] before:bg-[size:20px_20px] before:opacity-10",
        mandala: "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzQ3ODM0IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzQ3ODM0IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] before:opacity-50",
        paisley: "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNUMxMiA1IDUgMTIgNSAyMGMwIDggNyAxNSAxNSAxNXMxNS03IDE1LTE1YzAtOC03LTE1LTE1LTE1em0wIDI1Yy01LjUgMC0xMC00LjUtMTAtMTBzNC41LTEwIDEwLTEwIDEwIDQuNSAxMCAxMC00LjUgMTAtMTAgMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNjNDc4MzQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiLz48L3N2Zz4=')] before:opacity-60",
      },
    },
    defaultVariants: {
      background: "light",
      pattern: "none",
    },
  }
)

export interface NewsletterSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onSubmit">,
    VariantProps<typeof newsletterSectionVariants> {
  headline?: string
  description?: string
  placeholder?: string
  buttonText?: string
  onEmailSubmit?: (email: string) => void | Promise<void>
  container?: "sm" | "md" | "lg" | "xl"
}

const containerClasses = {
  sm: "max-w-xl mx-auto",
  md: "max-w-2xl mx-auto",
  lg: "max-w-3xl mx-auto",
  xl: "max-w-4xl mx-auto",
}

function NewsletterSection({
  headline = "Stay Connected",
  description = "Subscribe to our newsletter for the latest updates on new books, cultural stories, and special offers.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  onEmailSubmit,
  background,
  pattern,
  container = "md",
  className,
  ...props
}: NewsletterSectionProps) {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !onEmailSubmit) return

    setIsLoading(true)
    setStatus("idle")

    try {
      await onEmailSubmit(email)
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const isDark = background === "dark"

  return (
    <section
      className={cn(newsletterSectionVariants({ background, pattern }), className)}
      {...props}
    >
      <div className={cn(containerClasses[container], "relative z-10 text-center")}>
        {/* Decorative element */}
        <div className="flex justify-center mb-4">
          <div className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center",
            isDark ? "bg-primary" : "bg-primary/10"
          )}>
            <Mail className={cn(
              "w-6 h-6",
              isDark ? "text-light" : "text-primary"
            )} />
          </div>
        </div>

        {/* Headline */}
        <h2 className={cn(
          "font-title text-3xl md:text-4xl font-bold mb-4",
          isDark ? "text-light" : "text-dark"
        )}>
          {headline}
        </h2>

        {/* Description */}
        <p className={cn(
          "text-base md:text-lg mb-8 max-w-xl mx-auto",
          isDark ? "text-light/80" : "text-dark/70"
        )}>
          {description}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-1">
            <label htmlFor="email-input" className="sr-only">Email address</label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              aria-label="Email address"
              className={cn(
                "w-full h-12 px-4 rounded-lg border-2 transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                isDark
                  ? "bg-light/10 border-light/20 text-light placeholder:text-light/50 focus:border-primary focus:ring-primary"
                  : "bg-white border-secondary/30 text-dark placeholder:text-dark/40 focus:border-primary focus:ring-primary"
              )}
            />
          </div>
          <Button
            type="submit"
            variant={isDark ? "default" : "default"}
            size="lg"
            disabled={isLoading || !email}
            className="shrink-0"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </span>
            ) : (
              buttonText
            )}
          </Button>
        </form>

        {/* Status messages */}
        {status === "success" && (
          <p role="status" aria-live="polite" className="mt-4 text-green-600 dark:text-green-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
            Thank you for subscribing! Check your inbox for confirmation.
          </p>
        )}
        {status === "error" && (
          <p role="status" aria-live="polite" className="mt-4 text-red-600 dark:text-red-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Privacy note */}
        <p className={cn(
          "mt-4 text-xs",
          isDark ? "text-light/50" : "text-dark/50"
        )}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export { NewsletterSection, newsletterSectionVariants }
