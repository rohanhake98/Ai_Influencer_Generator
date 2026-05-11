import { Button } from "@/components/ui/button"
import { ModelCard } from "@/components/models/ModelCard"
import { Plus, Search, Filter, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const models = [
  {
    name: "Aria Thorne",
    niche: ["Fitness", "Lifestyle"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    date: "2024-05-10",
    status: "generated" as const
  },
  {
    name: "Leo Sterling",
    niche: ["Luxury", "Travel"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    date: "2024-05-12",
    status: "generated" as const
  },
  {
    name: "Zoe Chen",
    niche: ["Tech", "Gaming"],
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    date: "2024-05-14",
    status: "generated" as const
  },
  {
    name: "Marcus Vance",
    niche: ["Finance", "Business"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    date: "2024-05-15",
    status: "pending" as const
  }
]

export default function ModelsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight">AI Influencer Library</h1>
          <p className="text-on-surface-variant text-sm">Manage and view your generated AI personas.</p>
        </div>
        <Button variant="gradient" className="gap-2 rounded-xl h-10 px-5 shadow-glow font-semibold" asChild>
          <Link href="/models/create">
            <Plus className="size-4" />
            Create New Model
          </Link>
        </Button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50" />
          <Input
            placeholder="Search models..."
            className="pl-10 border-white/[0.06] bg-white/[0.04] rounded-lg h-10 text-sm focus-visible:ring-primary/40"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm hover:bg-white/[0.06]">
            <Filter className="size-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm hover:bg-white/[0.06]">
            <SlidersHorizontal className="size-4" />
            Sort
          </Button>
        </div>
      </div>

      {/* Model Stats */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="px-4 py-2 rounded-lg bg-surface/80 border border-white/[0.06]">
          <span className="text-on-surface-variant">Total Models:</span>
          <span className="ml-2 font-bold">{models.length}</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-success/8 border border-success/15">
          <span className="text-success/70">Generated:</span>
          <span className="ml-2 font-bold text-success">{models.filter(m => m.status === "generated").length}</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-warning/8 border border-warning/15">
          <span className="text-warning/70">Pending:</span>
          <span className="ml-2 font-bold text-warning">{models.filter(m => m.status === "pending").length}</span>
        </div>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {models.map((model) => (
          <ModelCard key={model.name} {...model} />
        ))}

        {/* Create New CTA */}
        <Link
          href="/models/create"
          className="aspect-[4/5] rounded-xl border-2 border-dashed border-white/[0.08] flex flex-col items-center justify-center gap-4 hover:border-primary/30 hover:bg-primary/[0.03] transition-all group"
        >
          <div className="size-14 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Plus className="size-7 text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <span className="font-semibold text-on-surface-variant group-hover:text-primary transition-colors block">Create New Model</span>
            <span className="text-xs text-on-surface-variant/50 mt-1">50 credits per model</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
