import { Link } from "react-router";

import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.price > product.discountedPrice;

  return (
    <article className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-lg">
      {hasDiscount && (
        <span className="absolute top-3 left-3 z-10 rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white">
          Sale
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

          <p>Rating: {product.rating}/5</p>

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
