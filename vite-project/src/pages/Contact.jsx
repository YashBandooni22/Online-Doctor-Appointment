import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div  className='text-center text-2xl pt-20 text-gray-500' >
        <p>CONTACT <span className='text-gray-700 font-semibold'> Us</span></p>
      </div>

      <div  className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-30 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-600 font-semibold txet-lg'>Our OFFICE</p>
          <p className='text-gray-600'>54709 Willms Station <br />Suite 350, Washington, USA</p>
          <p className='text-gray-600'>Tel: (415) 555‑0132 <br />Email: greatstackdev@gmail.com</p>
          <p className='text-gray-600 font-semibold txet-lg'>Careers at PRESCRIPTO</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact