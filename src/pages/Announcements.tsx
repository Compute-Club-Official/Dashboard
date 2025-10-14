import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Calendar, User } from "lucide-react";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Hackathon Next Week!",
      content: "Get ready for our annual 24-hour hackathon. Registration closes Friday.",
      author: "Alex Chen",
      date: "2 hours ago",
      priority: "high",
    },
    {
      id: 2,
      title: "New React Workshop Series",
      content: "Starting next month, we're launching a 4-week React workshop series for beginners.",
      author: "Sarah Kim",
      date: "1 day ago",
      priority: "medium",
    },
    {
      id: 3,
      title: "Club Meeting Minutes",
      content: "Minutes from last week's leadership meeting are now available in Resources.",
      author: "Jordan Lee",
      date: "3 days ago",
      priority: "low",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Megaphone className="mr-3 h-8 w-8 text-primary" />
          Announcements
        </h1>
        <p className="text-muted-foreground mt-1">Stay updated with club news and events</p>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card shadow-card hover:shadow-glow transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  <Badge variant={getPriorityColor(announcement.priority)} className="capitalize">
                    {announcement.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{announcement.content}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {announcement.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {announcement.date}
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
