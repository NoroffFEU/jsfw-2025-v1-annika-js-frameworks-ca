import { useEffect, useState } from "react";

import { getProducts } from "../services/productsApi";
import type { Product } from "../types/product";

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const productData = await getProducts();
        setProducts(productData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Could not fetch products");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="min-h-screen p-8">
        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen p-8">
        <p role="alert">Could not load products: {error}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="min-h-screen p-8">
        <p>No products found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Products</h1>
    </section>
  );
}
