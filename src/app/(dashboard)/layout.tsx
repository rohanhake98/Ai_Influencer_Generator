import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-on-background">
      <Sidebar />
      <main className="flex-1 ml-sidebar-width">
        <div className="p-margin-page max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
