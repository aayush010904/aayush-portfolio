import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

// Import all logo images
import ibmLogo from "../../assets/img/ibm.png";
import stanfordLogo from "../../assets/img/stanford.webp";
import gdgLogo from "../../assets/img/gdg.png";
import hackerrankLogo from "../../assets/img/hackerrank.png";

const certificationsData = [
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "IBM",
    year: "2025",
    logo: ibmLogo,
    color: "text-blue-500",
    url: "https://www.coursera.org/account/accomplishments/verify/7LBEWB4JTY2U",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    year: "2025",
    logo: stanfordLogo,
    color: "text-red-500",
    url: "https://www.coursera.org/account/accomplishments/specialization/36VBRWM993M4",
  },
  {
    title: "Python for Data Science, AI and Development",
    issuer: "IBM",
    year: "2024",
    logo: ibmLogo,
    color: "text-blue-500",
    url: "https://www.credly.com/badges/901bceac-10d6-42ba-8678-a1f4b0550054/public_url",
  },
  {
    title: "Python Certification",
    issuer: "GDG-MAD",
    year: "2043",
    logo: gdgLogo,
    color: "text-orange-500",
    url: "https://verify.letsupgrade.in/certificate/LUEPYTJAN12427",
  },
  {
    title: "Python Programming",
    issuer: "Hackerrank",
    year: "2024",
    logo: hackerrankLogo,
    color: "text-green-500",
    url: "https://www.hackerrank.com/certificates/182647bf7bc5",
  },
];

const Certifications = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const visibleCertifications = showAll
    ? certificationsData
    : certificationsData.slice(0, 3);

  return (
    <section
      id="certifications"
      style={{ minHeight: "100dvh" }}
      className="reveal relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient shapes */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleCertifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-300 shadow-xl hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer block ${
                isDark
                  ? " border-white/10  hover:border-blue-500/50"
                  : " border-white/20  hover:border-blue-300/50"
              }`}
            >
              {/* Logo */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full  mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="h-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="text-2xl hidden">🏆</span>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3
                  className={`text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h3>

                <div
                  className={`text-sm mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className={`font-medium ${cert.color}`}>
                    {cert.issuer}
                  </span>
                </div>

                <div
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <span>{cert.year}</span>
                </div>
              </div>

              {/* External link icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className={`w-5 h-5 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                    : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                }`}
              ></div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        {certificationsData.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/40"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
              }`}
            >
              {showAll
                ? "Show Less"
                : `View All Certifications (${certificationsData.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
