import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LucideIcon, Sparkles, FileText, Users, Calendar, Link2, BarChart3 } from "lucide-react"

interface EmptyStateProps {
  title: string
  description: string
  icon?: LucideIcon
  actionLabel?: string
  actionHref?: string
  onAction?: () => void
  variant?: "default" | "models" | "posts" | "calendar" | "accounts" | "analytics"
  className?: string
}

const variantIcons = {
  default: Sparkles,
  models: Users,
  posts: FileText,
  calendar: Calendar,
  accounts: Link2,
  analytics: BarChart3,
}

const variantConfig = {
  default: {
    gradient: "from-primary/15 to-primary/5",
    iconColor: "text-primary",
    actionColor: "gradient",
  },
  models: {
    gradient: "from-secondary/15 to-secondary/5",
    iconColor: "text-secondary",
    actionColor: "gradient",
  },
  posts: {
    gradient: "from-accent/15 to-accent/5",
    iconColor: "text-accent",
    actionColor: "gradient",
  },
  calendar: {
    gradient: "from-tertiary/15 to-tertiary/5",
    iconColor: "text-tertiary",
    actionColor: "gradient",
  },
  accounts: {
    gradient: "from-primary/15 to-secondary/5",
    iconColor: "text-primary",
    actionColor: "gradient",
  },
  analytics: {
    gradient: "from-secondary/15 to-accent/5",
    iconColor: "text-secondary",
    actionColor: "outline",
  },
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  onAction,
  variant = "default",
  className,
}: EmptyStateProps) {
  const config = variantConfig[variant]
  const Icon = icon || variantIcons[variant]

  return (
    <div className={cn("flex flex-col items-center justify-center py-16 px-6 text-center", className)}>
      <div
        className={cn(
          "size-16 md:size-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
          config.gradient
        )}
      >
        <Icon className={cn("size-8 md:size-10", config.iconColor)} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-on-surface-variant text-sm md:text-base max-w-sm mb-6">
        {description}
      </p>
      
      {(actionLabel && actionHref) || actionLabel ? (
        <div className="flex flex-col sm:flex-row gap-3">
          {actionHref ? (
            <Button
              variant={variant === "analytics" ? "outline" : "gradient"}
              asChild
              className="shadow-glow"
            >
              <Link href={actionHref}>
                {actionLabel}
              </Link>
            </Button>
          ) : (
            <Button
              variant={variant === "analytics" ? "outline" : "gradient"}
              onClick={onAction}
              className="shadow-glow"
            >
              {actionLabel}
            </Button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export function EmptyStateSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="size-16 md:size-20 rounded-2xl bg-surface-container animate-shimmer mb-6" />
      <div className="h-6 w-48 bg-surface-container animate-shimmer rounded mb-2" />
      <div className="h-4 w-64 bg-surface-container animate-shimmer rounded mb-6" />
      <div className="flex gap-3">
        <div className="h-10 w-32 bg-surface-container animate-shimmer rounded-lg" />
      </div>
    </div>
  )
}