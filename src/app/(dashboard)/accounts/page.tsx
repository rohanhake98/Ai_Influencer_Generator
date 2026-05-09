import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Briefcase, MessageSquare, Play, Plus, RefreshCw, Trash2 } from "lucide-react"

const accounts = [
  { platform: "Instagram", icon: Camera, username: "@aria.thorne.ai", status: "Active", followers: "12.4K", color: "text-[#6366F1]" },
  { platform: "LinkedIn", icon: Briefcase, username: "Aria Thorne", status: "Active", followers: "3.2K", color: "text-[#22D3EE]" },
  { platform: "Twitter/X", icon: MessageSquare, username: "@AriaThorneAI", status: "Expired", followers: "850", color: "text-error" },
]

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-sans font-bold mb-2">Connected Accounts</h1>
          <p className="text-on-surface-variant">Manage your social media platform connections.</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <Plus className="size-4" />
          Connect New Account
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((acc) => (
          <Card key={acc.platform} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className={cn("size-12 rounded-xl bg-surface-container flex items-center justify-center", acc.color)}>
                <acc.icon className="size-6" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg">{acc.platform}</CardTitle>
                <CardDescription className="text-on-surface-variant">{acc.username}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm">
                  <span className="text-on-surface-variant">Followers:</span>
                  <span className="ml-2 font-bold">{acc.followers}</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={cn(
                    "capitalize",
                    acc.status === "Active" ? "bg-secondary/10 text-secondary border-secondary/20" : "bg-error/10 text-error border-error/20"
                  )}
                >
                  {acc.status}
                </Badge>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 border-outline/10 gap-1">
                  {acc.status === "Active" ? <RefreshCw className="size-3" /> : <RefreshCw className="size-3 text-error animate-spin" />}
                  {acc.status === "Active" ? "Sync" : "Reconnect"}
                </Button>
                <Button variant="outline" size="icon" className="size-9 border-outline/10 text-error hover:bg-error/10">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-dashed border-outline/20 bg-transparent flex flex-col items-center justify-center p-8 gap-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
          <div className="size-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Plus className="size-6 text-on-surface-variant group-hover:text-primary" />
          </div>
          <div className="text-center">
            <p className="font-bold">Add Platform</p>
            <p className="text-xs text-on-surface-variant">Support for YT, TikTok coming soon</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}
