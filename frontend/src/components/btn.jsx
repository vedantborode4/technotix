import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Btn({ target = "contact", text = "Contact us" }) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  // Handle button click
  const handleClick = () => {
    if (target) {
      scrollToSection(target);
    } else {
      console.error("Target ID is not provided.");
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-blue-500 group-hover:to-purple-600  md:text-base"
      aria-label="Get started with our premium features"
    >
      <span className="flex items-center gap-2 rounded-md px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 md:px-6 md:py-3">
        {text}
        <FaArrowRight
          className={`transition-transform duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
        />
      </span>
    </button>
  );
}

export default Btn;
