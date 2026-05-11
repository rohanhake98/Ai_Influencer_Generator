"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from "recharts"
import { Download, Calendar, TrendingUp, Eye, Heart, Share2, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const reachData = [
  { name: "May 1", reach: 2400 }, { name: "May 2", reach: 1398 },
  { name: "May 3", reach: 9800 }, { name: "May 4", reach: 3908 },
  { name: "May 5", reach: 4800 }, { name: "May 6", reach: 3800 },
  { name: "May 7", reach: 4300 },
]

const platformData = [
  { name: "Instagram", value: 45, color: "#6366F1" },
  { name: "LinkedIn", value: 25, color: "#22D3EE" },
  { name: "Twitter/X", value: 20, color: "#D946EF" },
  { name: "YouTube", value: 10, color: "#FB923C" },
]

const metrics = [
  { label: "New Followers", value: "+1,284", sub: "Last 7 days", icon: TrendingUp, trend: "+12%", color: "from-primary/15 to-primary/5", ic: "text-primary" },
  { label: "Total Views", value: "45.2K", sub: "Last 7 days", icon: Eye, trend: "+8%", color: "from-secondary/15 to-secondary/5", ic: "text-secondary" },
  { label: "Avg. Likes", value: "856", sub: "Per post", icon: Heart, trend: "+15%", color: "from-accent/15 to-accent/5", ic: "text-accent" },
  { label: "Total Shares", value: "2,401", sub: "All time", icon: Share2, trend: "+5%", color: "from-tertiary/15 to-tertiary/5", ic: "text-tertiary" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Performance Analytics</h1>
          <p className="text-on-surface-variant text-sm">Track your AI influencer growth across all platforms.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm"><Calendar className="size-4" />Last 30 Days</Button>
          <Button variant="outline" className="gap-2 border-white/[0.06] bg-white/[0.03] rounded-lg h-10 text-sm"><Download className="size-4" />Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m) => (
          <Card key={m.label} className="bg-surface/80 border-white/[0.06] rounded-xl">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("size-10 rounded-xl bg-gradient-to-br flex items-center justify-center", m.color)}>
                  <m.icon className={cn("size-5", m.ic)} />
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-success bg-success/10 px-2 py-0.5 rounded-full">
                  <ArrowUpRight className="size-3" />{m.trend}
                </div>
              </div>
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="text-xs text-on-surface-variant mt-0.5">{m.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-surface/80 border-white/[0.06] rounded-xl">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-bold">Total Reach</CardTitle>
            <CardDescription>Views and impressions over time</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={reachData}>
                  <defs>
                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                  <Tooltip contentStyle={{ backgroundColor: "rgba(17,24,39,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }} />
                  <Area type="monotone" dataKey="reach" stroke="#6366F1" strokeWidth={2.5} fillOpacity={1} fill="url(#colorReach)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-bold">Platform Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" fontSize={11} width={80} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {platformData.map((e, i) => (<Cell key={i} fill={e.color} />))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2.5 mt-4">
              {platformData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><div className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} /><span className="text-on-surface-variant">{item.name}</span></div>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
