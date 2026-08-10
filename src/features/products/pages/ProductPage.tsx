import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../services/productsApi";
import type { Product } from "../types/product";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/features/cart/store/cartStore";
import { toast } from "sonner";
import { Star } from "lucide-react";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      setProduct(null);

      try {
        const productData = await getProduct(id);
        setProduct(productData);
      } catch (caughtError) {
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError("Could not fetch product");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (!id) {
    return (
      <section className="min-h-screen p-8">
        <p role="alert">No product ID provided</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="min-h-screen p-8">
        <p>Loading product...</p>
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

  if (!product) {
    return (
      <section className="min-h-screen p-8">
        <p>Product not found</p>
      </section>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.title} added to cart`);
  };

  const hasDiscount = product.price > product.discountedPrice;

  return (
    <section className="min-h-screen p-8">
      <div className="grid gap-8 md:grid-cols-2">
        <img
          className="w-full rounded-lg object-cover"
          src={product.image.url}
          alt={product.image.alt || product.title}
        />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p>{product.description}</p>
          <div className="flex items-center gap-1">
            <span className="sr-only">Rating: {product.rating} out of 5</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                aria-hidden="true"
                className={
                  star <= product.rating
                    ? "h-5 w-5 fill-current text-foreground"
                    : "h-5 w-5 text-muted-foreground"
                }
                key={star}
              />
            ))}
          </div>

          {hasDiscount ? (
            <div>
              <span className="mr-2 text-xl font-semibold">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <span className="text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          )}
          <Button type="button" onClick={handleAddToCart}>
            Add to cart
          </Button>

          {product.tags.length > 0 && (
            <div>
              <h2 className="font-semibold">Tags</h2>
              <ul className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <li
                    className="rounded-md border border-border bg-secondary px-2 py-1 text-secondary-foreground"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold">Reviews</h2>

            {product.reviews.length > 0 ? (
              <ul className="mt-2 space-y-4">
                {product.reviews.map((review) => (
                  <li className="rounded border p-4" key={review.id}>
                    <p className="font-semibold">{review.username}</p>
                    <p>Rating: {review.rating}/5</p>
                    <p>{review.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
