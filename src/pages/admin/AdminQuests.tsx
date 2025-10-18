import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, Plus, Edit, Trash2, Target, Clock } from "lucide-react";
import { toast } from "sonner";

const AdminQuests = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockQuests = [
    { id: 1, title: "Build a Calculator App", xpReward: 150, deadline: "2025-10-24", active: true, completions: 34 },
    { id: 2, title: "Create GitHub Profile", xpReward: 50, deadline: "2025-10-21", active: true, completions: 87 },
    { id: 3, title: "Learn React Basics", xpReward: 200, deadline: "2025-10-28", active: true, completions: 23 },
    { id: 4, title: "Deploy First Project", xpReward: 100, deadline: "2025-10-18", active: false, completions: 56 },
    { id: 5, title: "Contribute to Open Source", xpReward: 300, deadline: "2025-10-31", active: true, completions: 12 },
  ];

  const handleToggle = (questTitle: string, isActive: boolean) => {
    toast.success(`${questTitle} is now ${isActive ? 'active' : 'inactive'}`);
  };

  const handleDelete = (questTitle: string) => {
    toast.success(`${questTitle} has been deleted`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Weekly Quests Management</h2>
          <p className="text-muted-foreground mt-1">Create and manage weekly challenges</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-orange-600 gap-2">
          <Plus className="w-4 h-4" />
          Create New Quest
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search quests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockQuests.map((quest, index) => (
            <Card
              key={quest.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{quest.title}</h3>
                        <Badge className={quest.active ? "bg-green-500" : "bg-gray-500"}>
                          {quest.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary text-lg">{quest.xpReward} XP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Ends: {quest.deadline}
                        </div>
                        <div>
                          {quest.completions} completions
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Active</span>
                      <Switch
                        checked={quest.active}
                        onCheckedChange={(checked) => handleToggle(quest.title, checked)}
                      />
                    </div>
                    <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(quest.title)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminQuests;
