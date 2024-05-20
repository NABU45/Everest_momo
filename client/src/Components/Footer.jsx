import React from 'react'
import Navbar from './Navbar'
import logo from "../images/aboutImg/icon.png"
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { CiInstagram } from 'react-icons/ci'
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto px-6 lg:px-40 mt-20">
        <div className="flex flex-col lg:flex-row justify-start lg:gap-32 gap-10">
          {/* icon */}
          <div className="lg:w-[40%] w-full">
            <div className="flex items-center gap-3">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <a href="#" className="ml-2 text-xl font-semibold text-customGreen">Momos</a>
            </div>
            <p className="mt-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt beatae voluptates, veritatis repudiandae magni alias consectetur, ullam assumenda repellat eos enim quaerat repellat eos enim quicing elit. Voluptatibus deser adipisicing elit.
            </p>
          </div>

          {/* momos */}
          <div className="flex flex-col  sm:flex-row lg:gap-16 gap-10 w-full lg:w-[60%]">
            <div className="lg:w-[33%] w-full">
              <a href="#" className="text-md  text-customGreen font-bold">Momos</a>
              <ul className="flex flex-col justify-start mt-3 gap-2">
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">About Us</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Our Menu</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Our Services</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Contact Us</a></li>
              </ul>
            </div>

            <div className="lg:w-[33%] w-full">
              <a href="#" className="text-md  text-customGreen font-bold">Legals</a>
              <ul className="flex flex-col justify-start mt-3 gap-2">
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Support</a></li>
              </ul>
            </div>

            <div className="lg:w-[33%] w-full">
              <a href="#" className="text-md  text-customGreen font-bold">Follow Us</a>
              <div className="flex mt-3 space-x-2">
                <a href="#"><FaFacebookF size={24} className=" bg-customiconbg  text-white rounded-full p-1" /></a>
                <a href="#"><FaLinkedinIn  size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><CiTwitter size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
              </div>
              <div className="flex mt-2 space-x-2">
                <a href="#"><FaYoutube  size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><CiInstagram size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><FaTiktok size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr className='w-full mt-20  border-2 bg-customiconbg' />
        <div className='flex justify-center items-center py-10' style={{ color: '#6B788E' }}>
            <p>Copyright {currentYear} Everest Momo Pvt. Ltd. All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
