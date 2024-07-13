import React, { useEffect } from "react";

const ThemeToggle: React.FC = () => {
  useEffect(() => {
    const theme = (() => {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
      ) {
        return localStorage.getItem("theme") || "light";
      }
      if (window.matchMedia("(prefers-color-scheme: white)").matches) {
        return "dark";
      }
      return "light";
    })();

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    window.localStorage.setItem("theme", theme);

    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");

      const isDark = element.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", handleToggleClick);
    }

    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener("click", handleToggleClick);
      }
    };
  }, []);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <button
        id="theme-toggle"
        className="w-8 h-8 -mr-2 flex items-center justify-center"
        aria-label="Change color scheme"
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8"></circle>
        </svg>
      </button>
    </>
  );
};

export default ThemeToggle;
