import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, XCircle, ExternalLink, Eye } from "lucide-react";
import { toast } from "sonner";

const AdminProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockProjects = [
    { id: 1, title: "AI Chatbot", club: "Code Masters", submittedBy: "John Doe", date: "2025-10-17", status: "pending", image: "🤖" },
    { id: 2, title: "Weather Dashboard", club: "Tech Innovators", submittedBy: "Jane Smith", date: "2025-10-16", status: "pending", image: "🌤️" },
    { id: 3, title: "E-commerce Site", club: "Digital Wizards", submittedBy: "Mike Johnson", date: "2025-10-15", status: "approved", image: "🛒" },
    { id: 4, title: "Task Manager App", club: "Hack Heroes", submittedBy: "Sarah Williams", date: "2025-10-14", status: "approved", image: "✅" },
    { id: 5, title: "Portfolio Website", club: "Code Warriors", submittedBy: "Tom Brown", date: "2025-10-13", status: "rejected", image: "💼" },
  ];

  const handleApprove = (projectTitle: string) => {
    toast.success(`${projectTitle} has been approved and added to gallery!`);
  };

  const handleReject = (projectTitle: string) => {
    toast.error(`${projectTitle} has been rejected`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Project Submissions</h2>
          <p className="text-muted-foreground mt-1">Review and approve member projects</p>
        </div>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {mockProjects.filter(p => p.status === "pending").length} Pending Review
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by title, club, or member..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project, index) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{project.image}</div>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <Badge
                        variant={
                          project.status === "approved"
                            ? "default"
                            : project.status === "rejected"
                            ? "destructive"
                            : "secondary"
                        }
                        className={
                          project.status === "approved"
                            ? "bg-green-500"
                            : project.status === "rejected"
                            ? ""
                            : "bg-yellow-500"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p className="text-muted-foreground">Club: <span className="font-medium text-foreground">{project.club}</span></p>
                      <p className="text-muted-foreground">By: <span className="font-medium text-foreground">{project.submittedBy}</span></p>
                      <p className="text-muted-foreground">Date: {project.date}</p>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/10">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 hover:bg-primary/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Link
                      </Button>
                    </div>
                    {project.status === "pending" && (
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          onClick={() => handleApprove(project.title)}
                          className="flex-1 bg-green-500 hover:bg-green-600"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleReject(project.title)}
                          variant="destructive"
                          className="flex-1"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    )}
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

export default AdminProjects;
