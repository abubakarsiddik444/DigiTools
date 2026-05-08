const footerGroups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer id="faq" className="bg-[#111827] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr_1fr]">
          <div>
            <h2 className="text-3xl font-black">DigiTools</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold">{group.title}</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                {group.links.map((link) => (
                  <a key={link} href="#products" className="hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-base font-semibold">Social Links</h3>
            <div className="mt-4 flex gap-3">
              {["▶", "f", "𝕏"].map((social) => (
                <a
                  key={social}
                  href="#products"
                  aria-label={`DigiTools social link ${social}`}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-black text-[#111827] transition hover:bg-slate-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex flex-wrap gap-8">
            <a href="#products" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#products" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#products" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
