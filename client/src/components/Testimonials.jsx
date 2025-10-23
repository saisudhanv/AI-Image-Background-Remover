import React from 'react'
import { testimonialsData } from '../assets/assets'

function Testimonials() {
  return (
    <div>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-5'>Customer Testimonials</h1>

        <div>
            {testimonialsData.map((item,index) => (
                <div key={index}>
                    <p>"</p>
                    <p>{item.text}</p>
                <div>
                    <img src={item.image} alt="" />
                    <div>
                        <p>{}</p>
                        <p>{}</p>
                </div>
                </div>
                </div>

            ))}
        </div>

    </div>
  )
}

export default Testimonials