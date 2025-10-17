import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings as SettingsIcon, User, LogOut, AlertTriangle, ArrowLeft, Calendar } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Alex Chen",
    username: "alexchen",
    avatar: "",
    discordId: "alex#1234",
    dateOfBirth: "1998-05-15",
    bio: "Passionate developer and tech enthusiast",
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const handleLeaveClub = () => {
    toast.error("This action cannot be undone. Please confirm in your email.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <SettingsIcon className="mr-3 h-8 w-8 text-primary" />
          Account Settings
        </h1>
        <p className="text-muted-foreground mt-1">Manage your profile and preferences</p>
      </div>

      {/* Profile Section */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2 h-5 w-5" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24 ring-4 ring-primary/20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="gradient-sunset text-white text-2xl font-bold">
                {user.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline">Upload New Photo</Button>
              <p className="text-sm text-muted-foreground mt-2">
                JPG or PNG. Max size 2MB.
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="dob"
                type="date"
                value={user.dateOfBirth}
                onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio (optional)</Label>
            <Textarea
              id="bio"
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              placeholder="Tell us about yourself..."
              rows={3}
            />
          </div>

          <Button onClick={handleSave} className="gradient-sunset text-white shadow-glow">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Discord Connection */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Discord Connection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-[#5865F2] flex items-center justify-center">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div>
                <p className="font-medium">Connected to Discord</p>
                <p className="text-sm text-muted-foreground">{user.discordId}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Disconnect</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Your Discord account is used for authentication and communication.
          </p>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="glass-card shadow-card border-destructive/20">
        <CardHeader>
          <CardTitle className="flex items-center text-destructive">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <h4 className="font-semibold mb-2">Leave Club</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Once you leave, you'll lose access to all club resources and your XP progress.
            </p>
            <Button variant="destructive" onClick={handleLeaveClub}>
              <LogOut className="mr-2 h-4 w-4" />
              Leave Club
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
