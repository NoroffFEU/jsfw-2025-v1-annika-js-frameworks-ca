import { Route, Routes } from "react-router";

import { CartPage } from "@/features/cart/pages/CartPage";
import { CheckoutSuccessPage } from "@/features/cart/pages/CheckoutSuccessPage";
import { ContactPage } from "@/features/contact/pages/ContactPage";
import { ProductPage } from "@/features/products/pages/ProductPage";
import { ProductsPage } from "@/features/products/pages/ProductsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
