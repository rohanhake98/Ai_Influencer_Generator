"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, MoreVertical, Camera, Briefcase, MessageSquare, Eye, SlidersHorizontal, Grid3X3, List } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    model: "Aria Thorne",
    platform: "instagram",
    status: "published",
    date: "2024-05-14",
    caption: "Ready to start the week with some high energy! 🚀✨ #mondaymotivation #fitnessgoals"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1633169002555-5a5075c3f64e?w=800&auto=format&fit=crop&q=60",
    model: "Zane Matrix",
    platform: "twitter",
    status: "scheduled",
    date: "2024-05-16",
    caption: "The future of digital fashion is here. Stay tuned for the drop! 💎🕶️ #digitalfashion #web3"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
    model: "Luna Digital",
    platform: "linkedin",
    status: "draft",
    date: "2024-05-18",
    caption: "Exploring the intersection of AI and creativity. How are you using generative tools in your workflow? 🎨🤖"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?w=800&auto=format&fit=crop&q=60",
    model: "Aria Thorne",
    platform: "instagram",
    status: "published",
    date: "2024-05-12",
    caption: "Sun-kissed and ready for adventure. ☀️🌊 #travelgram #aigirl"
  }
]

const platformIcons: Record<string, typeof Camera> = {
  instagram: Camera,
  linkedin: Briefcase,
  twitter: MessageSquare,
}

const statusStyles: Record<string, string> = {
  published: "bg-success/15 text-success border-success/20",
  scheduled: "bg-primary/15 text-primary border-primary/20",
  draft: "bg-white/[0.06] text-on-surface-variant border-white/[0.08]",
}

export default function PostsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight">My Posts</h1>
          <p className="text-on-surface-variant text-sm">View and manage all your generated content.</p>
        </div>
        <Button variant="gradient" className="gap-2 rounded-xl h-10 px-5 shadow-glow font-semibold" asChild>
          <Link href="/posts/create">
            <Plus className="size-4" />
            Create New Post
          </Link>
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50" />
          <Input
            placeholder="Search posts..."
            className="pl-10 border-white/[0.06] bg-white/[0.04] rounded-lg h-10 text-sm focus-visible:ring-primary/40"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm hover:bg-white/[0.06]">
            <Filter className="size-4" />
            Status
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm hover:bg-white/[0.06]">
            <Camera className="size-4" />
            Platform
          </Button>
        </div>
      </div>

      {/* Status Pills */}
      <div className="flex flex-wrap gap-2">
        {["All", "Published", "Scheduled", "Draft"].map((s, i) => (
          <button key={s} suppressHydrationWarning className={cn(
            "px-4 py-1.5 rounded-full text-xs font-medium transition-colors",
            i === 0 ? "bg-primary/10 text-primary" : "bg-white/[0.04] text-on-surface-variant hover:bg-white/[0.06]"
          )}>
            {s}
            {i === 0 && <span className="ml-1.5 text-[10px] opacity-60">{posts.length}</span>}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {posts.map((post) => {
          const PlatformIcon = platformIcons[post.platform] || Camera
          return (
            <Card key={post.id} className="group overflow-hidden bg-surface/80 border-white/[0.06] rounded-xl hover:border-primary/20 hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={post.image} alt={post.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <div className="size-8 rounded-lg bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <PlatformIcon className="size-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className={cn("capitalize text-[10px] font-semibold px-2.5 py-0.5 rounded-md border backdrop-blur-sm", statusStyles[post.status])}>
                      {post.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold">{post.model}</p>
                      <p className="text-[11px] text-on-surface-variant">{post.date}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="size-7 rounded-md text-on-surface-variant hover:bg-white/[0.06]">
                      <MoreVertical className="size-3.5" />
                    </Button>
                  </div>
                  <p className="text-sm text-on-surface-variant/70 line-clamp-2 italic mb-4 leading-relaxed">
                    &ldquo;{post.caption}&rdquo;
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-white/[0.06] bg-white/[0.03] gap-1.5 h-8 text-xs rounded-lg hover:bg-white/[0.06]">
                      <Eye className="size-3" /> View
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/[0.06] bg-white/[0.03] h-8 px-3 text-xs rounded-lg hover:bg-white/[0.06]">
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}

        {/* Create New Post CTA */}
        <Link
          href="/posts/create"
          className="min-h-[280px] rounded-xl border-2 border-dashed border-white/[0.08] flex flex-col items-center justify-center gap-4 hover:border-primary/30 hover:bg-primary/[0.03] transition-all group"
        >
          <div className="size-14 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Plus className="size-7 text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <span className="font-semibold text-on-surface-variant group-hover:text-primary transition-colors block">Create New Post</span>
            <span className="text-xs text-on-surface-variant/50 mt-1">20 credits per post</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
