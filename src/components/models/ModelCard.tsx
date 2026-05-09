import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical, ExternalLink, Calendar } from "lucide-react"

interface ModelCardProps {
  name: string
  niche: string[]
  avatar: string
  date: string
  status: "generated" | "pending" | "failed"
}

export function ModelCard({ name, niche, avatar, date, status }: ModelCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-[4/5] relative bg-surface-container-low">
        <img 
          src={avatar} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <Badge 
            className={cn(
              "capitalize",
              status === "generated" ? "bg-secondary/20 text-secondary border-secondary/20" : "bg-primary/20 text-primary border-primary/20"
            )}
          >
            {status}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <div className="flex flex-wrap gap-1 mt-2">
              {niche.map(n => (
                <Badge key={n} variant="outline" className="text-[10px] py-0 border-outline/20">
                  {n}
                </Badge>
              ))}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="size-8">
            <MoreVertical className="size-4" />
          </Button>
        </div>
      </CardHeader>
      <CardFooter className="p-4 pt-0 border-t border-outline/5 mt-2 flex justify-between items-center text-xs text-on-surface-variant">
        <div className="flex items-center gap-1">
          <Calendar className="size-3" />
          {date}
        </div>
        <Button variant="link" className="h-auto p-0 text-xs text-primary">
          View Details
          <ExternalLink className="ml-1 size-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}
