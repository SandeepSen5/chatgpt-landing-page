export default function Hero({ onGetStarted, onLearnMore }) {
    return (
        <section className="text-center py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI that works for you
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Experience the power of AI to generate content, write code,
                and automate your workflow.
            </p>

            <div className="flex justify-center gap-4">
                <button onClick={onGetStarted} className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 transition">
                    Get Started
                </button>

                <button
                    onClick={onLearnMore}
                    className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Learn More
                </button>
            </div>
        </section>
    );
}