import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const handleDiscordLogin = () => {
    // Simulate Discord OAuth
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-orange-400">
      <div className="bg-white/80 rounded-xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">Login via Discord</h1>
        <p className="mb-6 text-muted-foreground">Sign in to your Compute Club account</p>
        <Button onClick={handleDiscordLogin} className="gradient-sunset text-white flex items-center gap-2 text-lg px-6 py-3 shadow-glow">
          <FaDiscord className="h-6 w-6" /> Login with Discord
        </Button>
      </div>
    </div>
  );
}
