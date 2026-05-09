import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, CreditCard, Shield, Mail, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-on-surface-variant">Manage your account preferences and billing.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-surface-container-low p-1 border border-outline/10 w-full md:w-auto overflow-x-auto justify-start h-auto">
          <TabsTrigger value="profile" className="gap-2 px-6 py-2.5 data-[state=active]:bg-surface data-[state=active]:shadow-sm">
            <User className="size-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="billing" className="gap-2 px-6 py-2.5 data-[state=active]:bg-surface data-[state=active]:shadow-sm">
            <CreditCard className="size-4" /> Billing
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 px-6 py-2.5 data-[state=active]:bg-surface data-[state=active]:shadow-sm">
            <Bell className="size-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 px-6 py-2.5 data-[state=active]:bg-surface data-[state=active]:shadow-sm">
            <Shield className="size-4" /> Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details and avatar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="size-20 rounded-full bg-surface-container flex items-center justify-center border border-outline/10">
                  <User className="size-10 text-on-surface-variant" />
                </div>
                <Button variant="outline" className="border-outline/10">Change Avatar</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Sarah Jenkins" className="bg-surface-container-low border-outline/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="sarah@example.com" disabled className="bg-surface-container-low border-outline/10 opacity-60" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Founder & Lifestyle Creator" className="bg-surface-container-low border-outline/10" />
              </div>

              <Button variant="gradient" className="gap-2">
                <Save className="size-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>You are currently on the Standard Plan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">Standard Plan</h3>
                    <p className="text-sm text-on-surface-variant">2,000 credits/mo • 5 social accounts</p>
                  </div>
                  <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                    Upgrade to Pro
                  </Button>
               </div>
               
               <div className="space-y-4">
                 <h4 className="font-bold">Billing History</h4>
                 <div className="border border-outline/10 rounded-lg overflow-hidden">
                    <div className="bg-surface-container-low px-4 py-2 border-b border-outline/10 grid grid-cols-3 text-xs font-bold uppercase tracking-wider">
                       <span>Date</span>
                       <span>Amount</span>
                       <span>Status</span>
                    </div>
                    <div className="px-4 py-3 grid grid-cols-3 text-sm border-b border-outline/10">
                       <span className="text-on-surface-variant">May 1, 2024</span>
                       <span className="font-medium">$29.00</span>
                       <span className="text-secondary font-bold">Paid</span>
                    </div>
                    <div className="px-4 py-3 grid grid-cols-3 text-sm">
                       <span className="text-on-surface-variant">Apr 1, 2024</span>
                       <span className="font-medium">$29.00</span>
                       <span className="text-secondary font-bold">Paid</span>
                    </div>
                 </div>
               </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Other tabs placeholders */}
        <TabsContent value="notifications" className="mt-8">
           <Card className="p-12 flex items-center justify-center text-on-surface-variant border-dashed">
              Notification settings coming soon
           </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-8">
           <Card className="p-12 flex items-center justify-center text-on-surface-variant border-dashed">
              Security & 2FA settings coming soon
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
