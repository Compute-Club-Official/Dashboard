import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SignupDetails() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    clubCode: "",
    name: "",
    username: "",
    dob: "",
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png", // placeholder
  });
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate save
    setTimeout(() => navigate("/dashboard"), 1000);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-orange-400">
      <form onSubmit={handleSubmit} className="bg-white/90 rounded-xl shadow-xl p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold mb-2">Complete Signup</h1>
        <div className="flex flex-col items-center mb-4">
          <img src={form.avatar} alt="Discord Avatar" className="w-20 h-20 rounded-full border-4 border-orange-400 shadow-glow mb-2" />
          <span className="text-sm text-muted-foreground">Discord Avatar (change coming soon)</span>
        </div>
        <Label htmlFor="clubCode">Club Code (optional)</Label>
        <Input id="clubCode" name="clubCode" value={form.clubCode} onChange={handleChange} placeholder="Enter club code" />
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" value={form.username} onChange={handleChange} required placeholder="Choose a username" />
        <Label htmlFor="dob">Date of Birth</Label>
        <Input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} required />
        <Button type="submit" className="w-full gradient-sunset text-white shadow-glow mt-4">Complete Signup</Button>
      </form>
    </div>
  );
}
