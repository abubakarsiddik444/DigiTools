const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
  },
  {
    name: "Pro",
    price: "$29",
    note: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    note: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-[#111827] sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-xs text-slate-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-xl border p-5 shadow-sm ${
                plan.featured
                  ? "border-violet-600 bg-gradient-to-br from-[#5d39ff] to-[#b30df5] text-white"
                  : "border-slate-200 bg-slate-50 text-slate-900"
              }`}
            >
              {plan.featured && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 px-4 py-1 text-xs font-semibold text-yellow-800">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p
                className={`mt-2 text-xs ${
                  plan.featured ? "text-violet-100" : "text-slate-500"
                }`}
              >
                {plan.note}
              </p>

              <div className="mt-5 flex items-end">
                <span className="text-4xl font-black leading-none">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-violet-100" : "text-slate-500"
                  }`}
                >
                  /Month
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-xs font-medium">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      className={
                        plan.featured ? "text-white" : "text-emerald-500"
                      }
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn mt-6 min-h-0 h-10 w-full rounded-full border-none text-xs font-bold ${
                  plan.featured
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-gradient-to-r from-[#5d39ff] to-[#b30df5] text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
