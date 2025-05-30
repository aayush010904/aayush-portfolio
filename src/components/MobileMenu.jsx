import { useEffect } from "react";
import { useTheme } from '../contexts/ThemeContext';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  return (
    <div className={`fixed inset-0 z-30 transition-all duration-300 md:hidden ${
      menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}>
      <div className={`absolute inset-0 ${
        isDark ? "bg-black/90" : "bg-white/95"
      } backdrop-blur-sm`} onClick={() => setMenuOpen(false)}></div>
      
      <div className={`absolute top-16 left-0 right-0 p-8 ${
        isDark ? "bg-gray-900" : "bg-white"
      } shadow-lg`}>
        <nav className="space-y-6">
          <a 
            href="#home" 
            className={`block text-lg font-medium transition-colors ${
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`block text-lg font-medium transition-colors ${
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`block text-lg font-medium transition-colors ${
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#certifications" 
            className={`block text-lg font-medium transition-colors ${
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Cerifications
          </a>
          <a 
            href="#contact" 
            className={`block text-lg font-medium transition-colors ${
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center w-full gap-3 py-2 text-lg font-medium transition-colors ${
              isDark 
                ? "text-gray-300 hover:text-white" 
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {isDark ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};
