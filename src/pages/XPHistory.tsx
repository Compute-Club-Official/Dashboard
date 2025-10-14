import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function XPHistory() {
  const history = [
    { id: 1, action: "Completed React Workshop Quest", xp: 100, type: "earn", date: "Dec 10, 2:30 PM" },
    { id: 2, action: "Submitted Portfolio Project", xp: 150, type: "earn", date: "Dec 9, 4:15 PM" },
    { id: 3, action: "Purchased Custom Badge", xp: -500, type: "spend", date: "Dec 8, 10:00 AM" },
    { id: 4, action: "Attended Hackathon", xp: 200, type: "earn", date: "Dec 7, 6:00 PM" },
    { id: 5, action: "Helped debug team project", xp: 25, type: "earn", date: "Dec 6, 3:20 PM" },
    { id: 6, action: "Completed Weekly Quest", xp: 75, type: "earn", date: "Dec 5, 11:45 AM" },
    { id: 7, action: "Event Registration", xp: 50, type: "earn", date: "Dec 4, 9:00 AM" },
    { id: 8, action: "Purchased Priority Support", xp: -1000, type: "spend", date: "Dec 3, 2:15 PM" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <History className="mr-3 h-8 w-8 text-primary" />
          XP History
        </h1>
        <p className="text-muted-foreground mt-1">Track your XP earnings and spending</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Total Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">+8,920</div>
            <p className="text-sm text-muted-foreground mt-1">All-time earnings</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <TrendingDown className="mr-2 h-5 w-5 text-destructive" />
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-destructive">-1,500</div>
            <p className="text-sm text-muted-foreground mt-1">XP Shop purchases</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Activity className="mr-2 h-5 w-5 text-accent" />
              Net Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">7,420</div>
            <p className="text-sm text-muted-foreground mt-1">Current XP</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {history.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-lg glass-card hover:shadow-glow transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{item.action}</h4>
                    <Badge variant={item.type === "earn" ? "default" : "destructive"} className="capitalize">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                </div>
                <div className={`text-xl font-bold ${
                  item.type === "earn" ? "text-primary" : "text-destructive"
                }`}>
                  {item.type === "earn" ? "+" : ""}{item.xp} XP
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
