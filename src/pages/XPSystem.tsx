import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Flame, TrendingUp, Award, Zap, ShoppingBag, Lock } from "lucide-react";
import { toast } from "sonner";

export default function XPSystem() {
  const userRole = "member"; // This would come from auth context

  const xpData = {
    current: 2840,
    level: 12,
    nextLevel: 3000,
    weeklyEarned: 340,
    totalEarned: 8920,
  };

  const xpActivities = [
    { id: 1, activity: "Project Submission", xp: 150, icon: Award },
    { id: 2, activity: "Event Attendance", xp: 50, icon: Flame },
    { id: 3, activity: "Weekly Quest Completion", xp: 100, icon: Zap },
    { id: 4, activity: "Help Team Member", xp: 25, icon: TrendingUp },
  ];

  const recentHistory = [
    { id: 1, action: "Completed React Workshop Quest", xp: 100, date: "2 hours ago", type: "earn" },
    { id: 2, action: "Submitted Portfolio Project", xp: 150, date: "1 day ago", type: "earn" },
    { id: 3, action: "Attended Hackathon", xp: 200, date: "3 days ago", type: "earn" },
    { id: 4, action: "Helped debug team project", xp: 25, date: "5 days ago", type: "earn" },
  ];

  const shopItems = [
    { id: 1, name: "Custom Club Badge", xp: 500, image: "🎖️" },
    { id: 2, name: "Featured Project Slot", xp: 800, image: "⭐" },
    { id: 3, name: "Priority Support", xp: 1000, image: "🚀" },
    { id: 4, name: "Exclusive Merch", xp: 1500, image: "👕" },
  ];

  const handleShopClick = () => {
    if (userRole === "member") {
      toast.error("⚠️ Only leaders and co-leaders can access this feature.");
    }
  };

  const xpProgress = (xpData.current / xpData.nextLevel) * 100;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Flame className="mr-3 h-8 w-8 text-primary" />
          XP System
        </h1>
        <p className="text-muted-foreground mt-1">Track your progress and earn rewards</p>
      </div>

      {/* XP Overview Card */}
      <Card className="glass-card shadow-glow border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Current XP</p>
              <h2 className="text-4xl font-bold gradient-sunset bg-clip-text text-transparent">
                {xpData.current.toLocaleString()}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Level</p>
              <h3 className="text-3xl font-bold">{xpData.level}</h3>
            </div>
          </div>
          <Progress value={xpProgress} className="h-3 mb-2" />
          <p className="text-sm text-muted-foreground">
            {xpData.nextLevel - xpData.current} XP until Level {xpData.level + 1}
          </p>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Weekly Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">+{xpData.weeklyEarned}</div>
            <p className="text-sm text-muted-foreground mt-1">XP earned this week</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Award className="mr-2 h-5 w-5 text-accent" />
              Total Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{xpData.totalEarned.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">All-time XP</p>
          </CardContent>
        </Card>
      </div>

      {/* XP Earning Activities */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>XP Earning Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {xpActivities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg gradient-sunset flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">{item.activity}</span>
                  </div>
                  <span className="text-primary font-bold">+{item.xp} XP</span>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* XP History */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Recent XP History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentHistory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex-1">
                  <p className="font-medium">{item.action}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <span className="text-primary font-bold">+{item.xp} XP</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* XP Shop Preview */}
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            XP Shop
            {userRole === "member" && (
              <span className="ml-auto text-xs bg-destructive/20 text-destructive px-2 py-1 rounded-full flex items-center">
                <Lock className="mr-1 h-3 w-3" />
                Restricted
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {shopItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={handleShopClick}
                className="p-4 rounded-lg glass-card cursor-pointer hover:shadow-glow transition-all text-center"
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <h4 className="font-semibold mb-1">{item.name}</h4>
                <p className="text-primary font-bold">{item.xp} XP</p>
              </motion.div>
            ))}
          </div>
          {userRole === "member" && (
            <p className="text-sm text-muted-foreground text-center mt-4">
              Only leaders and co-leaders can purchase from the XP Shop
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
