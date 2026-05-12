"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, ArrowLeft, Mail, CheckCircle2, AlertCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/3 left-1/4 size-[600px] bg-primary/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 size-[500px] bg-secondary/5 rounded-full blur-[130px]" />
        </div>

        <Card className="border-white/[0.08] bg-surface/60 backdrop-blur-2xl rounded-2xl shadow-2xl max-w-md w-full">
          <CardHeader className="text-center space-y-3 pb-2 pt-8">
            <div className="mx-auto size-14 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="size-7 text-success" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Check your email</CardTitle>
            <CardDescription className="text-on-surface-variant">
              We&apos;ve sent password reset instructions to<br />
              <span className="text-on-surface font-semibold">{email}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-7">
            <div className="p-4 rounded-lg bg-surface-container-low/50 border border-white/[0.06] text-sm text-on-surface-variant">
              <p className="mb-2 font-medium">Didn&apos;t receive the email?</p>
              <ul className="text-xs space-y-1 list-disc list-inside text-on-surface-variant/70">
                <li>Check your spam or junk folder</li>
                <li>Make sure you entered the correct email</li>
                <li>Wait a few minutes and try again</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="justify-center border-t border-white/[0.06] mt-2 py-5">
            <Button variant="ghost" asChild>
              <Link href="/signin">
                <ArrowLeft className="size-4 mr-2" />
                Back to Sign In
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 size-[600px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 size-[500px] bg-secondary/5 rounded-full blur-[130px]" />
      </div>

      <div className="w-full max-w-md">
        <Card className="border-white/[0.08] bg-surface/60 backdrop-blur-2xl rounded-2xl shadow-2xl">
          <CardHeader className="text-center space-y-3 pb-2 pt-8">
            <Link href="/" className="inline-flex items-center justify-center gap-2 mb-2">
              <div className="size-8 rounded-lg bg-primary-gradient flex items-center justify-center shadow-glow">
                <Sparkles className="size-4 text-white" />
              </div>
              <span className="text-2xl logo-text text-gradient">InfluenceAI</span>
            </Link>
            <CardTitle className="text-2xl font-bold tracking-tight">Forgot password?</CardTitle>
            <CardDescription className="text-on-surface-variant">
              No worries, we&apos;ll send you reset instructions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 px-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="sarah@example.com" 
                    className="bg-white/[0.04] border-white/[0.08] h-11 rounded-lg focus-visible:ring-primary/40 pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-error/10 border border-error/20 text-error text-sm">
                  <AlertCircle className="size-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <Button 
                type="submit" 
                variant="gradient" 
                className="w-full h-11 rounded-xl font-semibold shadow-glow"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center border-t border-white/[0.06] mt-2 py-5">
            <p className="text-sm text-on-surface-variant">
              Remember your password?{" "}
              <Link href="/signin" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}