import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Digital Marketing Masterclass",
      description:
        "Comprehensive course covering all aspects of digital marketing from SEO to social media.",
      image:
        "https://images.unsplash.com/photo-1762330916233-221b49fce7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc3NzgzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "12 weeks",
      students: "2,500+",
      rating: 4.9,
      level: "Beginner to Advanced",
      price: "$299",
    },
    {
      id: 2,
      title: "SEO Optimization Pro",
      description:
        "Master the art of SEO with hands-on training and real-world examples.",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NzcwMDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "8 weeks",
      students: "1,800+",
      rating: 4.8,
      level: "Intermediate",
      price: "$199",
    },
    {
      id: 3,
      title: "Social Media Marketing Excellence",
      description:
        "Learn to create and execute winning social media strategies across all platforms.",
      image:
        "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njc3NTkxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "6 weeks",
      students: "3,200+",
      rating: 4.9,
      level: "All Levels",
      price: "$149",
    },
    {
      id: 4,
      title: "Content Marketing Strategy",
      description:
        "Create content that engages, converts, and builds lasting relationships.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3Njc3MTk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "7 weeks",
      students: "1,500+",
      rating: 4.7,
      level: "Beginner",
      price: "$179",
    },
    {
      id: 5,
      title: "PPC Advertising Bootcamp",
      description:
        "Master Google Ads, Facebook Ads, and other PPC platforms for maximum ROI.",
      image:
        "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NzIwOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "10 weeks",
      students: "2,100+",
      rating: 4.8,
      level: "Intermediate to Advanced",
      price: "$249",
    },
    {
      id: 6,
      title: "Email Marketing Mastery",
      description:
        "Build and nurture your email list with proven strategies and automation.",
      image:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3Njc3NzgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "5 weeks",
      students: "1,900+",
      rating: 4.7,
      level: "All Levels",
      price: "$129",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl text-black mb-6">
            Our <span className="text-[#E8242A]">Courses</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learn from industry experts and master digital marketing with our
            comprehensive online courses
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-lg transition-shadow border-[#F0F0F0]"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block px-3 py-1 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm">
                      {course.level}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star size={16} className="fill-[#E8242A] text-[#E8242A]" />
                      <span className="text-black">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl text-black mb-3">{course.title}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users size={16} />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BookOpen size={16} />
                      <span>Self-paced learning</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-[#E8242A]">
                      {course.price}
                    </span>
                    <Button className="bg-[#E8242A] hover:bg-[#c41f24] text-white">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-black mb-6">
            Not Sure Which Course to Choose?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact our team for personalized course recommendations based on
            your goals
          </p>
          <Button
            size="lg"
            className="bg-[#E8242A] hover:bg-[#c41f24] text-white px-8"
          >
            Get Guidance
          </Button>
        </div>
      </section>
    </div>
  );
}
