import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Home, RefreshCw } from "lucide-react"

export default function InternalError() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="size-20 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-6">
          <Server className="size-10 text-warning" />
        </div>
        
        <h1 className="text-3xl font-bold mb-3">Server Error</h1>
        <p className="text-on-surface-variant mb-6">
          We&apos;re experiencing some technical difficulties. Please try again shortly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={() => window.location.reload()}>
            <RefreshCw className="size-4 mr-2" />
            Refresh Page
          </Button>
          <Button variant="gradient" asChild>
            <Link href="/home">
              <Home className="size-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>

        <p className="text-xs text-on-surface-variant/50 mt-8">
          If this persists, please contact support.
        </p>
      </div>
    </div>
  )
}