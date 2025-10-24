import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Outer div for the navbar, adding a slight shadow for depth
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44 shadow-md bg-white sticky top-0 z-50">
      {/* Logo with a scale-up animation on hover */}
      <Link
        to="/"
        // Transition and transform classes for the hover effect
        className="transition duration-300 ease-in-out hover:scale-105"
      >
        <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
      </Link>

      {/* Enhanced 'Get Started' Button */}
      <button
        className="
                bg-blue-600 text-white font-semibold 
                px-5 py-2.5 rounded-full shadow-lg 
                flex items-center space-x-2 
                transition-all duration-300 ease-in-out
                
                hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02]
                
                active:scale-95
            "
      >
        <span className="mr-1">Get Started</span>

        {/* Arrow Icon with a slight 'translate' animation on button hover */}
        <img
          src={assets.arrow_icon}
          alt="arrow"
          className="
                    w-4 
                    transition-transform duration-300 ease-in-out 
                "
        />
      </button>
    </div>
  );
}

export default Navbar;
