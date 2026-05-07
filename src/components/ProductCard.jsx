import { useState } from "react";

const tagStyles = {
  popular: "bg-violet-100 text-violet-700",
  "best seller": "bg-emerald-100 text-emerald-700",
  new: "bg-sky-100 text-sky-700",
  premium: "bg-amber-100 text-amber-700",
  "best value": "bg-rose-100 text-rose-700",
};

const ProductCard = ({ product, handleAddToCart }) => {
  const [buttonText, setButtonText] = useState("Buy Now");
  const { icon, name, description, price, period, features, tag, tagType } =
    product;
  const iconSrc = `${import.meta.env.BASE_URL}${icon}`;

  const handleBuyNow = () => {
    handleAddToCart(product);
    setButtonText("Added to cart");
    setTimeout(() => setButtonText("Buy Now"), 1400);
  };

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="grid size-14 place-items-center rounded-2xl bg-slate-50">
          <img src={iconSrc} alt="" className="size-8 object-contain" />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            tagStyles[tag] || "bg-slate-100 text-slate-700"
          }`}
        >
          {tagType}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-950">{name}</h3>

      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5">
        <span className="text-4xl font-black text-slate-950">${price}</span>
        <span className="ml-1 text-sm font-medium text-slate-400">
          / {period}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm font-medium text-slate-600">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="font-bold text-emerald-500">+</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        className="btn mt-8 w-full rounded-full border-none bg-violet-600 text-white hover:bg-violet-700"
      >
        {buttonText}
      </button>
    </article>
  );
};

export default ProductCard;
