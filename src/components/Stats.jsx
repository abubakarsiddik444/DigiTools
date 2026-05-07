const Stats = () => {
  return (
    <section id="features" className="bg-[#4F39F6] py-10 sm:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 px-4 text-center text-white md:grid-cols-3">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black">50K+</h2>
          <p className="mt-2 text-sm font-medium text-slate-300">Active Users</p>
        </div>

        <div className="border-y border-white/10 py-8 md:border-x md:border-y-0 md:py-0">
          <h2 className="text-4xl sm:text-5xl font-black">200+</h2>
          <p className="mt-2 text-sm font-medium text-slate-300">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-4xl sm:text-5xl font-black">4.9/5</h2>
          <p className="mt-2 text-sm font-medium text-slate-300">User Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
