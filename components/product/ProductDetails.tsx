// components/product/ProductDetails.tsx
import { useParams } from "next/navigation";
import productsData from "../../data/products.json";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  description: string;
}

export default function ProductDetails() {
  const { slug } = useParams();

  // Compute product synchronously — no useEffect needed
  const product: Product | undefined = productsData.find((p: Product) => p.slug === slug);

  if (!product) return <p className="text-center mt-8">Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          {/* Add to cart button or quantity selector can go here */}
        </div>
      </div>
    </div>
  );
}
