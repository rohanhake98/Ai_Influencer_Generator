import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Sparkles } from "lucide-react"

interface PostPreviewProps {
  modelName: string
  modelAvatar: string
  content: string
  image?: string
}

export function PostPreview({ modelName, modelAvatar, content, image }: PostPreviewProps) {
  return (
    <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-black rounded-[40px] border-[8px] border-surface-bright shadow-2xl overflow-hidden">
      {/* Phone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-bright rounded-b-2xl z-20" />
      
      <div className="h-full flex flex-col bg-white text-black overflow-y-auto hide-scrollbar">
        {/* Instagram Header */}
        <div className="flex items-center justify-between p-3 pt-8 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[1.5px]">
              <div className="size-full rounded-full border-2 border-white overflow-hidden">
                <img src={modelAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"} className="size-full object-cover" />
              </div>
            </div>
            <span className="text-sm font-bold">{modelName || "username"}</span>
          </div>
          <MoreHorizontal className="size-5 text-gray-400" />
        </div>

        {/* Post Image */}
        <div className="aspect-square bg-gray-100 relative">
          {image ? (
            <img src={image} className="w-full h-full object-cover" />
          ) : (
            <div className="size-full flex flex-col items-center justify-center text-gray-300">
              <Sparkles className="size-12 mb-2 animate-pulse" />
              <span className="text-xs">Generating image...</span>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Heart className="size-6" />
            <MessageCircle className="size-6" />
            <Send className="size-6" />
          </div>
          <Bookmark className="size-6" />
        </div>

        {/* Engagement */}
        <div className="px-3 text-sm">
          <p className="font-bold">1,234 likes</p>
          <div className="mt-1">
            <span className="font-bold mr-2">{modelName || "username"}</span>
            <span className="text-gray-800 leading-tight">
              {content || "Your AI generated caption will appear here..."}
            </span>
          </div>
          <p className="text-gray-400 text-[10px] mt-2 uppercase tracking-tight">2 HOURS AGO</p>
        </div>
      </div>

      {/* Navigation Bar Mockup */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[40%] h-1 bg-gray-300 rounded-full" />
    </div>
  )
}
