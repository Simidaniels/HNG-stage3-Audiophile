// components/product/ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
  id: string;       // kept for reference, prefixed with '_' in destructuring
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({ name, price, image, description }: ProductCardProps) {
  return (
    <div className="product-card border rounded-lg overflow-hidden shadow-sm p-4">
      <div className="product-image mb-4">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover w-full h-64 rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 font-medium">${price.toFixed(2)}</p>
      <p className="description">{description}</p>
    </div>
  );
}
