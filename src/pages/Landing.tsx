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
              <span>The Ultimate Club Management Platform</span>
              <Sparkles className="h-4 w-4" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
                Compute Club
              </span>
              <span className="block text-4xl md:text-6xl text-foreground mt-4">
                Where Code Meets Community
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build, manage, and scale your coding club with <span className="text-primary font-bold">XP systems</span>, <span className="text-accent font-bold">event tracking</span>, and a <span className="text-secondary font-bold">vibrant community</span> — all in one place.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="gradient-sunset text-white shadow-glow hover:scale-105 transition-all font-bold px-8 py-6 text-lg animate-glow-pulse" asChild>
                <Link to="/signup">
                  <Rocket className="mr-2 h-6 w-6" />
                  Start Your Club
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-bold px-8 py-6 text-lg" asChild>
                <Link to="/login">
                  <Zap className="mr-2 h-5 w-5" />
                  Login
                </Link>
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12"
            >
              {[
                { value: "500+", label: "Active Clubs" },
                { value: "10K+", label: "Members" },
                { value: "50K+", label: "XP Earned" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
                </div>
              ))}
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
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-sunset bg-clip-text text-transparent">Everything You Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your club like a pro with powerful tools designed for modern student communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Trophy,
              title: "XP & Gamification",
              description: "Reward members for contributions with XP, unlock achievements, and climb the leaderboard together.",
              color: "from-primary to-secondary"
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description: "Built-in chat, task management, and event planning. Keep everyone aligned and engaged.",
              color: "from-secondary to-accent"
            },
            {
              icon: Sparkles,
              title: "Club Promotion",
              description: "Create stunning promotional materials with customizable templates and QR codes.",
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
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/clubs" className="hover:text-primary transition-colors">Our Clubs</Link></li>
                <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
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
