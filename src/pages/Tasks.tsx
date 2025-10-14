import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Clock, Flag } from "lucide-react";

export default function Tasks() {
  const tasks = [
    { id: 1, title: "Review project submissions", priority: "high", dueDate: "Today", completed: false },
    { id: 2, title: "Prepare workshop materials", priority: "medium", dueDate: "Tomorrow", completed: false },
    { id: 3, title: "Update club website", priority: "low", dueDate: "This week", completed: false },
    { id: 4, title: "Send event invitations", priority: "high", dueDate: "Dec 12", completed: true },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <CheckSquare className="mr-3 h-8 w-8 text-primary" />
          My Tasks
        </h1>
        <p className="text-muted-foreground mt-1">Manage your assigned tasks and deadlines</p>
      </div>

      <Card className="glass-card shadow-card">
        <CardHeader>
          <CardTitle>Active Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center space-x-4 p-4 rounded-lg glass-card hover:shadow-glow transition-all ${
                  task.completed ? "opacity-50" : ""
                }`}
              >
                <Checkbox checked={task.completed} />
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold ${task.completed ? "line-through" : ""}`}>
                    {task.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={getPriorityColor(task.priority)} className="capitalize">
                      <Flag className="h-3 w-3 mr-1" />
                      {task.priority}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
