import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "@/hooks/useUser";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Chat from "./pages/Chat";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import Tasks from "./pages/Tasks";
import Submit from "./pages/Submit";
import Resources from "./pages/Resources";
import WeeklyQuests from "./pages/WeeklyQuests";
import XPHistory from "./pages/XPHistory";
import ClubPromotion from "./pages/ClubPromotion";
import Advertising from "./pages/Advertising";
import Leaderboard from "./pages/Leaderboard";
import Gallery from "./pages/Gallery";
import Settings from "./pages/Settings";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";
import XPSystem from "./pages/XPSystem";
import XPShop from "./pages/XPShop";
import Clubs from "./pages/Clubs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/events" element={<Events />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/quests" element={<WeeklyQuests />} />
              <Route path="/shop" element={<XPShop />} />
              <Route path="/xp-history" element={<XPHistory />} />
              <Route path="/promotion" element={<ClubPromotion />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/xpsystem" element={<XPSystem />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
