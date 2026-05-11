import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Zap, Users, BarChart3, Calendar, Shield, Star, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/30">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-primary-gradient flex items-center justify-center shadow-glow">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="text-xl logo-text text-gradient">InfluenceAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Pricing</Link>
            <Link href="/signin" className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Sign In</Link>
            <Button variant="gradient" size="sm" className="rounded-lg shadow-glow px-5 h-9" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 size-[600px] bg-primary/15 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-10 right-1/4 size-[500px] bg-secondary/10 rounded-full blur-[130px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] bg-accent/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-[0.1em] mb-8">
              <Sparkles className="size-3.5" />
              The Future of Influencer Marketing
              <ChevronRight className="size-3" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
              Generate Your Own <br />
              <span className="text-gradient">AI Influencers</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant mb-12 leading-relaxed">
              Create consistent, high-performing AI personas for any niche. Generate posts, schedule content, and track analytics — all in one magical platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="lg" className="h-12 px-8 text-base rounded-xl shadow-glow-lg font-semibold" asChild>
                <Link href="/signup">
                  Start Creating Now
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-xl border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06]">
                View Showcase
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-on-surface-variant/50 text-sm">
              <div className="flex items-center gap-2"><Shield className="size-4" /> Enterprise-grade Security</div>
              <div className="flex items-center gap-2"><Star className="size-4" /> 4.9/5 from 500+ creators</div>
              <div className="flex items-center gap-2"><Users className="size-4" /> 10K+ AI Influencers Created</div>
            </div>

            {/* Floating Cards */}
            <div className="mt-20 relative h-[420px] hidden md:block">
               <div className="absolute top-4 left-8 w-56 h-72 rounded-2xl bg-surface border border-white/[0.08] shadow-2xl rotate-[-8deg] overflow-hidden group hover:rotate-[-4deg] transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" className="w-full h-full object-cover" alt="AI Influencer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-left">
                     <p className="font-bold text-white text-lg">Aria Thorne</p>
                     <p className="text-xs text-white/60">Fitness • Lifestyle</p>
                  </div>
               </div>

               <div className="absolute top-8 right-8 w-56 h-72 rounded-2xl bg-surface border border-white/[0.08] shadow-2xl rotate-[8deg] overflow-hidden group hover:rotate-[4deg] transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="AI Influencer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-left">
                     <p className="font-bold text-white text-lg">Leo Sterling</p>
                     <p className="text-xs text-white/60">Luxury • Travel</p>
                  </div>
               </div>

               <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-80 rounded-3xl bg-surface border border-white/[0.12] shadow-2xl z-10 overflow-hidden group hover:scale-105 transition-all duration-500">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="AI Influencer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-left">
                     <p className="text-xl font-bold text-white">Zoe Chen</p>
                     <p className="text-sm text-white/60">Tech • Gaming</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-surface-container-lowest/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">Platform Features</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Everything you need to scale</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">InfluenceAI simplifies the entire influencer content lifecycle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "AI Persona Studio", desc: "Build consistent visual identities with our multi-step wizard.", icon: Users, gradient: "from-primary/15 to-primary/5", iconColor: "text-primary" },
                { title: "Magic Content Gen", desc: "Generate captions and high-res images in seconds.", icon: Zap, gradient: "from-secondary/15 to-secondary/5", iconColor: "text-secondary" },
                { title: "Smart Scheduling", desc: "Automate your distribution across all social platforms.", icon: Calendar, gradient: "from-accent/15 to-accent/5", iconColor: "text-accent" },
                { title: "Deep Analytics", desc: "Track reach, engagement, and ROI in real-time.", icon: BarChart3, gradient: "from-tertiary/15 to-tertiary/5", iconColor: "text-tertiary" },
              ].map((f) => (
                <div key={f.title} className="group p-7 rounded-2xl bg-surface/80 border border-white/[0.06] hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className={cn("size-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5", f.gradient)}>
                    <f.icon className={cn("size-6", f.iconColor)} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 border-y border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "AI Models Created", value: "10K+" },
                { label: "Posts Generated", value: "250K+" },
                { label: "Active Users", value: "5,000+" },
                { label: "Platform Uptime", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <p className="text-sm text-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">Testimonials</p>
              <h2 className="text-4xl font-bold tracking-tight">Loved by creators worldwide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Sarah L.", role: "Lifestyle Creator", text: "InfluenceAI completely transformed my content strategy. I generate an entire week of posts in minutes!", avatar: "SL" },
                { name: "Marcus R.", role: "Marketing Lead", text: "The AI models are incredibly realistic. Our engagement went up 320% after switching to InfluenceAI.", avatar: "MR" },
                { name: "Priya K.", role: "Agency Director", text: "Managing multiple client personas has never been easier. The scheduling is flawless.", avatar: "PK" },
              ].map((t) => (
                <div key={t.name} className="p-6 rounded-2xl bg-surface/80 border border-white/[0.06]">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 text-warning fill-warning" />
                    ))}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary-gradient flex items-center justify-center text-xs font-bold text-white">{t.avatar}</div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/15 text-center overflow-hidden">
              <div className="absolute top-0 right-0 size-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 size-48 bg-secondary/10 rounded-full blur-[60px] -ml-16 -mb-16" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to create your AI influencer?</h2>
                <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">Join thousands of creators who are building the future of content with AI. Start free today.</p>
                <Button variant="gradient" size="lg" className="h-12 px-10 text-base rounded-xl shadow-glow-lg font-semibold" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-white/[0.06]">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="size-6 rounded-md bg-primary-gradient flex items-center justify-center">
                <Sparkles className="size-3 text-white" />
              </div>
              <span className="text-lg logo-text text-gradient">InfluenceAI</span>
            </div>
            <p className="text-on-surface-variant text-sm">© 2025 InfluenceAI. All rights reserved.</p>
            <div className="flex gap-8">
               <Link href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Privacy</Link>
               <Link href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Terms</Link>
               <Link href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Twitter</Link>
            </div>
         </div>
      </footer>
    </div>
  )
}
