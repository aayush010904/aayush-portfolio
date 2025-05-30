import { useTheme } from "../../contexts/ThemeContext";
import { useState, useEffect, useCallback } from "react";

// Import all project images
import haritaxImage from "../../assets/img/haritax.png";
import saferoadImage from "../../assets/img/saferoad.png";
import spotifyImage from "../../assets/img/spotify.png";
import finbotImage from "../../assets/img/finbot.png";

export const Projects = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [defaultCount, setDefaultCount] = useState(3);
  const [activeCard, setActiveCard] = useState(null); // NEW

  // List of projects
  const projects = [
    {
      title: "HaritaX",
      description:
        "Hybrid plant disease detection ensemble architecture using CNNs and Transformers.",
      image: haritaxImage,
      tech: [
        "VGG 16",
        "ResNet 50",
        "Vision Transformer",
        "Swin Transformer",
        "PyTorch",
        "TensorFlow",
      ],
      github: "https://github.com/aayush010904/HaritaX",
    },
    {
      title: "Saferoad AI",
      description:
        "A realtime road safety monitoring system using computer vision.",
      image: saferoadImage,
      tech: ["OpenCV", "Flask", "TensorFlow", "React", "Yolov8"],
      github: "https://github.com/aayush010904/SaferoadAI",
    },
    {
      title: "Spotify Hits Predictor",
      description:
        "Predicts the success of songs using machine learning and data analysis.",
      image: spotifyImage,
      tech: [
        "Python",
        "Pandas",
        "PCA",
        "Scikit-learn",
        "SVM",
        "Random Forest",
        "KNN",
        "Logistic Regression",
      ],
      github: "https://github.com/aayush010904/spotify_hits_predictor",
    },
    {
      title: "Finance Bot",
      description:
        "A chatbot that provides financial insights and stock market analysis using AI Agents.",
      image: finbotImage,
      tech: [
        "Groq",
        "OpenAI",
        "Python",
        "Flask",
        "Llama 3",
        "Streamlit",
        "Phidata",
      ],
      github: "https://github.com/aayush010904/finance-bot",
    },
  ];

  // Improved responsive cards per view with proper breakpoints
  useEffect(() => {
    const handleResize = () => {
      setDefaultCount(window.innerWidth < 768 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper to detect mobile
  const isMobile = () => window.innerWidth < 768;

  // Hide activeCard on resize (to avoid stuck state)
  useEffect(() => {
    const handleResize = () => setActiveCard(null);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, defaultCount);

  // Fix the maxIndex calculation to ensure it includes all projects
  const maxIndex = Math.max(0, Math.ceil(projects.length / cardsPerView) - 1);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToProject = useCallback(
    (index) => {
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex]
  );

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && cardsPerView === 1) {
      nextProject();
    }
    if (isRightSwipe && cardsPerView === 1) {
      prevProject();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  return (
    <section
      id="projects"
      style={{ minHeight: "100dvh" }}
      className="reveal min-h-screen flex items-center justify-center py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className={`relative group rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col`}
              onClick={() => {
                if (isMobile()) {
                  setActiveCard(activeCard === idx ? null : idx);
                }
              }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`
                    w-full h-48 object-cover transition-all duration-300
                    ${
                      isMobile()
                        ? activeCard === idx
                          ? "blur-sm scale-105"
                          : ""
                        : "group-hover:blur-sm group-hover:scale-105"
                    }
                  `}
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    absolute inset-0 flex items-center justify-center
                    transition-opacity duration-300
                    ${
                      isMobile()
                        ? activeCard === idx
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none"
                        : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                    }
                  `}
                  aria-label="View on GitHub"
                  onClick={(e) => (isMobile() ? e.stopPropagation() : null)}
                >
                  <svg
                    className="w-10 h-10 text-gray-800 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-base mb-4 flex-1 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-semibold rounded-full border ${
                        isDark
                          ? "bg-blue-900/30 text-blue-200 border-blue-800/30"
                          : "bg-blue-100 text-blue-700 border-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > defaultCount && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/40"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
              }`}
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
