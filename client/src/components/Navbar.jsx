import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="logo" /></Link>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'>Get Started <img src={assets.arrow_icon} alt="arrow" className='inline w-4 ml-2'/>                               

        </button>
    </div>
  )
}

export default Navbar