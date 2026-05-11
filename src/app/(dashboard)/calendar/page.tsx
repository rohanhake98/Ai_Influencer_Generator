"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Briefcase, MessageSquare, Plus, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const scheduledPosts = [
  { id: 1, date: new Date(2024, 4, 15), platform: "instagram", time: "10:00 AM", model: "Aria Thorne", content: "Morning routine at a beach house..." },
  { id: 2, date: new Date(2024, 4, 15), platform: "linkedin", time: "02:30 PM", model: "Aria Thorne", content: "Tips for staying productive while traveling..." },
  { id: 3, date: new Date(2024, 4, 18), platform: "twitter", time: "09:00 AM", model: "Leo Sterling", content: "Excited to announce our new partnership!" },
  { id: 4, date: new Date(2024, 4, 20), platform: "instagram", time: "11:00 AM", model: "Zoe Chen", content: "Unboxing the latest tech gadgets..." },
]

const platformConfig: Record<string, { icon: typeof Camera; color: string; bgColor: string }> = {
  instagram: { icon: Camera, color: "text-primary", bgColor: "bg-primary/10" },
  linkedin: { icon: Briefcase, color: "text-secondary", bgColor: "bg-secondary/10" },
  twitter: { icon: MessageSquare, color: "text-accent", bgColor: "bg-accent/10" },
}

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(2024, 4, 15))

  const selectedPosts = scheduledPosts.filter(
    (post) => post.date.toDateString() === date?.toDateString()
  )

  const postsThisMonth = scheduledPosts.length

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Content Calendar</h1>
          <p className="text-on-surface-variant text-sm">Schedule and manage your influencer posts.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm hover:bg-white/[0.06]">
            <Clock className="size-4" />
            Monthly View
          </Button>
          <Button variant="gradient" className="gap-2 rounded-xl h-10 px-5 shadow-glow font-semibold">
            <Plus className="size-4" />
            Schedule Post
          </Button>
        </div>
      </div>

      {/* Month Summary */}
      <div className="flex flex-wrap gap-4">
        <div className="px-4 py-2 rounded-lg bg-surface/80 border border-white/[0.06] text-sm">
          <span className="text-on-surface-variant">This Month:</span>
          <span className="ml-2 font-bold">{postsThisMonth} posts</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-primary/8 border border-primary/15 text-sm">
          <span className="text-primary/70">Scheduled:</span>
          <span className="ml-2 font-bold text-primary">{postsThisMonth}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <Card className="lg:col-span-2 bg-surface/80 border-white/[0.06] rounded-xl">
          <CardContent className="p-6 flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-xl w-full border-none"
              classNames={{
                selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-lg",
                today: "bg-primary/10 text-primary font-bold rounded-lg",
              }}
            />
          </CardContent>
        </Card>

        {/* Sidebar: Posts for Selected Date */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </h2>
            <Badge variant="outline" className="text-[10px] border-white/[0.08] px-2">
              {selectedPosts.length} post{selectedPosts.length !== 1 ? 's' : ''}
            </Badge>
          </div>

          {selectedPosts.length > 0 ? (
            <div className="space-y-3">
              {selectedPosts.map((post) => {
                const config = platformConfig[post.platform] || platformConfig.instagram
                const PlatformIcon = config.icon
                return (
                  <Card key={post.id} className="bg-surface/80 border-white/[0.06] rounded-xl hover:border-primary/20 transition-colors cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={cn("size-7 rounded-md flex items-center justify-center", config.bgColor)}>
                            <PlatformIcon className={cn("size-3.5", config.color)} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant">{post.platform}</span>
                        </div>
                        <span className="text-xs font-medium text-on-surface-variant/60 bg-white/[0.04] px-2 py-0.5 rounded-md">{post.time}</span>
                      </div>
                      <p className="font-semibold text-sm mb-1">{post.model}</p>
                      <p className="text-xs text-on-surface-variant/60 line-clamp-1">{post.content}</p>
                      <div className="mt-3 flex justify-end">
                        <ChevronRight className="size-4 text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="h-48 rounded-xl border-2 border-dashed border-white/[0.06] flex flex-col items-center justify-center text-center p-6">
              <Clock className="size-8 text-on-surface-variant/30 mb-3" />
              <p className="text-on-surface-variant text-sm font-medium mb-1">No posts scheduled</p>
              <p className="text-xs text-on-surface-variant/50 mb-4">for this day</p>
              <Button variant="outline" size="sm" className="border-white/[0.06] bg-white/[0.03] rounded-lg text-xs hover:bg-white/[0.06]">Schedule Post</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
