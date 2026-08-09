import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm sm:px-6 lg:px-8">
        <NavLink aria-label="Found home" className="inline-flex items-center" to="/">
          <img
            className="block h-6 w-auto dark:hidden"
            src="/Found_light.svg"
            alt="Found"
          />
          <img
            className="hidden h-6 w-auto dark:block"
            src="/Found_dark.svg"
            alt="Found"
          />
        </NavLink>
      </div>
    </footer>
  );
}
