import { CheckCircle, Clock, Users, BookOpen, Award } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function DigitalMarketingMasterclass() {
  const modules = [
    {
      title: "Introduction to Digital Marketing",
      lessons: ["Understanding Digital Marketing Landscape", "Setting Up Your Marketing Foundation", "Tools and Resources Overview"],
    },
    {
      title: "SEO Fundamentals",
      lessons: ["On-Page SEO Techniques", "Off-Page SEO Strategies", "Technical SEO Essentials", "Keyword Research Mastery"],
    },
    {
      title: "Content Marketing",
      lessons: ["Content Strategy Development", "Writing for the Web", "Visual Content Creation", "Content Distribution Channels"],
    },
    {
      title: "Social Media Marketing",
      lessons: ["Platform-Specific Strategies", "Community Building", "Social Media Advertising", "Analytics and Insights"],
    },
    {
      title: "Email Marketing",
      lessons: ["Building Your Email List", "Campaign Creation", "Automation Workflows", "A/B Testing and Optimization"],
    },
    {
      title: "PPC Advertising",
      lessons: ["Google Ads Fundamentals", "Facebook Ads Mastery", "Campaign Optimization", "ROI Tracking"],
    },
    {
      title: "Analytics and Data",
      lessons: ["Google Analytics Setup", "Data Interpretation", "Reporting and Dashboards", "Data-Driven Decision Making"],
    },
    {
      title: "Strategy and Planning",
      lessons: ["Creating Marketing Plans", "Budget Allocation", "Campaign Management", "Growth Hacking Techniques"],
    },
  ];

  const benefits = [
    "Comprehensive understanding of all digital marketing channels",
    "Hands-on projects and real-world case studies",
    "Industry-recognized certification upon completion",
    "Lifetime access to course materials and updates",
    "Private community access with fellow students",
    "Monthly live Q&A sessions with instructors",
    "Job placement assistance and career guidance",
    "Access to exclusive marketing tools and templates",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm mb-6">
                Our Most Comprehensive Course
              </div>
              <h1 className="text-4xl sm:text-5xl text-black mb-6">
                Digital Marketing <span className="text-[#E8242A]">Masterclass</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Master all aspects of digital marketing from SEO to social media, PPC to email marketing. 
                This comprehensive course covers everything you need to become a successful digital marketer.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">12 weeks duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">2,500+ students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">60+ lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">Certificate included</span>
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
                  src="https://images.unsplash.com/photo-1762330916233-221b49fce7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc3NzgzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital Marketing Masterclass"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg text-gray-700">
              8 comprehensive modules covering all aspects of digital marketing
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

      {/* What You'll Learn */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-700">
              Everything you need to succeed in digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="text-[#E8242A] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E8242A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful digital marketers who started with this course
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#E8242A] hover:bg-[#F0F0F0]">
              Enroll in Masterclass
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
