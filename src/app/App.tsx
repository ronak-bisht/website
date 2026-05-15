import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FooterNew } from "./components/FooterNew";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import favicon from "../assets/favicon.png";

export default function App() {
  useEffect(() => {
    document.title = "Enorm Conect | connecting people emporing progress";

    let link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    link.type = 'image/jpeg';
    document.head.appendChild(link);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <FooterNew />
      </div>
    </BrowserRouter>
  );
}