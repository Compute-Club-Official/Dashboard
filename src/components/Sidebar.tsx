import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  LayoutDashboard,
  Users,
  MessageSquare,
  Megaphone,
  Target,
  Layers,
  CheckSquare,
  Upload,
  BookOpen,
  Star,
  Zap,
  ShoppingBag,
  TrendingUp,
  Megaphone as AdvertIcon,
  Settings,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Members", path: "/members" },
  { icon: MessageSquare, label: "Chat", path: "/chat" },
  { icon: Megaphone, label: "Announcements", path: "/announcements" },
  { icon: Target, label: "Events", path: "/events" },
  { icon: CheckSquare, label: "My Tasks", path: "/tasks" },
  { icon: Upload, label: "Submit Project", path: "/submit" },
  { icon: BookOpen, label: "Resources", path: "/resources" },
  { icon: Zap, label: "Weekly Quests", path: "/quests" },
  { icon: ShoppingBag, label: "XP Shop", path: "/shop" },
  { icon: Star, label: "XP History", path: "/xp-history" },
  { icon: TrendingUp, label: "Club Promotion", path: "/promotion" },
  { icon: AdvertIcon, label: "Advertising", path: "/advertising" },
  { icon: Settings, label: "Club Settings", path: "/club-settings" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const userRole = "member"; // This would come from auth context

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border z-40",
          "md:sticky md:translate-x-0"
        )}
      >
        <ScrollArea className="h-full py-4">
          <div className="px-3 space-y-1">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden absolute top-2 right-2"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>

            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-glow"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground hover:shadow-card"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </ScrollArea>
      </motion.aside>
    </>
  );
}
