import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Briefcase, MessageSquare, Play, Plus, RefreshCw, Trash2, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const accounts = [
  { platform: "Instagram", icon: Camera, username: "@aria.thorne.ai", status: "Active", followers: "12.4K", posts: 48, color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/15" },
  { platform: "LinkedIn", icon: Briefcase, username: "Aria Thorne", status: "Active", followers: "3.2K", posts: 22, color: "text-secondary", bgColor: "bg-secondary/10", borderColor: "border-secondary/15" },
  { platform: "Twitter/X", icon: MessageSquare, username: "@AriaThorneAI", status: "Expired", followers: "850", posts: 15, color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/15" },
]

const availablePlatforms = [
  { name: "YouTube", icon: Play, coming: false },
]

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Connected Accounts</h1>
          <p className="text-on-surface-variant text-sm">Manage your social media platform connections.</p>
        </div>
        <Button variant="gradient" className="gap-2 rounded-xl h-10 px-5 shadow-glow font-semibold">
          <Plus className="size-4" />
          Connect New Account
        </Button>
      </div>

      {/* Account Stats */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="px-4 py-2 rounded-lg bg-surface/80 border border-white/[0.06]">
          <span className="text-on-surface-variant">Connected:</span>
          <span className="ml-2 font-bold">{accounts.length} platforms</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-success/8 border border-success/15">
          <span className="text-success/70">Active:</span>
          <span className="ml-2 font-bold text-success">{accounts.filter(a => a.status === "Active").length}</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-error/8 border border-error/15">
          <span className="text-error/70">Needs Attention:</span>
          <span className="ml-2 font-bold text-error">{accounts.filter(a => a.status === "Expired").length}</span>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {accounts.map((acc) => (
          <Card key={acc.platform} className={cn("relative overflow-hidden bg-surface/80 border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-colors", acc.status === "Expired" && "border-error/20")}>
            <CardHeader className="flex flex-row items-center gap-4 pb-3">
              <div className={cn("size-12 rounded-xl flex items-center justify-center", acc.bgColor)}>
                <acc.icon className={cn("size-6", acc.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base font-bold">{acc.platform}</CardTitle>
                <CardDescription className="text-on-surface-variant text-sm truncate">{acc.username}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-white/[0.03] text-center">
                  <p className="text-lg font-bold">{acc.followers}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Followers</p>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] text-center">
                  <p className="text-lg font-bold">{acc.posts}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Posts</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className={cn(
                    "capitalize text-[10px] font-semibold px-2.5 py-0.5 rounded-md",
                    acc.status === "Active" ? "bg-success/10 text-success border-success/20" : "bg-error/10 text-error border-error/20"
                  )}
                >
                  <span className="flex items-center gap-1">
                    {acc.status === "Active" ? <CheckCircle2 className="size-3" /> : <AlertCircle className="size-3" />}
                    {acc.status}
                  </span>
                </Badge>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 border-white/[0.06] bg-white/[0.03] gap-1.5 h-9 text-xs rounded-lg hover:bg-white/[0.06]">
                  {acc.status === "Active" ? <RefreshCw className="size-3" /> : <RefreshCw className="size-3 text-error" />}
                  {acc.status === "Active" ? "Sync" : "Reconnect"}
                </Button>
                <Button variant="outline" size="icon" className="size-9 border-white/[0.06] bg-white/[0.03] text-error hover:bg-error/10 rounded-lg">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add Platform */}
        <Card className="border-dashed border-2 border-white/[0.08] bg-transparent flex flex-col items-center justify-center p-8 gap-4 hover:bg-white/[0.02] hover:border-primary/20 transition-all cursor-pointer group rounded-xl">
          <div className="size-14 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Plus className="size-7 text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <p className="font-semibold group-hover:text-primary transition-colors">Add Platform</p>
            <p className="text-xs text-on-surface-variant/50 mt-1">YouTube, TikTok & more</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
