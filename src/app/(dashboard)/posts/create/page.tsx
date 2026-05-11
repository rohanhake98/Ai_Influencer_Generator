"use client"

import { useState } from "react"
import { CreatePostForm } from "@/components/posts/CreatePostForm"
import { PostPreview } from "@/components/posts/PostPreview"

export default function CreatePostPage() {
  const [previewData, setPreviewData] = useState({
    modelName: "Aria Thorne",
    modelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    content: "Ready to start the week with some high energy! 🚀✨ #mondaymotivation #fitnessgoals",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop"
  })

  const handleUpdate = (data: Partial<typeof previewData>) => {
    setPreviewData(prev => ({ ...prev, ...data }))
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create New Post</h1>
        <p className="text-on-surface-variant">Generate AI content for your social media channels.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Inputs */}
        <div className="space-y-8">
          <CreatePostForm onUpdate={handleUpdate} />
        </div>

        {/* Right Side: Preview */}
        <div className="lg:sticky lg:top-8 flex flex-col items-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">Live Preview</h2>
          <PostPreview {...previewData} />
          
          <div className="mt-8 flex gap-4">
             <div className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-2">1</div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Select Model</span>
             </div>
             <div className="w-8 h-px bg-outline/20 mt-5" />
             <div className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-2">2</div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Input Idea</span>
             </div>
             <div className="w-8 h-px bg-outline/20 mt-5" />
             <div className="flex flex-col items-center">
                <div className="size-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-2">3</div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Generate</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
