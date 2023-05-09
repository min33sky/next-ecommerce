import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();

  return (
    <main>
      <section className={"flex flex-col space-y-12 pb-44"}>
        <h1 className={"text-center text-5xl font-bold"}>Deals of the Day</h1>

        {products?.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </section>
    </main>
  );
}
