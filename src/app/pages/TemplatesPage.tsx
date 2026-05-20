import { useState } from "react";
import { X, Laptop, Smartphone, Tablet, ExternalLink } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CAConsultantTemplate } from "./CAConsultantTemplate";
import { TaxConsultantTemplate } from "./TaxConsultantTemplate";

export function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const templates = [
    {
      id: "ca-consultant",
      title: "Chartered Accountant",
      description: "Professional corporate design for accounting firms and financial consultants.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
      path: "/templates/ca-consultant",
    },
    {
      id: "tax-consultant",
      title: "Tax Specialist",
      description: "Modern, trust-focused layout for tax practitioners and small consulting agencies.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop",
      path: "/templates/tax-consultant",
    },
    {
      id: "legal-consultant",
      title: "Legal Consultant",
      description: "Elegant and authoritative design for law firms and legal practitioners.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
      path: "/templates/legal-consultant",
    },
    {
      id: "real-estate",
      title: "Real Estate Advisor",
      description: "Modern, high-conversion template for property consultants and real estate agencies.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      path: "/templates/real-estate",
    },
  ];

  const activeTemplate = templates.find((t) => t.id === selectedTemplate);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Template</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Select a professionally crafted template to start building your online presence. 
            Preview how they look on different devices before making a choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <ImageWithFallback
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => setSelectedTemplate(template.id)}
                    className="bg-white text-slate-900 hover:bg-white/90"
                  >
                    Live Preview
                  </Button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{template.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{template.description}</p>
                <Button 
                  onClick={() => setSelectedTemplate(template.id)}
                  variant="outline"
                  className="w-full border-slate-200"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setSelectedTemplate(null)}
          />
          
          <div className="relative bg-slate-100 w-full max-w-[1440px] h-full md:h-[95vh] rounded-none md:rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header / Control Bar */}
            <div className="bg-white border-b px-6 py-4 flex items-center justify-between z-50">
              <div className="flex items-center gap-6">
                <h2 className="font-bold text-slate-900 text-lg hidden sm:block">{activeTemplate?.title}</h2>
                <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200">
                  <button 
                    onClick={() => setViewMode("desktop")}
                    className={`p-2 rounded-md transition-all ${viewMode === "desktop" ? "bg-white shadow-sm text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
                    title="Desktop View"
                  >
                    <Laptop size={20} />
                  </button>
                  <button 
                    onClick={() => setViewMode("tablet")}
                    className={`p-2 rounded-md transition-all ${viewMode === "tablet" ? "bg-white shadow-sm text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
                    title="Tablet View"
                  >
                    <Tablet size={20} />
                  </button>
                  <button 
                    onClick={() => setViewMode("mobile")}
                    className={`p-2 rounded-md transition-all ${viewMode === "mobile" ? "bg-white shadow-sm text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
                    title="Mobile View"
                  >
                    <Smartphone size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 font-semibold px-6 hidden sm:flex">
                  Use Template
                </Button>
                <button 
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Viewport Container */}
            <div className="flex-1 overflow-hidden bg-slate-200 flex justify-center p-0 md:p-4 lg:p-8">
              <div 
                className={`bg-white transition-all duration-500 shadow-2xl overflow-hidden flex flex-col relative ${
                  viewMode === "desktop" ? "w-full" : 
                  viewMode === "tablet" ? "w-[768px]" : "w-[375px]"
                } ${viewMode !== "desktop" ? "rounded-[3rem] border-[12px] border-slate-900 shadow-2xl" : ""}`}
              >
                <iframe 
                  src={`${activeTemplate?.path}?preview=true`}
                  className="w-full h-full border-none bg-white"
                  title="Template Preview"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}