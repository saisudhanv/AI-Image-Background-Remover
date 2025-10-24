import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
  const stepsData = [
    {
      icon: assets.upload_icon,
      title: 'Upload image',
      text: 'This is a demo text, will replace later',
    },
    {
      icon: assets.remove_bg_icon,
      title: 'Remove background',
      text: 'This is a demo text, will replace later',
    },
    {
      icon: assets.download_icon,
      title: 'Download image',
      text: 'This is a demo text, will replace later',
    },
  ];

  return (
    // Added a subtle background color for separation and consistent padding
    <div className='py-20 xl:py-28 bg-gray-50'> 

      {/* Enhanced Heading */}
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-16 px-4'>
        Simple Steps to <span className='text-blue-600'>Remove Background</span> <br /> from your photo
      </h1>
      
      {/* Container: Centers items and controls the overall max width */}
      <div className='
        flex flex-wrap justify-center gap-10 md:gap-8 lg:gap-16 
        max-w-7xl mx-auto px-4
      '>
        
        {stepsData.map((item, index) => (
          // Individual Step Card Container (using 'group' for hover effects)
          <div 
            key={index}
            className='
              relative max-w-sm w-full md:w-80 group
              transition-all duration-300 ease-in-out
            '
          >
            {/* Main Content Card */}
            <div 
              className='
                flex items-start gap-4 bg-white border border-gray-200 p-7 pb-10 rounded-2xl 
                shadow-lg w-full h-full transition-all duration-300 ease-in-out
                
                
                group-hover:shadow-2xl group-hover:scale-[1.03] group-hover:border-blue-500
              '
            >
              <img 
                className='max-w-10 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:rotate-6' 
                src={item.icon} 
                alt={`${item.title} icon`} 
              />
              <div>
                <p className='text-xl font-bold text-gray-800'>{item.title}</p>
                <p className='text-sm text-gray-500 mt-1'>{item.text}</p>
              </div>
            </div>

            {/* Decorative Step Number: Absolutely positioned for a clean look */}
            <div 
                className='
                    absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 
                    w-10 h-10 flex items-center justify-center rounded-full 
                    bg-blue-600 text-white font-black text-xl shadow-md border-2 border-white z-20
                    transition-colors duration-300
                    
                    // Hover Effect: Number darkens on card hover
                    group-hover:bg-blue-700
                '
            >
                {index + 1}
            </div>
            
            {/* Connector Line (Hidden on mobile, hidden on the last step) */}
            {index < stepsData.length - 1 && (
                <div 
                    className='
                        hidden md:block absolute right-0 top-1/2 w-8 lg:w-16 h-1 
                        bg-blue-300 transform translate-x-full -translate-y-1/2
                        
                        // Connector Arrowhead
                        after:content-[""] after:absolute after:right-0 after:top-1/2 
                        after:transform after:translate-x-1/2 after:-translate-y-1/2 
                        after:w-3 after:h-3 after:bg-blue-600 after:rounded-full
                    '
                ></div>
            )}
            
          </div>
        ))}
          
      </div>

    </div>
  )
}

export default Steps