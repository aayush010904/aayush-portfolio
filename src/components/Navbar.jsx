import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-white/80 backdrop-blur-md shadow-lg shadow-gray-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">
          <a href="#home" className="text-2xl font-bold">
            <span className={isDark ? "text-white" : "text-gray-900"}>
              <span className="block md:hidden">A<span className="text-blue-500">C</span></span>
              <span className="hidden md:inline">
                Aayush's
                <span className="text-blue-500"> portfolio</span>
              </span>
            </span>
          </a>

          <div className="flex items-center space-x-1 md:space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className={`transition-colors hover:text-blue-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`transition-colors hover:text-blue-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`transition-colors hover:text-blue-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Projects
              </a>
              <a
                href="#certifications"
                className={`transition-colors hover:text-blue-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Certifications
              </a>
              <a
                href="#contact"
                className={`transition-colors hover:text-blue-500 ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="ml-2 md:hidden p-2 rounded-md menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {!menuOpen ? (
                <svg
                  className={`w-6 h-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className={`w-6 h-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
