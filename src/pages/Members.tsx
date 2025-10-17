import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Crown, Shield, Star, UserMinus, UserPlus, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Members() {
  const [members, setMembers] = useState([
    { id: 1, name: "Alex Chen", role: "leader", xp: 5420, avatar: "AC", level: 18 },
    { id: 2, name: "Sarah Kim", role: "co-leader", xp: 4890, avatar: "SK", level: 16 },
    { id: 3, name: "Jordan Lee", role: "member", xp: 3240, avatar: "JL", level: 12 },
    { id: 4, name: "Morgan Davis", role: "member", xp: 2980, avatar: "MD", level: 11 },
    { id: 5, name: "Taylor Swift", role: "member", xp: 2650, avatar: "TS", level: 10 },
    { id: 6, name: "Casey Brown", role: "member", xp: 2100, avatar: "CB", level: 9 },
  ]);

  const currentUserRole = "leader"; // This would come from auth context

  const handleRemoveMember = (memberId: number, memberName: string) => {
    setMembers(members.filter(m => m.id !== memberId));
    toast.success(`${memberName} has been removed from the club`);
  };

  const handlePromoteToCoLeader = (memberId: number, memberName: string) => {
    setMembers(members.map(m => m.id === memberId ? { ...m, role: "co-leader" } : m));
    toast.success(`${memberName} has been promoted to Co-Leader! 🎉`);
  };

  const handleDemoteCoLeader = (memberId: number, memberName: string) => {
    setMembers(members.map(m => m.id === memberId ? { ...m, role: "member" } : m));
    toast.success(`${memberName} has been demoted to Member`);
  };

  const canManageMembers = currentUserRole === "leader" || currentUserRole === "co-leader";

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
                <Card className="glass-card hover:shadow-glow transition-all">
                  <CardContent className="pt-6 space-y-4">
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

                    {/* Action Buttons (Only for leaders/co-leaders) */}
                    {canManageMembers && member.role !== "leader" && (
                      <div className="flex gap-2">
                        {member.role === "member" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 hover:bg-primary hover:text-white transition-all"
                            onClick={() => handlePromoteToCoLeader(member.id, member.name)}
                          >
                            <ArrowUp className="h-3 w-3 mr-1" />
                            Promote
                          </Button>
                        )}
                        {member.role === "co-leader" && currentUserRole === "leader" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 hover:bg-secondary transition-all"
                            onClick={() => handleDemoteCoLeader(member.id, member.name)}
                          >
                            <ArrowDown className="h-3 w-3 mr-1" />
                            Demote
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          className="flex-1"
                          onClick={() => handleRemoveMember(member.id, member.name)}
                        >
                          <UserMinus className="h-3 w-3 mr-1" />
                          Remove
                        </Button>
                      </div>
                    )}
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
