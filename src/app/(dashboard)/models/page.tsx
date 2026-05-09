import { Button } from "@/components/ui/button"
import { ModelCard } from "@/components/models/ModelCard"
import { Plus, Search, Filter } from "lucide-react"
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
          <h1 className="text-3xl font-bold mb-2">AI Influencer Library</h1>
          <p className="text-on-surface-variant">Manage and view your generated AI personas.</p>
        </div>
        <Button variant="gradient" className="gap-2" asChild>
          <Link href="/models/create">
            <Plus className="size-4" />
            Create New Model
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant" />
          <Input 
            placeholder="Search models..." 
            className="pl-10 border-outline/10 bg-surface-container-low" 
          />
        </div>
        <Button variant="outline" className="gap-2 border-outline/10">
          <Filter className="size-4" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {models.map((model) => (
          <ModelCard key={model.name} {...model} />
        ))}
        
        {/* Empty State / Create CTA */}
        <Link 
          href="/models/create"
          className="aspect-[4/5] rounded-lg border-2 border-dashed border-outline/20 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all group"
        >
          <div className="size-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Plus className="size-6 text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <span className="font-medium text-on-surface-variant group-hover:text-primary transition-colors">Create New Model</span>
        </Link>
      </div>
    </div>
  )
}
