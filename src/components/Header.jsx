import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div>
      <header
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50  shadow-lg ${
          darkMode
            ? "bg-indigo-600  rounded-full"
            : "bg-indigo-200 border-gray-200 rounded-full"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition ${
                  darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition ${
                  darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                About
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition ${
                  darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Skills
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition ${
                  darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition ${
                  darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Contact
              </Link>
            </div>
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition ${
                darkMode
                  ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button> */}
          </div>
        </nav>
      </header>
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition ${
            darkMode
              ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {darkMode ? (
            <FaSun className="w-5 h-5" />
          ) : (
            <FaMoon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
// import { Link } from "react-scroll";

// export default function Header({ darkMode, setDarkMode }) {
//   return (
//     <header
//       className={`sticky top-0 z-50 border-b ${
//         darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//       }`}
//     >
//       <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <span
//               className={`text-xl font-bold ${
//                 darkMode ? "text-white" : "text-gray-800"
//               }`}
//             >
//               Portfolio
//             </span>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className={`cursor-pointer transition ${
//                 darkMode
//                   ? "text-gray-300 hover:text-indigo-400"
//                   : "text-gray-700 hover:text-indigo-600"
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className={`cursor-pointer transition ${
//                 darkMode
//                   ? "text-gray-300 hover:text-indigo-400"
//                   : "text-gray-700 hover:text-indigo-600"
//               }`}
//             >
//               About
//             </Link>
//             <Link
//               to="skills"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className={`cursor-pointer transition ${
//                 darkMode
//                   ? "text-gray-300 hover:text-indigo-400"
//                   : "text-gray-700 hover:text-indigo-600"
//               }`}
//             >
//               Skills
//             </Link>
//             <Link
//               to="projects"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className={`cursor-pointer transition ${
//                 darkMode
//                   ? "text-gray-300 hover:text-indigo-400"
//                   : "text-gray-700 hover:text-indigo-600"
//               }`}
//             >
//               Projects
//             </Link>
//             <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className={`cursor-pointer transition ${
//                 darkMode
//                   ? "text-gray-300 hover:text-indigo-400"
//                   : "text-gray-700 hover:text-indigo-600"
//               }`}
//             >
//               Contact
//             </Link>
//             {/* Other nav links */}
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`p-2 rounded-full ${
//                 darkMode
//                   ? "bg-gray-700 text-yellow-400"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {darkMode ? (
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
