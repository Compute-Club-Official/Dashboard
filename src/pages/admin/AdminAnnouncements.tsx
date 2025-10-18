import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Megaphone } from "lucide-react";
import { toast } from "sonner";

const AdminAnnouncements = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const mockAnnouncements = [
    { id: 1, title: "New XP Shop Items", content: "Check out the latest rewards!", scope: "Global", date: "2025-10-17" },
    { id: 2, title: "Weekly Quest Updated", content: "This week's challenge is live", scope: "Global", date: "2025-10-16" },
    { id: 3, title: "Club Meeting Reminder", content: "Don't forget tomorrow's meeting", scope: "Code Masters", date: "2025-10-15" },
    { id: 4, title: "Maintenance Notice", content: "System maintenance scheduled", scope: "Global", date: "2025-10-14" },
  ];

  const handleDelete = (title: string) => {
    toast.success(`"${title}" has been deleted`);
  };

  const handleCreate = () => {
    toast.success("Announcement published successfully!");
    setShowCreateForm(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Announcements Management</h2>
          <p className="text-muted-foreground mt-1">Create and manage platform announcements</p>
        </div>
        <Button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-gradient-to-r from-primary to-orange-600 gap-2"
        >
          <Plus className="w-4 h-4" />
          {showCreateForm ? "Cancel" : "New Announcement"}
        </Button>
      </div>

      {showCreateForm && (
        <Card className="animate-scale-in">
          <CardHeader>
            <h3 className="text-xl font-bold">Create New Announcement</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <Input placeholder="Announcement title..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Content</label>
              <Textarea placeholder="Write your announcement..." rows={4} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Scope</label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                <option>Global (All Clubs)</option>
                <option>Specific Club</option>
              </select>
            </div>
            <Button onClick={handleCreate} className="w-full bg-gradient-to-r from-primary to-orange-600">
              Publish Announcement
            </Button>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockAnnouncements.map((announcement, index) => (
            <Card
              key={announcement.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                      <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{announcement.title}</h3>
                        <Badge variant={announcement.scope === "Global" ? "default" : "secondary"}>
                          {announcement.scope}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{announcement.content}</p>
                      <p className="text-xs text-muted-foreground">{announcement.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(announcement.title)}
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

export default AdminAnnouncements;
