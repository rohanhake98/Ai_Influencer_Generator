import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical, ExternalLink, Calendar, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModelCardProps {
  name: string
  niche: string[]
  avatar: string
  date: string
  status: "generated" | "pending" | "failed"
}

export function ModelCard({ name, niche, avatar, date, status }: ModelCardProps) {
  return (
    <Card className="group overflow-hidden bg-surface/80 border-white/[0.06] rounded-xl hover:border-primary/20 hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-[4/5] relative bg-surface-container-low overflow-hidden">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <Badge
            className={cn(
              "capitalize text-[10px] font-semibold px-2.5 py-0.5 rounded-md backdrop-blur-sm",
              status === "generated" ? "bg-success/20 text-success border-success/20" :
              status === "pending" ? "bg-warning/20 text-warning border-warning/20" :
              "bg-error/20 text-error border-error/20"
            )}
          >
            {status}
          </Badge>
        </div>
        {/* Hover Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Button size="sm" className="flex-1 bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white/30 h-8 text-xs rounded-lg gap-1">
            <Eye className="size-3" /> View
          </Button>
        </div>
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base font-bold">{name}</CardTitle>
            <div className="flex flex-wrap gap-1 mt-2">
              {niche.map(n => (
                <Badge key={n} variant="outline" className="text-[10px] py-0 border-white/[0.08] text-on-surface-variant bg-white/[0.03] rounded-md">
                  {n}
                </Badge>
              ))}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="size-7 rounded-md text-on-surface-variant hover:bg-white/[0.06]">
            <MoreVertical className="size-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center text-[11px] text-on-surface-variant">
        <div className="flex items-center gap-1">
          <Calendar className="size-3" />
          {date}
        </div>
        <Button variant="link" className="h-auto p-0 text-[11px] text-primary font-medium">
          Details
          <ExternalLink className="ml-1 size-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
