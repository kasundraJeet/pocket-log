import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/theme-provider";
import "./index.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from "./App.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools initialIsOpen={false} />
  <ThemeProvider storageKey="vite-ui-theme">
    <LayoutWrapper>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </LayoutWrapper>
  </ThemeProvider>
  </QueryClientProvider>
);
