import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"Contact"} text2={"Us"} />
        <div className='my-2 flex flex-col justify-center items-center md:flex-row gap-10 mb-28 px-4 sm:px-10'>
          {/* Image */}
          <img className='w-full sm:w-1/2 md:w-1/3 object-cover' src={assets.contact_img} alt="contact" />

          {/* Contact Details */}
          <div className='flex flex-col justify-center gap-6 text-center md:text-left'>
            <p className='font-semibold text-lg sm:text-xl text-gray-600'>BISWORANJAN</p>
            <p className='text-gray-500 text-sm sm:text-base'>Frontend Developer: <br /> React / Tailwind CSS</p>
            <p className='text-gray-500 text-sm sm:text-base'>Contact: <br /> 7978092266</p>
            <p className='text-gray-500 text-sm sm:text-base'>Email: <br /> biswoanjan34@gmail.com</p>
            <p className='text-gray-500 text-sm sm:text-base'>Experience: <br /> Ready To Serve A Service</p>
            <button className='border border-black px-6 py-2 sm:px-8 sm:py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
