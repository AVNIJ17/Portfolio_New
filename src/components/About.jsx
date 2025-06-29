import profile from "../assets/profile.jpg";
export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-20 h-1 mx-auto mt-4 ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div
              className={`rounded-lg overflow-hidden shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              } w-64 h-80`}
            >
              <img
                src={profile}
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Full Stack Developer
            </h3>
            <p
              className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              I'm a full-stack developer with experience in building web
              applications. My expertise includes React, Node.js, Tailwindcss,
              Nextjs , CSS and HTML.
            </p>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              I specialize in creating efficient, scalable solutions with clean,
              maintainable code. My approach focuses on understanding user needs
              and delivering optimal technical solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4
                  className={`font-medium mb-2 ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Name:
                </h4>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Avni Jain
                </p>
              </div>
              <div>
                <h4
                  className={`font-medium mb-2 ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Email:
                </h4>
                <a
                  href="mailto:avnijain1705@gmail.com"
                  className={darkMode ? "text-gray-300" : "text-gray-600"}
                >
                  avnijain1705@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
