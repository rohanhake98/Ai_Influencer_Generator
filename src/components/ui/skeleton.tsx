import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-shimmer bg-surface-container rounded-md", className)}
      {...props}
    />
  )
}

function StatsCardSkeleton() {
  return (
    <div className="bg-surface/80 border-white/[0.06] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="size-10 rounded-xl" />
        <Skeleton className="h-5 w-14 rounded-full" />
      </div>
      <Skeleton className="h-8 w-20 mb-2" />
      <Skeleton className="h-4 w-24" />
    </div>
  )
}

function PostCardSkeleton() {
  return (
    <div className="flex gap-3 p-2 rounded-lg">
      <Skeleton className="size-14 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
        <div className="flex gap-3">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  )
}

function ChartSkeleton() {
  return (
    <div className="bg-surface/80 border-white/[0.06] rounded-xl p-5 h-[420px]">
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-6 w-40" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-10" />
          <Skeleton className="h-6 w-10" />
          <Skeleton className="h-6 w-10" />
        </div>
      </div>
      <div className="flex items-end justify-between gap-2 h-48 px-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="flex-1 rounded-t-sm" style={{ height: `${30 + Math.random() * 60}%` }} />
        ))}
      </div>
      <div className="flex justify-between px-4 mt-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-6" />
        ))}
      </div>
    </div>
  )
}

function ActivityItemSkeleton() {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg">
      <Skeleton className="size-9 rounded-lg" />
      <div className="flex-1">
        <Skeleton className="h-4 w-32 mb-1" />
        <Skeleton className="h-3 w-40" />
      </div>
      <Skeleton className="h-3 w-16" />
    </div>
  )
}

export { Skeleton, StatsCardSkeleton, PostCardSkeleton, ChartSkeleton, ActivityItemSkeleton }