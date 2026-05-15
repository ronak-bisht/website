import { Star } from "lucide-react";
import { Card } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://i.pravatar.cc/150?img=1",
      content:
        "Working with DigitalBoost transformed our online presence. Our website traffic increased by 300% in just 6 months!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, E-Commerce Plus",
      image: "https://i.pravatar.cc/150?img=13",
      content:
        "The ROI on our campaigns has been incredible. Their team truly understands digital marketing and delivers results.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Wellness Hub",
      image: "https://i.pravatar.cc/150?img=5",
      content:
        "Professional, responsive, and results-driven. They've helped us reach audiences we never thought possible.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from businesses that have
            grown with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
