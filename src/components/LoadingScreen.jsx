import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          // No need for setTimeout - call onComplete immediately
          onComplete();
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isExiting ? "hidden" : "block" // Use hidden/block instead of opacity
      } ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="text-center">
        <div
          className={`text-6xl font-bold mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="text-blue-500">A</span>
          <span className={isDark ? "text-white" : "text-gray-900"}>C</span>
        </div>

        <div
          className={`w-64 h-2 rounded-full mb-4 ${
            isDark ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};
