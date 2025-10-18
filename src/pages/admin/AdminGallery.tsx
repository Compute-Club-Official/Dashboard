import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Trash2, Star } from "lucide-react";
import { toast } from "sonner";

const AdminGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockGalleryItems = [
    { id: 1, title: "AI Chatbot", club: "Code Masters", featured: true, image: "🤖", likes: 234 },
    { id: 2, title: "Weather Dashboard", club: "Tech Innovators", featured: false, image: "🌤️", likes: 156 },
    { id: 3, title: "E-commerce Site", club: "Digital Wizards", featured: true, image: "🛒", likes: 189 },
    { id: 4, title: "Task Manager App", club: "Hack Heroes", featured: false, image: "✅", likes: 145 },
    { id: 5, title: "Portfolio Website", club: "Code Warriors", featured: false, image: "💼", likes: 98 },
    { id: 6, title: "Social Media Clone", club: "Tech Innovators", featured: true, image: "📱", likes: 267 },
  ];

  const handleToggleFeatured = (title: string, featured: boolean) => {
    toast.success(`${title} is now ${featured ? 'featured' : 'unfeatured'}`);
  };

  const handleDelete = (title: string) => {
    toast.success(`${title} has been removed from gallery`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Gallery Management</h2>
          <p className="text-muted-foreground mt-1">Manage featured projects and gallery content</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search gallery projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGalleryItems.map((item, index) => (
              <Card
                key={item.id}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in ${
                  item.featured ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{item.image}</div>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      {item.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm space-y-1">
                      <p className="text-muted-foreground">Club: <span className="font-medium text-foreground">{item.club}</span></p>
                      <p className="text-muted-foreground">❤️ {item.likes} likes</p>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Button
                        size="sm"
                        variant={item.featured ? "default" : "outline"}
                        onClick={() => handleToggleFeatured(item.title, !item.featured)}
                        className="flex-1"
                      >
                        <Star className={`w-4 h-4 mr-2 ${item.featured ? 'fill-current' : ''}`} />
                        {item.featured ? 'Unfeature' : 'Feature'}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(item.title)}
                        className="flex-1 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminGallery;
