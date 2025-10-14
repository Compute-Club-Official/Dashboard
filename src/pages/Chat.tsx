import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Smile } from "lucide-react";

export default function Chat() {
  const messages = [
    { id: 1, user: "Alex Chen", avatar: "AC", message: "Hey everyone! Ready for tomorrow's workshop?", time: "2:30 PM" },
    { id: 2, user: "Sarah Kim", avatar: "SK", message: "Absolutely! I've prepared the slides.", time: "2:32 PM" },
    { id: 3, user: "Jordan Lee", avatar: "JL", message: "Can't wait! What topic are we covering?", time: "2:35 PM" },
  ];

  return (
    <div className="space-y-6 animate-fade-in h-[calc(100vh-12rem)]">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <MessageSquare className="mr-3 h-8 w-8 text-primary" />
          Club Chat
        </h1>
        <p className="text-muted-foreground mt-1">Communicate with your team in real-time</p>
      </div>

      <Card className="glass-card shadow-card h-[calc(100%-5rem)] flex flex-col">
        <CardHeader className="border-b border-border">
          <CardTitle>General Channel</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div className="h-10 w-10 rounded-full gradient-sunset flex items-center justify-center text-white font-bold flex-shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline space-x-2">
                  <span className="font-bold text-sm">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm mt-1">{msg.message}</p>
              </div>
            </motion.div>
          ))}
        </CardContent>
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button size="icon" variant="ghost">
              <Smile className="h-5 w-5" />
            </Button>
            <Button className="gradient-sunset text-white">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
