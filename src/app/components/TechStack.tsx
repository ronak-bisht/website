export function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
      color: "from-blue-600 to-blue-400",
    },
    {
      category: "Backend",
      technologies: ["Node.js", ".NET", "Java", "Python", "Go", "Ruby on Rails"],
      color: "from-purple-600 to-purple-400",
    },
    {
      category: "Mobile",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Dart"],
      color: "from-pink-600 to-pink-400",
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Elasticsearch"],
      color: "from-green-600 to-green-400",
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
      color: "from-orange-600 to-orange-400",
    },
    {
      category: "E-Commerce",
      technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Solutions"],
      color: "from-cyan-600 to-cyan-400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm mb-4">
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 font-bold">
            Cutting-Edge Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage the latest and most reliable technologies to build scalable, 
            performant, and secure applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${tech.color} p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow`}
            >
              <h3 className="text-2xl font-bold mb-6">{tech.category}</h3>
              <div className="flex flex-wrap gap-3">
                {tech.technologies.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
            <p className="text-gray-600">Technologies Mastered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">7+</div>
            <p className="text-gray-600">Years Combined Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
            <p className="text-gray-600">Latest Tech Standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
