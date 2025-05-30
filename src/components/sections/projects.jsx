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
      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsPerView(3); // xl breakpoint
      } else if (width >= 768) {
        setCardsPerView(2); // md breakpoint
      } else {
        setCardsPerView(1); // mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(projects.length / cardsPerView) - 1;

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
<<<<<<< HEAD
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
=======
    <section id="projects"
      style={{ minHeight: "100dvh" }} 
    className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
>>>>>>> parent of c4f8202 (minor bugs fixed)
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p
            className={`text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

<<<<<<< HEAD
        {/* Projects Container */}
        <div className="relative md:px-8 lg:px-12">
          {/* Navigation Buttons - Desktop Only */}
          {cardsPerView > 1 && (
            <>
              <button
                onClick={prevProject}
                disabled={currentIndex === 0}
                className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white shadow-lg shadow-black/20"
                    : "bg-white/80 hover:bg-white/90 text-gray-700 shadow-lg shadow-gray-900/10"
                }`}
                aria-label="Previous projects"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextProject}
                disabled={currentIndex === maxIndex}
                className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white shadow-lg shadow-black/20"
                    : "bg-white/80 hover:bg-white/90 text-gray-700 shadow-lg shadow-gray-900/10"
                }`}
                aria-label="Next projects"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Projects Grid/Carousel */}
          <div
            className="overflow-hidden md:py-6 lg:py-8 rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
=======
        <div className="relative px-6 md:px-12">
          <button
            onClick={prevProject}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white shadow-lg shadow-black/20"
                : "bg-white/60 hover:bg-white/80 text-gray-700 shadow-lg shadow-gray-900/10"
            }`}
            aria-label="Previous project"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextProject}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white shadow-lg shadow-black/20"
                : "bg-white/60 hover:bg-white/80 text-gray-700 shadow-lg shadow-gray-900/10"
            }`}
            aria-label="Next project"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Projects Carousel - Mobile optimized */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
>>>>>>> parent of c4f8202 (minor bugs fixed)
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
<<<<<<< HEAD
                width: `${(projects.length * 100) / cardsPerView}%`,
=======
>>>>>>> parent of c4f8202 (minor bugs fixed)
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
<<<<<<< HEAD
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-4"
                  style={{
                    width: `${100 / (projects.length / cardsPerView)}%`,
                  }}
=======
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4 pb-4 sm:pb-8 pt-4 sm:pt-8"
>>>>>>> parent of c4f8202 (minor bugs fixed)
                >
                  <ProjectCard project={project} isDark={isDark} />
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Swipe Indicator - Mobile Only */}
          {cardsPerView === 1 && (
            <div className="flex justify-center mt-4 md:hidden">
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Swipe left or right to browse projects
              </p>
            </div>
          )}

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
=======
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
>>>>>>> parent of c4f8202 (minor bugs fixed)
            {Array.from({
              length: Math.ceil(projects.length / cardsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
<<<<<<< HEAD
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : isDark
                    ? "bg-white/30 hover:bg-white/50"
                    : "bg-gray-400/60 hover:bg-gray-500/60"
                }`}
                aria-label={`Go to project group ${index + 1}`}
=======
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : isDark
                    ? "bg-white/20 hover:bg-white/30"
                    : "bg-gray-300/60 hover:bg-gray-400/60"
                }`}
                aria-label={`Go to project set ${index + 1}`}
>>>>>>> parent of c4f8202 (minor bugs fixed)
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Optimized Project Card Component
const ProjectCard = ({ project, isDark }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth < 768) {
      setIsOverlayVisible(!isOverlayVisible);
    }
  };

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    window.open(project.github, "_blank", "noopener,noreferrer");
  };

  // Reset overlay when clicking outside on mobile
  useEffect(() => {
    if (isOverlayVisible && window.innerWidth < 768) {
      const handleClickOutside = (e) => {
        if (!e.target.closest("[data-project-card]")) {
          setIsOverlayVisible(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOverlayVisible]);

  // Reset overlay on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOverlayVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article
      data-project-card
      className={`group my-0 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 md:hover:scale-105 md:hover:z-10 h-full flex flex-col backdrop-blur-sm border ${
        isDark
          ? "bg-white/5 border-white/10 shadow-xl md:hover:shadow-2xl shadow-black/20 md:hover:shadow-black/40"
          : "bg-white/60 border-white/50 shadow-xl md:hover:shadow-2xl shadow-gray-400/15 md:hover:shadow-gray-400/30"
      }`}
    >
      {/* Image Container */}
      <div
        className="relative overflow-hidden aspect-video cursor-pointer md:cursor-default"
        onClick={handleImageClick}
      >
        <img
          src={project.image || "https://via.placeholder.com/400x225"}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isOverlayVisible
              ? "blur-sm scale-105"
              : "md:group-hover:blur-sm md:group-hover:scale-105"
          }`}
          loading="lazy"
        />

        {/* Overlay - Mobile tap or Desktop hover */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isOverlayVisible
              ? "opacity-100"
              : "opacity-0 md:group-hover:opacity-100"
          }`}
        >
          <button
            onClick={handleGitHubClick}
            className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </div>

        {/* Mobile tap indicator - improved with better icon */}
        <div
          className={`absolute top-2 right-2 md:hidden transition-opacity duration-300 ${
            isOverlayVisible ? "opacity-0" : "opacity-60"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isDark ? "bg-black/40" : "bg-white/40"
            } backdrop-blur-sm`}
          >
            <svg
              className={`w-3 h-3 ${isDark ? "text-white" : "text-gray-700"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3
          className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm sm:text-base leading-relaxed mb-4 flex-1 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
          {project.tech.slice(0, 6).map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
                isDark
                  ? "bg-blue-900/40 text-blue-300 border border-blue-800/40 hover:bg-blue-800/40"
                  : "bg-blue-100/80 text-blue-700 border border-blue-200/80 hover:bg-blue-200/80"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span
              className={`px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              +{project.tech.length - 6} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
