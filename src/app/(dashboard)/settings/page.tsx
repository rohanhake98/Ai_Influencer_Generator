import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, CreditCard, Shield, Save, Mail, Lock, Smartphone, ToggleLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1 tracking-tight">Settings</h1>
        <p className="text-on-surface-variant text-sm">Manage your account preferences and billing.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-white/[0.03] p-1 border border-white/[0.06] w-full md:w-auto overflow-x-auto justify-start h-auto rounded-xl">
          <TabsTrigger value="profile" className="gap-2 px-5 py-2 data-[state=active]:bg-surface data-[state=active]:shadow-sm rounded-lg text-sm"><User className="size-4" /> Profile</TabsTrigger>
          <TabsTrigger value="billing" className="gap-2 px-5 py-2 data-[state=active]:bg-surface data-[state=active]:shadow-sm rounded-lg text-sm"><CreditCard className="size-4" /> Billing</TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 px-5 py-2 data-[state=active]:bg-surface data-[state=active]:shadow-sm rounded-lg text-sm"><Bell className="size-4" /> Notifications</TabsTrigger>
          <TabsTrigger value="security" className="gap-2 px-5 py-2 data-[state=active]:bg-surface data-[state=active]:shadow-sm rounded-lg text-sm"><Shield className="size-4" /> Security</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="mt-8 space-y-6">
          <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Profile Information</CardTitle>
              <CardDescription>Update your personal details and avatar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="size-20 rounded-2xl bg-primary-gradient flex items-center justify-center text-2xl font-bold text-white shadow-glow">SJ</div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="border-white/[0.06] bg-white/[0.03] rounded-lg">Change Avatar</Button>
                  <p className="text-[11px] text-on-surface-variant/50">JPG, PNG or GIF. Max 5MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Display Name</Label>
                  <Input id="name" defaultValue="Sarah Jenkins" className="bg-white/[0.04] border-white/[0.06] h-10 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input id="email" defaultValue="sarah@example.com" disabled className="bg-white/[0.04] border-white/[0.06] h-10 rounded-lg opacity-50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                <Input id="bio" placeholder="Founder & Lifestyle Creator" className="bg-white/[0.04] border-white/[0.06] h-10 rounded-lg" />
              </div>
              <Button variant="gradient" className="gap-2 rounded-xl h-10 shadow-glow font-semibold"><Save className="size-4" />Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="mt-8 space-y-6">
          <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Subscription Plan</CardTitle>
              <CardDescription>You are currently on the Standard Plan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-5 rounded-xl bg-primary/6 border border-primary/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-primary">Standard Plan</h3>
                    <Badge className="bg-primary/15 text-primary border-primary/20 text-[10px]">Active</Badge>
                  </div>
                  <p className="text-sm text-on-surface-variant">2,000 credits/mo • 5 social accounts</p>
                </div>
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 rounded-lg">Upgrade to Pro</Button>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-sm">Billing History</h4>
                <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                  <div className="bg-white/[0.03] px-4 py-2.5 border-b border-white/[0.06] grid grid-cols-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                    <span>Date</span><span>Amount</span><span>Status</span>
                  </div>
                  {[{ date: "May 1, 2024", amount: "$29.00" }, { date: "Apr 1, 2024", amount: "$29.00" }].map((inv) => (
                    <div key={inv.date} className="px-4 py-3 grid grid-cols-3 text-sm border-b border-white/[0.04] last:border-0">
                      <span className="text-on-surface-variant">{inv.date}</span>
                      <span className="font-medium">{inv.amount}</span>
                      <span className="text-success font-semibold text-xs">Paid</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="mt-8">
          <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Post Published", desc: "Get notified when your post goes live", enabled: true },
                { label: "Post Failed", desc: "Alert when a scheduled post fails", enabled: true },
                { label: "Low Credits", desc: "Warning when credits drop below 20%", enabled: true },
                { label: "Weekly Summary", desc: "Weekly performance digest email", enabled: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-on-surface-variant" />
                    <div>
                      <p className="text-sm font-medium">{n.label}</p>
                      <p className="text-xs text-on-surface-variant/60">{n.desc}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${n.enabled ? "bg-primary justify-end" : "bg-white/10 justify-start"}`}>
                    <div className="size-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="mt-8 space-y-6">
          <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Current Password</Label>
                <Input type="password" placeholder="••••••••" className="bg-white/[0.04] border-white/[0.06] h-10 rounded-lg max-w-md" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">New Password</Label>
                <Input type="password" placeholder="••••••••" className="bg-white/[0.04] border-white/[0.06] h-10 rounded-lg max-w-md" />
              </div>
              <Button variant="gradient" className="gap-2 rounded-xl h-10 shadow-glow font-semibold"><Lock className="size-4" />Update Password</Button>
            </CardContent>
          </Card>
          <Card className="bg-surface/80 border-white/[0.06] rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <Smartphone className="size-5 text-on-surface-variant" />
                  <div>
                    <p className="text-sm font-medium">Authenticator App</p>
                    <p className="text-xs text-on-surface-variant/60">Use TOTP for 2FA</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-white/[0.06] bg-white/[0.03] rounded-lg text-xs">Enable</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
