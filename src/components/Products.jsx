import ProductCard from "./ProductCard";

const Products = ({ products, handleAddToCart }) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
};

export default Products;
