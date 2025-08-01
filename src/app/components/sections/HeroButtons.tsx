"use client";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

export default function HeroButtons() {
  const [isNavigating, setIsNavigating] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth < 640 ? 60 : 0;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsNavigating(false);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-5 justify-center lg:justify-start px-2 sm:px-0" role="group" aria-label="Call to Action Buttons">
      {/* View My Previous Work - outlined on mobile, filled on desktop */}
      <button
        onClick={() => scrollToSection('projects')}
        disabled={isNavigating}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-blue-400 text-blue-400 font-bold text-sm sm:text-lg bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:scale-105 hover:shadow-xl hover:bg-blue-900/10 active:scale-95 text-center justify-center sm:justify-start md:bg-gradient-to-r md:from-blue-500 md:to-blue-600 md:text-white md:border-0 md:shadow-lg md:hover:bg-blue-700/90 md:active:scale-95 md:font-bold md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ minWidth: 220 }}
        aria-label="View Sagar Singh's portfolio work"
      >
        View My Previous Work <ArrowDown className="w-5 h-5" />
      </button>
      {/* Promote Your Brand - filled on mobile, outlined on desktop, only visible on mobile */}
      <button
        onClick={() => scrollToSection('services')}
        disabled={isNavigating}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg sm:text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:scale-105 hover:shadow-2xl hover:bg-blue-700/90 active:scale-95 text-center justify-center sm:justify-start md:bg-transparent md:text-blue-400 md:border md:border-blue-400 md:shadow-none md:hover:bg-blue-900/10 md:text-lg md:font-bold md:active:scale-95 md:ml-0 md:order-none block md:hidden disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ minWidth: 180 }}
        aria-label="View Sagar Singh's services"
      >
        Promote Your Brand
      </button>
    </div>
  );
} 