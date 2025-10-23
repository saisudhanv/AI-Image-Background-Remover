import React from 'react'
import { assets } from '../assets/assets'

function Steps() {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold'>
        Steps to remove background image <br /> from your photo
      </h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded transition-all duration-500'>
            <img className='max-w-9' src={assets.upload_icon} alt="upload icon" />
            <div>
              <p className='text-xl font-medium'>Upload image</p>
              <p className='text-sm text-nuetral-500'>This is a demo text, will replace later</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded transition-all duration-500'>
            <img className='max-w-9' src={assets.remove_bg_icon} alt="upload icon" />
            <div>
              <p className='text-xl font-medium'>Remove background</p>
              <p className='text-sm text-nuetral-500'>This is a demo text, will replace later</p>
            </div>
          </div>

          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded transition-all duration-500'>
            <img className='max-w-9' src={assets.download_icon} alt="upload icon" />
            <div>
              <p className='text-xl font-medium'>Download image</p>
              <p className='text-sm text-nuetral-500'>This is a demo text, will replace later</p>
            </div>
          </div>
            
        </div>
    </div>
    
  )
}

export default Steps