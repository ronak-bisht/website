import { CheckCircle, Clock, Users, BookOpen, Smartphone } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function SocialMediaMarketing() {
  const modules = [
    {
      title: "Social Media Fundamentals",
      lessons: ["Understanding Social Media Landscape", "Choosing the Right Platforms", "Setting Goals and KPIs", "Brand Voice and Identity"],
    },
    {
      title: "Content Strategy",
      lessons: ["Content Planning and Calendars", "Visual Content Creation", "Copywriting for Social Media", "User-Generated Content"],
    },
    {
      title: "Facebook & Instagram Marketing",
      lessons: ["Profile Optimization", "Content Strategies", "Facebook Ads Manager", "Instagram Stories and Reels"],
    },
    {
      title: "LinkedIn Marketing",
      lessons: ["Professional Branding", "Content for B2B", "LinkedIn Ads", "Lead Generation Strategies"],
    },
    {
      title: "Twitter & TikTok",
      lessons: ["Twitter for Business", "Trending Topics Strategy", "TikTok Marketing Basics", "Short-form Video Content"],
    },
    {
      title: "Community Management",
      lessons: ["Building Engaged Communities", "Handling Customer Service", "Crisis Management", "Influencer Partnerships"],
    },
    {
      title: "Social Media Analytics",
      lessons: ["Platform Analytics Overview", "Measuring ROI", "Competitive Analysis", "Reporting and Insights"],
    },
  ];

  const platforms = [
    "Facebook",
    "Instagram", 
    "LinkedIn",
    "Twitter",
    "TikTok",
    "Pinterest",
    "YouTube",
    "Snapchat",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm mb-6">
                Master Social Platforms
              </div>
              <h1 className="text-4xl sm:text-5xl text-black mb-6">
                Social Media Marketing <span className="text-[#E8242A]">Excellence</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Learn to create and execute winning social media strategies across all major platforms. 
                Build engaged communities, drive conversions, and grow your brand's social presence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">6 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">3,200+ students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">35+ lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">All Platforms</span>
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
                  src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njc3NTkxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Social Media Marketing"
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
              Course Curriculum
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive training across all major social platforms
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

      {/* Platforms Covered */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Platforms You'll Master
            </h2>
            <p className="text-lg text-gray-700">
              Learn platform-specific strategies for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0] text-center bg-white">
                <h3 className="text-lg text-black">{platform}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8242A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Build Your Social Media Empire
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands who've mastered social media marketing
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#E8242A] hover:bg-[#F0F0F0]">
              Start Your Social Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
