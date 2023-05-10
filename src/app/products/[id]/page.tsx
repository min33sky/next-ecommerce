import ProductImage from "@/components/ProductImage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const product: Product = await response.json();

    return {
      title: `${product.title} | NextShop`,
      description: `${product.title} description`,
    };
  } catch (error) {
    return {
      title: `Product Not Found | NextShop`,
    };
  }
}

export default async function ProductDetailPage({ params: { id } }: Props) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await response.json();

    return (
      <div
        className={`mx-auto mt-48 flex max-w-5xl flex-col items-center gap-8 px-4 pb-10 md:flex-row`}
      >
        <ProductImage product={product} />
        <div className={`divide-y`}>
          <div className={`space-y-2 pb-8`}>
            <h1 className={`text-2xl font-bold md:text-4xl`}>
              {product.title}
            </h1>
            <h2 className={`text-lg font-bold text-gray-500 md:text-3xl`}>
              ${product.price}
            </h2>
          </div>

          <div className={`pt-8`}>
            <p className={`text-xs md:text-sm`}>{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
