import { useEffect } from "react";

import { Toaster } from "@/components/ui/sonner";
import { AppRoutes } from "@/routes/AppRoutes";

function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", mediaQuery.matches);
    };

    applyTheme();
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, []);

  return (
    <>
      <AppRoutes />
      <Toaster
        position="top-right"
        offset={{
          top: 70,
          right: "max(1rem, calc((100vw - 80rem) / 2 + 2rem))",
        }}
        mobileOffset={{
          top: 70,
          right: 16,
        }}
      />
    </>
  );
}

export default App;
