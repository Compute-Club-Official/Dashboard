import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";

export default function Philosophy() {
  return (
    <div className="min-h-screen">
      <LandingNavbar />
      
      <section className="container px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="text-center mb-12">
            <Flame className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-black mb-4">
              <span className="gradient-sunset bg-clip-text text-transparent">Our Philosophy</span>
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Compute Club, we believe that the best way to learn coding is by building together.
              Our platform is designed to empower student communities, foster collaboration, and make
              technology education accessible and fun for everyone.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Community First</h2>
            <p className="text-muted-foreground leading-relaxed">
              We put community at the heart of everything we do. Every feature is designed to bring
              students together, encourage collaboration, and celebrate collective achievements.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Learning by Doing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Theory is important, but practice makes perfect. We encourage hands-on projects,
              real-world problem solving, and continuous experimentation.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
