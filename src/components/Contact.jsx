import { useState } from "react";
import { BiEnvelope, BiLocationPlus } from "react-icons/bi";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import { PiPhone } from "react-icons/pi";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Get In Touch
          </h2>
          <div
            className={`w-20 h-1 mx-auto mt-4 ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div
            className={`md:w-1/2 p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <h3
              className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <BiEnvelope />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </h4>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    avnijain1705@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <PiPhone />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Phone
                  </h4>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    +91-9131174073
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <BiLocationPlus />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Location
                  </h4>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <BsLinkedin />
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Linkedin
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/avnijain17/"
                    target="_blank"
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    https://www.linkedin.com/in/avnijain17/
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  darkMode
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-800"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400"
                }`}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500 mt-2">
                  Thanks for your message! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
