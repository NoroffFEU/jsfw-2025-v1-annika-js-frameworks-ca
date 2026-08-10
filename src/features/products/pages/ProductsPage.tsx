import { Link } from "react-router";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

import { getProducts } from "../services/productsApi";
import type { Product } from "../types/product";

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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
        <p role="alert">{error}</p>
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

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedSearchTerm),
  );

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="mt-6 max-w-md">
        <label className="mb-2 block font-medium" htmlFor="product-search">
          Search products
        </label>

        <input
          className="w-full rounded-md border px-3 py-2"
          id="product-search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by product name..."
        />

        {normalizedSearchTerm && (
          <div className="mt-2 overflow-hidden rounded-md border bg-white">
            {filteredProducts.length > 0 ? (
              <ul aria-label="Product search results">
                {filteredProducts.map((product) => (
                  <li className="border-b last:border-b-0" key={product.id}>
                    <Link
                      className="flex items-center gap-3 px-3 py-2 hover:bg-muted"
                      to={`/product/${product.id}`}
                    >
                      <img
                        className="h-12 w-12 rounded object-cover"
                        src={product.image.url}
                        alt=""
                      />

                      <span>{product.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-3 py-2" role="status">
                No products match your search.
              </p>
            )}
          </div>
        )}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
