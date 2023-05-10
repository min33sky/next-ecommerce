import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();

  return (
    <main className={`mx-auto mt-48 min-h-screen max-w-7xl px-8 xl:px-0`}>
      <section className={"flex flex-col space-y-12 pb-44"}>
        <h1 className={"text-center text-5xl font-bold"}>Deals of the Day</h1>

        <div
          className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8`}
        >
          {products?.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </section>
    </main>
  );
}
