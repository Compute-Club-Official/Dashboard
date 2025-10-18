import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Mock auth check - replace with real auth later
    const adminRole = localStorage.getItem("admin_role");
    if (!adminRole) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_role");
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="ml-64">
        <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              Compute Club Admin
            </h1>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2 hover:bg-destructive hover:text-destructive-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
