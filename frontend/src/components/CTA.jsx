export default function CTA({ onGetStarted }) {
    return (
        <section className="py-20 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
                Ready to boost your productivity?
            </h2>

            <p className="text-gray-400 mb-6">
                Start using AI today and transform the way you work.
            </p>

            <button onClick={onGetStarted} className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 transition">
                Get Started
            </button>
        </section>
    );
}