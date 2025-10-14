import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const handleDiscordSignup = () => {
    // Simulate Discord OAuth
    setTimeout(() => navigate("/signup-details"), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-orange-400">
      <div className="bg-white/80 rounded-xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">Signup via Discord</h1>
        <p className="mb-6 text-muted-foreground">Create your Compute Club account</p>
        <Button onClick={handleDiscordSignup} className="gradient-sunset text-white flex items-center gap-2 text-lg px-6 py-3 shadow-glow">
          <FaDiscord className="h-6 w-6" /> Signup with Discord
        </Button>
      </div>
    </div>
  );
}
