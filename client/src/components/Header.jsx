import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <>
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-24'>

    {/* Left side */}
    <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight'>Remove the <br className='max-md:hidden' /> <span className='text-blue-600'>background</span> from <br className='max-md:hidden' /> images for free</h1>

    <div>
        <input type='file' name='' id='upload1' hidden />
        <label className='inline-flex gap-3 px-8 py-3.5 mt-10 rounded-full cursor-pointer bg-gradient-to-r from via-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor='upload1'>
            <img width={20} src={assets.upload_btn_icon} alt='upload' />
            <p className='text-white text-sm'>Upload your image</p>
        </label>
    </div>
    </div>

    {/* Right side */}
    <div>
        <img src={assets.header_img} alt='header' className='w-full max-w-md lg:max-w-lg' />
    </div>
    </div>
    </>
  )
}

export default Header