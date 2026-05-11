import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring AI influencer creation.",
    features: ["300 Credits", "1 AI Model", "1 Social Account", "Basic Analytics"],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Standard",
    price: "$29",
    description: "Ideal for growing creators and small brands.",
    features: ["2,000 Credits", "10 AI Models", "5 Social Accounts", "Full Analytics", "Priority Support"],
    cta: "Start Free Trial",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For agencies and high-volume content teams.",
    features: ["10,000 Credits", "Unlimited Models", "Unlimited Accounts", "Advanced Analytics", "White-label options", "API Access"],
    cta: "Contact Sales",
    variant: "outline" as const,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-primary-gradient flex items-center justify-center shadow-glow">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="text-xl logo-text text-gradient">InfluenceAI</span>
          </Link>
          <Button variant="outline" size="sm" className="border-white/[0.06] bg-white/[0.03] rounded-lg" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </header>

      <main className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Simple, transparent pricing</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Choose the plan that fits your growth. All plans include access to our core AI Studio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col h-full border-white/[0.06] bg-surface/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1",
                plan.popular && "border-primary/40 shadow-glow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-gradient px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white flex items-center gap-1 shadow-glow">
                  <Sparkles className="size-3" /> Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-on-surface-variant text-sm">/mo</span>
                </div>
                <CardDescription className="mt-3 text-sm">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3 px-6">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <div className="size-5 rounded-md bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Check className="size-3" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-6 px-6 pb-6">
                <Button variant={plan.variant} className="w-full h-11 rounded-xl font-semibold text-sm" asChild>
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center p-10 rounded-2xl bg-surface/60 border border-white/[0.06] backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-3 tracking-tight">Need a custom solution?</h2>
          <p className="text-on-surface-variant text-sm mb-6">We offer enterprise-grade features and custom credit packages for large agencies.</p>
          <Button variant="outline" className="border-white/[0.06] bg-white/[0.03] rounded-lg">Talk to our Team</Button>
        </div>
      </main>
    </div>
  )
}
