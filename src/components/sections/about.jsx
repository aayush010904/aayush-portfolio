import { useTheme } from "../../contexts/ThemeContext";
import { useState } from "react";
import profileImage from "../../assets/img/profile.jpg"; // Add this import
import { SiCplusplus, SiC } from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiJupyter,
  SiDocker,
  SiNumpy,
  SiPandas,
  SiGit,
  SiPlotly,
  SiTailwindcss,
} from "react-icons/si";

export const About = () => {
  const { isDark } = useTheme();
  const [activeSkillGroup, setActiveSkillGroup] = useState("languages");

  const skillGroups = {
    languages: [
      { name: "Python", level: 95, icon: <FaPython className="text-lg" /> },
      { name: "C++", level: 60, icon: <SiCplusplus className="text-lg" /> },
      { name: "C", level: 65, icon: <SiC className="text-lg" /> },
      { name: "JavaScript", level: 45, icon: <FaJs className="text-lg" /> },
    ],
    frameworks: [
      {
        name: "TensorFlow",
        level: 65,
        icon: <SiTensorflow className="text-lg" />,
      },
      { name: "PyTorch", level: 70, icon: <SiPytorch className="text-lg" /> },
      { name: "Keras", level: 65, icon: <SiKeras className="text-lg" /> },
      { name: "HTML", level: 80, icon: <FaHtml5 className="text-lg" /> },
      { name: "CSS", level: 80, icon: <FaCss3Alt className="text-lg" /> },
      { name: "React", level: 60, icon: <FaReact className="text-lg" /> },
      {
        name: "Tailwind CSS",
        level: 70,
        icon: <SiTailwindcss className="text-lg" />,
      },
      { name: "SQL", level: 75, icon: <FaDatabase className="text-lg" /> },
    ],
    tools: [
      {
        name: "Scikit-learn",
        level: 90,
        icon: <SiScikitlearn className="text-lg" />,
      },
      { name: "Jupyter", level: 90, icon: <SiJupyter className="text-lg" /> },
      { name: "Numpy", level: 90, icon: <SiNumpy className="text-lg" /> },
      { name: "Pandas", level: 90, icon: <SiPandas className="text-lg" /> },
      { name: "Matplotlib", level: 85, icon: <SiPlotly className="text-lg" /> },
      { name: "Git", level: 55, icon: <SiGit className="text-lg" /> },
      { name: "Docker", level: 45, icon: <SiDocker className="text-lg" /> },
    ],
  };

  const skillCategories = [
    { key: "languages", label: "Languages" },
    { key: "frameworks", label: "Frameworks" },
    { key: "tools", label: "Tools" },
  ];

  // Common card styling for consistency
  const cardStyle = `h-full p-6 sm:p-7 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl ${
    isDark
      ? "bg-white/5 border-white/10 shadow-xl shadow-black/20 hover:bg-white/8"
      : "bg-white/40 border-white/50 shadow-xl shadow-gray-400/10 hover:bg-white/50"
  }`;

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* First Row - Profile Picture and Bio */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="flex justify-center md:justify-center w-full">
                <div
                  className={`w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden transition-all duration-300 
                    backdrop-blur-sm ${
                      isDark
                        ? "bg-white/5 border border-white/10 shadow-lg hover:shadow-xl shadow-black/30 hover:shadow-black/40"
                        : "bg-white/40 border border-white/50 shadow-lg hover:shadow-xl shadow-gray-400/20 hover:shadow-gray-400/30"
                    } hover:scale-[1.02] hover:rotate-1`}
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/400x400?text=Profile";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className={`${cardStyle} h-fit`}>
              <h3
                className={`text-xl sm:text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                My Journey
              </h3>
              <p
                className={`text-base leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm an engineering student majoring in Electronics and
                Communication Engineering with a minor in AI/ML from Faculty of
                Technology, University of Delhi, Delhi. I'm actively working in
                the field of Machine Learning and AI.
              </p>
            </div>
          </div>

          {/* Second Row Left - Technical Skills */}
          <div className="flex flex-col">
            <div className={`${cardStyle} h-full flex flex-col`}>
              <h3
                className={`text-xl sm:text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Technical Skills
              </h3>

              {/* Skill Category Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skillCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveSkillGroup(category.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      activeSkillGroup === category.key
                        ? isDark
                          ? "bg-blue-600/90 text-white shadow-lg shadow-blue-600/30"
                          : "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20"
                        : "bg-gray-200/70 text-gray-700 hover:bg-gray-300/70"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Skills Display */}
              <div className="space-y-3 flex-grow">
                {skillGroups[activeSkillGroup].map((skill, index) => (
                  <div key={`${activeSkillGroup}-${index}`} className="group">
                    {/* Skill name and icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`transition-colors duration-300 ${
                            isDark ? "text-blue-300" : "text-blue-600"
                          }`}
                        >
                          {skill.icon}
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            isDark ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-semibold ${
                          isDark ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDark ? "bg-white/10" : "bg-gray-200"
                      }`}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/30"
                        style={{
                          width: `${skill.level}%`,
                          transform: "translateX(-100%)",
                          animation: `slideIn 1s ease-out ${
                            index * 0.1
                          }s forwards`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row Right - Education and Experience Combined */}
          <div className="flex flex-col">
            <div className={`${cardStyle} h-full flex flex-col`}>
              <div className="space-y-8 flex-grow">
                {/* Education Section */}
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-blue-500/50">
                      {/* Education entry */}
                      <div className="mb-6 relative">
                        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 -left-8 top-1.5 shadow-md shadow-blue-500/30"></div>

                        <span
                          className={`block font-medium ${
                            isDark ? "text-blue-300" : "text-blue-700"
                          }`}
                        >
                          B.Tech in Electronics and Communication Engineering{" "}
                          <br />
                          (Minor in AI/ML)
                        </span>
                        <span
                          className={`block text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Faculty of Technology, University of Delhi — 2021 -
                          2025
                        </span>
                      </div>

                      {/* Additional education entry (if needed) */}
                      <div className="relative">
                        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 -left-8 top-1.5 shadow-md shadow-blue-500/30"></div>

                        <span
                          className={`block font-medium ${
                            isDark ? "text-blue-300" : "text-blue-700"
                          }`}
                        >
                          Senior Secondary Education
                        </span>
                        <span
                          className={`block text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Radiant Academy, Noida — 2019 - 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`h-px ${isDark ? "bg-white/10" : "bg-gray-200"}`}
                ></div>

                {/* Experience Section */}
                <div className="flex-grow">
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-blue-500/50">
                      {/* Experience entry */}
                      <div className="mb-6 relative">
                        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 -left-8 top-1.5 shadow-md shadow-blue-500/30"></div>

                        <span
                          className={`block font-medium ${
                            isDark ? "text-blue-300" : "text-blue-700"
                          }`}
                        >
                          Sales and Marketing Intern
                        </span>
                        <span
                          className={`block text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Vectura Fertin Pharma — June 2024 - Jul 2024
                        </span>
                        <span
                          className={`block text-sm mt-1.5 ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Drove a 30% rise in engagement and 20% sales boost for
                          Ryze using data-driven strategies, applying analytical
                          insights to enhance customer targeting and support a
                          15% market penetration increase.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl text-center backdrop-blur-sm border transition-all duration-300 hover:scale-[1.01] ${
            isDark
              ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-800/30"
              : "bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border-blue-200/50"
          } shadow-xl ${isDark ? "shadow-black/20" : "shadow-gray-400/10"}`}
        >
          <h3
            className={`text-xl sm:text-2xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Build Something Amazing Together
          </h3>
          <p
            className={`text-base sm:text-lg mb-5 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always excited to work on new projects and collaborate with
            creative people.
          </p>
          <a
            href="#contact"
            className={`inline-block px-6 sm:px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm ${
              isDark
                ? "bg-blue-600/90 hover:bg-blue-700 text-white shadow-blue-900/40"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25"
            }`}
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Add CSS animation for progress bars */}
      <style jsx>{`
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};
