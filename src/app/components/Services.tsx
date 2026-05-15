import {
  Code,
  Smartphone,
  ShoppingCart,
  Globe,
  Cloud,
  Palette,
  Database,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { Card } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Bespoke enterprise software solutions tailored to your business needs with scalability and security.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android using Flutter, React Native, and Swift.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description:
        "Full-featured e-commerce stores built on Shopify with custom themes, apps, and integrations.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with Next.js, React, and cutting-edge technologies.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description:
        "Cloud infrastructure, deployment, and DevOps services on AWS, Azure, and Google Cloud.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces and experiences that delight your customers.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description:
        "Robust database architecture with SQL, NoSQL, and optimization for peak performance.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Zap,
      title: "API Development & Integration",
      description:
        "RESTful and GraphQL APIs with seamless third-party integrations and payment processing.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users,
      title: "Technical Consultation",
      description:
        "Expert guidance on technology selection, architecture, and best practices for your project.",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 font-bold">
            End-to-End Software Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ideation to deployment, we provide comprehensive software development services 
            across web, mobile, and enterprise platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
              <Card
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-blue-300 h-full"
              >
                <div
                  className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                >
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl text-gray-900 mb-3 font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
