import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="relative inline-block mb-8">
          <h1 className="text-[150px] leading-none font-bold text-gradient">404</h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-primary/20 rounded-full blur-xl" />
        </div>
        
        <h2 className="text-2xl font-bold mb-3">Page not found</h2>
        <p className="text-on-surface-variant mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <Link href="/home">
              <ArrowLeft className="size-4 mr-2" />
              Go Back
            </Link>
          </Button>
          <Button variant="gradient" asChild>
            <Link href="/home">
              <Home className="size-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-surface/50 rounded-xl border border-white/[0.06]">
          <p className="text-sm text-on-surface-variant mb-4">Looking for something specific?</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/models">Models</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/posts">Posts</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/pricing">Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}