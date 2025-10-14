import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Download, Edit, Lock } from "lucide-react";
import { toast } from "sonner";

export default function Advertising() {
  const handleDownload = () => {
    toast.success("🎉 Template downloaded with confetti!");
  };

  const templates = [
    { id: 1, name: "Join Our Club", locked: false, icon: "👋" },
    { id: 2, name: "Welcome New Members", locked: false, icon: "🎉" },
    { id: 3, name: "Club Meeting", locked: false, icon: "📅" },
    { id: 4, name: "Club Events", locked: false, icon: "🎪" },
    { id: 5, name: "Project Showcase", locked: false, icon: "💎" },
    { id: 6, name: "Club Shop", locked: false, icon: "🛍️" },
    { id: 7, name: "Earn XP", locked: false, icon: "⚡" },
    { id: 8, name: "Code Club Classic", locked: true, icon: "🔒" },
    { id: 9, name: "Custom Design", locked: false, icon: "🎨" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Megaphone className="mr-3 h-8 w-8 text-primary" />
          Advertising Templates
        </h1>
        <p className="text-muted-foreground mt-1">
          Create professional promotional materials with customizable PDF templates
        </p>
      </div>

      <Card className="glass-card shadow-card border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Customization Features</h3>
              <p className="text-sm text-muted-foreground">
                Edit colors, fonts, icons, titles, descriptions, links, addresses, and QR codes
              </p>
            </div>
            <Badge variant="default" className="gradient-sunset text-white">
              All Access
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className={`glass-card shadow-card hover:shadow-glow transition-all ${
              template.locked ? "opacity-60" : ""
            }`}>
              <CardHeader>
                <div className="text-5xl text-center mb-3">{template.icon}</div>
                <CardTitle className="text-center text-lg flex items-center justify-center">
                  {template.name}
                  {template.locked && <Lock className="ml-2 h-4 w-4 text-muted-foreground" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  {!template.locked ? (
                    <>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Customize
                      </Button>
                      <Button
                        className="gradient-sunset text-white"
                        size="sm"
                        onClick={handleDownload}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </>
                  ) : (
                    <Badge variant="secondary" className="justify-center py-2">
                      <Lock className="h-3 w-3 mr-1" />
                      Locked Template
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
