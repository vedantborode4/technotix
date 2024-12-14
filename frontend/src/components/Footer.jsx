import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';


function Footer() {
  return (
    <footer className='bg-purple-400 flex flex-col justify-center py-4'>
      <div className="flex p-4 flex-col justify-center md:flex-row md:justify-between mx-10">
        <div className="hidden md:block md:pl-6">
          <Logo />
        </div>
        <ul className='text-sm flex justify-center space-x-4 m-4 md:pl-24'>
          <li>About us</li>
          <li>Careers</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className='flex justify-center space-x-4 mt-4 text-3xl'>
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
      <hr className="border-t-2 border-gray-800 w-4/5 mx-auto my-4" />
      <div className="text-black p-4 pb-12 items-center flex justify-center">
       <p className=' mt-4'>&copy; 2023 Technotix. All rights reserved</p>

      </div>
    </footer>
  )
}

export default Footer