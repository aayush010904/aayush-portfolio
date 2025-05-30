import { useTheme } from "../../contexts/ThemeContext";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { isDark } = useTheme();
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  // Fix these IDs - they're currently mixed up
  const SERVICE_ID = "service_5ftev7f"; // This should be your service ID
  const TEMPLATE_ID = "template_setjnxh"; // This is correct
  const PUBLIC_KEY = "gomlgAUpwBBq1czJy"; // This should be your public key

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Use the correct parameter order
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // Add this for debugging
        alert("Failed to send message. Please try again later.");
        setSending(false);
      });
  };

  return (
    <section id="contact" 
    style={{ minHeight: "100dvh" }}
    className="reveal py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p
            className={`text-base sm:text-lg mt-6 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div
          className={`rounded-2xl overflow-hidden backdrop-blur-sm border ${
            isDark
              ? "bg-white/5 border-white/10 shadow-xl shadow-black/20"
              : "bg-white/40 border-white/50 shadow-xl shadow-gray-400/10"
          }`}
        >
          <div className="grid md:grid-cols-2">
            <div
              className={`p-5 sm:p-6 md:p-8 h-full ${
                isDark
                  ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                  : "bg-gradient-to-br from-blue-50/60 to-indigo-50/60"
              }`}
            >
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-5 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div
                    className={`p-2 md:p-3 rounded-full mr-3 md:mr-4 ${
                      isDark
                        ? "bg-blue-800/30 text-blue-300"
                        : "bg-blue-100/80 text-blue-700"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className={`font-medium mb-1 ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Phone
                    </p>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      +91 99581 06338
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-2 md:p-3 rounded-full mr-3 md:mr-4 ${
                      isDark
                        ? "bg-blue-800/30 text-blue-300"
                        : "bg-blue-100/80 text-blue-700"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className={`font-medium mb-1 ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Email
                    </p>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      aayushchauhan019@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-2 md:p-3 rounded-full mr-3 md:mr-4 ${
                      isDark
                        ? "bg-blue-800/30 text-blue-300"
                        : "bg-blue-100/80 text-blue-700"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className={`font-medium mb-1 ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Location
                    </p>
                    <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                      Noida, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <h4
                  className={`text-base md:text-lg font-semibold mb-3 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/aayush010904"
                    target="_blank"
                    className={`p-2 rounded-full ${
                      isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20"
                        : "bg-white/60 text-gray-700 hover:bg-white/80"
                    } transition-colors`}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com/aaayush.exe"
                    target="_blank"
                    className={`p-2 rounded-full ${
                      isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20"
                        : "bg-white/60 text-gray-700 hover:bg-white/80"
                    } transition-colors`}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/aayush-chauhan-279a2529a/"
                    target="_blank"
                    className={`p-2 rounded-full ${
                      isDark
                        ? "bg-white/10 text-gray-300 hover:bg-white/20"
                        : "bg-white/60 text-gray-700 hover:bg-white/80"
                    } transition-colors`}
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4 md:space-y-6 flex-1 flex flex-col"
              >
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDark
                        ? "bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500"
                        : "bg-white/60 border-white/50 text-gray-800 placeholder:text-gray-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors`}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDark
                        ? "bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500"
                        : "bg-white/60 border-white/50 text-gray-800 placeholder:text-gray-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors`}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className={`w-full px-3 py-2 rounded-lg border flex-1 min-h-[100px] sm:min-h-[120px] ${
                      isDark
                        ? "bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500"
                        : "bg-white/60 border-white/50 text-gray-800 placeholder:text-gray-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-colors`}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={`mt-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 w-full ${
                    isDark
                      ? "bg-blue-600/90 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/40"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
                  } ${sending ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
