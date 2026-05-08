const Banner = () => {
  const bannerImage = `${import.meta.env.BASE_URL}assets/banner.png`;

  return (
    <section id="top" className="overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid min-h-[620px] items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <div className="badge border-violet-200 bg-violet-50 px-4 py-4 font-semibold text-violet-700">
            New AI-powered tools available
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Supercharge Your Digital Workflow
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products

          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="btn rounded-full border-none bg-violet-600 px-7 text-white hover:bg-violet-700"
            >
              Explore Products
            </a>

            <a href="#steps" className="btn btn-outline rounded-full px-7">
              Watch Demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[2rem] bg-violet-100" />
          <img
            src={bannerImage}
            alt="DigiTools dashboard preview"
            className="relative mx-auto w-full max-w-[540px] rounded-[1.75rem] object-cover shadow-2xl shadow-violet-200/70"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
