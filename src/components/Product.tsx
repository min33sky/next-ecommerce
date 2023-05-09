import Link from "next/link";
import ProductImage from "@/components/ProductImage";

interface Props {
  product: Product;
}

export default function Product({ product }: Props) {
  const { id, title, price, description } = product;

  return (
    <Link
      prefetch={false}
      href={`/products/${id}`}
      className={`group flex h-96 flex-col rounded border p-5 transition-transform duration-200 ease-out hover:scale-105 `}
    >
      {/* 이미지 컴포넌트 */}
      <div className={`relative max-h-72 flex-1`}>
        <ProductImage product={product} fill />
      </div>

      <div
        className={`mb-1 mt-4 flex items-center justify-between font-semibold`}
      >
        <p className={"w-44 truncate"}>{title}</p>
        <p>${price}</p>
      </div>

      <p className={`line-clamp-2 w-64 text-xs italic text-gray-600`}>
        {description}
      </p>
    </Link>
  );
}
