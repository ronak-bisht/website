import { Home, MapPin, Key, Building2, Search, ArrowRight, Phone, Mail, Menu, Star, CheckCircle2, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function RealEstateTemplate() {
  const features = [
    { icon: Search, title: "Market Analysis", desc: "Expert valuation and trend analysis for your property." },
    { icon: Key, title: "Closing Support", desc: "End-to-end assistance with legal and financial paperwork." },
    { icon: Building2, title: "Property Management", desc: "Professional maintenance and tenant management services." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Home className="text-white" size={24} />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">Prime<span className="text-blue-600">Assets</span></span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="font-semibold text-slate-600 hover:text-blue-600">Buy</a>
              <a href="#" className="font-semibold text-slate-600 hover:text-blue-600">Sell</a>
              <a href="#" className="font-semibold text-slate-600 hover:text-blue-600">Valuation</a>
              <a href="#" className="font-semibold text-slate-600 hover:text-blue-600">Agents</a>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-full">List a Property</Button>
            </nav>
            <button className="lg:hidden"><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                <Star size={14} fill="currentColor" /> Real Estate Excellence
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 leading-[1.1] mb-8">Find Your Dream <span className="text-blue-600">Sanctuary</span> in the City.</h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg">We provide expert advisory and premium property listings across the most exclusive neighborhoods.</p>
              
              {/* Search Box */}
              <div className="bg-white p-3 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-xl">
                <div className="flex-1 flex items-center px-4 gap-3 border-b sm:border-b-0 sm:border-r border-slate-100 py-3 sm:py-0">
                  <MapPin className="text-blue-600" size={20} />
                  <input type="text" placeholder="Location" className="w-full border-none focus:ring-0 outline-none text-slate-900 font-medium" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 rounded-xl font-bold">Search Now</Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                <ImageWithFallback src="https://images.unsplash.com/photo-1600585154340-be6191da95b8?q=80&w=1200&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs -rotate-3 border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/150?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white" />)}
                  </div>
                  <div className="text-sm font-bold text-slate-900">+5k Happy Residents</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Top rated agency for residential and commercial property investments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose PrimeAssets?</h2>
            <p className="text-slate-500">Unmatched expertise in property acquisitions and portfolio management.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-3xl group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <f.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Properties Sold", val: "1.2k+" },
            { label: "Active Listings", val: "500+" },
            { label: "Expert Agents", val: "45" },
            { label: "Awards Won", val: "12" }
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-white mb-2">{s.val}</div>
              <div className="text-slate-400 font-bold uppercase text-xs tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to sell your property at the best price?</h2>
          <p className="text-blue-100 mb-10 text-lg">Contact our valuation experts for a free market appraisal of your home.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-16 rounded-full font-bold">Contact an Agent</Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-white hover:bg-blue-700 px-10 h-16 rounded-full font-bold">Browse Listings</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Home className="text-white" size={20} />
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">Prime<span className="text-blue-600">Assets</span></span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
                Making luxury real estate accessible through technology and expert local knowledge. Find your next home with confidence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Instagram size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-blue-600">Buy a Home</a></li>
                <li><a href="#" className="hover:text-blue-600">Sell a Home</a></li>
                <li><a href="#" className="hover:text-blue-600">Property Valuation</a></li>
                <li><a href="#" className="hover:text-blue-600">Rentals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Office</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-600 mt-1 shrink-0" />
                  <span>450 Park Avenue South,<br />New York, NY 10016</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-600 shrink-0" />
                  <span>+1 (212) 555-0198</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© 2026 PrimeAssets Real Estate. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}