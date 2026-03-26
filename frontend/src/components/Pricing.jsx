export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      note: "Free until Dec 20, 2026",
      features: [
        "Basic AI access",
        "Limited usage",
        "Community support",
        "Standard response speed",
        "Basic customization options",
      ],
    },
    {
      name: "Go",
      price: "₹199/month",
      note: "Inclusive of GST",
      features: [
        "Full AI access",
        "Faster responses",
        "Priority support",
        "Access to advanced models",
        "Custom workflows",
      ],
    },
    {
      name: "Pro",
      price: "₹499/mo",
      note: "Inclusive of GST",
      features: [
        "Unlimited usage",
        "Best performance",
        "24/7 support",
        "API access",
        "Team collaboration",
      ],
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
            className="p-6 rounded-xl bg-gray-900 text-center hover:scale-[1.02] transition duration-300 flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="mb-4">
              <p className="text-3xl font-bold">
                {plan.price}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {plan.note}
              </p>
            </div>

           
            <ul className="text-gray-400 mb-6 space-y-2 text-left mx-auto w-fit">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-purple-500 w-4 flex justify-center">
                    ✔
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

           
            <button
              className="
                bg-gradient-to-r from-purple-500 to-blue-500
                px-6 py-2
                rounded-lg
                mt-auto
                mx-auto
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                active:scale-95
              "
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}