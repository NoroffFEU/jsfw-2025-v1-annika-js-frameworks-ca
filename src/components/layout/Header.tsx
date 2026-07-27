import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink className="text-xl font-bold" to="/">
          Online Shop
        </NavLink>

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
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold underline underline-offset-4" : ""
                }
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
