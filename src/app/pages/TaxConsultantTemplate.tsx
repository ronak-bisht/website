import { Receipt, Calculator, HandCoins, UserCheck, ShieldCheck, CheckCircle2, Clock, DollarSign, HelpCircle, Check, Menu, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TaxConsultantTemplate() {
  const taxServices = [
    {
      icon: Receipt,
      title: "Income Tax Filing",
      desc: "Hassle-free e-filing for individuals, freelancers, and businesses with 100% accuracy.",
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      desc: "Strategic investments and deduction planning to legally minimize your tax liability.",
    },
    {
      icon: HandCoins,
      title: "GST Compliance",
      desc: "End-to-end GST registration, monthly returns, and reconciliation services.",
    },
    {
      icon: UserCheck,
      title: "Notice Assistance",
      desc: "Expert representation and drafting for income tax notices and scrutiny cases.",
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Template Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Receipt className="text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">TaxExpert</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Process</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Services</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-emerald-600">Pricing</a>
              <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600">Login</Button>
            </nav>
            <button className="md:hidden"><Menu size={20} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-emerald-950 mb-6 leading-tight">
                Simplify Taxes. <br />
                <span className="text-emerald-600">Maximize Savings.</span>
              </h1>
              <p className="text-lg text-emerald-800/80 mb-8">
                Don't let complex tax laws stress you out. We provide personalized tax consulting to help you keep more of your hard-earned money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                  File Your Taxes Now
                </Button>
                <div className="flex items-center gap-2 text-emerald-700 font-medium px-4">
                  <Clock size={20} />
                  <span>Quick 24-Hour Response</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-emerald-900/60">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/150?img=${i+10}`} alt="client" />
                  ))}
                </div>
                <p>Trusted by 1000+ taxpayers</p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1000&auto=format&fit=crop"
                alt="Tax Filing"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <ShieldCheck className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-emerald-950">100% Secure</div>
                    <div className="text-sm text-gray-500">Encrypted Data Filing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Steps to Stress-Free Tax Filing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures your taxes are handled efficiently and accurately, saving you time and worry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Documents",
                description: "Securely upload your financial documents through our portal or share them directly.",
              },
              {
                step: "2",
                title: "Expert Review & Preparation",
                description: "Our tax consultants meticulously review your data and prepare your tax returns.",
              },
              {
                step: "3",
                title: "Final Approval & Filing",
                description: "Approve your prepared returns, and we'll handle the e-filing with the tax authorities.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center border-none bg-emerald-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Services</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Comprehensive Tax Solutions</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {taxServices.map((s, i) => (
            <Card key={i} className="p-8 border-none bg-slate-50 hover:bg-emerald-600 hover:text-white transition-all group duration-300">
              <s.icon className="mb-6 text-emerald-600 group-hover:text-white" size={40} />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 group-hover:text-emerald-50 text-sm leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing, No Hidden Fees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your individual or business needs. All plans include expert support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Individual Basic",
                price: "$99",
                features: ["Income Tax Filing (Salaried)", "Standard Deductions", "Email Support"],
              },
              {
                name: "Individual Pro",
                price: "$199",
                features: ["All Basic features", "Capital Gains/Losses", "Rental Income", "Phone Support", "Tax Planning Advice"],
                highlight: true,
              },
              {
                name: "Business Starter",
                price: "$499",
                features: ["GST Filing (Monthly)", "Income Tax Filing (Small Business)", "Balance Sheet Preparation", "Dedicated Consultant"],
              },
            ].map((plan, index) => (
              <Card key={index} className={`p-8 border-none shadow-lg ${plan.highlight ? "bg-emerald-600 text-white" : "bg-white text-gray-900"}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                  <DollarSign className={`w-8 h-8 ${plan.highlight ? "text-emerald-200" : "text-emerald-600"}`} />
                </div>
                <p className={`text-4xl font-extrabold mb-8 ${plan.highlight ? "text-white" : "text-emerald-600"}`}>{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.highlight ? "text-emerald-200" : "text-emerald-600"}`} />
                      <span className={`${plan.highlight ? "text-emerald-100" : "text-gray-700"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.highlight ? "bg-white text-emerald-600 hover:bg-emerald-50" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`} size="lg">
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-emerald-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Thousands Trust Our Tax Expertise</h2>
            <div className="space-y-6">
              {[
                { title: "Maximum Refund Guaranteed", text: "We analyze every possible deduction to ensure you get the highest refund." },
                { title: "Year-Round Support", text: "We don't just disappear after March. We're here for you 365 days a year." },
                { title: "Zero Error Assurance", text: "Multi-level review process to ensure your filings are audit-proof." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-emerald-100/70 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerald-900/50 p-8 rounded-3xl border border-emerald-800">
            <h3 className="text-2xl font-bold mb-6">Get a Free Tax Review</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-emerald-800/50 border border-emerald-700 text-white placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-emerald-800/50 border border-emerald-700 text-white placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <select className="w-full p-4 rounded-xl bg-emerald-800/50 border border-emerald-700 text-emerald-400 focus:outline-none">
                <option>Individual Filing</option>
                <option>Business/GST</option>
                <option>Tax Planning</option>
              </select>
              <Button className="w-full py-6 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-lg">
                Start Saving Today
              </Button>
            </form>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Template Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Receipt className="text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">TaxExpert</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-emerald-600"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-600"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-600"><Instagram size={20} /></a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-4">
            <p>© 2026 TaxExpert Consulting. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}