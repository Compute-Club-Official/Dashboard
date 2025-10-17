import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <LandingNavbar />
      
      <section className="container px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-4">
              <span className="gradient-sunset bg-clip-text text-transparent">Get in Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card shadow-card">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">hello@computeclub.com</p>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-card">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Discord</h3>
                <p className="text-sm text-muted-foreground">Join our community</p>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-card">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Global Community</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
