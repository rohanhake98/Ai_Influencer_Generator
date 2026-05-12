"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Image as ImageIcon, Camera, Briefcase, MessageSquare } from "lucide-react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const models = [
  { id: "1", name: "Aria Thorne", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { id: "2", name: "Leo Sterling", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
]

const MAX_PROMPT_LENGTH = 500

export function CreatePostForm({ onUpdate }: { onUpdate: (data: Record<string, string | undefined>) => void }) {
  const [formData, setFormData] = useState({
    modelId: "",
    platform: "instagram",
    prompt: "",
    referenceImage: null as File | null,
  })
  const [promptError, setPromptError] = useState<string | null>(null)

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    
    // Find model info for preview
    const model = models.find(m => m.id === value)
    if (field === "modelId") {
      onUpdate({ modelName: model?.name, modelAvatar: model?.avatar })
    } else if (field === "prompt") {
      if (value.length > MAX_PROMPT_LENGTH) {
        setPromptError(`Character limit exceeded. Max ${MAX_PROMPT_LENGTH} characters.`)
      } else {
        setPromptError(null)
      }
      onUpdate({ content: value })
    }
  }

  const getCharacterCountColor = () => {
    const length = formData.prompt.length
    if (length > MAX_PROMPT_LENGTH) return "text-error"
    if (length > MAX_PROMPT_LENGTH * 0.9) return "text-warning"
    return "text-on-surface-variant"
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="model">Select AI Model</Label>
        <Select onValueChange={(v) => handleChange("modelId", v)}>
          <SelectTrigger id="model" className="bg-surface-container-low border-outline/10 h-12">
            <SelectValue placeholder="Choose a model" />
          </SelectTrigger>
          <SelectContent className="bg-surface border-outline/10">
            {models.map(model => (
              <SelectItem key={model.id} value={model.id} className="focus:bg-primary/10">
                <div className="flex items-center gap-2">
                  <img src={model.avatar} className="size-6 rounded-full object-cover" alt={model.name} />
                  {model.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Target Platforms</Label>
        <div className="flex gap-2">
          {[
            { id: "instagram", icon: Camera },
            { id: "linkedin", icon: Briefcase },
            { id: "twitter", icon: MessageSquare },
          ].map(p => (
            <button
              key={p.id}
              onClick={() => handleChange("platform", p.id)}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-3 rounded-lg border-2 transition-all",
                formData.platform === p.id 
                  ? "border-primary bg-primary/5 text-primary" 
                  : "border-outline/10 bg-surface-container-low text-on-surface-variant hover:border-outline/20"
              )}
            >
              <p.icon className="size-5 mb-1" />
              <span className="text-[10px] uppercase font-bold tracking-wider">{p.id}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="prompt">Content Idea</Label>
        <Textarea 
          id="prompt"
          placeholder="Describe your post idea... (e.g., 'Morning routine at a beach house in Bali')"
          className={cn(
            "min-h-[120px] bg-surface-container-low border-outline/10 focus:ring-primary/20",
            promptError && "border-error focus:ring-error/20"
          )}
          value={formData.prompt}
          onChange={(e) => handleChange("prompt", e.target.value)}
          aria-describedby="prompt-help"
          aria-invalid={!!promptError}
        />
        <div className="flex justify-between items-center">
          <span id="prompt-help" className="text-[10px] text-on-surface-variant">
            {promptError && <span className="text-error">{promptError}</span>}
          </span>
          <p className={cn("text-[10px] text-right", getCharacterCountColor())}>
            {formData.prompt.length} / {MAX_PROMPT_LENGTH}
          </p>
        </div>
      </div>

      <div className="grid gap-2">
        <Label>Scene Reference (Optional)</Label>
        <div className="flex items-center justify-center border-2 border-dashed border-outline/10 rounded-lg p-6 bg-surface-container-low/50 hover:bg-surface-container-low transition-colors cursor-pointer">
          <div className="flex flex-col items-center">
            <ImageIcon className="size-8 text-on-surface-variant mb-2" />
            <span className="text-sm text-on-surface-variant">Upload scene or product photo</span>
          </div>
        </div>
      </div>

      <Button variant="gradient" className="w-full h-12 gap-2 text-lg shadow-glow mt-4">
        <Sparkles className="size-5" />
        Generate AI Post (20 Credits)
      </Button>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 border-outline/10">Save Draft</Button>
        <Button variant="outline" className="flex-1 border-outline/10">Schedule</Button>
      </div>
    </div>
  )
}
