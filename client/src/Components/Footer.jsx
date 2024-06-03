import React from 'react';
import logo from "../images/aboutImg/icon.png";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import { CiInstagram, CiTwitter } from 'react-icons/ci';

function Footer({ footerColor }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${footerColor === 'white' ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="mx-auto px-6  lg:px-20 xl:px-40 mt-32 ">
        <div className="flex flex-col lg:flex-row  justify-between lg:gap-28 xl:gap-52 gap-10 ">
          {/* icon */}
          <div className=" lg:w-[55%] xl:w-[33%] w-full">
            <div className="flex items-center gap-3">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <a href="/" className="ml-2 text-xl font-semibold text-customGreen">Momos</a>
            </div>
            <p className="mt-3 text-gray-600 text-xs md:text-sm lg:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt beatae voluptates, veritatis repudiandae magni alias consectetur, ullam assumenda repellat eos enim quaerat repellat eos enim quicing elit. Voluptatibus deser adipisicing elit.
            </p>
          </div>

          {/* momos */}
          <div className="flex flex-col sm:flex-row lg:gap-16 gap-10 w-full xl:w-[40%]">
            <div className=" lg:w-[35%] w-full">
              <a href="#" className="text-lg text-customGreen font-bold">Momos</a>
              <ul className="flex flex-col justify-start mt-3 gap-2 text-sm lg:text-md">
                <li><a href="/aboutus" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">About Us</a></li>
                <li><a href="/ourmanu" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Our Menu</a></li>
                <li><a href="/ourservice" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Our Services</a></li>
                <li><a href="/contactus" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Contact Us</a></li>
              </ul>
            </div>

            <div className="lg:w-[35%] w-full">
              <a href="#" className="text-lg text-customGreen font-bold">Legals</a>
              <ul className="flex flex-col justify-start mt-3 gap-2 text-sm lg:text-md">
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[15px] hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline">Support</a></li>
              </ul>
            </div>

            <div className="lg:w-[33%] w-full">
              <a href="#" className="text-lg text-customGreen font-bold">Follow Us</a>
              <div className="flex mt-3 space-x-3">
                <a href="#"><FaFacebookF size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><FaLinkedinIn size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><CiTwitter size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
              </div>
              <div className="flex mt-2 space-x-3">
                <a href="#"><FaYoutube size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><CiInstagram size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
                <a href="#"><FaTiktok size={24} className="bg-customiconbg text-white rounded-full p-1" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-10 lg:mt-20 border-1 lg:border-2 bg-customiconbg" />
        <div className="flex justify-center items-center text-center py-6 lg:py-10 text-xs md:text-md lg:text-lg" style={{ color: '#6B788E' }}>
          <p>Copyright &copy; {currentYear} Everest Momo Pvt. Ltd. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
