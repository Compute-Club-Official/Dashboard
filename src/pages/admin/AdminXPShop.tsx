import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Package } from "lucide-react";
import { toast } from "sonner";

const AdminXPShop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockItems = [
    { id: 1, name: "Custom Discord Role", category: "Roles", xpCost: 100, stock: "unlimited", claims: 45 },
    { id: 2, name: "Event Early Access", category: "Events", xpCost: 150, stock: "50", claims: 23 },
    { id: 3, name: "Club Merch T-Shirt", category: "Merch", xpCost: 300, stock: "15", claims: 8 },
    { id: 4, name: "Project Showcase Feature", category: "Digital", xpCost: 200, stock: "unlimited", claims: 34 },
    { id: 5, name: "1-on-1 Mentorship", category: "Events", xpCost: 500, stock: "5", claims: 2 },
  ];

  const handleDelete = (itemName: string) => {
    toast.success(`${itemName} has been deleted`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">XP Shop Management</h2>
          <p className="text-muted-foreground mt-1">Manage reward items and inventory</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-orange-600 gap-2">
          <Plus className="w-4 h-4" />
          Add New Item
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">All</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Roles</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Events</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Merch</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockItems.map((item, index) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <Badge>{item.category}</Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">XP Cost</span>
                    <span className="font-bold text-primary text-lg">{item.xpCost} XP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Stock</span>
                    <Badge variant={item.stock === "unlimited" ? "default" : parseInt(item.stock) < 10 ? "destructive" : "secondary"}>
                      {item.stock}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Claims</span>
                    <span className="font-medium">{item.claims}</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/10">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(item.name)}
                      className="flex-1 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
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

export default AdminXPShop;
