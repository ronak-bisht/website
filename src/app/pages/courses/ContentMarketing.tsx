import { CheckCircle, Clock, Users, BookOpen, FileText } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function ContentMarketing() {
  const modules = [
    {
      title: "Content Strategy Fundamentals",
      lessons: ["Defining Content Goals", "Audience Research", "Competitive Analysis", "Content Pillars and Themes"],
    },
    {
      title: "Content Planning",
      lessons: ["Editorial Calendar Creation", "Content Mix Strategy", "Resource Planning", "Workflow Management"],
    },
    {
      title: "Writing for the Web",
      lessons: ["SEO Copywriting", "Headlines that Convert", "Storytelling Techniques", "Tone and Voice Development"],
    },
    {
      title: "Blog Content Creation",
      lessons: ["Blog Post Structure", "Research and Fact-Checking", "Engaging Introductions", "Effective CTAs"],
    },
    {
      title: "Visual Content",
      lessons: ["Infographic Design", "Video Content Strategy", "Image Optimization", "Design Tools Mastery"],
    },
    {
      title: "Content Distribution",
      lessons: ["Multi-Channel Distribution", "Email Newsletter Strategy", "Social Sharing Tactics", "Content Syndication"],
    },
    {
      title: "Content Performance",
      lessons: ["Analytics and Metrics", "A/B Testing Content", "Optimization Strategies", "ROI Measurement"],
    },
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "E-books & Whitepapers",
    "Case Studies",
    "Infographics",
    "Video Content",
    "Podcasts",
    "Email Newsletters",
    "Social Media Posts",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm mb-6">
                Content That Converts
              </div>
              <h1 className="text-4xl sm:text-5xl text-black mb-6">
                Content Marketing <span className="text-[#E8242A]">Strategy</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Create content that engages, educates, and converts. Learn to develop comprehensive 
                content strategies that build lasting relationships with your audience and drive business results.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">7 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">1,500+ students</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">38+ lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="text-[#E8242A]" size={20} />
                  <span className="text-gray-700">Beginner Friendly</span>
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
                  src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3Njc3NzgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Content Marketing Strategy"
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
              From strategy to execution and measurement
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

      {/* Content Types */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Content Types You'll Master
            </h2>
            <p className="text-lg text-gray-700">
              Learn to create diverse content formats for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contentTypes.map((type, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0] text-center bg-white">
                <h3 className="text-sm text-black">{type}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8242A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Create Content That Drives Results
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start crafting compelling content that resonates with your audience
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#E8242A] hover:bg-[#F0F0F0]">
              Begin Content Mastery
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
