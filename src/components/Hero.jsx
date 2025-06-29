import { Link } from "react-scroll";
import { useEffect, useRef } from "react";

export default function Hero({ darkMode }) {
  const shapesRef = useRef(null);

  useEffect(() => {
    // Animation for the rotating squares
    const shapes = shapesRef.current;
    let rotation = 0;

    const animate = () => {
      rotation += 0.5;
      shapes.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      id="home"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "gradient-bg text-white"
      }`}
    >
      {/* Floating animated shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-md ${
              darkMode ? "bg-indigo-800/20" : "bg-white/20"
            }`}
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-center items-center px-8">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-black"
              } animate-fade-in`}
            >
              Hi, I'm{" "}
              <span
                className={darkMode ? "text-yellow-400" : "text-yellow-300"}
              >
                Avni Jain
              </span>
            </h1>

            {/* Rotating squares animation below name */}
            <div
              ref={shapesRef}
              className="flex justify-center my-6 h-20 transition-transform duration-1000"
            >
              <div className="flex items-center space-x-1">
                <div
                  className={`w-4 h-4 ${
                    darkMode ? "bg-indigo-400" : "bg-yellow-300"
                  } rounded-sm animate-pulse`}
                ></div>
                <div
                  className={`w-6 h-6 ${
                    darkMode ? "bg-indigo-400" : "bg-yellow-300"
                  } rounded-sm animate-pulse`}
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className={`w-8 h-8 ${
                    darkMode ? "bg-indigo-400" : "bg-yellow-300"
                  } rounded-sm animate-pulse`}
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className={`w-6 h-6 ${
                    darkMode ? "bg-indigo-400" : "bg-yellow-300"
                  } rounded-sm animate-pulse`}
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className={`w-4 h-4 ${
                    darkMode ? "bg-indigo-400" : "bg-yellow-300"
                  } rounded-sm animate-pulse`}
                ></div>
              </div>
            </div>

            <h2
              className={`text-2xl md:text-3xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-black"
              } animate-slide-in`}
            >
              Full Stack Developer
            </h2>

            <p
              className={`text-lg mb-8 opacity-90 ${
                darkMode ? "text-white" : "text-black"
              } animate-fade-in`}
            >
              I build exceptional and accessible digital experiences for the
              web.
            </p>

            <div className="flex space-x-4 justify-center align-center">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className={`px-6 py-2 rounded-full font-medium transition button-hover ${
                  darkMode
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Contact Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className={`px-6 py-2 rounded-full font-medium transition button-hover ${
                  darkMode
                    ? "border border-indigo-600 text-indigo-400 hover:bg-gray-800"
                    : "border border-indigo-600 text-indigo-400 hover:text-indigo-700 hover:bg-white"
                }`}
              >
                My Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
// import { Link } from "react-scroll";
// import profile from "../assets/profile.jpg";

// export default function Hero({ darkMode }) {
//   return (
//     <section
//       id="home"
//       className={`py-20 ${darkMode ? "bg-gray-900" : "gradient-bg text-white"}`}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-center items-center px-8">
//           <div className="md:w-1/2 mb-10 md:mb-0 text-center">
//             <h1
//               className={`text-4xl md:text-5xl font-bold mb-4  ${
//                 darkMode ? "text-white" : "text-black"
//               }`}
//             >
//               Hi, I'm{" "}
//               <span
//                 className={`${
//                   darkMode ? "text-yellow-400" : "text-yellow-300"
//                 }`}
//               >
//                 Avni Jain
//               </span>
//             </h1>
//             <h2
//               className={`text-2xl md:text-3xl font-semibold mb-6  ${
//                 darkMode ? "text-white" : "text-black"
//               }`}
//             >
//               Full Stack Developer
//             </h2>
//             <p
//               className={`text-lg mb-8 opacity-90  ${
//                 darkMode ? "text-white" : "text-black"
//               }`}
//             >
//               I build exceptional and accessible digital experiences for the
//               web.
//             </p>
//             <div className="flex space-x-4 justify-center align-center">
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 className={`px-6 py-2 rounded-full font-medium transition ${
//                   darkMode
//                     ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:cursor-pointer"
//                     : "bg-indigo-600 text-white hover:bg-indigo-700 hover:cursor-pointer"
//                 }`}
//               >
//                 Contact Me
//               </Link>
//               <Link
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 className={`px-6 py-2 rounded-full font-medium transition ${
//                   darkMode
//                     ? "border border-indigo-600 text-indigo-400 hover:bg-gray-800 hover:cursor-pointer"
//                     : "border border-indigo-600 text-indigo-400 hover:text-indigo-700 hover:bg-white hover:cursor-pointer"
//                 }`}
//               >
//                 My Work
//               </Link>
//             </div>
//           </div>
//           {/* <div className="md:w-1/2 flex justify-end">
//             <div
//               className={`rounded-full overflow-hidden border-4 ${
//                 darkMode ? "border-gray-700" : "border-white"
//               } w-64 h-64`}
//             >
//               <img
//                 src={profile}
//                 alt="Developer"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
// import { Link } from "react-scroll";
// import profile from "../assets/profile.jpg";

// export default function Hero({ darkMode }) {
//   return (
//     <section
//       id="home"
//       className={`py-20 ${darkMode ? "bg-gray-900" : "gradient-bg text-white"}`}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-center items-center px-8">
//           <div className="md:w-1/2 mb-10 md:mb-0 text-center">
//             <h1
//               className={`text-4xl md:text-5xl font-bold mb-4 ${
//                 darkMode ? "text-white" : "text-black"
//               } animate-fade-in`}
//             >
//               Hi, I'm{" "}
//               <span
//                 className={`${
//                   darkMode ? "text-yellow-400" : "text-yellow-300"
//                 }`}
//               >
//                 Avni Jain
//               </span>
//             </h1>
//             <h2
//               className={`text-2xl md:text-3xl font-semibold mb-6 ${
//                 darkMode ? "text-white" : "text-black"
//               } animate-slide-in`}
//             >
//               Full Stack Developer
//             </h2>
//             <p
//               className={`text-lg mb-8 opacity-90 ${
//                 darkMode ? "text-white" : "text-black"
//               } animate-fade-in`}
//             >
//               I build exceptional and accessible digital experiences for the
//               web.
//             </p>
//             <div className="flex space-x-4 justify-center align-center">
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 className={`px-6 py-2 rounded-full font-medium transition button-hover ${
//                   darkMode
//                     ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                     : "bg-indigo-600 text-white hover:bg-indigo-700"
//                 }`}
//               >
//                 Contact Me
//               </Link>
//               <Link
//                 to="projects"
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 className={`px-6 py-2 rounded-full font-medium transition button-hover ${
//                   darkMode
//                     ? "border border-indigo-600 text-indigo-400 hover:bg-gray-800"
//                     : "border border-indigo-600 text-indigo-400 hover:text-indigo-700 hover:bg-white"
//                 }`}
//               >
//                 My Work
//               </Link>
//             </div>
//           </div>
//           {/* Uncomment this section if you want to display the profile image */}
//           {/* <div className="md:w-1/2 flex justify-end">
//             <div
//               className={`rounded-full overflow-hidden border-4 ${
//                 darkMode ? "border-gray-700" : "border-white"
//               } w-64 h-64`}
//             >
//               <img
//                 src={profile}
//                 alt="Developer"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
