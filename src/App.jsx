import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Projects } from "./components/sections/projects";
import { Contact } from "./components/sections/contact";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Certifications from "./components/sections/certifications";
import "./index.css";

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-black to-blue-900 text-gray-100"
            : "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900"
        } bg-fixed`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          className="mobile-menu"
        />

        <main className="overflow-hidden">
          <Home />
          <About />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
