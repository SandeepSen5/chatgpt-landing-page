import { useState, useEffect } from "react";
import { Sparkles, Code, MessageSquare, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Writing",
    desc: "Generate high-quality content instantly with AI assistance.",
    more: "Create blogs, emails, and documents with advanced AI writing tools.",
  },
  {
    icon: Code,
    title: "Code Generation",
    desc: "Write and debug code faster using intelligent suggestions.",
    more: "Generate reusable components, fix bugs, and optimize performance.",
  },
  {
    icon: MessageSquare,
    title: "Smart Chat",
    desc: "Have natural conversations with advanced AI models.",
    more: "Get instant answers, explanations, and contextual insights.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Automate repetitive tasks and boost productivity.",
    more: "Streamline workflows and save hours of manual work.",
  },
];

export default function Features({ expand }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expand) setExpanded(true);
  }, [expand]);

  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful AI Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-900 transition duration-300 hover:scale-[1.02]"
            >
              <Icon className="w-8 h-8 text-purple-500 mb-4" />

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>

             
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 text-xs">
                  {feature.more}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}