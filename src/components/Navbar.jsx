const Navbar = ({ cart }) => {
  const links = ["Products", "Features", "Pricing", "FAQ"];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="navbar max-w-7xl mx-auto min-h-16 px-4">
        <div className="flex-1">
          <a href="#top" className="text-2xl sm:text-3xl font-black text-violet-600">
            DigiTools
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-violet-600">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 ml-5">
          <div className="relative grid size-11 place-items-center rounded-full bg-violet-50">
            <img
              src="/assets/shopping-cart.png"
              alt="Cart"
              className="size-5 object-contain"
            />
            <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-violet-600 px-1.5 text-xs font-bold text-white">
              {cart.length}
            </span>
          </div>

          <a
            href="#products"
            className="btn hidden sm:inline-flex rounded-full border-none bg-violet-600 px-6 text-white hover:bg-violet-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
