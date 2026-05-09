"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, Link2, BarChart3, Settings, Plus, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Models", icon: Users, href: "/models" },
  { label: "Calendar", icon: Calendar, href: "/calendar" },
  { label: "Accounts", icon: Link2, href: "/accounts" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-sidebar-width border-r border-outline/10 bg-surface px-4 py-8 flex flex-col">
      {/* Logo */}
      <div className="mb-10 px-2">
        <Link href="/home" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">InfluenceAI</span>
        </Link>
      </div>

      {/* Primary CTA */}
      <div className="mb-8 px-2">
        <Button variant="gradient" className="w-full justify-start gap-2 h-11" asChild>
          <Link href="/posts/create">
            <Plus className="size-5" />
            <span>Create Post</span>
          </Link>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-on-surface-variant hover:bg-surface-bright hover:text-on-surface"
              )}
            >
              <item.icon className="size-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Credit Indicator */}
      <div className="mt-auto px-2">
        <div className="p-4 rounded-xl bg-surface-container-low border border-outline/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-on-surface-variant">Credits Balance</span>
            <CreditCard className="size-4 text-primary" />
          </div>
          <div className="text-xl font-bold text-on-surface mb-1">1,200 <span className="text-xs font-normal text-on-surface-variant">left</span></div>
          <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </aside>
  )
}
