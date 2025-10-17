// Footer component with links to all legal and info pages
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-red-500 to-orange-400 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/press" className="hover:underline">Press</Link>
          <Link to="/code-of-conduct" className="hover:underline">Code of Conduct</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/philosophy" className="hover:underline">Philosophy</Link>
          <Link to="/branding" className="hover:underline">Branding</Link>
        </div>
        <div className="text-xs opacity-80 mt-2 md:mt-0">© {new Date().getFullYear()} Compute Club. All rights reserved.</div>
      </div>
    </footer>
  );
}
