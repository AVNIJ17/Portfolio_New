export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-24 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="flex justify-center items-center">
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          © {currentYear} avnijain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
