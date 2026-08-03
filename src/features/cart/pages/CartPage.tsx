import { Button } from "@/components/ui/button";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const navigate = useNavigate();

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
    toast.success("Item removed from cart");
  };

  const handleDecreaseQuantity = (productId: string, quantity: number) => {
    if (quantity === 1) {
      handleRemoveItem(productId);
    } else {
      updateQuantity(productId, quantity - 1);
    }
  };

  if (items.length === 0) {
    return (
      <section className="min-h-screen p-8">
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="mt-4">Your cart is empty.</p>
      </section>
    );
  }

  const totalPrice = items.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0,
  );

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Cart</h1>

      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li className="flex gap-4 rounded-lg border p-4" key={item.id}>
            <img
              className="h-32 w-32 rounded object-cover"
              src={item.image.url}
              alt={item.image.alt || item.title}
            />

            <div className="flex flex-1 flex-col gap-3">
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <p>${item.discountedPrice.toFixed(2)} each</p>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  aria-label={`Decrease quantity of ${item.title}`}
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                >
                  −
                </Button>

                <span>Quantity: {item.quantity}</span>

                <Button
                  type="button"
                  aria-label={`Increase quantity of ${item.title}`}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>

                <Button type="button" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t pt-4">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <Button
        className="mt-4"
        type="button"
        onClick={() => navigate("/checkout-success")}
      >
        Checkout
      </Button>
    </section>
  );
}
