"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Briefcase, MessageSquare, Plus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const scheduledPosts = [
  { id: 1, date: new Date(2024, 4, 15), platform: "instagram", time: "10:00 AM", model: "Aria Thorne", content: "Morning routine at a beach house..." },
  { id: 2, date: new Date(2024, 4, 15), platform: "linkedin", time: "02:30 PM", model: "Aria Thorne", content: "Tips for staying productive while traveling..." },
  { id: 3, date: new Date(2024, 4, 18), platform: "twitter", time: "09:00 AM", model: "Leo Sterling", content: "Excited to announce our new partnership!" },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(2024, 4, 15))

  const selectedPosts = scheduledPosts.filter(
    (post) => post.date.toDateString() === date?.toDateString()
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Content Calendar</h1>
          <p className="text-on-surface-variant">Schedule and manage your influencer posts.</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <Plus className="size-4" />
          Schedule Post
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardContent className="p-4 flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md w-full border-none"
              classNames={{
                selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
                today: "bg-surface-container text-primary font-bold",
              }}
            />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Posts for {date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</h2>
          
          {selectedPosts.length > 0 ? (
            <div className="space-y-4">
              {selectedPosts.map((post) => (
                <Card key={post.id} className="hover:border-primary/50 transition-colors cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {post.platform === "instagram" && <Camera className="size-4 text-primary" />}
                        {post.platform === "linkedin" && <Briefcase className="size-4 text-secondary" />}
                        {post.platform === "twitter" && <MessageSquare className="size-4 text-accent" />}
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{post.platform}</span>
                      </div>
                      <span className="text-xs font-medium text-on-surface-variant">{post.time}</span>
                    </div>
                    <p className="font-bold text-sm mb-1">{post.model}</p>
                    <p className="text-xs text-on-surface-variant line-clamp-1">{post.content}</p>
                    <div className="mt-3 flex justify-end">
                       <ChevronRight className="size-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="h-48 rounded-lg border-2 border-dashed border-outline/10 flex flex-col items-center justify-center text-center p-6">
               <p className="text-on-surface-variant text-sm mb-4">No posts scheduled for this day.</p>
               <Button variant="outline" size="sm" className="border-outline/10">Schedule Post</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
