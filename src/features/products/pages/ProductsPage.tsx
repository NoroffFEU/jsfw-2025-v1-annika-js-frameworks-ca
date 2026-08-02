import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

import { getProducts } from "../services/productsApi";
import type { Product } from "../types/product";

type SortOption =
  | "default"
  | "price-low-high"
  | "price-high-low"
  | "rating-high-low";

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("default");

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

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedSearchTerm),
  );

  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "price-low-high":
      sortedProducts.sort(
        (firstProduct, secondProduct) =>
          firstProduct.discountedPrice - secondProduct.discountedPrice,
      );
      break;

    case "price-high-low":
      sortedProducts.sort(
        (firstProduct, secondProduct) =>
          secondProduct.discountedPrice - firstProduct.discountedPrice,
      );
      break;

    case "rating-high-low":
      sortedProducts.sort(
        (firstProduct, secondProduct) =>
          secondProduct.rating - firstProduct.rating,
      );
      break;

    default:
      break;
  }

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
      </div>
      <div className="mt-4 max-w-md">
        <label className="mb-2 block font-medium" htmlFor="product-sort">
          Sort products
        </label>

        <select
          className="w-full rounded-md border px-3 py-2"
          id="product-sort"
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value as SortOption)}
        >
          <option value="default">Default order</option>
          <option value="price-low-high">Price: low to high</option>
          <option value="price-high-low">Price: high to low</option>
          <option value="rating-high-low">Rating: high to low</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-8" role="status">
          No products match your search.
        </p>
      )}
    </section>
  );
}
