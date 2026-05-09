import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, User, ArrowRight } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 size-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 size-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <Card className="w-full max-w-md border-outline/10 bg-surface/50 backdrop-blur-xl">
        <CardHeader className="text-center space-y-2">
          <Link href="/" className="inline-block mb-4">
             <span className="text-3xl logo-text text-gradient">InfluenceAI</span>
          </Link>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>Join thousands of creators building the future</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-outline/10 gap-2 h-11">
              <Globe className="size-4" />
              Google
            </Button>
            <Button variant="outline" className="border-outline/10 gap-2 h-11">
              <User className="size-4" />
              GitHub
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-on-surface-variant">Or sign up with email</span>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Sarah Jenkins" className="bg-surface-container-low border-outline/10" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="sarah@example.com" className="bg-surface-container-low border-outline/10" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="bg-surface-container-low border-outline/10" />
          </div>

          <Button variant="gradient" className="w-full h-11 mt-4 group" asChild>
            <Link href="/home">
              Create Account
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <p className="text-[10px] text-on-surface-variant text-center px-6">
            By clicking create account, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
          </p>
        </CardContent>
        <CardFooter className="justify-center border-t border-outline/5 mt-4 pt-6">
          <p className="text-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary font-bold hover:underline">Sign in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
