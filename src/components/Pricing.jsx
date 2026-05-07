const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "For exploring the platform",
    features: ["Browse all tools", "Community support", "Free resources"],
  },
  {
    name: "Pro",
    price: "$29",
    note: "For regular creators",
    features: ["Premium templates", "Monthly updates", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    note: "For growing teams",
    features: ["Team access", "Custom bundles", "Dedicated support"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Flexible Plans for Every Workflow
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm ${
                plan.featured
                  ? "border-violet-500 bg-violet-600 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-violet-100" : "text-slate-500"
                }`}
              >
                {plan.note}
              </p>

              <div className="mt-6">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className={plan.featured ? "text-violet-100" : "text-slate-400"}>
                  /mo
                </span>
              </div>

              <ul className="mt-8 space-y-3 text-sm font-medium">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span>{plan.featured ? "+" : "-"}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn mt-8 w-full rounded-full ${
                  plan.featured
                    ? "border-none bg-white text-violet-700 hover:bg-violet-50"
                    : "btn-outline"
                }`}
              >
                Choose Plan
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
