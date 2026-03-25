export default function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: ["Basic AI access", "Limited usage", "Community support"],
        },
        {
            name: "Go",
            price: "$19/mo",
            features: ["Full AI access", "Faster responses", "Priority support"],
        },
        {
            name: "Pro",
            price: "$49/mo",
            features: ["Unlimited usage", "Best performance", "24/7 support"],
        },
    ];

    return (
        <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
                Pricing Plans
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-gray-900 text-center hover:scale-105 transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-4">{plan.price}</p>

                        <ul className="text-gray-400 mb-6 space-y-2">
                            {plan.features.map((f, i) => (
                                <li key={i}>✔ {f}</li>
                            ))}
                        </ul>

                        <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}