import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Share2, Download, Eye } from "lucide-react";
import { toast } from "sonner";

export default function ClubPromotion() {
  const handleDownload = () => {
    toast.success("🎉 Design downloaded successfully!");
  };

  const promotions = [
    {
      id: 1,
      title: "Social Media Post",
      description: "Share your club achievements on social platforms",
      preview: "📱",
    },
    {
      id: 2,
      title: "Event Flyer",
      description: "Promote upcoming events and workshops",
      preview: "📋",
    },
    {
      id: 3,
      title: "Member Spotlight",
      description: "Showcase outstanding club members",
      preview: "⭐",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <TrendingUp className="mr-3 h-8 w-8 text-primary" />
          Club Promotion
        </h1>
        <p className="text-muted-foreground mt-1">Create promotional materials for your club</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo, index) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card shadow-card hover:shadow-glow transition-all h-full">
              <CardHeader>
                <div className="text-6xl text-center mb-4">{promo.preview}</div>
                <CardTitle className="text-center">{promo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {promo.description}
                </p>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                  <Button
                    className="gradient-sunset text-white"
                    size="sm"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
