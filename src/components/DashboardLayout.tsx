import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // List of routes where sidebar should be hidden
  const hideSidebarRoutes = [
    "/login",
    "/signup",
    "/",
    "/gallery",
    "/contact",
    "/clubs",
    "/settings"
  ];

  // Determine if sidebar should be shown
  const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

  // Determine if sidebar should be open (always open on desktop)
  const isMobile = window.innerWidth < 768;
  const sidebarVisible = shouldShowSidebar && (!isMobile || sidebarOpen);

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1">
        {sidebarVisible && (
          <Sidebar isOpen={isMobile ? sidebarOpen : true} onClose={() => setSidebarOpen(false)} />
        )}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
