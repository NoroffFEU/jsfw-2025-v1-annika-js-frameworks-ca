import { useEffect } from "react";
import { Link } from "react-router";

import { useCartStore } from "../store/cartStore";

export function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Checkout successful</h1>

      <p className="mt-4">
        Thank you for your order. Your cart has been cleared.
      </p>

      <Link
        className="mt-6 inline-block font-semibold underline underline-offset-4"
        to="/"
      >
        Continue shopping
      </Link>
    </section>
  );
}
