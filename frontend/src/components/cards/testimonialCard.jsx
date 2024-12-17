import React from "react";
import { FaStar } from "react-icons/fa";


const TestimonialCard = ({ name, position, rating, message, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out  hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed hover:text-gray-900 transition duration-300">
        {message}
      </p>
      
      <div className="flex items-center ">
        {/* <div className="w-12 h-12 mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
            }}
          />
        </div> */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard