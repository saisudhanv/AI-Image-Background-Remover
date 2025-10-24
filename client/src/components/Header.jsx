import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <>
    <div className='
        flex items-center justify-between max-sm:flex-col-reverse gap-y-10 
        px-4 mt-10 lg:px-44 sm:mt-24 pb-16 overflow-hidden 
        pt-8
      '
    >

    {/* Left side (Text and Button) */}
    <div className='max-w-xl'>
        {/* Fixed Heading: Removed 'opacity-0' and animation classes/styles */}
        <h1 
            className='
                text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-gray-900 
            '
            // Removed: style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
            Remove the <br className='max-md:hidden' /> 
            <span className='text-blue-600'>background</span> from <br className='max-md:hidden' /> 
            images for free
        </h1>

        <div className='mt-10'>
            <input type='file' name='' id='upload1' hidden />
            {/* Fixed Button: Removed 'opacity-0' and animation classes/styles */}
            <label 
                className='
                    inline-flex items-center gap-3 px-10 py-4 rounded-full cursor-pointer 
                    bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white 
                    font-semibold text-lg shadow-xl tracking-wide
                    
                    // Hover and Active Animations (These are standard Tailwind transitions, so they are safe)
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-2xl hover:from-violet-700 hover:to-fuchsia-600
                    active:scale-95
                ' 
                // Removed: style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                htmlFor='upload1'
            >
                <img width={24} src={assets.upload_btn_icon} alt='upload' />
                <span>Upload your image</span>
            </label>
        </div>
    </div>

    {/* Right side (Image) */}
    <div className='relative'>
        {/* Fixed Image: Removed 'opacity-0' and animation classes/styles */}
        <img 
            src={assets.header_img} 
            alt='header' 
            className='
                w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-white
            ' 
            // Removed: style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        />
        
        {/* Optional: Add a subtle decoration behind the image */}
        <div className='
            hidden md:block absolute bottom-0 left-0 w-32 h-32 
            bg-blue-200 rounded-full transform translate-x-1/2 translate-y-1/2 opacity-60 z-[-1]
        '></div>
    </div>
    </div>
    </>
  )
}

export default Header