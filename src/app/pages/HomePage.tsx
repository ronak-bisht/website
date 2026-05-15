import { ArrowRight, Zap, Target, Shield, Users, Award, ExternalLink, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { TechStack } from "../components/TechStack";
import clinet1 from "../../assets/cld9.png";
import clinet2 from "../../assets/expert.png";
import clinet3 from "../../assets/pluspoint.png";
import clinet4 from "../../assets/chrstic.png";
import clinet5 from "../../assets/10ex.svg";

export function HomePage() {
  const partnerLogos = [
   clinet1,
   clinet2,
   clinet3,
   clinet4,
   clinet5
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Expert Team",
      description: "Experienced developers with expertise in latest technologies and best practices.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored solutions designed specifically for your business needs and goals.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security, data protection, and compliance standards.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks to ensure excellence at every step.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />

    

      {/* Services Section */}
      <Services />
  {/* Subtle Projects Bar with Moving Logos */}
      <section className="py-8 bg-slate-900 border-y border-slate-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-6 shrink-0 z-20 bg-slate-900 pr-4">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                Recent Work
              </span>
              <div className="h-4 w-px bg-slate-700 hidden md:block"></div>
            </div>
            
            <div className="relative flex overflow-hidden w-full">
              <div className="flex whitespace-nowrap animate-marquee items-center">
                {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div key={index} className="mx-12 shrink-0">
                    <img 
                      src={logo} 
                      alt="Partner Logo" 
                      className="h-8 w-auto opacity-60 saturate-50 hover:opacity-100 hover:saturate-100 transition-all duration-300" 
                    />
                  </div>
                ))}
              </div>
              {/* Edge Fades for smooth scrolling appearance */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}} />
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Enorm Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through expertise, innovation, and customer-centric approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and bring your vision to life with cutting-edge technology and expert execution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-base px-8 font-semibold">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
