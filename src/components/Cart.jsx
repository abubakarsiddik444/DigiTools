const Cart = ({ cart, handleRemove, handleCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <p className="mt-1 text-sm text-slate-500">
            {cart.length} selected product{cart.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium text-slate-500">Total</p>
          <p className="text-3xl font-black text-slate-950">${total}</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="grid min-h-64 place-items-center text-center">
          <div>
            <img
              src="/assets/shopping-cart.png"
              alt=""
              className="mx-auto size-14 opacity-50"
            />
            <h3 className="mt-5 text-xl font-bold">Your cart is empty</h3>
            <p className="mt-2 text-sm text-slate-500">
              Add a product to see it here.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.cartItemId}
              className="grid gap-4 rounded-2xl bg-slate-50 p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white">
                  <img src={item.icon} alt="" className="size-7 object-contain" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">{item.name}</h3>
                  <p className="text-sm text-slate-500">/{item.period}</p>
                </div>
              </div>

              <p className="text-lg font-black text-slate-950">${item.price}</p>

              <button
                onClick={() => handleRemove(item.cartItemId)}
                className="btn btn-outline btn-sm rounded-full border-rose-200 text-rose-600 hover:border-rose-600 hover:bg-rose-600"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={handleCheckout}
            className="btn mt-4 w-full rounded-full border-none bg-violet-600 text-white hover:bg-violet-700"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
