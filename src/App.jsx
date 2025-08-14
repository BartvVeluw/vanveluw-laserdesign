import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_100%_0%,#fafafa,white_30%,#f6f6f6_60%,white)] text-neutral-900">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producten" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}
