import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Users, CheckCircle2, ExternalLink, Mail, Globe } from "lucide-react";
import { useState } from "react";
import LandingNavbar from "@/components/LandingNavbar";

export default function OurClubs() {
  const [searchQuery, setSearchQuery] = useState("");

  const clubs = [
    {
      id: 1,
      name: "Silicon Valley Coders",
      location: "San Francisco, CA",
      members: 45,
      leader: "Sarah Chen",
      coLeader: "Mike Rodriguez",
      verified: true,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=club1",
      banner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=200&fit=crop",
      description: "A vibrant community of student developers building the future of tech in the Bay Area.",
      contact: "hello@svcoders.dev",
      website: "svcoders.dev",
    },
    {
      id: 2,
      name: "Code Masters NYC",
      location: "New York, NY",
      members: 38,
      leader: "Alex Thompson",
      coLeader: "Emily Davis",
      verified: true,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=club2",
      banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=200&fit=crop",
      description: "NYC's premier student coding club focusing on web development and AI projects.",
      contact: "team@codemasters.nyc",
      website: "codemasters.nyc",
    },
    {
      id: 3,
      name: "Austin Tech Hackers",
      location: "Austin, TX",
      members: 52,
      leader: "Jordan Lee",
      coLeader: "Sam Patel",
      verified: true,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=club3",
      banner: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=200&fit=crop",
      description: "Building innovative solutions and hosting weekly hackathons in the heart of Texas.",
      contact: "info@austinhackers.io",
      website: "austinhackers.io",
    },
    {
      id: 4,
      name: "Boston Code Brigade",
      location: "Boston, MA",
      members: 41,
      leader: "Taylor Kim",
      coLeader: "Chris Johnson",
      verified: false,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=club4",
      banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=200&fit=crop",
      description: "Empowering students through collaborative coding projects and mentorship programs.",
      contact: "hello@bostonbrigade.org",
      website: "",
    },
    {
      id: 5,
      name: "Seattle Dev Squad",
      location: "Seattle, WA",
      members: 36,
      leader: "Morgan Zhang",
      coLeader: "Riley Brown",
      verified: true,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=club5",
      banner: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=200&fit=crop",
      description: "Pacific Northwest's hub for student developers, open source contributors, and tech enthusiasts.",
      contact: "squad@seattledev.io",
      website: "seattledev.io",
    },
    {
      id: 6,
      name: "Miami Code Collective",
      location: "Miami, FL",
      members: 29,
      leader: "Jamie Martinez",
      coLeader: "Casey Wilson",
      verified: false,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=club6",
      banner: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=200&fit=crop",
      description: "South Florida's growing community of student coders working on real-world projects.",
      contact: "team@miamicode.club",
      website: "",
    },
  ];

  const filteredClubs = clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.leader.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.coLeader.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <LandingNavbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 gradient-sunset opacity-10" />
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="gradient-sunset bg-clip-text text-transparent">
                Explore Compute Clubs 🌍
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find a club near you or discover projects by others!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <Input
              placeholder="Search by club name, location, or leader..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-7 text-lg shadow-card"
            />
          </div>
        </motion.div>
      </section>

      {/* Clubs Grid */}
      <section className="container px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredClubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="glass-card hover:shadow-glow transition-all cursor-pointer group overflow-hidden h-full border-2 hover:border-primary/40">
                    {/* Banner Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={club.banner}
                        alt={club.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {club.verified && (
                        <Badge className="absolute top-3 right-3 bg-primary text-white font-bold shadow-glow">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-6">
                      {/* Club Avatar & Name - More Spacing */}
                      <div className="flex items-center space-x-3 mb-6 -mt-10">
                        <Avatar className="h-16 w-16 border-4 border-card shadow-lg">
                          <AvatarImage src={club.image} />
                          <AvatarFallback className="gradient-sunset text-white font-bold">
                            {club.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl font-bold mb-1">{club.name}</h3>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {club.location}
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 pb-4 border-b">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span className="text-sm font-medium">{club.members} members</span>
                        </div>
                      </div>

                      {/* Leaders */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Leader:</span>
                          <span className="font-semibold">{club.leader}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Co-Leader:</span>
                          <span className="font-semibold">{club.coLeader}</span>
                        </div>
                      </div>

                      <Button className="w-full mt-4 font-bold" variant="outline">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* Club Detail Modal */}
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="relative h-40 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-lg">
                      <img
                        src={club.banner}
                        alt={club.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-4 -mt-12 mb-4">
                      <Avatar className="h-20 w-20 border-4 border-card shadow-xl">
                        <AvatarImage src={club.image} />
                        <AvatarFallback className="gradient-sunset text-white font-bold text-2xl">
                          {club.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <DialogTitle className="text-2xl font-black flex items-center gap-2">
                          {club.name}
                          {club.verified && <CheckCircle2 className="h-6 w-6 text-primary" />}
                        </DialogTitle>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {club.location}
                        </div>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-bold mb-2">About This Club</h4>
                      <p className="text-muted-foreground">{club.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="text-center p-4">
                        <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{club.members}</p>
                        <p className="text-xs text-muted-foreground">Members</p>
                      </Card>
                      <Card className="text-center p-4">
                        <CheckCircle2 className="h-6 w-6 mx-auto mb-2 text-accent" />
                        <p className="text-2xl font-bold">{club.verified ? "Yes" : "No"}</p>
                        <p className="text-xs text-muted-foreground">Verified</p>
                      </Card>
                      <Card className="text-center p-4">
                        <MapPin className="h-6 w-6 mx-auto mb-2 text-secondary" />
                        <p className="text-2xl font-bold">Local</p>
                        <p className="text-xs text-muted-foreground">Community</p>
                      </Card>
                    </div>

                    {/* Leadership */}
                    <div>
                      <h4 className="font-bold mb-3">Club Leadership</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${club.leader}`} />
                            <AvatarFallback>{club.leader.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{club.leader}</p>
                            <p className="text-sm text-muted-foreground">Club Leader</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${club.coLeader}`} />
                            <AvatarFallback>{club.coLeader.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{club.coLeader}</p>
                            <p className="text-sm text-muted-foreground">Co-Leader</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                      <h4 className="font-bold mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href={`mailto:${club.contact}`} className="hover:underline">
                            {club.contact}
                          </a>
                        </div>
                        {club.website && (
                          <div className="flex items-center space-x-2 text-sm">
                            <Globe className="h-4 w-4 text-primary" />
                            <a
                              href={`https://${club.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline flex items-center"
                            >
                              {club.website}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button className="flex-1 gradient-sunset text-white shadow-glow font-bold">
                        Join This Club
                      </Button>
                      <Button variant="outline" className="flex-1 font-bold">
                        Contact Leaders
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-muted-foreground">No clubs found matching your search.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
