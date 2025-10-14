import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Calendar, MapPin, Users, ExternalLink } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Annual Hackathon 2024",
      date: "Dec 15-16, 2024",
      location: "Main Campus Lab",
      attendees: 42,
      status: "upcoming",
      description: "24-hour coding marathon with prizes and mentorship",
    },
    {
      id: 2,
      title: "React Workshop Series",
      date: "Jan 10, 2025",
      location: "Online",
      attendees: 28,
      status: "registration-open",
      description: "4-week beginner-friendly React workshop",
    },
    {
      id: 3,
      title: "Guest Speaker: Tech Career Paths",
      date: "Jan 20, 2025",
      location: "Auditorium B",
      attendees: 15,
      status: "upcoming",
      description: "Industry professionals share their journeys",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "registration-open":
        return <Badge variant="default">Registration Open</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Upcoming</Badge>;
      default:
        return <Badge variant="outline">Closed</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Target className="mr-3 h-8 w-8 text-primary" />
          Events
        </h1>
        <p className="text-muted-foreground mt-1">Register and attend club events</p>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card shadow-card hover:shadow-glow transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    {getStatusBadge(event.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} registered
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="gradient-sunset text-white">
                    Register Now
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
