import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Target, FileText, ShoppingBag, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Clubs", value: "147", icon: Building2, change: "+12% this month", color: "from-blue-500 to-cyan-500" },
    { title: "Total Members", value: "2,453", icon: Users, change: "+8% this month", color: "from-purple-500 to-pink-500" },
    { title: "Active Quests", value: "8", icon: Target, change: "2 ending soon", color: "from-orange-500 to-red-500" },
    { title: "Pending Projects", value: "23", icon: FileText, change: "Requires review", color: "from-green-500 to-emerald-500" },
    { title: "XP Shop Items", value: "34", icon: ShoppingBag, change: "5 low stock", color: "from-yellow-500 to-orange-500" },
    { title: "Engagement Rate", value: "87%", icon: TrendingUp, change: "+5% this week", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Dashboard Overview</h2>
          <p className="text-muted-foreground mt-1">Monitor and manage your Compute Club network</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="h-20 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90">
            <div className="text-center">
              <ShoppingBag className="w-6 h-6 mx-auto mb-2" />
              <span>Add XP Item</span>
            </div>
          </Button>
          <Button className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            <div className="text-center">
              <Target className="w-6 h-6 mx-auto mb-2" />
              <span>Create Quest</span>
            </div>
          </Button>
          <Button className="h-20 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
            <div className="text-center">
              <FileText className="w-6 h-6 mx-auto mb-2" />
              <span>Review Projects</span>
            </div>
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "New club registered", club: "Tech Warriors", time: "5 min ago" },
              { action: "Project submitted", club: "Code Ninjas", time: "12 min ago" },
              { action: "Quest completed", club: "Hack Masters", time: "1 hour ago" },
              { action: "XP item purchased", club: "Digital Creators", time: "2 hours ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.club}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Clubs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Code Masters", xp: 5420, members: 45 },
              { name: "Tech Innovators", xp: 4890, members: 38 },
              { name: "Digital Wizards", xp: 4320, members: 42 },
              { name: "Hack Heroes", xp: 3980, members: 35 },
            ].map((club, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/10 to-orange-600/10 hover:from-primary/20 hover:to-orange-600/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium">{club.name}</p>
                    <p className="text-sm text-muted-foreground">{club.members} members</p>
                  </div>
                </div>
                <span className="font-bold text-primary">{club.xp} XP</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
