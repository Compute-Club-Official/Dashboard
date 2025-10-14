import LandingNavbar from "@/components/LandingNavbar";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Layers } from "lucide-react";

const mockClubs = [
  {
    id: 1,
    name: "Compute Club Alpha",
    location: "New York, NY",
    members: 32,
    leader: "Alex Chen",
    coLeader: "Sarah Kim",
    banner: "https://placehold.co/600x200/FF5733/FFF?text=Alpha+Club",
  },
  {
    id: 2,
    name: "Compute Club Beta",
    location: "San Francisco, CA",
    members: 21,
    leader: "Jordan Lee",
    coLeader: "Priya Patel",
    banner: "https://placehold.co/600x200/FF9800/FFF?text=Beta+Club",
  },
  // Add more mock clubs as needed
];

export default function Clubs() {
  const [search, setSearch] = useState("");
  const [selectedClub, setSelectedClub] = useState(null);
  const filtered = mockClubs.filter(
    c => c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.leader.toLowerCase().includes(search.toLowerCase()) ||
      c.coLeader.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="space-y-8 animate-fade-in max-w-6xl mx-auto px-4 pb-12 pt-24">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            <Layers className="h-8 w-8 text-primary" />
            Explore Compute Clubs 🌍
          </h1>
          <p className="text-muted-foreground mt-2">Find a club near you or discover projects by others!</p>
        </div>
        <div className="flex justify-center mb-6">
          <Input
            className="w-full max-w-md rounded-full shadow-glow text-lg"
            placeholder="Search by club, leader, or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(club => (
            <Card key={club.id} className="glass-card shadow-card p-0 overflow-hidden relative cursor-pointer hover:scale-[1.03] transition-transform" onClick={() => setSelectedClub(club)}>
              <img src={club.banner} alt={club.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{club.name}</h2>
                <p className="text-sm text-muted-foreground mb-1">{club.location}</p>
                <p className="text-sm mb-1">Members: <span className="font-semibold">{club.members}</span></p>
                <p className="text-sm mb-1">Leader: <span className="font-semibold">{club.leader}</span></p>
                <p className="text-sm mb-2">Co-Leader: <span className="font-semibold">{club.coLeader}</span></p>
                <button className="mt-2 w-full rounded-lg bg-primary text-white py-2 font-bold shadow-glow hover:bg-orange-500 transition">View More</button>
              </div>
            </Card>
          ))}
        </div>
        {/* Club Detail Modal */}
        {selectedClub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in">
              <button className="absolute top-3 right-3 text-xl font-bold text-muted-foreground hover:text-primary" onClick={() => setSelectedClub(null)}>&times;</button>
              <img src={selectedClub.banner} alt={selectedClub.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {selectedClub.name}
              </h2>
              <p className="mb-2 text-muted-foreground">{selectedClub.location}</p>
              <p className="mb-2">Leader: <span className="font-semibold">{selectedClub.leader}</span></p>
              <p className="mb-2">Co-Leader: <span className="font-semibold">{selectedClub.coLeader}</span></p>
              <p className="mb-2">Members: <span className="font-semibold">{selectedClub.members}</span></p>
              <div className="mb-4">
                <p className="font-semibold">Club Description</p>
                <p className="text-sm text-muted-foreground">This is a placeholder for the club description. Add real data here.</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Photos</p>
                <div className="flex gap-2 mt-2">
                  <img src={selectedClub.banner} alt="Club" className="w-20 h-12 object-cover rounded" />
                  <img src={selectedClub.banner} alt="Club" className="w-20 h-12 object-cover rounded" />
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Location Map</p>
                <div className="w-full h-32 bg-muted rounded flex items-center justify-center text-muted-foreground">Map Preview</div>
              </div>
              <button className="w-full rounded-lg bg-primary text-white py-2 font-bold shadow-glow hover:bg-orange-500 transition mt-2">Join Club</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
