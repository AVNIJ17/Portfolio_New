import portfolio from "../assets/portfolio.png";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Portfolio",
      description: "Portfolio showcasing my work and contact details",
      tags: ["React", "TailwindCSS", "Nodejs", "MySQL"],
      image: portfolio,
    },
    {
      title: "Real Time Chat Application",
      description: "Created a chat application with real-time updates",
      tags: ["React", "NodeJs"],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb53f6e516e2?ixlib=rb-1.2.1&auto=format",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization platform with interactive charts and reporting",
      tags: ["React", "D3.js", "Express"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format",
    },
    {
      title: "Social Media App",
      description: "Platform for content sharing and community engagement",
      tags: ["React Native", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            My Projects
          </h2>
          <div
            className={`w-20 h-1 mx-auto mt-4 ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 ${
                darkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? "bg-gray-600 text-indigo-300"
                          : "bg-indigo-100 text-indigo-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
