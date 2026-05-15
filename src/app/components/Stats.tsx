import { TrendingUp, Users, Award, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "250%",
      label: "Average Traffic Increase",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "10M+",
      label: "Leads Generated",
      color: "text-green-600",
    },
    {
      icon: Award,
      value: "50+",
      label: "Industry Awards",
      color: "text-purple-600",
    },
    {
      icon: Target,
      value: "95%",
      label: "Client Retention",
      color: "text-orange-600",
    },
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NzcwMDYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business growth chart"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          {/* Right - Stats */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm mb-4">
                Proven Results
              </div>
              <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
                Numbers That Speak for Themselves
              </h2>
              <p className="text-lg text-gray-600">
                We don't just promise results – we deliver them. Here's what
                we've achieved for our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon size={32} className={`mb-3 ${stat.color}`} />
                  <div className={`text-3xl mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
