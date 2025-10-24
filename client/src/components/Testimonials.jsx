import React from 'react'
import { testimonialsData } from '../assets/assets'

function Testimonials() {
  return (
    // Added padding-bottom to the main div for better spacing
    <div className='py-10 bg-gray-50'> 
        {/* Enhanced Heading: Added border, better color, and animation */}
        <h1 className='
            text-center text-3xl md:text-3xl lg:text-4xl font-extrabold text-blue-600
            py-5 mb-8 border-b-4 border-indigo-200 mx-auto
            animate-fade-in
        '>
            Customer Testimonials
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-8'>
            {testimonialsData.map((item,index) => (
                // Enhanced Card: Background, rounded corners, subtle shadow, and dynamic hover/animation
                <div 
                    className='
                        bg-white rounded-3xl p-8 shadow-xl border border-gray-100
                        transition-all duration-500 ease-in-out cursor-pointer 
                        
                        
                        hover:shadow-2xl hover:border-indigo-400 hover:scale-[1.03]
                        
                    ' 
                    key={index}
                >
                    {/* Quotation Mark: Bigger, bolder, and a primary color */}
                    <p className='text-6xl text-indigo-500 font-bold mb-4'>"</p>
                    
                    {/* Testimonial Text: Better font color */}
                    <p className='text-lg italic text-gray-700 leading-relaxed mb-6'>{item.text}</p>
                    
                    {/* Author Section */}
                    <div className='flex items-center gap-4 mt-6'>
                        {/* Image: Consistent size and border */}
                        <img 
                            className='w-14 h-14 object-cover rounded-full border-2 border-indigo-400 p-0.5' 
                            src={item.image} 
                            alt={item.author} 
                        />
                        <div>
                            {/* Author Name: Bolder and slightly larger */}
                            <p className='font-bold text-lg text-gray-900'>{item.author}</p>
                            {/* Job Title: Subdued color */}
                            <p className='text-sm text-indigo-600'>{item.jobTitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials