import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Trophy, Target, CheckCircle } from "lucide-react";

export default function WeeklyQuests() {
  const quests = [
    {
      id: 1,
      title: "Submit 2 Projects",
      description: "Share your work with the community",
      progress: 1,
      total: 2,
      xp: 200,
      completed: false,
    },
    {
      id: 2,
      title: "Attend Workshop",
      description: "Join any club workshop this week",
      progress: 1,
      total: 1,
      xp: 150,
      completed: true,
    },
    {
      id: 3,
      title: "Help 3 Members",
      description: "Answer questions or review code",
      progress: 1,
      total: 3,
      xp: 100,
      completed: false,
    },
    {
      id: 4,
      title: "Complete Tutorial",
      description: "Finish any learning resource",
      progress: 0,
      total: 1,
      xp: 75,
      completed: false,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Zap className="mr-3 h-8 w-8 text-primary" />
          Weekly Quests
        </h1>
        <p className="text-muted-foreground mt-1">Complete missions to earn bonus XP</p>
      </div>

      <Card className="glass-card shadow-glow border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Weekly Progress</p>
              <h2 className="text-3xl font-bold">2/4 Quests</h2>
            </div>
            <Trophy className="h-12 w-12 text-accent" />
          </div>
          <Progress value={50} className="h-3 mt-4" />
          <p className="text-sm text-muted-foreground mt-2">
            Complete all quests for a 2x XP bonus!
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {quests.map((quest, index) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`glass-card shadow-card hover:shadow-glow transition-all ${
              quest.completed ? "border-primary/50" : ""
            }`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-xl">{quest.title}</CardTitle>
                      {quest.completed && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {quest.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">+{quest.xp}</div>
                    <div className="text-xs text-muted-foreground">XP</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-bold">
                      {quest.progress}/{quest.total}
                    </span>
                  </div>
                  <Progress
                    value={(quest.progress / quest.total) * 100}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
