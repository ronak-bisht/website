import { Scale, Gavel, Shield, FileText, Users, Award, Phone, Mail, Menu, ArrowRight, Quote, Briefcase, CheckCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LegalConsultantTemplate() {
  const practiceAreas = [
    { icon: Briefcase, title: "Corporate Law", desc: "Expert guidance for businesses on mergers, acquisitions, and compliance." },
    { icon: Gavel, title: "Civil Litigation", desc: "Aggressive and strategic representation in complex legal disputes." },
    { icon: Scale, title: "Family Law", desc: "Compassionate support for divorce, custody, and family-related matters." },
    { icon: Shield, title: "Intellectual Property", desc: "Protecting your innovations and creative assets globally." },
  ];

  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get("preview") === "true";

  return (
    <div className={`bg-white min-h-screen font-serif ${!isPreview ? "pt-16" : ""}`}>
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-[100] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Scale className="text-amber-500" size={32} />
              <span className="text-2xl font-bold tracking-tighter uppercase">Justice & Co.</span>
            </div>
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#" className="text-sm font-medium hover:text-amber-500 transition-colors uppercase tracking-widest">Practice Areas</a>
              <a href="#" className="text-sm font-medium hover:text-amber-500 transition-colors uppercase tracking-widest">Our Attorneys</a>
              <a href="#" className="text-sm font-medium hover:text-amber-500 transition-colors uppercase tracking-widest">About</a>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-none px-8 font-bold">Free Consultation</Button>
            </nav>
            <button className="lg:hidden"><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center py-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.2]" 
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">Your Trusted Advocates in <span className="text-amber-500 italic">Complex</span> Legal Matters.</h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">Dedicated to providing high-caliber legal representation with integrity and a results-driven approach. Protecting your rights and your future.</p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 h-16 text-lg rounded-none">Meet Our Team</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-16 text-lg rounded-none">Our Success Stories</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Practice Areas</h2>
              <div className="w-20 h-1.5 bg-amber-500"></div>
            </div>
            <p className="text-slate-600 max-w-sm italic">Broad expertise across various legal disciplines to serve individual and corporate needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, i) => (
              <Card key={i} className="p-10 border-none shadow-sm hover:shadow-xl transition-all group bg-white">
                <area.icon size={48} className="text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{area.desc}</p>
                <a href="#" className="text-amber-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={60} className="mx-auto text-amber-100 mb-8" />
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl italic text-slate-900 mb-10 leading-relaxed">
              "The legal expertise and personal attention I received were beyond my expectations. They didn't just win my case; they protected my family's legacy."
            </h2>
            <div className="font-bold text-slate-900 text-lg uppercase tracking-widest">- Robert H. Patterson</div>
            <div className="text-slate-500 text-sm">Corporate Client</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-slate-400 mb-10 text-lg">Schedule a confidential consultation with one of our expert attorneys today.</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-12 h-16 rounded-none font-bold">Request Appointment</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Scale className="text-amber-500" size={28} />
                <span className="text-xl font-bold uppercase tracking-tighter">Justice & Co.</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm">
                Legal excellence with a focus on integrity, transparency, and results. Serving our community for over 30 years.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm text-slate-400 mb-8">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-slate-500">
                  <Phone size={18} className="text-amber-500" />
                  <span>+1 (800) JUSTICE</span>
                </li>
                <li className="flex items-center gap-4 text-slate-500">
                  <Mail size={18} className="text-amber-500" />
                  <span>legal@justiceandco.law</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm text-slate-400 mb-8">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-slate-900 border-none px-4 py-3 flex-1 focus:ring-1 focus:ring-amber-500" />
                <Button className="bg-amber-600 hover:bg-amber-700 rounded-none">Join</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}