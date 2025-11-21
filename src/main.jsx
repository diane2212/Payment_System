import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Components/Layout/Layout.jsx";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer.jsx";
import ProductDetail from "./Pages/ProductDetail.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      
      <ErrorBoundary FallbackComponent={FallbackErrorGeneric}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<p>CARGANDO…</p>}>
                    <CategoryContainer />
                  </Suspense>
                }
              />
              
              <Route path="/products/:id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>
);


function FallbackErrorGeneric({ error }) {
  console.error("ERROR GLOBAL:", error);
  return <p>Error genérico!</p>;
}
