import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Zap, ArrowRight, MessageSquare, Heart, Eye, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const stats = [
  { label: "Total Posts", value: "124", icon: Zap, trend: "+12%", up: true, color: "from-primary/15 to-primary/5", iconColor: "text-primary" },
  { label: "Total Reach", value: "45.2K", icon: Users, trend: "+8%", up: true, color: "from-secondary/15 to-secondary/5", iconColor: "text-secondary" },
  { label: "Engagement Rate", value: "4.8%", icon: TrendingUp, trend: "+2.4%", up: true, color: "from-accent/15 to-accent/5", iconColor: "text-accent" },
  { label: "Credits Used", value: "850", icon: BarChart3, trend: "-5%", up: false, color: "from-tertiary/15 to-tertiary/5", iconColor: "text-tertiary" },
]

const topPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    model: "Aria Bloom",
    platform: "Instagram",
    likes: "2.4K",
    comments: "142",
    engagement: "5.2%",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1633169002555-5a5075c3f64e?w=800&auto=format&fit=crop&q=60",
    model: "Zane Matrix",
    platform: "Twitter/X",
    likes: "1.8K",
    comments: "98",
    engagement: "4.1%",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
    model: "Luna Digital",
    platform: "LinkedIn",
    likes: "3.2K",
    comments: "215",
    engagement: "6.8%",
  },
]

const recentActivity = [
  { action: "Post published", model: "Aria Thorne", platform: "Instagram", time: "2 hours ago", icon: Zap },
  { action: "Model generated", model: "Nova Lens", platform: "—", time: "5 hours ago", icon: Users },
  { action: "Post scheduled", model: "Leo Sterling", platform: "LinkedIn", time: "1 day ago", icon: Clock },
]

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Welcome back, Sarah</h1>
          <p className="text-on-surface-variant text-sm">Here&apos;s what&apos;s happening with your AI influencers today.</p>
        </div>
        <Button asChild variant="gradient" className="gap-2 rounded-xl h-10 px-5 shadow-glow font-semibold">
          <Link href="/posts/create">
            <Zap className="size-4" />
            <span>Generate New Post</span>
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-surface/80 border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.12] transition-colors">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("size-10 rounded-xl bg-gradient-to-br flex items-center justify-center", stat.color)}>
                  <stat.icon className={cn("size-5", stat.iconColor)} />
                </div>
                <div className={cn("flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full",
                  stat.up ? "text-success bg-success/10" : "text-error bg-error/10"
                )}>
                  {stat.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                  {stat.trend}
                </div>
              </div>
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <p className="text-xs text-on-surface-variant mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Analytics Summary */}
        <Card className="lg:col-span-2 bg-surface/80 border-white/[0.06] rounded-xl h-[420px] flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <CardTitle className="text-lg font-bold">Engagement Overview</CardTitle>
            <div className="flex gap-1">
              {["7D", "30D", "90D"].map((period) => (
                <button key={period} className={cn(
                  "px-3 py-1 text-xs font-medium rounded-md transition-colors",
                  period === "30D" ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-white/[0.04]"
                )}>
                  {period}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center border-t border-white/[0.04] mt-4">
            {/* Placeholder Chart */}
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full max-w-lg h-48 flex items-end justify-between gap-2 px-4">
                {[35, 55, 40, 80, 65, 90, 70, 85, 60, 75, 95, 50].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-primary-gradient rounded-t-sm transition-all duration-500 hover:opacity-80"
                      style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between w-full max-w-lg px-4 mt-2">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <span key={m} className="text-[9px] text-on-surface-variant/50 flex-1 text-center">{m}</span>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant/40 mt-4">Connect social accounts for real-time data</p>
            </div>
          </CardContent>
        </Card>

        {/* Top Posts */}
        <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <CardTitle className="text-lg font-bold">Top Posts</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary text-xs h-7 px-2" asChild>
              <Link href="/posts">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {topPosts.map((post) => (
              <div key={post.id} className="flex gap-3 group cursor-pointer p-2 rounded-lg hover:bg-white/[0.03] transition-colors">
                <div className="relative size-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={post.image} alt={post.model} className="object-cover w-full h-full transition-transform group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold truncate">{post.model}</span>
                    <span className="text-[10px] font-medium text-success bg-success/10 px-1.5 py-0.5 rounded">{post.engagement}</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{post.platform}</p>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-on-surface-variant/60">
                    <span className="flex items-center gap-1"><Heart className="size-3 text-error" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageSquare className="size-3" /> {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity + CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 bg-surface/80 border-white/[0.06] rounded-xl">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-0">
              {recentActivity.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                  <div className="size-9 rounded-lg bg-primary/8 flex items-center justify-center">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-on-surface-variant">{item.model} • {item.platform}</p>
                  </div>
                  <span className="text-xs text-on-surface-variant/50 whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Banner */}
        <Card className="bg-gradient-to-br from-primary/12 to-secondary/8 border-primary/15 overflow-hidden relative rounded-xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[60px] rounded-full -mr-12 -mt-12" />
          <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Scale your AI influence</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Upgrade to Pro for unlimited models, multi-platform scheduling, and advanced analytics.
              </p>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-glow group mt-6 h-10" asChild>
              <Link href="/pricing">
                Upgrade Now
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
