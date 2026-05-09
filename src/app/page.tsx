import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Zap, Users, BarChart3 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/30">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl logo-text text-gradient">InfluenceAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Pricing</Link>
            <Link href="/signin" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Sign In</Link>
            <Button variant="gradient" size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/4 size-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 size-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
              <Sparkles className="size-4" />
              The Future of Influencer Marketing
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
              Generate Your Own <br />
              <span className="text-gradient logo-text">AI Influencers</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-on-surface-variant mb-12 leading-relaxed">
              Create consistent, high-performing AI personas for any niche. Generate posts, schedule content, and track analytics — all in one magical platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="lg" className="h-14 px-10 text-lg shadow-glow" asChild>
                <Link href="/signup">
                  Start Creating Now
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-outline/20 bg-surface/50 backdrop-blur-sm">
                View Showcase
              </Button>
            </div>

            {/* Floating Cards Placeholder */}
            <div className="mt-20 relative h-[400px] hidden md:block">
               <div className="absolute top-0 left-10 size-64 rounded-2xl bg-surface border border-white/10 shadow-2xl rotate-[-6deg] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-left">
                     <p className="font-bold text-white">Aria Thorne</p>
                     <p className="text-xs text-white/70">Fitness Influencer</p>
                  </div>
               </div>
               
               <div className="absolute top-10 right-10 size-64 rounded-2xl bg-surface border border-white/10 shadow-2xl rotate-[8deg] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-left">
                     <p className="font-bold text-white">Leo Sterling</p>
                     <p className="text-xs text-white/70">Luxury & Travel</p>
                  </div>
               </div>

               <div className="absolute top-32 left-1/2 -translate-x-1/2 size-72 rounded-3xl bg-surface border border-white/20 shadow-2xl z-10 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left">
                     <p className="text-xl font-bold text-white">Zoe Chen</p>
                     <p className="text-sm text-white/70">Tech & Gaming</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Everything you need to scale</h2>
              <p className="text-on-surface-variant">InfluenceAI simplifies the entire influencer content lifecycle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "AI Persona Studio", desc: "Build consistent visual identities with our multi-step wizard.", icon: Users, color: "bg-primary/10 text-primary" },
                { title: "Magic Content Gen", desc: "Generate captions and high-res images in seconds.", icon: Zap, color: "bg-secondary/10 text-secondary" },
                { title: "Smart Scheduling", desc: "Automate your distribution across all social platforms.", icon: ArrowRight, color: "bg-accent/10 text-accent" },
                { title: "Deep Analytics", desc: "Track reach, engagement, and ROI in real-time.", icon: BarChart3, color: "bg-tertiary/10 text-tertiary" },
              ].map((f) => (
                <div key={f.title} className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all">
                  <div className={cn("size-12 rounded-lg flex items-center justify-center mb-6", f.color)}>
                    <f.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xl logo-text text-gradient">InfluenceAI</span>
            </div>
            <p className="text-on-surface-variant text-sm">© 2024 InfluenceAI. All rights reserved.</p>
            <div className="flex gap-8">
               <Link href="#" className="text-sm text-on-surface-variant hover:text-white">Privacy</Link>
               <Link href="#" className="text-sm text-on-surface-variant hover:text-white">Terms</Link>
               <Link href="#" className="text-sm text-on-surface-variant hover:text-white">Twitter</Link>
            </div>
         </div>
      </footer>
    </div>
  )
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}
