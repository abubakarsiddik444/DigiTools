import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const selectedProduct = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}-${Math.random()}`,
    };

    setCart((currentCart) => [...currentCart, selectedProduct]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemove = (cartItemId) => {
    const removedItem = cart.find((item) => item.cartItemId === cartItemId);
    const remaining = cart.filter((item) => item.cartItemId !== cartItemId);

    setCart(remaining);
    toast.error(`${removedItem?.name || "Product"} removed from cart`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty");
      return;
    }

    setCart([]);
    setShowCart(true);
    toast.info("Checkout complete. Cart cleared.");
  };

  return (
    <div className="min-h-screen bg-[#F6F7FB] text-slate-900">
      <Navbar cart={cart} />

      {!showCart && (
        <>
          <Banner />

          <Stats />
        </>
      )}

      <main
        id="products"
        className={`mx-auto px-4 py-16 sm:py-20 ${
          showCart ? "max-w-5xl" : "max-w-7xl"
        }`}
      >
        <div className={`text-center ${showCart ? "mb-10" : "mb-14"}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Digital Marketplace
          </p>

          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-[#111827]">
            Premium Digital Tools
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-3">
            Choose from our curated collection of premium digital products.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setShowCart(false)}
              className={`btn rounded-full px-8 min-w-36 ${
                !showCart
                  ? "bg-violet-600 border-none text-white"
                  : "btn-outline"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setShowCart(true)}
              className={`btn rounded-full px-8 min-w-36 ${
                showCart
                  ? "bg-violet-600 border-none text-white"
                  : "btn-outline"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {showCart ? (
          <Cart
            cart={cart}
            handleRemove={handleRemove}
            handleCheckout={handleCheckout}
          />
        ) : (
          <Products
            products={products}
            handleAddToCart={handleAddToCart}
          />
        )}
      </main>

      {!showCart && (
        <>
          <Steps />

          <Pricing />

          <Footer />
        </>
      )}

      <ToastContainer position="top-right" autoClose={1800} />
    </div>
  );
}

export default App;
