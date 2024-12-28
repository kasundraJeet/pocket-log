import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LayoutWrapper from "@/components/layout/LayoutWrapper.jsx";
import { Toaster } from "@/components/ui/sonner"
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <LayoutWrapper>
     <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </LayoutWrapper>
);
