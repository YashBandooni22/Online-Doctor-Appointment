import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-sm'>
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 leading-6 text-gray-600'>Prescipto is an easy-to-use doctor appointment platform, allowing users to find doctors by specialty, view availability, and book appointments seamlessly, ensuring a hassle-free experience for healthcare needs. Your health, just a click away</p>
                </div>
                <div>
                    <p className='text-2xl font-medium mb-5'>
                        Company
                    </p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li onClick={() => scrollTo(0, 0)}><Link to="/">Home</Link></li>
                        <li onClick={() => scrollTo(0, 0)}><Link to="/about">About Us</Link></li>
                        <li onClick={() => scrollTo(0, 0)}><Link to="/contact">Contact Us</Link></li>
                        <li onClick={() => scrollTo(0, 0)}><Link to="/policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='text-2xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>www.prescipto.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center' >Copyright 2024 @Prescipto - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer