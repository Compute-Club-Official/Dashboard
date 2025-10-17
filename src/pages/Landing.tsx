import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Users, Trophy, Sparkles, Zap, Code2, Rocket, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <LandingNavbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-sunset opacity-10" />
        
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Polaroid-style images */}
        <motion.div
          className="absolute top-20 left-20 rotate-[-12deg] hidden lg:block"
          animate={{ y: [0, -10, 0], rotate: [-12, -10, -12] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="bg-white p-3 shadow-2xl rounded-sm w-40">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 mb-2 rounded-sm flex items-center justify-center text-5xl">
              💻
            </div>
            <p className="text-xs font-handwriting text-center text-gray-700">coding time!</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-32 right-24 rotate-[8deg] hidden lg:block"
          animate={{ y: [0, 10, 0], rotate: [8, 10, 8] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="bg-white p-3 shadow-2xl rounded-sm w-40">
            <div className="h-32 bg-gradient-to-br from-secondary/20 to-primary/20 mb-2 rounded-sm flex items-center justify-center text-5xl">
              🚀
            </div>
            <p className="text-xs font-handwriting text-center text-gray-700">launch day!</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-32 rotate-[15deg] hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [15, 12, 15] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="bg-white p-3 shadow-2xl rounded-sm w-40">
            <div className="h-32 bg-gradient-to-br from-accent/20 to-secondary/20 mb-2 rounded-sm flex items-center justify-center text-5xl">
              🎉
            </div>
            <p className="text-xs font-handwriting text-center text-gray-700">hackathon win!</p>
          </div>
        </motion.div>

        {/* Doodle illustrations */}
        <motion.div
          className="absolute bottom-20 right-32 opacity-10 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>
        
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold border-2 border-primary/30 shadow-glow"
            >
              <Flame className="h-5 w-5 animate-pulse" />
              <span>1000+ Compute Clubs worldwide!</span>
              <Sparkles className="h-4 w-4" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
                Compute Club
              </span>
              <span className="block text-4xl md:text-6xl text-foreground mt-4">
                Dashboard
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The place where Compute Club leaders manage their clubs, log projects,
              <br />buy hardware, find lessons and make the best clubs possible!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-white/10 backdrop-blur text-foreground border-2 border-foreground/20 hover:bg-white/20 hover:scale-105 transition-all font-bold px-8 py-6 text-lg" asChild>
                <Link to="/clubs">
                  <Flame className="mr-2 h-6 w-6" />
                  Link my club
                </Link>
              </Button>
              <Button size="lg" className="gradient-sunset text-white shadow-glow hover:scale-105 transition-all font-bold px-8 py-6 text-lg animate-glow-pulse" asChild>
                <Link to="/signup">
                  <Rocket className="mr-2 h-6 w-6" />
                  Start a club
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-bold px-8 py-6 text-lg" asChild>
                <Link to="/login">
                  Sign In
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Everything You Need</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built for Modern Compute Clubs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by Compute Clubbers, for Compute Clubbers. Everything you need to run an
            <br />awesome club is right here—no more juggling spreadsheets and sticky notes!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Keep Track of Your Members",
              description: "See who's in your club, what they're working on, and how they're doing. No more losing track of people or wondering who's actually showing up to meetings.",
              color: "from-primary to-secondary"
            },
            {
              icon: Trophy,
              title: "Plan Your Hackathons & Meetings",
              description: "Schedule workshops, hackathons, and club meetings without the headache. Send reminders so people actually show up, and keep track of who came. It's way easier than group chats and sticky notes.",
              color: "from-secondary to-accent"
            },
            {
              icon: Code2,
              title: "See What Everyone's Building",
              description: "Keep tabs on all the cool stuff your members are working on. Give them feedback, cheer them on when they hit milestones, and watch your club's projects come to life.",
              color: "from-accent to-primary"
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card shadow-card hover:shadow-glow transition-all group h-full border-2 hover:border-primary/50">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-card to-muted/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "1,000+", label: "ACTIVE CLUBS", icon: "🏫" },
              { value: "50,000+", label: "STUDENT HACKERS", icon: "👨‍💻" },
              { value: "100,000+", label: "PROJECTS BUILT", icon: "🚀" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-8 glass-card shadow-glow border-2 border-primary/20">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-muted-foreground tracking-wider">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 gradient-sunset opacity-10" />
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8 bg-card/80 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-12 shadow-glow"
          >
            <Flame className="h-20 w-20 text-primary mx-auto animate-pulse" />
            <h2 className="text-5xl font-black">Ready to Level Up?</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of clubs already using ComputeClub to build amazing communities and empower student developers.
            </p>
            <Button size="lg" className="gradient-sunset text-white shadow-glow hover:scale-105 transition-all font-bold px-10 py-7 text-xl" asChild>
              <Link to="/signup">
                <Rocket className="mr-2 h-6 w-6" />
                Start Your Club Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="h-6 w-6 text-primary" />
                <span className="text-xl font-black">Compute Club</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The ultimate platform for student coding communities.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/clubs" className="hover:text-primary transition-colors">Our Clubs</Link></li>
                <li><Link to="/philosophy" className="hover:text-primary transition-colors">Philosophy</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link to="/guides" className="hover:text-primary transition-colors">Guides</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <div className="flex space-x-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="mailto:hello@computeclub.com" className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Compute Club. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
