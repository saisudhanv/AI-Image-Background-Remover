import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";

function Navbar() {

    const {openSignIn} = useClerk();
    const { isSignedIn, user } = useUser();
    const { credit, loadCreditsData } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (isSignedIn) {
        loadCreditsData();
      }
    }, [isSignedIn]);

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

      {
        isSignedIn 
        ? <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => navigate('/buy')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700">
            <img className="w-5" src={assets.credit_icon} alt="credit" />
            <p className="text-xs sm:text-sm font-medium text-gray-600 cursor-pointer">Credits:{credit}</p>
          </button>
          <p className="text-gray-600 max-sm:hidden">Hi, {user.firstName}</p>
          <UserButton />
        </div>
        :<button onClick={() => openSignIn()}
        className="
                bg-blue-600 text-white font-semibold 
                px-5 py-2.5 rounded-full shadow-lg 
                flex items-center space-x-2 
                transition-all duration-300 ease-in-out
                
                hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02]
                hover:cursor-pointer
                
                active:scale-95
            "
      >
        Get Started
      </button>
      }
      

      <Link to="/" className="text-white rounded-full py-2 px-2.5 bg-blue-800">Home </Link>
      <Link to="/buy" className="text-white rounded-full py-2 px-2.5 bg-blue-800">Buy Credits </Link>
      <Link to="/result" className="text-white rounded-full py-2 px-2.5 bg-blue-800">Result </Link>

      {/* Enhanced 'Get Started' Button */}
      

        {/* Arrow Icon with a slight 'translate' animation on button hover */}
        <img
          src={assets.arrow_icon}
          alt="arrow"
          className="
                    w-4 
                    transition-transform duration-300 ease-in-out 
                "
        />
    </div>
  );
}

export default Navbar;
