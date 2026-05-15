import { Services } from "../components/Services";
import { TechStack } from "../components/TechStack";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching Home Page Theme */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-500/30">
              🛠️ Comprehensive Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a full spectrum of software development services to help your business grow, innovate, and succeed in the digital world.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <TechStack />

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">Our team is ready to help you build the technology of tomorrow.</p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Talk to Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
