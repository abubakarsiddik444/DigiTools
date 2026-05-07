const Footer = () => {
  return (
    <footer id="faq" className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto grid gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-black text-violet-300">DigiTools</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            A premium digital marketplace for AI tools, design assets, creator
            bundles, and productivity products.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Platform</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <p>support@digitools.dev</p>
            <p>Available 24/7</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        Copyright 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
