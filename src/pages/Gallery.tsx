import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Flame, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const projects = [
    {
      id: 1,
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses and modern UI",
      xp: 250,
      contributors: ["Alex Chen", "Sarah Kim"],
      tags: ["React", "Node.js", "AI"],
      image: "🤖",
    },
    {
      id: 2,
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder for developers",
      xp: 200,
      contributors: ["Mike Johnson"],
      tags: ["React", "TailwindCSS"],
      image: "🎨",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative task manager with real-time updates",
      xp: 180,
      contributors: ["Emma Wilson", "David Lee", "Lisa Park"],
      tags: ["Vue.js", "Firebase"],
      image: "📋",
    },
    {
      id: 4,
      title: "Code Snippet Manager",
      description: "Save and organize code snippets with syntax highlighting",
      xp: 150,
      contributors: ["Ryan Martinez"],
      tags: ["JavaScript", "MongoDB"],
      image: "💾",
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Track workouts and visualize progress with charts",
      xp: 220,
      contributors: ["Jessica Taylor", "Kevin Brown"],
      tags: ["React Native", "GraphQL"],
      image: "💪",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      xp: 140,
      contributors: ["Sophie Anderson"],
      tags: ["Next.js", "API"],
      image: "🌤️",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Project Gallery</h1>
        <p className="text-muted-foreground">
          Showcase of amazing projects built by our community
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="glass-card shadow-card">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-primary">{projects.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Total Projects</p>
          </CardContent>
        </Card>
        <Card className="glass-card shadow-card">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-secondary">
              {projects.reduce((sum, p) => sum + p.contributors.length, 0)}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Contributors</p>
          </CardContent>
        </Card>
        <Card className="glass-card shadow-card">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-accent">
              {projects.reduce((sum, p) => sum + p.xp, 0)}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Total XP Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card shadow-card hover:shadow-glow transition-all h-full flex flex-col group">
              <CardContent className="pt-6 flex-1 flex flex-col">
                {/* Project Icon */}
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Contributors */}
                  <div className="flex items-center space-x-2 pt-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div className="flex -space-x-2">
                      {project.contributors.map((contributor, idx) => (
                        <Avatar key={idx} className="h-7 w-7 border-2 border-background">
                          <AvatarFallback className="text-xs bg-primary/20">
                            {contributor.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.contributors.length} contributor{project.contributors.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* XP Badge */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center space-x-1 text-primary font-semibold">
                      <Flame className="h-4 w-4" />
                      <span>+{project.xp} XP</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
