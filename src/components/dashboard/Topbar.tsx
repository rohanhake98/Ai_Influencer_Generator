"use client"

import { Bell, Search, Sun, Moon, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

interface TopbarProps {
  onMenuToggle?: () => void
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  const { setTheme, theme } = useTheme()

  return (
    <header className="h-16 border-b border-white/[0.06] bg-background/60 backdrop-blur-xl sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between gap-6">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuToggle}
        className="md:hidden p-2 -ml-2 rounded-lg hover:bg-white/[0.06] transition-colors"
        aria-label="Open menu"
      >
        <Menu className="size-6 text-on-surface" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/60 group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search models, posts, analytics..."
            className="pl-10 bg-white/[0.04] border-white/[0.06] focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:border-primary/30 h-9 w-full rounded-lg text-sm placeholder:text-on-surface-variant/40"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex h-5 px-1.5 items-center rounded border border-white/10 text-[10px] text-on-surface-variant/40 font-medium">
            ⌘K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-on-surface-variant hover:text-on-surface hover:bg-white/[0.06] size-9 rounded-lg"
        >
          <Sun className="size-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-on-surface-variant hover:text-on-surface hover:bg-white/[0.06] size-9 rounded-lg">
          <Bell className="size-[18px]" />
          <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-background animate-pulse" />
        </Button>

        {/* Separator */}
        <div className="w-px h-6 bg-white/[0.08] mx-1" />

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 rounded-lg px-2 gap-2 hover:bg-white/[0.06]">
              <div className="size-7 rounded-lg bg-primary-gradient flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                JS
              </div>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-xs font-semibold leading-none">Jane Smith</span>
                <span className="text-[10px] text-on-surface-variant leading-none mt-0.5">Standard Plan</span>
              </div>
              <ChevronDown className="size-3 text-on-surface-variant hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-surface border-white/[0.08] rounded-xl shadow-lg" align="end" forceMount>
            <DropdownMenuLabel className="font-normal px-3 py-2.5">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold leading-none">Jane Smith</p>
                <p className="text-xs leading-none text-on-surface-variant">jane@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/[0.06]" />
            <DropdownMenuItem className="px-3 py-2 text-sm rounded-lg mx-1 cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="px-3 py-2 text-sm rounded-lg mx-1 cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuItem className="px-3 py-2 text-sm rounded-lg mx-1 cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/[0.06]" />
            <DropdownMenuItem className="px-3 py-2 text-sm rounded-lg mx-1 cursor-pointer text-destructive focus:text-destructive">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
