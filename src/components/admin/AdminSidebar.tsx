import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Target, 
  FileText, 
  Image, 
  UserCog, 
  Megaphone, 
  Settings,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminMenuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { title: "Clubs", icon: Building2, path: "/admin/clubs" },
  { title: "XP Shop", icon: ShoppingBag, path: "/admin/xp-shop" },
  { title: "Weekly Quests", icon: Target, path: "/admin/quests" },
  { title: "Projects", icon: FileText, path: "/admin/projects" },
  { title: "Gallery", icon: Image, path: "/admin/gallery" },
  { title: "Members", icon: UserCog, path: "/admin/members" },
  { title: "Announcements", icon: Megaphone, path: "/admin/announcements" },
  { title: "Settings", icon: Settings, path: "/admin/settings" },
];

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border shadow-lg z-50 flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Admin Panel</h2>
            <p className="text-xs text-muted-foreground">Compute Club</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {adminMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                "hover:bg-accent hover:translate-x-1",
                isActive
                  ? "bg-gradient-to-r from-primary/10 to-orange-600/10 text-primary border-l-4 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5", isActive && "animate-pulse")} />
                <span className="font-medium">{item.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@computeclub.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
