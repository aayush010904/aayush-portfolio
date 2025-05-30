import { useTheme } from "../../contexts/ThemeContext";
import { useState, useEffect } from "react";

export const Home = () => {
  const { isDark } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = ["Developer", "Researcher", "Problem Solver", "Innovator"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));

        if (typedText === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(150);
          setTimeout(() => setTypingSpeed(75), 1500);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));

        if (typedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, isDeleting, typingSpeed, words]);

  return (
    <section
      id="home"
      style={{ minHeight: "100dvh" }}
      className="relative flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500/20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full filter blur-3xl z-0"></div>

      <div className="relative container mx-auto px-6 z-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
          <div className="mb-6">
            <span
              className={`inline-block text-sm md:text-base font-medium px-4 py-2 rounded-full ${
                isDark
                  ? "bg-blue-900/30 text-blue-300"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              AI/ML Engineer
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hello, I'm <br />
            <span className="text-blue-500 block md:inline">
              Aayush Chauhan
            </span>
          </h1>

          <div className="h-10 mb-6">
            <h2
              className={`text-xl md:text-2xl font-medium ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a <span className="text-blue-500">{typedText}</span>
              <span className="inline-block w-1 h-6 ml-0.5 bg-blue-500 animate-blink"></span>
            </h2>
          </div>

          <p
            className={`text-base md:text-lg mb-8 max-w-2xl ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building modern and innovative AI solutions.
          </p>

          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            <a
              href="/src/docs/resume.pdf"
              target="_blank"
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/40"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
              }`}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark
                  ? "bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/30"
                  : "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
