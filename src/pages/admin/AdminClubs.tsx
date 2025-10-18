import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Edit, Trash2, CheckCircle, XCircle, Users } from "lucide-react";
import { toast } from "sonner";

const AdminClubs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockClubs = [
    { id: 1, name: "Code Masters", leader: "John Doe", members: 45, xp: 5420, status: "approved", verified: true },
    { id: 2, name: "Tech Innovators", leader: "Jane Smith", members: 38, xp: 4890, status: "approved", verified: true },
    { id: 3, name: "Digital Wizards", leader: "Mike Johnson", members: 42, xp: 4320, status: "pending", verified: false },
    { id: 4, name: "Hack Heroes", leader: "Sarah Williams", members: 35, xp: 3980, status: "approved", verified: true },
    { id: 5, name: "Code Warriors", leader: "Tom Brown", members: 29, xp: 3200, status: "pending", verified: false },
  ];

  const handleApprove = (clubName: string) => {
    toast.success(`${clubName} has been approved!`);
  };

  const handleReject = (clubName: string) => {
    toast.error(`${clubName} has been rejected`);
  };

  const handleDelete = (clubName: string) => {
    toast.success(`${clubName} has been deleted`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Clubs Management</h2>
          <p className="text-muted-foreground mt-1">Manage all registered clubs</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-orange-600">
          Add New Club
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search clubs by name or leader..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Club Name</TableHead>
                <TableHead>Leader</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Total XP</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockClubs.map((club) => (
                <TableRow key={club.id} className="hover:bg-accent/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {club.name}
                      {club.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </div>
                  </TableCell>
                  <TableCell>{club.leader}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      {club.members}
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-primary">{club.xp} XP</TableCell>
                  <TableCell>
                    <Badge
                      variant={club.status === "approved" ? "default" : "secondary"}
                      className={club.status === "approved" ? "bg-green-500" : "bg-yellow-500"}
                    >
                      {club.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {club.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleApprove(club.name)}
                            className="text-green-500 hover:text-green-600 hover:bg-green-500/10"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleReject(club.name)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(club.name)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminClubs;
