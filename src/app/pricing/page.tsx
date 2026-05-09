import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

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
      {/* Navigation */}
      <header className="border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">InfluenceAI</span>
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </header>

      <main className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Choose the plan that fits your growth. All plans include access to our core AI Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={cn(
                "relative flex flex-col h-full border-outline/10 bg-surface/50 backdrop-blur-sm transition-all hover:scale-[1.02]",
                plan.popular && "border-primary/50 shadow-glow"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-1">
                  <Sparkles className="size-3" />
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check className="size-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-8">
                <Button 
                  variant={plan.variant} 
                  className="w-full h-12 text-lg" 
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center p-12 rounded-3xl bg-surface-container-low border border-outline/10">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-on-surface-variant mb-8">
            We offer enterprise-grade features and custom credit packages for large agencies.
          </p>
          <Button variant="outline" className="border-outline/10">Talk to our Team</Button>
        </div>
      </main>
    </div>
  )
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}
