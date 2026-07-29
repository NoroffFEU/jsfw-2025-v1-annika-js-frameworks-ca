import { NavLink } from "react-router";
import { useCartStore } from "@/features/cart/store/cartStore";

export function Header() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink className="text-xl font-bold" to="/">
          Online Shop
        </NavLink>

        <div className="flex items-center gap-6">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold underline underline-offset-4" : ""
                  }
                  end
                  to="/"
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold underline underline-offset-4" : ""
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <NavLink
            aria-label={`Shopping cart with ${totalItems} items`}
            className={({ isActive }) =>
              isActive ? "font-semibold underline underline-offset-4" : ""
            }
            to="/cart"
          >
            Cart ({totalItems})
          </NavLink>
        </div>
      </div>
    </header>
  );
}
