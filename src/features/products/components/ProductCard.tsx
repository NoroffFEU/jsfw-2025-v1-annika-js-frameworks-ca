import { Link } from "react-router";
import { Star } from "lucide-react";

import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.price > product.discountedPrice;

  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );

  return (
    <article className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-lg">
      {hasDiscount && (
        <span className="absolute left-3 top-3 rounded bg-red-700 px-2 py-1 text-sm font-semibold text-white">
          {discountPercentage}% OFF
        </span>
      )}

      <Link to={`/product/${product.id}`}>
        <img
          className="aspect-square w-full object-cover"
          src={product.image.url}
          alt={product.image.alt || product.title}
        />

        <div className="space-y-2 p-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>

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
              <span className="mr-2 font-semibold">
                ${product.discountedPrice.toFixed(2)}
              </span>
              <span className="text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
