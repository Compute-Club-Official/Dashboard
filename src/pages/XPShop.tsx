import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Flame, Star, Trophy, Shirt, Sparkles, Zap, Award, Search, Lock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function XPShop() {
  const userRole = "member"; // This would come from auth context
  const userXP = 2840;
  const [searchQuery, setSearchQuery] = useState("");

  const shopItems = [
    {
      id: 1,
      category: "roles",
      name: "VIP Club Member",
      description: "Get a special VIP role with exclusive perks and recognition",
      xp: 500,
      icon: "👑",
      featured: true,
    },
    {
      id: 2,
      category: "roles",
      name: "Code Master Badge",
      description: "Show off your coding skills with this prestigious badge",
      xp: 750,
      icon: "🎖️",
      featured: false,
    },
    {
      id: 3,
      category: "events",
      name: "Hackathon Priority Pass",
      description: "Skip the queue and get priority registration for hackathons",
      xp: 1000,
      icon: "🎫",
      featured: true,
    },
    {
      id: 4,
      category: "events",
      name: "Workshop Early Access",
      description: "Get early access to all club workshops and events",
      xp: 600,
      icon: "🚀",
      featured: false,
    },
    {
      id: 5,
      category: "merch",
      name: "Club T-Shirt",
      description: "Official Compute Club t-shirt with your custom design",
      xp: 1500,
      icon: "👕",
      featured: true,
    },
    {
      id: 6,
      category: "merch",
      name: "Sticker Pack",
      description: "Exclusive club stickers to decorate your laptop",
      xp: 300,
      icon: "🎨",
      featured: false,
    },
    {
      id: 7,
      category: "perks",
      name: "Featured Project Slot",
      description: "Get your project featured on the club's homepage for a week",
      xp: 800,
      icon: "⭐",
      featured: false,
    },
    {
      id: 8,
      category: "perks",
      name: "1-on-1 Mentorship Session",
      description: "Book a private session with a club leader or mentor",
      xp: 1200,
      icon: "💡",
      featured: true,
    },
  ];

  const handlePurchase = (item: typeof shopItems[0]) => {
    if (userRole === "member") {
      toast.error("🚫 Only leaders and co-leaders can access the XP Shop.", {
        position: "bottom-right",
      });
      return;
    }
    if (userRole === "co-leader") {
      toast.error("🚫 Co-leaders cannot make purchases from the XP Shop.", {
        position: "bottom-right",
      });
      return;
    }
    if (userXP < item.xp) {
      toast.error(`❌ Not enough XP! You need ${item.xp - userXP} more XP.`, {
        position: "bottom-right",
      });
      return;
    }
    toast.success(`🎉 Successfully purchased ${item.name}!`, {
      position: "bottom-right",
    });
  };

  const filteredItems = shopItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getItemsByCategory = (category: string) =>
    filteredItems.filter(item => item.category === category);

  const ItemCard = ({ item }: { item: typeof shopItems[0] }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="glass-card hover:shadow-glow transition-all h-full border-2 hover:border-primary/40 relative overflow-hidden">
        {item.featured && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-bold">
            <Star className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        )}
        <CardContent className="p-6">
          <div className="text-6xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-muted-foreground text-sm mb-4 min-h-[2.5rem]">{item.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-primary">{item.xp}</span>
              <span className="text-sm text-muted-foreground">XP</span>
            </div>
            <Button
              onClick={() => handlePurchase(item)}
              className="gradient-sunset text-white shadow-glow font-bold"
              disabled={userRole === "member"}
            >
              {userRole === "member" ? (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Locked
                </>
              ) : (
                "Purchase"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight flex items-center">
            <ShoppingBag className="mr-3 h-10 w-10 text-primary" />
            XP Shop
          </h1>
          <p className="text-muted-foreground mt-1">Spend your earned XP on cool rewards!</p>
        </div>
        <Card className="glass-card shadow-glow border-2 border-primary/20 px-6 py-4">
          <div className="flex items-center space-x-3">
            <Flame className="h-8 w-8 text-primary animate-pulse" />
            <div>
              <p className="text-sm text-muted-foreground">Your XP Balance</p>
              <p className="text-3xl font-black text-primary">{userXP}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Warning for Members */}
      {userRole === "member" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-destructive/10 border-2 border-destructive/20 rounded-lg p-4"
        >
          <div className="flex items-center space-x-3">
            <Lock className="h-5 w-5 text-destructive" />
            <p className="text-sm font-medium">
              Only leaders and co-leaders can access the XP Shop. Keep earning XP and contributing to your club!
            </p>
          </div>
        </motion.div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 py-6 text-lg"
        />
      </div>

      {/* Tabs for Categories */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="all" className="font-bold">All Items</TabsTrigger>
          <TabsTrigger value="roles" className="font-bold">Custom Roles</TabsTrigger>
          <TabsTrigger value="events" className="font-bold">Event Passes</TabsTrigger>
          <TabsTrigger value="merch" className="font-bold">Club Merch</TabsTrigger>
          <TabsTrigger value="perks" className="font-bold">Digital Perks</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getItemsByCategory("roles").map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getItemsByCategory("events").map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="merch" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getItemsByCategory("merch").map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="perks" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getItemsByCategory("perks").map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
