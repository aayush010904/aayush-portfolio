// Add this component or modify your existing mobile navbar

import { useTheme } from "../../contexts/ThemeContext";

export const MobileNav = ({ isOpen, setIsOpen }) => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Mobile menu panel */}
      <div 
        className={`absolute right-0 top-0 h-full w-[75%] max-w-xs transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="p-5 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold">
              <span className={isDark ? "text-white" : "text-gray-900"}>Your Logo</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className={`p-2 rounded-full ${
                isDark ? "text-gray-400 hover:text-white hover:bg-gray-800" : 
                "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Nav links */}
          <nav className="flex-1">
            <ul className={`space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <li>
                <a href="#home" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Theme toggle button */}
          <div className="mt-auto pb-8">
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl transition-all ${
                isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
          </div>
        </div>
      </div>
    </div>
  );
};