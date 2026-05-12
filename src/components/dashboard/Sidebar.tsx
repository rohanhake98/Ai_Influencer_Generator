"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, Users, Calendar, Link2, BarChart3, Settings, Plus, CreditCard, Sparkles, FileText, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Models", icon: Users, href: "/models" },
  { label: "Posts", icon: FileText, href: "/posts" },
  { label: "Calendar", icon: Calendar, href: "/calendar" },
  { label: "Accounts", icon: Link2, href: "/accounts" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-[260px] border-r border-white/[0.06] bg-sidebar flex flex-col transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="px-6 h-16 flex items-center border-b border-white/[0.06]">
          <Link href="/home" className="flex items-center gap-2.5" onClick={() => isOpen && onToggle()}>
            <div className="size-8 rounded-lg bg-primary-gradient flex items-center justify-center shadow-glow">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="text-xl logo-text text-gradient">InfluenceAI</span>
          </Link>
          
          {/* Mobile Close Button */}
          <button
            onClick={onToggle}
            className="ml-auto md:hidden p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Close menu"
          >
            <X className="size-5 text-on-surface-variant" />
          </button>
        </div>

        {/* Primary CTA */}
        <div className="px-4 pt-6 pb-2">
          <Button variant="gradient" className="w-full justify-center gap-2 h-10 rounded-xl text-sm font-semibold shadow-glow" asChild onClick={() => isOpen && onToggle()}>
            <Link href="/posts/create">
              <Plus className="size-4" />
              <span>Create Post</span>
            </Link>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 pt-4 space-y-0.5 overflow-y-auto hide-scrollbar" aria-label="Primary">
          <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface-variant/50">Main Menu</p>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => isOpen && onToggle()}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isActive
                    ? "bg-primary/12 text-primary"
                    : "text-on-surface-variant hover:bg-white/[0.04] hover:text-on-surface"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-full" />
                )}
                <item.icon className={cn("size-[18px]", isActive && "drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]")} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Credit Indicator */}
        <div className="px-4 pb-6 mt-auto">
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/8 to-secondary/5 border border-primary/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-on-surface-variant">Credits Balance</span>
              <CreditCard className="size-3.5 text-primary" aria-hidden="true" />
            </div>
            <div className="text-lg font-bold text-on-surface mb-0.5">
              1,200 <span className="text-[11px] font-normal text-on-surface-variant">/ 2,000</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden mt-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full bg-primary-gradient rounded-full transition-all duration-500" style={{ width: "60%" }} />
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-3 text-[11px] text-primary hover:bg-primary/10 h-7" asChild>
              <Link href="/settings">Upgrade Plan →</Link>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
      aria-label="Open menu"
    >
      <Menu className="size-6 text-on-surface" />
    </button>
  )
}
