import { Sparkles, Users, Rocket } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

           
            <h2 className="text-3xl font-bold text-center mb-12">
                About Us
            </h2>

          
            <div className="bg-gray-900 rounded-2xl p-10 text-center shadow-lg">

                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                    We build AI-powered tools to help people create, code, and automate faster.
                    Our mission is to make artificial intelligence accessible and useful for everyone.
                </p>

               
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="flex flex-col items-center">
                        <Sparkles className="w-8 h-8 text-purple-500 mb-3" />
                        <h3 className="font-semibold">Innovation</h3>
                        <p className="text-gray-400 text-sm text-center">
                            Cutting-edge AI solutions for modern problems.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Users className="w-8 h-8 text-blue-500 mb-3" />
                        <h3 className="font-semibold">User First</h3>
                        <p className="text-gray-400 text-sm text-center">
                            Designed with simplicity and usability in mind.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Rocket className="w-8 h-8 text-pink-500 mb-3" />
                        <h3 className="font-semibold">Growth</h3>
                        <p className="text-gray-400 text-sm text-center">
                            Empowering users to achieve more with AI.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}