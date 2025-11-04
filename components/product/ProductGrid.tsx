// components/product/ProductGrid.tsx
import ProductCard from "./ProductCard";
import productsData from "../../data/products.json";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  description: string;
}

export default function ProductGrid() {
  const products: Product[] = productsData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(({ id, name, price, image, description }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          price={price}
          image={image}
          description={description}
        />
      ))}
    </div>
  );
}
