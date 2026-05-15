import { Award, Users, BookOpen, TrendingUp, Linkedin, Twitter, Mail, Star, Quote, Briefcase, GraduationCap } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import mentorImg from "../../assets/img4.jpeg";

export function MentorPage() {
  const achievements = [
    { icon: Users, value: "10,000+", label: "Students Mentored" },
    { icon: BookOpen, value: "15+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Courses Created" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  const expertise = [
    "Digital Marketing Strategy",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing",
    "Content Marketing & Copywriting",
    "PPC & Google Ads",
    "Email Marketing Automation",
    "Web Analytics & Data Analysis",
    "E-commerce Marketing",
  ];

  const experience = [
    {
      role: "Digital Marketing Mentor & Educator",
      company: "Own Training Institute",
      period: "2015 - Present",
      description: "Training aspiring digital marketers and helping them build successful careers",
    },
    {
      role: "Senior Digital Marketing Manager",
      company: "Leading E-commerce Company",
      period: "2012 - 2015",
      description: "Led digital marketing initiatives resulting in 300% revenue growth",
    },
    {
      role: "SEO & Content Marketing Specialist",
      company: "Digital Agency",
      period: "2009 - 2012",
      description: "Managed SEO campaigns for 50+ clients across various industries",
    },
  ];

  const certifications = [
    "Google Ads Certified Professional",
    "Google Analytics Individual Qualification",
    "HubSpot Inbound Marketing Certification",
    "Facebook Blueprint Certification",
    "YouTube Certified Content Strategist",
    "Hootsuite Social Marketing Certification",
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Manager",
      quote: "Govind sir's teaching transformed my understanding of digital marketing. His real-world examples and hands-on approach made complex concepts easy to understand. I landed my dream job within weeks of completing the course!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Rajesh Kumar",
      role: "Freelance Digital Marketer",
      quote: "The practical knowledge I gained from Govind sir's courses helped me start my freelance career. His mentorship and guidance continue to help me grow my business. Highly recommended for anyone serious about digital marketing!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Ananya Patel",
      role: "Agency Owner",
      quote: "Govind sir doesn't just teach; he mentors. His personalized feedback and industry insights gave me the confidence to start my own digital marketing agency. Best decision I ever made!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
    },
  ];

  const mediaFeatures = [
    { publication: "The Economic Times", title: "Top Digital Marketing Educators in India" },
    { publication: "YourStory", title: "Transforming Careers Through Digital Marketing Education" },
    { publication: "Business Today", title: "Expert Insights on Digital Marketing Trends" },
    { publication: "Inc42", title: "Building the Next Generation of Digital Marketers" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm mb-6">
                Your Digital Marketing Mentor
              </div>
              <h1 className="text-4xl sm:text-5xl text-black mb-6">
                Meet <span className="text-[#E8242A]">Govind Chandak</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of experience in digital marketing and education, I've helped 
                more than 10,000 students launch successful careers in digital marketing. My mission 
                is to empower individuals with practical, industry-relevant skills that lead to 
                real career opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From working with Fortune 500 companies to training the next generation of marketers, 
                my journey has been driven by passion for teaching and commitment to student success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-[#E8242A] hover:bg-[#c41f24] text-white"
                  >
                    Book a Session
                  </Button>
                </Link>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-[#E8242A] hover:text-white transition-colors"
                  >
                    <Linkedin className="text-[#E8242A] hover:text-white" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-[#E8242A] hover:text-white transition-colors"
                  >
                    <Twitter className="text-[#E8242A] hover:text-white" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-[#E8242A] hover:text-white transition-colors"
                  >
                    <Mail className="text-[#E8242A] hover:text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={mentorImg}
                  alt="Govind Chandak - Digital Marketing Mentor"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Achievements & Impact
            </h2>
            <p className="text-lg text-gray-700">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F0F0F0] to-white p-8 rounded-xl text-center border-2 border-[#E8242A]/10 hover:border-[#E8242A]/30 transition-colors"
              >
                <achievement.icon size={48} className="mx-auto mb-4 text-[#E8242A]" />
                <div className="text-4xl text-[#E8242A] mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-700">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Experience Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Areas of Expertise */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[#E8242A]" size={32} />
                <h2 className="text-3xl sm:text-4xl text-black">
                  Areas of Expertise
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Comprehensive knowledge across all digital marketing channels with 
                proven track record of delivering results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <Card
                    key={index}
                    className="p-4 border-[#E8242A]/20 bg-white hover:border-[#E8242A] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E8242A] rounded-full"></div>
                      <span className="text-black">{skill}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-[#E8242A]" size={32} />
                <h2 className="text-3xl sm:text-4xl text-black">
                  Professional Journey
                </h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="p-6 border-[#F0F0F0] bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#E8242A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="text-[#E8242A]" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-black mb-1">{exp.role}</h3>
                        <div className="text-[#E8242A] mb-2">{exp.company}</div>
                        <div className="text-sm text-gray-600 mb-3">{exp.period}</div>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-lg text-gray-700">
              Industry-recognized certifications from leading platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0] text-center bg-gradient-to-br from-white to-[#F0F0F0]">
                <Award className="text-[#E8242A] mx-auto mb-3" size={32} />
                <h3 className="text-base text-black">{cert}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gradient-to-r from-[#E8242A] to-[#c41f24] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Quote size={64} className="mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              My Teaching Philosophy
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-white/10 backdrop-blur-sm text-center">
              <h3 className="text-xl text-white mb-3">Learn by Doing</h3>
              <p className="text-white/90">
                Theory means nothing without practice. Every concept is backed by real-world projects.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-white/10 backdrop-blur-sm text-center">
              <h3 className="text-xl text-white mb-3">Industry Relevant</h3>
              <p className="text-white/90">
                Curriculum updated regularly to match current industry demands and trends.
              </p>
            </Card>
            <Card className="p-6 border-0 bg-white/10 backdrop-blur-sm text-center">
              <h3 className="text-xl text-white mb-3">Personal Mentorship</h3>
              <p className="text-white/90">
                Individual attention and guidance to help you achieve your career goals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-700">
              Success stories from students who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#E8242A] text-[#E8242A]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 border-t border-[#F0F0F0] pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#E8242A]"
                  />
                  <div>
                    <div className="text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Featured In
            </h2>
            <p className="text-lg text-gray-700">
              Recognized by leading publications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-[#F0F0F0] text-center hover:shadow-lg transition-shadow bg-white">
                <div className="text-[#E8242A] mb-2">{feature.publication}</div>
                <p className="text-sm text-gray-700">{feature.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#E8242A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to achieve your digital marketing goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#E8242A] hover:bg-[#F0F0F0]"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/courses/digital-marketing-masterclass">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}