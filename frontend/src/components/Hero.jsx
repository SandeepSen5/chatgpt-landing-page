export default function Hero() {

    const scrollToFeatures = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <section className="text-center py-20 px-6">
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                AI that works for you
            </h1>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Experience the power of AI to generate content, write code, and automate your workflow.
            </p>

            <div className="mt-6 flex justify-center gap-4">
                <button onClick={scrollToFeatures} className="bg-purple-600 px-6 py-3 rounded-lg hover:scale-105 transition">
                    Get Started
                </button>

                <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    Learn More
                </button>
            </div>
        </section>
    );
}
