import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";

const funnyMessages = [
  "I swear it was working earlier.",
  "Aliens probably deleted this page.",
  "This is definitely Piyush’s fault.",
  "Maybe your device just can’t handle this awesomeness.",
  "You’ve entered the matrix. There’s no turning back.",
  "Error 404: Talent not found (like my ex’s sense of humor).",
  "You broke the internet. Congrats.",
  "This page ran away to join the circus.",
  "Oops... someone spilled chai on the server.",
  "Looks like the code went on vacation.",
  "This page doesn’t exist. But your curiosity does!",
  "Server is currently binge-watching Netflix.",
  "404. Because life isn’t perfect.",
  "Our hamster stopped running the server wheel.",
  "Someone forgot to save their progress.",
  "Maybe this was in your dreams, not our site.",
  "That route is like your crush — doesn’t exist.",
  "If lost, please return to the homepage.",
  "This page is under construction… since 2018.",
  "The dev promised to fix this yesterday.",
  "We blame gravity for this one.",
  "Couldn’t find this page — maybe it’s hiding.",
  "404. Page missing. Snacks still available.",
  "No worries, even Google gets lost sometimes.",
  "It’s not you. It’s JavaScript.",
  "Go home, you’re drunk (URL-wise).",
  "Our designer forgot to draw this page.",
  "Whoops! Wrong turn in the internet.",
  "You broke reality. Again.",
  "It’s not broken, it’s just exploring.",
  "Aur do Modi ko vote"
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Pick a random message each render
  const randomMessage = useMemo(() => {
    return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-red-500 via-orange-400 to-red-600" />
      <div className="w-full max-w-md mx-auto text-center px-4 py-12 rounded-xl shadow-2xl bg-white/80 backdrop-blur-md border border-orange-200">
        <h1 className="mb-2 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 animate-fade-in">404</h1>
        <p className="mb-4 text-2xl font-bold text-gray-700 animate-slide-in">Oops! Page not found</p>
        <p className="mb-8 text-lg font-semibold text-orange-600 animate-fade-in font-[\'Comic_Neue\',\'Poppins\',cursive,sans-serif]">
          {randomMessage}
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(255,87,34,0.7)] hover:scale-105 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-orange-400 animate-fade-in"
        >
          Return to Home
        </a>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-slide-in {
          animation: slideIn 1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-24px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
