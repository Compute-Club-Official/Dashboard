import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Link as LinkIcon, FileText } from "lucide-react";
import { toast } from "sonner";

export default function Submit() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 Project submitted successfully! +150 XP earned");
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Upload className="mr-3 h-8 w-8 text-primary" />
          Submit Project
        </h1>
        <p className="text-muted-foreground mt-1">Share your work and earn XP</p>
      </div>

      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input id="title" placeholder="My Awesome Project" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your project, what you built, and what you learned..."
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub Repository</Label>
              <div className="flex space-x-2">
                <LinkIcon className="h-5 w-5 text-muted-foreground mt-2" />
                <Input id="github" placeholder="https://github.com/username/project" type="url" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo">Live Demo URL</Label>
              <div className="flex space-x-2">
                <LinkIcon className="h-5 w-5 text-muted-foreground mt-2" />
                <Input id="demo" placeholder="https://myproject.com" type="url" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="files">Upload Files (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, images, or ZIP files up to 10MB
                </p>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="w-full gradient-sunset text-white shadow-glow font-bold py-6">
                <Upload className="mr-2 h-5 w-5" />
                Submit Project & Earn XP
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
