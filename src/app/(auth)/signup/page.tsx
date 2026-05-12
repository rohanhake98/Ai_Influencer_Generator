"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordStrength } from "@/components/ui/password-strength"
import { Globe, User, ArrowRight, Sparkles } from "lucide-react"

export default function SignUpPage() {
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative">
      {/* Background Decoration */}
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
            <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
            <CardDescription className="text-on-surface-variant">Join thousands of creators building the future</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 px-7">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-white/[0.08] bg-white/[0.03] gap-2 h-11 rounded-lg hover:bg-white/[0.06]">
                <Globe className="size-4" />
                Google
              </Button>
              <Button variant="outline" className="border-white/[0.08] bg-white/[0.03] gap-2 h-11 rounded-lg hover:bg-white/[0.06]">
                <User className="size-4" />
                GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface/60 backdrop-blur-sm px-3 text-on-surface-variant/60 font-medium">Or sign up with email</span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input id="name" placeholder="Sarah Jenkins" className="bg-white/[0.04] border-white/[0.08] h-11 rounded-lg focus-visible:ring-primary/40" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input id="email" type="email" placeholder="sarah@example.com" className="bg-white/[0.04] border-white/[0.08] h-11 rounded-lg focus-visible:ring-primary/40" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="bg-white/[0.04] border-white/[0.08] h-11 rounded-lg focus-visible:ring-primary/40" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordStrength password={password} />
            </div>

            <Button variant="gradient" className="w-full h-11 rounded-xl font-semibold shadow-glow group" asChild>
              <Link href="/home">
                Create Account
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            <p className="text-[11px] text-on-surface-variant/60 text-center px-4 leading-relaxed">
              By clicking create account, you agree to our <Link href="#" className="underline hover:text-on-surface-variant">Terms of Service</Link> and <Link href="#" className="underline hover:text-on-surface-variant">Privacy Policy</Link>.
            </p>
          </CardContent>
          <CardFooter className="justify-center border-t border-white/[0.06] mt-2 py-5">
            <p className="text-sm text-on-surface-variant">
              Already have an account?{" "}
              <Link href="/signin" className="text-primary font-semibold hover:underline">Sign in</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
