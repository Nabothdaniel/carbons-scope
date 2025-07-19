import { FaCheckCircle, FaStar, FaMagic } from 'react-icons/fa';

const plans = [
  {
    title: "Basic",
    price: "₦0",
    subtitle: "Perfect for individuals",
    button: "Get Started",
    features: [
      "1 user",
      "Basic tracking (Scopes 1 & 2)",
      "1 report/month",
      "Email support",
    ],
    icon: <FaMagic className="text-3xl text-indigo-400" />,
    highlighted: false,
  },
  {
    title: "Team",
    price: "₦29,000",
    subtitle: "Ideal for growing teams",
    button: "Start Team Plan",
    subtext: "₦5,000 per extra user",
    features: [
      "All Scopes (1–3)",
      "Team dashboards",
      "Unlimited reports",
      "Slack + GitHub integration",
    ],
    icon: <FaStar className="text-3xl text-yellow-400" />,
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    subtitle: "Custom solutions for companies",
    button: "Contact Sales",
    features: [
      "Everything in Team Plan",
      "ESG compliance & audits",
      "Custom integrations & API",
      "Priority support + manager",
    ],
    icon: <FaMagic className="text-3xl text-blue-300" />,
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br bg-black/30 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Flexible Plans for Every Need</h2>
        <p className="text-white/70 text-lg">Affordable and transparent pricing for individuals, teams, and businesses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl transition hover:scale-105 ${
              plan.highlighted ? 'bg-emerald-600 text-white' : ''
            }`}
          >
            <div className="flex items-center justify-center mb-6">{plan.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-sm text-white/70 mb-4">{plan.subtitle}</p>
            <p className="text-3xl font-bold mb-2">
              {plan.price} <span className="text-sm font-normal">/mo</span>
            </p>
            {plan.subtext && (
              <p className="text-xs text-white/60 mb-4">{plan.subtext}</p>
            )}
            <ul className="text-white/80 space-y-3 mb-6 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlighted
                  ? 'bg-white text-emerald-600 hover:bg-gray-200'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white'
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
