import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FooterNew } from "./components/FooterNew";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import {CAConsultantTemplate} from "./pages/CAConsultantTemplate";
import {TaxConsultantTemplate} from "./pages/TaxConsultantTemplate";
import {LegalConsultantTemplate} from "./pages/LegalConsultantTemplate";
import {RealEstateTemplate} from "./pages/RealEstateTemplate";
import { TemplatesPage } from "./pages/TemplatesPage";
import favicon from "../assets/favicon.png";

function AppLayout() {
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get("preview") === "true";

  return (
    <div className="min-h-screen bg-white">
      {!isPreview && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/ca-consultant" element={<CAConsultantTemplate />} />
          <Route path="/templates/tax-consultant" element={<TaxConsultantTemplate />} />
          <Route path="/templates/legal-consultant" element={<LegalConsultantTemplate />} />
          <Route path="/templates/real-estate" element={<RealEstateTemplate />} />
        </Routes>
      </main>
      {!isPreview && <FooterNew />}
    </div>
  );
}

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
      <AppLayout />
    </BrowserRouter>
  );
}