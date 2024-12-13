import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Btn({target, text="Contact us"}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log("Button clicked! Add your action here");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-blue-500 group-hover:to-purple-600 dark:text-white dark:focus:ring-blue-800 md:text-base"
      aria-label="Get started with our premium features"
    >
      <span className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 md:px-6 md:py-3">
        {text}
        <FaArrowRight
          className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
        />
      </span>
    </button>
  )
}

export default Btn