import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, TrendingUp, Users, Zap, Plus, Trophy, Flame } from "lucide-react";

export default function Dashboard() {
  const clubStats = {
    xp: 15420,
    level: 24,
    nextLevelXp: 18000,
    rank: 12,
    totalClubs: 450,
    members: 28,
    weeklyXP: 840,
  };

  const upcomingEvents = [
    { id: 1, title: "Hackathon Kickoff", date: "Tomorrow, 3:00 PM", attendees: 15 },
    { id: 2, title: "Workshop: React Basics", date: "Dec 18, 4:00 PM", attendees: 12 },
    { id: 3, title: "Project Showcase", date: "Dec 20, 2:00 PM", attendees: 24 },
  ];

  const recentAnnouncements = [
    { id: 1, title: "New XP rewards for project submissions!", author: "Alex Chen", time: "2 hours ago" },
    { id: 2, title: "Weekly quest challenges are live", author: "Sarah Kim", time: "1 day ago" },
  ];

  const xpProgress = (clubStats.xp / clubStats.nextLevelXp) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your club overview.</p>
        </div>
        <div className="flex gap-2">
          <Button className="gradient-sunset text-white shadow-glow">
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Club Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Club XP</CardTitle>
            <Flame className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clubStats.xp.toLocaleString()}</div>
            <Progress value={xpProgress} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Level {clubStats.level} • {(clubStats.nextLevelXp - clubStats.xp).toLocaleString()} XP to next level
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Club Rank</CardTitle>
            <Trophy className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{clubStats.rank}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Top {Math.round((clubStats.rank / clubStats.totalClubs) * 100)}% of {clubStats.totalClubs} clubs
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clubStats.members}</div>
            <p className="text-xs text-muted-foreground mt-2">
              +3 new this week
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly XP</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clubStats.weeklyXP}</div>
            <p className="text-xs text-muted-foreground mt-2">
              +12% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Events */}
        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees}</span>
                </div>
              </motion.div>
            ))}
            <Button variant="outline" className="w-full">View All Events</Button>
          </CardContent>
        </Card>

        {/* Latest Announcements */}
        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-accent" />
              Latest Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <h4 className="font-medium">{announcement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {announcement.author} • {announcement.time}
                </p>
              </motion.div>
            ))}
            <Button variant="outline" className="w-full">View All Announcements</Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <Plus className="mr-2 h-4 w-4" />
              Submit Project
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Create Event
            </Button>
            <Button variant="outline" className="justify-start">
              <Zap className="mr-2 h-4 w-4" />
              View Quests
            </Button>
            <Button variant="outline" className="justify-start">
              <Trophy className="mr-2 h-4 w-4" />
              Check Leaderboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
