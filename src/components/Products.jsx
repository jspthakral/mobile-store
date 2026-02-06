import { mobiles } from "../data/mobiles_data";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Available mobile phones</h2>
      <div className="row g-4">
        {mobiles.map((mobile) => (
          <ProductCard
            key={mobile.id}
            name={mobile.name}
            price={mobile.price}
            inStock={mobile.inStock}
            image={mobile.image}
          />
        ))}
      </div>
    </div>
  );
}
export default Products;
