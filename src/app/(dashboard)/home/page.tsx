import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Zap } from "lucide-react"

const stats = [
  { label: "Total Posts", value: "124", icon: Zap, trend: "+12%", color: "text-primary" },
  { label: "Total Reach", value: "45.2K", icon: Users, trend: "+8%", color: "text-secondary" },
  { label: "Engagement Rate", value: "4.8%", icon: TrendingUp, trend: "+2.4%", color: "text-accent" },
  { label: "Credits Used", value: "850", icon: BarChart3, trend: "-5%", color: "text-tertiary" },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-sans font-bold mb-2">Welcome back, Sarah</h1>
        <p className="text-on-surface-variant">Here&apos;s what&apos;s happening with your AI influencers today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-on-surface-variant">{stat.label}</CardTitle>
              <stat.icon className={`size-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={cn("text-xs mt-1", stat.trend.startsWith('+') ? "text-secondary" : "text-error")}>
                {stat.trend} <span className="text-on-surface-variant">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="h-80 flex items-center justify-center border-dashed">
          <p className="text-on-surface-variant font-medium">Engagement Overview Chart</p>
        </Card>
        <Card className="h-80 flex items-center justify-center border-dashed">
          <p className="text-on-surface-variant font-medium">Platform Breakdown Chart</p>
        </Card>
      </div>
    </div>
  )
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}
