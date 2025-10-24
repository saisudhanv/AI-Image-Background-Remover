import React from 'react'
import { assets } from '../assets/assets'

function Upload() {
  return (
    // Main container with gradient background and enhanced padding
    <div className='py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-500 to-purple-300 relative overflow-hidden'>
      
      {/* Optional: Add some abstract shapes/patterns for visual interest */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2 blur-2xl animate-blob animation-delay-2000"></div>

      {/* Heading with enhanced styling and an entrance animation */}
      <h1 className='
        text-center text-3xl md:text-5xl lg:text-6xl font-extrabold text-white 
        mb-12 md:mb-16 leading-tight relative z-10
        animate-fade-in-up
      '>
        See the magic, <br className='sm:hidden'/> <span className='text-yellow-300'>Try now</span>
      </h1>

      <div className='text-center relative z-10'>
        <input type='file' name='' id='upload2' hidden />
        <label 
          className='
            inline-flex items-center gap-3 
            px-10 py-4 mt-8 md:mt-12 rounded-full cursor-pointer 
            bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white 
            font-bold text-lg shadow-2xl tracking-wide
            
            // Hover and Active Animations
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-3xl hover:from-violet-800 hover:to-fuchsia-700
            active:scale-95 active:shadow-lg
            
            // Entrance Animation
            animate-fade-in-down animation-delay-500
          ' 
          htmlFor='upload2'
        >
          <img width={24} src={assets.upload_btn_icon} alt='upload' /> {/* Increased icon size */}
          <span>Upload your image</span>
        </label>
      </div>
    </div>
  )
}

export default Upload