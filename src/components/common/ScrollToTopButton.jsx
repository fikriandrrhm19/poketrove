import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-xl transition-all duration-300 ease-in-out
        ${visible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-5 scale-75 pointer-events-none"}
        bg-yellow-400 hover:bg-yellow-500
        dark:bg-gray-700 dark:hover:bg-gray-600
        hover:scale-95 active:scale-90 animate-bounce-slow
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp
  size={24}
  className="dark:text-[#B3BFE4] text-blue-900 transition-colors"
/>


    </button>
  );  
};

export default ScrollToTopButton;
