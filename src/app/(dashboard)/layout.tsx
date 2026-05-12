"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { Topbar } from "@/components/dashboard/Topbar"
import { LoadingBar } from "@/components/ui/loading-bar"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <LoadingBar />
      
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className={cn(
        "flex-1 md:ml-[260px] flex flex-col transition-all duration-300",
        sidebarOpen && "md:ml-[260px]"
      )}>
        <Topbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main id="main-content" className="flex-1 p-4 md:p-8" role="main">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
