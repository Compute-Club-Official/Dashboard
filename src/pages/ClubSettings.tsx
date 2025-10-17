import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings as SettingsIcon, Upload, AlertTriangle, UserX, Users } from "lucide-react";
import { toast } from "sonner";

export default function ClubSettings() {
  const [club, setClub] = useState({
    name: "Tech Innovators Club",
    description: "A community of passionate developers building the future of technology.",
    location: "San Francisco, CA",
    logo: "",
    banner: "",
    email: "contact@techinnovators.club",
    website: "techinnovators.club",
  });

  const currentUserRole = "leader"; // This would come from auth context

  const handleSaveChanges = () => {
    toast.success("Club settings saved successfully! 🎉");
  };

  const handleDeleteClub = () => {
    toast.error("This action requires email confirmation. Check your inbox.");
  };

  const handleTransferLeadership = () => {
    toast.success("Leadership transfer request sent!");
  };

  if (currentUserRole !== "leader") {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <Card className="glass-card shadow-card border-destructive/20">
          <CardContent className="pt-6 text-center space-y-4">
            <AlertTriangle className="h-16 w-16 text-destructive mx-auto" />
            <h2 className="text-2xl font-bold">Access Denied</h2>
            <p className="text-muted-foreground">
              Only club leaders can access club settings.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <SettingsIcon className="mr-3 h-8 w-8 text-primary" />
          Club Settings
        </h1>
        <p className="text-muted-foreground mt-1">Manage your club's information and preferences</p>
      </div>

      {/* Club Information */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Club Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Logo & Banner */}
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Club Logo</Label>
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24 ring-4 ring-primary/20">
                  <AvatarImage src={club.logo} alt={club.name} />
                  <AvatarFallback className="gradient-sunset text-white text-2xl font-bold">
                    {club.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Logo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    PNG or JPG. Max size 2MB.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Club Banner</Label>
              <div className="space-y-3">
                {club.banner ? (
                  <div className="relative h-40 rounded-lg overflow-hidden border-2 border-border">
                    <img
                      src={club.banner}
                      alt="Club banner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-40 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                    <p className="text-muted-foreground">No banner uploaded</p>
                  </div>
                )}
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Banner Image
                </Button>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="clubName">Club Name</Label>
              <Input
                id="clubName"
                value={club.name}
                onChange={(e) => setClub({ ...club, name: e.target.value })}
                placeholder="Enter club name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={club.location}
                onChange={(e) => setClub({ ...club, location: e.target.value })}
                placeholder="City, State/Country"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={club.description}
              onChange={(e) => setClub({ ...club, description: e.target.value })}
              placeholder="Tell others about your club..."
              rows={4}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email</Label>
              <Input
                id="email"
                type="email"
                value={club.email}
                onChange={(e) => setClub({ ...club, email: e.target.value })}
                placeholder="contact@club.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website (optional)</Label>
              <Input
                id="website"
                value={club.website}
                onChange={(e) => setClub({ ...club, website: e.target.value })}
                placeholder="yourclub.com"
              />
            </div>
          </div>

          <Button onClick={handleSaveChanges} className="gradient-sunset text-white shadow-glow">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Leadership Transfer */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Transfer Leadership
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Transfer club leadership to another member. This action requires confirmation from both parties.
          </p>
          <Button variant="secondary" onClick={handleTransferLeadership}>
            <UserX className="mr-2 h-4 w-4" />
            Initiate Leadership Transfer
          </Button>
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
            <h4 className="font-semibold mb-2">Delete Club</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Once you delete the club, all data, members, and projects will be permanently removed. This action cannot be undone.
            </p>
            <Button variant="destructive" onClick={handleDeleteClub}>
              <AlertTriangle className="mr-2 h-4 w-4" />
              Delete Club Permanently
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
