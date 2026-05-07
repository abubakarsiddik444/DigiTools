const steps = [
  {
    title: "Create Account",
    text: "Sign up for free in seconds. No credit card required to get started.",
    icon: "assets/user.png",
  },
  {
    title: "Choose Products",
    text: "Browse our catalog and select the tools that fit your needs.",
    icon: "assets/package.png",
  },
  {
    title: "Start Creating",
    text: "Download and start using your premium tools immediately.",
    icon: "assets/rocket.png",
  },
];

const Steps = () => {
  return (
    <section id="steps" className="bg-[#F7F8FA] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Get Started In 3 Steps
          </h2>
          <p className="mt-5 text-sm text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative min-h-[290px] rounded-2xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm"
            >
              <span className="absolute right-5 top-5 grid size-8 place-items-center rounded-full bg-violet-600 text-xs font-black text-white">
                0{index + 1}
              </span>

              <div className="mx-auto grid size-20 place-items-center rounded-full bg-violet-100 text-violet-600">
                <img
                  src={`${import.meta.env.BASE_URL}${step.icon}`}
                  alt=""
                  className="size-10 object-contain"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                {step.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[260px] text-sm leading-6 text-slate-500">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
