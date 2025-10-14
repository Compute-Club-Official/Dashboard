import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function XPShop() {
  // You can replace this with real user role logic
  const userRole: "leader" | "member" | "co-leader" = "leader";
  const shopItems = [
    { id: 1, name: "Custom Club Badge", xp: 500, image: "🎖️" },
    { id: 2, name: "Featured Project Slot", xp: 800, image: "⭐" },
    { id: 3, name: "Priority Support", xp: 1000, image: "🚀" },
    { id: 4, name: "Exclusive Merch", xp: 1500, image: "👕" },
  ];

  const handleShopClick = () => {
    if (userRole !== "leader" && userRole !== "co-leader") {
      toast.error("⚠️ Only leaders and co-leaders can access this feature.");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <ShoppingBag className="mr-3 h-8 w-8 text-primary" />
          XP Shop
        </h1>
        <p className="text-muted-foreground mt-1">Spend your XP on exclusive club rewards</p>
      </div>
      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            XP Shop
            {(userRole !== "leader" && userRole !== "co-leader") && (
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
              <div
                key={item.id}
                onClick={handleShopClick}
                className="p-4 rounded-lg glass-card cursor-pointer hover:shadow-glow transition-all text-center"
              >
                <div className="text-4xl mb-2">{item.image}</div>
                <h4 className="font-semibold mb-1">{item.name}</h4>
                <p className="text-primary font-bold">{item.xp} XP</p>
              </div>
            ))}
          </div>
          {(userRole !== "leader" && userRole !== "co-leader") && (
            <p className="text-sm text-muted-foreground text-center mt-4">
              Only leaders and co-leaders can purchase from the XP Shop
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
