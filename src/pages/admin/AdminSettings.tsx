import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Shield, Database, Key, Users } from "lucide-react";
import { toast } from "sonner";

const AdminSettings = () => {
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };

  const handleBackup = () => {
    toast.success("Database backup initiated!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold">System Settings</h2>
        <p className="text-muted-foreground mt-1">Configure admin panel and security settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Require 2FA for admin login</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Session Timeout</p>
                <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Login Notifications</p>
                <p className="text-sm text-muted-foreground">Email alerts for admin logins</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Admin Users
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { name: "Admin User", email: "admin@computeclub.com", role: "admin" },
                { name: "Moderator", email: "mod@computeclub.com", role: "moderator" },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <Badge className={user.role === "admin" ? "bg-gradient-to-r from-primary to-orange-600" : ""}>
                    {user.role}
                  </Badge>
                </div>
              ))}
            </div>
            <Button className="w-full" variant="outline">
              + Add Admin User
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Database Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Last backup: 2025-10-17 14:30</p>
              <Button onClick={handleBackup} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500">
                Create Manual Backup
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
              <div>
                <p className="font-medium">Auto-backup</p>
                <p className="text-sm text-muted-foreground">Daily at 2:00 AM</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5" />
              API Keys
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Discord OAuth Client ID</label>
              <Input placeholder="Enter client ID..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Discord OAuth Secret</label>
              <Input type="password" placeholder="Enter secret..." />
            </div>
            <Button onClick={handleSaveSettings} className="w-full bg-gradient-to-r from-primary to-orange-600">
              Save API Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full ${className}`}>
    {children}
  </span>
);

export default AdminSettings;
