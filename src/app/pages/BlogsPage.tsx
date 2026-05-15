import { Calendar, User, ArrowRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "10 Digital Marketing Trends to Watch in 2026",
      excerpt:
        "Discover the latest trends shaping the digital marketing landscape and how to leverage them for your business.",
      author: "Sarah Johnson",
      date: "January 5, 2026",
      category: "Trends",
      image:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3Njc3NzgzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "The Ultimate Guide to SEO in 2026",
      excerpt:
        "Master the art of search engine optimization with our comprehensive guide covering all the latest best practices.",
      author: "Michael Chen",
      date: "January 3, 2026",
      category: "SEO",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NzcwMDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Social Media Strategy: A Complete Blueprint",
      excerpt:
        "Build a winning social media strategy that engages your audience and drives real business results.",
      author: "Emily Rodriguez",
      date: "December 30, 2025",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njc3NTkxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Content Marketing That Converts",
      excerpt:
        "Learn how to create content that not only attracts visitors but also converts them into loyal customers.",
      author: "David Kim",
      date: "December 28, 2025",
      category: "Content",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3Njc3MTk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Email Marketing Best Practices",
      excerpt:
        "Maximize your email marketing ROI with these proven strategies and techniques.",
      author: "Lisa Anderson",
      date: "December 25, 2025",
      category: "Email",
      image:
        "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NzIwOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "PPC Campaigns: Advanced Strategies",
      excerpt:
        "Take your paid advertising to the next level with advanced PPC campaign strategies.",
      author: "James Wilson",
      date: "December 22, 2025",
      category: "PPC",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NzcwMDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#F0F0F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl text-black mb-6">
            Our <span className="text-[#E8242A]">Blog</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Expert insights, tips, and strategies to help you succeed in digital
            marketing
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-[#F0F0F0]"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#E8242A]/10 rounded-full text-[#E8242A] text-sm mb-4">
                    {blog.category}
                  </div>
                  <h3 className="text-xl text-black mb-3">{blog.title}</h3>
                  <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#E8242A] hover:text-[#c41f24] p-0"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
