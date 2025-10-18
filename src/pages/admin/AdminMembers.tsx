import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, UserCog, Ban, Shield } from "lucide-react";
import { toast } from "sonner";

const AdminMembers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockMembers = [
    { id: 1, name: "John Doe", email: "john@example.com", club: "Code Masters", role: "Leader", xp: 1250, status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", club: "Tech Innovators", role: "Co-Leader", xp: 980, status: "active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", club: "Digital Wizards", role: "Member", xp: 720, status: "active" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", club: "Hack Heroes", role: "Leader", xp: 1430, status: "active" },
    { id: 5, name: "Tom Brown", email: "tom@example.com", club: "Code Warriors", role: "Member", xp: 540, status: "banned" },
  ];

  const handlePromote = (name: string) => {
    toast.success(`${name} has been promoted to Leader`);
  };

  const handleBan = (name: string, isBanned: boolean) => {
    toast.success(`${name} has been ${isBanned ? 'unbanned' : 'banned'}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Members Management</h2>
          <p className="text-muted-foreground mt-1">Manage all club members and roles</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search members by name, email, or club..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Club</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Total XP</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMembers.map((member) => (
                <TableRow key={member.id} className="hover:bg-accent/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{member.club}</TableCell>
                  <TableCell>
                    <Badge
                      variant={member.role === "Leader" ? "default" : "secondary"}
                      className={member.role === "Leader" ? "bg-gradient-to-r from-primary to-orange-600" : ""}
                    >
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-primary">{member.xp} XP</TableCell>
                  <TableCell>
                    <Badge variant={member.status === "active" ? "default" : "destructive"}>
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {member.role === "Member" && member.status === "active" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handlePromote(member.name)}
                          className="hover:bg-primary/10"
                        >
                          <Shield className="w-4 h-4 mr-2" />
                          Promote
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleBan(member.name, member.status === "banned")}
                        className={member.status === "banned" ? "text-green-500 hover:bg-green-500/10" : "text-destructive hover:bg-destructive/10"}
                      >
                        <Ban className="w-4 h-4 mr-2" />
                        {member.status === "banned" ? "Unban" : "Ban"}
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

export default AdminMembers;
