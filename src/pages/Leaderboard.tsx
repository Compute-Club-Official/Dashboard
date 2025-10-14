import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Flame, TrendingUp } from "lucide-react";

export default function Leaderboard() {
  const topClubs = [
    {
      id: 1,
      name: "Code Warriors",
      xp: 24850,
      rank: 1,
      logo: "",
      members: [
        { name: "Alex Chen", xp: 3200 },
        { name: "Sarah Kim", xp: 2980 },
        { name: "Mike Johnson", xp: 2750 },
      ],
    },
    {
      id: 2,
      name: "Tech Titans",
      xp: 22340,
      rank: 2,
      logo: "",
      members: [
        { name: "Emma Wilson", xp: 3100 },
        { name: "David Lee", xp: 2890 },
        { name: "Lisa Park", xp: 2650 },
      ],
    },
    {
      id: 3,
      name: "Digital Dreamers",
      xp: 19720,
      rank: 3,
      logo: "",
      members: [
        { name: "Ryan Martinez", xp: 2950 },
        { name: "Jessica Taylor", xp: 2820 },
        { name: "Kevin Brown", xp: 2580 },
      ],
    },
    {
      id: 4,
      name: "Byte Builders",
      xp: 18450,
      rank: 4,
      logo: "",
      members: [
        { name: "Sophie Anderson", xp: 2800 },
        { name: "Chris Davis", xp: 2670 },
        { name: "Maya Singh", xp: 2490 },
      ],
    },
    {
      id: 5,
      name: "Algorithm Aces",
      xp: 17890,
      rank: 5,
      logo: "",
      members: [
        { name: "Tom Wilson", xp: 2720 },
        { name: "Rachel Green", xp: 2610 },
        { name: "Jake Moore", xp: 2440 },
      ],
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-accent" />;
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" />;
      case 3:
        return <Award className="h-6 w-6 text-secondary" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "gradient-sunset";
      case 2:
        return "bg-muted";
      case 3:
        return "bg-secondary/20";
      default:
        return "bg-muted/50";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center">
          <Trophy className="mr-3 h-10 w-10 text-primary" />
          Global Leaderboard
        </h1>
        <p className="text-muted-foreground">Top coding clubs ranked by XP</p>
      </div>

      {/* Stats Banner */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="glass-card shadow-card">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{topClubs.length}</p>
            <p className="text-sm text-muted-foreground">Active Clubs</p>
          </CardContent>
        </Card>
        <Card className="glass-card shadow-card">
          <CardContent className="pt-6 text-center">
            <Flame className="h-8 w-8 text-secondary mx-auto mb-2" />
            <p className="text-2xl font-bold">{topClubs[0].xp.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Top Club XP</p>
          </CardContent>
        </Card>
        <Card className="glass-card shadow-card">
          <CardContent className="pt-6 text-center">
            <Award className="h-8 w-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold">
              {topClubs.reduce((sum, club) => sum + club.members.length, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Total Members</p>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        {topClubs.map((club, index) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
          >
            <Card
              className={`glass-card hover:shadow-glow transition-all ${
                club.rank === 1 ? "border-primary/50 shadow-glow" : "shadow-card"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Rank Badge */}
                  <div
                    className={`flex-shrink-0 h-16 w-16 rounded-xl ${getRankBadgeColor(
                      club.rank
                    )} flex items-center justify-center ${
                      club.rank === 1 ? "animate-glow-pulse" : ""
                    }`}
                  >
                    {getRankIcon(club.rank)}
                  </div>

                  {/* Club Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                        <AvatarImage src={club.logo} />
                        <AvatarFallback className="gradient-sunset text-white font-bold">
                          {club.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{club.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Flame className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-primary">
                            {club.xp.toLocaleString()} XP
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Top 3 Members */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-sm text-muted-foreground mr-2">Top members:</span>
                      {club.members.map((member, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-muted/50 rounded-full px-3 py-1 text-sm"
                        >
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-xs bg-primary/20">
                              {member.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{member.name}</span>
                          <span className="text-primary font-semibold">
                            {member.xp.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
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
