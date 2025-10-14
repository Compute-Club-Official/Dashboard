import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, Shield, Star } from "lucide-react";

export default function Members() {
  const members = [
    { id: 1, name: "Alex Chen", role: "leader", xp: 5420, avatar: "AC", level: 18 },
    { id: 2, name: "Sarah Kim", role: "co-leader", xp: 4890, avatar: "SK", level: 16 },
    { id: 3, name: "Jordan Lee", role: "member", xp: 3240, avatar: "JL", level: 12 },
    { id: 4, name: "Morgan Davis", role: "member", xp: 2980, avatar: "MD", level: 11 },
    { id: 5, name: "Taylor Swift", role: "member", xp: 2650, avatar: "TS", level: 10 },
    { id: 6, name: "Casey Brown", role: "member", xp: 2100, avatar: "CB", level: 9 },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "leader":
        return <Crown className="h-4 w-4" />;
      case "co-leader":
        return <Shield className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getRoleBadge = (role: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      leader: "default",
      "co-leader": "secondary",
      member: "outline",
    };
    return variants[role] || "outline";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Users className="mr-3 h-8 w-8 text-primary" />
          Club Members
        </h1>
        <p className="text-muted-foreground mt-1">View all members and their progress</p>
      </div>

      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Member List ({members.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card hover:shadow-glow transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-14 w-14 border-2 border-primary">
                        <AvatarFallback className="text-lg font-bold gradient-sunset text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg truncate">{member.name}</h3>
                        <Badge variant={getRoleBadge(member.role)} className="mb-2">
                          {getRoleIcon(member.role)}
                          <span className="ml-1 capitalize">{member.role}</span>
                        </Badge>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Level {member.level}</span>
                          <span className="text-primary font-bold">{member.xp} XP</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
