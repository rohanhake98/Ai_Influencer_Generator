"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="size-20 rounded-full bg-error/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="size-10 text-error" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Something went wrong</h1>
        <p className="text-on-surface-variant mb-6">
          We encountered an unexpected error. Please try again or return to the home page.
        </p>
        {error.digest && (
          <p className="text-xs text-on-surface-variant/50 mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="outline">
            Try Again
          </Button>
          <Button variant="gradient" asChild>
            <Link href="/home">
              <Home className="size-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}