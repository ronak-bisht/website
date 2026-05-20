import { ShieldCheck, Briefcase, FileText, PieChart, Users, Scale, ArrowRight, Lightbulb, Workflow, Handshake, Quote, Menu, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CAConsultantTemplate() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Statutory & Internal Audit",
      description: "Comprehensive auditing services ensuring compliance with regulatory standards and internal controls.",
    },
    {
      icon: Briefcase,
      title: "Corporate Advisory",
      description: "Expert guidance on business restructuring, mergers, acquisitions, and strategic financial planning.",
    },
    {
      icon: FileText,
      title: "Taxation Compliance",
      description: "Direct and indirect tax planning, litigation support, and filing for corporate entities.",
    },
    {
      icon: PieChart,
      title: "Financial Reporting",
      description: "Preparation of financial statements in accordance with Ind AS, IFRS, and local GAAP.",
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Template Header */}
      <header className="bg-white border-b sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">CA ASSOCIATES</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600">Practice Areas</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600">Our Team</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600">About</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Client Portal</Button>
            </nav>
            <button className="lg:hidden p-2 text-slate-600"><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-[#0F172A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6 border border-blue-500/30">
                Chartered Accountants & Associates
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Integrity in Audit. <br />
                <span className="text-blue-400">Excellence in Advisory.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Providing end-to-end financial solutions for businesses. We combine years of expertise with a forward-thinking approach to ensure your business remains compliant and profitable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Request Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                  Our Practice Areas
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
                alt="Professional Office"
                className="rounded-2xl shadow-2xl border border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years Experience", value: "20+" },
            { label: "Corporate Clients", value: "500+" },
            { label: "Expert Partners", value: "12" },
            { label: "Audits Completed", value: "2k+" },
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center shadow-xl border-none">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive financial services tailored to meet the dynamic needs of modern corporations and startups.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Streamlined Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a meticulous approach to deliver accurate and insightful financial services, ensuring transparency and efficiency at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Initial Consultation",
                description: "Understand your unique business needs, challenges, and objectives through a detailed discussion.",
              },
              {
                icon: Workflow,
                title: "Strategic Planning",
                description: "Develop a tailored action plan, outlining scope, timelines, and expected outcomes.",
              },
              {
                icon: FileText,
                title: "Execution & Reporting",
                description: "Implement the plan with regular updates, detailed reporting, and proactive communication.",
              },
              {
                icon: Handshake,
                title: "Review & Support",
                description: "Conduct post-engagement review, provide ongoing support, and ensure long-term success.",
              },
            ].map((step, index) => (
              <Card key={index} className="p-8 text-center border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About The Firm */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
                alt="Meeting"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Our Firm</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Founded on the principles of transparency and excellence, CA Consultant and Associates is a leading multi-disciplinary firm. Our team of associates brings diverse experience from big-four firms and industry leadership.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We are committed to delivering exceptional value and fostering long-term relationships with our clients, helping them navigate complex financial landscapes with confidence.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Scale, text: "Uncompromising Ethical Standards" },
                  { icon: Users, text: "Client-Centric Collaborative Approach" },
                  { icon: ShieldCheck, text: "Robust Data Security and Confidentiality" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <item.icon className="text-blue-600" size={20} />
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team comprises highly qualified and experienced professionals dedicated to your financial success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                title: "Managing Partner",
                image: "https://i.pravatar.cc/150?img=68",
                bio: "Specializes in corporate finance and M&A advisory with over 20 years of experience.",
              },
              {
                name: "Jane Smith",
                title: "Head of Audit",
                image: "https://i.pravatar.cc/150?img=45",
                bio: "Leads our audit practice, ensuring compliance and robust internal controls.",
              },
              {
                name: "Robert Brown",
                title: "Taxation Expert",
                image: "https://i.pravatar.cc/150?img=61",
                bio: "Provides strategic tax planning and compliance services for diverse clients.",
              },
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <ImageWithFallback src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear directly from businesses that have achieved significant growth and stability with our expert guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "CA Consultant & Associates transformed our financial reporting. Their attention to detail and strategic advice were invaluable.", name: "CEO, Tech Innovations Inc." },
              { quote: "The team provided exceptional support during our merger. Their corporate advisory services are truly top-notch.", name: "Founder, Global Solutions Ltd." },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 border-slate-100 shadow-md">
                <Quote className="text-blue-400 mb-4" size={32} />
                <p className="text-slate-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Schedule a strategic session with our partners to discuss your audit and financial goals.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-10">
            Book Appointment
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Template Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">C</div>
                <span className="text-xl font-bold tracking-tight">CA ASSOCIATES</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Your trusted partner in audit, tax, and advisory. Committed to excellence and integrity in every engagement.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3"><Phone size={16} /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-3"><Mail size={16} /> info@ca-associates.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Office</h4>
              <p className="text-slate-400 text-sm">123 Financial District,<br />Wall Street, NY 10005</p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2026 CA Consultant & Associates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}