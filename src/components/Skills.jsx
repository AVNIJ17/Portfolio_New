export default function Skills({ darkMode }) {
  const skills = [
    { name: "ReactJS" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "MySQL" },
    { name: "NodeJS" },
    { name: "Git" },
    { name: "TailwindCSS" },
    { name: "Postman" },
    { name: "Bootstrap" },
  ];

  return (
    <section
      id="skills"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            My Skills
          </h2>
          <div
            className={`w-20 h-1 mx-auto mt-4 ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } shadow-md hover:shadow-lg`}
            >
              <i className={`${skill.icon} ${skill.color} text-4xl mb-3`}></i>
              <h3
                className={`font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
