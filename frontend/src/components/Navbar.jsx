import { Sparkles } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xl font-bold">
                <Sparkles className="w-6 h-6 text-purple-500" />
                OpenAI
            </div>

            <div className="hidden md:flex gap-6 text-gray-300">
                <a href="#features" className="hover:text-white">Features</a>
                <a href="#pricing" className="hover:text-white">Pricing</a>
                <a href="#about" className="hover:text-white">About</a>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg">
                Try Now
            </button>
        </nav>
    );
}