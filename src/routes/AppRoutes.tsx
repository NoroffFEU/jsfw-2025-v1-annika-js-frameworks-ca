import { Route, Routes } from "react-router";

import { ProductsPage } from "@/features/products/pages/ProductsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  );
}
