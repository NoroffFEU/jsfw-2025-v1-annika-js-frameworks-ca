import { Toaster } from "@/components/ui/sonner";
import { AppRoutes } from "@/routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
