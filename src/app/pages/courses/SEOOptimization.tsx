import { CheckCircle, Clock, Users, BookOpen, Target } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function SEOOptimization() {
  const modules = [
    {
      title: "SEO Fundamentals",
      lessons: ["How Search Engines Work", "SEO vs SEM", "Understanding SERP Features", "SEO Best Practices"],
    },
    {
      title: "Keyword Research",
      lessons: ["Finding the Right Keywords", "Keyword Intent Analysis", "Competitor Keyword Research", "Long-tail Keywords Strategy"],
    },
    {
      title: "On-Page SEO",
      lessons: ["Title Tags and Meta Descriptions", "Header Tags Optimization", "Content Optimization", "Internal Linking"],
    },
    {
      title: "Technical SEO",
      lessons: ["Website Speed Optimization", "Mobile-First Indexing", "XML Sitemaps", "Robots.txt and Crawling"],
    },
    {
      title: "Off-Page SEO",
      lessons: ["Link Building Strategies", "Guest Posting", "Brand Mentions", "Social Signals"],
    },
    {
      title: "Local SEO",
      lessons: ["Google Business Profile", "Local Citations", "Local Link Building", "Review Management"],
    },
  ];

  const tools = [
    "Google Search Console",
    "Google Analytics 4",
    "SEMrush / Ahrefs",
    "Screaming Frog",
    "Moz Pro",
    "Yoast SEO",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm mb-6">
                Advanced SEO Training
              </div>
              <h1 className="text-4xl sm:text-5xl text-black mb-6">
                SEO Optimization <span className="text-[#E8242A]">Pro</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Master the art and science of Search Engine Optimization. Learn proven strategies to 
                rank higher on Google, drive organic traffic, and dominate search results.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">8 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">1,800+ students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">40+ lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">Intermediate Level</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#E8242A] hover:bg-[#c41f24] text-white">
                    Enroll Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-[#F0F0F0]">
                  Download Syllabus
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NzcwMDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SEO Optimization Pro"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Course Modules
            </h2>
            <p className="text-lg text-gray-700">
              From basics to advanced SEO techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8242A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E8242A]">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-black mb-3">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="text-[#E8242A] flex-shrink-0 mt-1" size={16} />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools You'll Master */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              SEO Tools You'll Master
            </h2>
            <p className="text-lg text-gray-700">
              Get hands-on experience with industry-standard SEO tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0] text-center bg-white">
                <h3 className="text-lg text-black">{tool}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8242A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Master SEO and Drive Organic Growth
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the ranks of SEO professionals who've transformed their careers
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#E8242A] hover:bg-[#F0F0F0]">
              Start Learning SEO
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
