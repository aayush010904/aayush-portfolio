import { useTheme } from "../../contexts/ThemeContext";
import { useState, useEffect } from "react";

// Import all project images
import haritaxImage from "../../assets/img/haritax.png";
import saferoadImage from "../../assets/img/saferoad.png";
import spotifyImage from "../../assets/img/spotify.png";
import finbotImage from "../../assets/img/finbot.png";

export const Projects = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

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

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= Math.ceil(projects.length / cardsPerView) ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? Math.ceil(projects.length / cardsPerView) - 1 : prev - 1
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="projects"
      style={{ minHeight: "100dvh" }}
      className="py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p
            className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>

          <div className="relative px-2 sm:px-6 md:px-12">
            {/* Carousel navigation buttons (hide on mobile) */}
            <button
              onClick={prevProject}
              className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95
      ${
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
              className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95
      ${
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

            {/* Projects Carousel */}
            <div
              className={`
      flex gap-4 md:gap-0
      ${
        cardsPerView === 1
          ? "overflow-x-auto flex-nowrap scroll-smooth no-scrollbar"
          : "md:overflow-hidden"
      }
    `}
              style={
                cardsPerView > 1
                  ? {
                      transform: `translateX(-${
                        currentIndex * (100 / cardsPerView)
                      }%)`,
                      transition: "transform 0.5s ease-in-out",
                    }
                  : {}
              }
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`
          ${cardsPerView === 1 ? "min-w-[85vw] max-w-xs" : "w-80"}
          flex-shrink-0
          md:w-1/2 lg:w-1/3
          px-2 sm:px-4 pb-4 sm:pb-8 pt-4 sm:pt-8
        `}
                >
                  <div
                    className={`group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col backdrop-blur-sm border ${
                      isDark
                        ? "bg-white/5 border-white/10 shadow-lg hover:shadow-xl shadow-black/20 hover:shadow-black/30"
                        : "bg-white/40 border-white/50 shadow-lg hover:shadow-xl shadow-gray-400/15 hover:shadow-gray-400/25"
                    }`}
                  >
                    <div className="relative overflow-hidden pt-1">
                      <img
                        src={
                          project.image || "https://via.placeholder.com/400x225"
                        }
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:blur-xs group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <a
                          href={project.github}
                          className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          aria-label="View GitHub repository"
                          target="_blank"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
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
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              isDark
                                ? "bg-blue-900/30 text-blue-300 border border-blue-800/30"
                                : "bg-blue-100/80 text-blue-700 border border-blue-200/80"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots (hide on mobile) */}
            <div className="hidden md:flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({
                length: Math.ceil(projects.length / cardsPerView),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 scale-125"
                      : isDark
                      ? "bg-white/20 hover:bg-white/30"
                      : "bg-gray-300/60 hover:bg-gray-400/60"
                  }`}
                  aria-label={`Go to project set ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
