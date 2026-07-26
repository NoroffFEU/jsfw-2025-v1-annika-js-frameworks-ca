import { useParams } from "react-router";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Product</h1>
      <p>Product ID: {id}</p>
    </section>
  );
}
