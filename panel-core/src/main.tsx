import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/theme-provider";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
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
);
