"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell, PieChart, Pie } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const reachData = [
  { name: "May 1", reach: 2400 },
  { name: "May 2", reach: 1398 },
  { name: "May 3", reach: 9800 },
  { name: "May 4", reach: 3908 },
  { name: "May 5", reach: 4800 },
  { name: "May 6", reach: 3800 },
  { name: "May 7", reach: 4300 },
]

const platformData = [
  { name: "Instagram", value: 45, color: "#6366F1" },
  { name: "LinkedIn", value: 25, color: "#22D3EE" },
  { name: "Twitter/X", value: 20, color: "#F472B6" },
  { name: "YouTube", value: 10, color: "#FB923C" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Performance Analytics</h1>
          <p className="text-on-surface-variant">Track your AI influencer growth across all platforms.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 border-outline/10">
            <Calendar className="size-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" className="gap-2 border-outline/10">
            <Download className="size-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Total Reach</CardTitle>
            <CardDescription>Views and impressions over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={reachData}>
                  <defs>
                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#34343d" />
                  <XAxis dataKey="name" stroke="#908fa0" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#908fa0" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#111827", border: "1px solid #464554", borderRadius: "8px" }}
                    itemStyle={{ color: "#e4e1ed" }}
                  />
                  <Area type="monotone" dataKey="reach" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Platform Distribution</CardTitle>
            <CardDescription>Traffic share per platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#34343d" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#e4e1ed" fontSize={12} width={80} />
                  <Tooltip 
                    cursor={{ fill: "transparent" }}
                    contentStyle={{ backgroundColor: "#111827", border: "1px solid #464554", borderRadius: "8px" }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {platformData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-on-surface-variant">{item.name}</span>
                  </div>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "New Followers", value: "+1,284", sub: "Last 7 days" },
          { label: "Post Shares", value: "432", sub: "Last 7 days" },
          { label: "Avg. Likes", value: "856", sub: "Per post" },
          { label: "Total Comments", value: "2,401", sub: "All time" },
        ].map((m) => (
          <Card key={m.label}>
             <CardContent className="pt-6">
                <p className="text-sm font-medium text-on-surface-variant mb-1">{m.label}</p>
                <p className="text-2xl font-bold mb-1">{m.value}</p>
                <p className="text-xs text-secondary font-medium">{m.sub}</p>
             </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
