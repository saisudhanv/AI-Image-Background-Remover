import React from 'react'
import { assets } from '../assets/assets'

function Upload() {
  return (
    <div className='pb-16'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16'>See the magic, Try now</h1>

            <div className='text-center mb-24'>
                <input type='file' name='' id='upload2' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5 mt-10 rounded-full cursor-pointer bg-gradient-to-r from via-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor='upload2'>
                    <img width={20} src={assets.upload_btn_icon} alt='upload' />
                    <p className='text-white text-sm'>Upload your image</p>
                </label>
            </div>
    </div>
  )
}

export default Upload