import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Rocket } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clubCode: "",
    name: "",
    username: "",
    dob: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup details:", formData);
    // Save to database then redirect
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-sunset opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg relative"
      >
        <Card className="glass-card shadow-glow border-2 border-primary/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Rocket className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-2xl font-black">Complete Your Profile</CardTitle>
            <p className="text-muted-foreground">Just a few more details to get started</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Profile Picture */}
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-24 w-24 border-4 border-primary/20">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Discord" />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <Button type="button" variant="outline" size="sm" className="font-semibold">
                  <Camera className="mr-2 h-4 w-4" />
                  Change Avatar
                </Button>
                <p className="text-xs text-muted-foreground">Using Discord profile picture</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="clubCode">Club Code (Optional)</Label>
                <Input 
                  id="clubCode" 
                  placeholder="Enter club code if you have one"
                  value={formData.clubCode}
                  onChange={(e) => setFormData({...formData, clubCode: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Alex Chen" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="alexchen" 
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input 
                  id="dob" 
                  type="date" 
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>

              <Button className="w-full gradient-sunset text-white shadow-glow font-bold py-6" type="submit">
                <Rocket className="mr-2 h-5 w-5" />
                Complete Signup
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
