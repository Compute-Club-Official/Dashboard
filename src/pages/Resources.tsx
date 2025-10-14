import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, ExternalLink, Download } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: "Getting Started with React",
      type: "document",
      icon: FileText,
      description: "Comprehensive guide for React beginners",
      url: "#",
    },
    {
      id: 2,
      title: "JavaScript Workshop Recording",
      type: "video",
      icon: Video,
      description: "Full recording from last month's workshop",
      url: "#",
    },
    {
      id: 3,
      title: "Club Handbook 2024",
      type: "document",
      icon: BookOpen,
      description: "Rules, guidelines, and best practices",
      url: "#",
    },
    {
      id: 4,
      title: "Git & GitHub Tutorial",
      type: "video",
      icon: Video,
      description: "Learn version control basics",
      url: "#",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <BookOpen className="mr-3 h-8 w-8 text-primary" />
          Resources
        </h1>
        <p className="text-muted-foreground mt-1">Access learning materials and club documents</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card shadow-card hover:shadow-glow transition-all h-full">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg gradient-sunset flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.url}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
