import React, { useState } from 'react';
import logo from "../images/aboutImg/icon.png";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="flex justify-between items-center py-4 sm:w-screen px-5 lg:px-14 xl:px-40">
                <div className="flex items-center gap-14">
                    {/* Left Section: Logo and Title */}
                    <div className="flex items-center gap-3">
                        <img className="h-8 w-auto" src={logo} alt="Logo" />
                        <Link to="/" className={`ml-2 text-xl font-semibold text-customGreen `}>Momos</Link>
                    </div>

                    {/* Center Section: Navigation Links with Dropdown */}
                    <div className="hidden lg:flex lg:items-center lg:w-auto">
                        <ul className="flex flex-col lg:flex-row lg:space-x-6">
                            <li>
                                <Link to="/aboutus" className={`block py-2 pr-4 pl-3 ${activeLink === '/aboutus' ? 'text-customGreen font-bold' : 'text-gray-700'} hover:text-gray-900 hover:text-[17px] hover:underline`} onClick={() => handleLinkClick('/aboutus')}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/ourmanu" className={`block py-2 pr-4 pl-3 ${activeLink === '/ourmanu' ? 'text-customGreen font-bold' : 'text-slate-600'} hover:text-[17px] hover:underline`} onClick={() => handleLinkClick('/ourmanu')}>Our Manu</Link>
                            </li>
                            <li>
                                <Link to="/ourservice" className={`block py-2 pr-4 pl-3 ${activeLink === '/ourservice' ? 'text-customGreen font-bold' : 'text-slate-600'} hover:text-[17px] hover:underline`} onClick={() => handleLinkClick('/ourservice')}>Our Service</Link>
                            </li>
                            <li>
                                <Link to="/advice" className={`block py-2 pr-4 pl-3 ${activeLink === '/advice' ? 'text-customGreen font-bold' : 'text-gray-500'} hover:text-[17px] hover:underline`} onClick={() => handleLinkClick('/advice')}>Allergy Advice</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section: Social Media Icons and Contact Us Button */}
                <div className="hidden lg:flex items-center space-x-4 ml-auto">
                    <a href="#" className="">
                        <FaFacebookF size={24} className='bg-slate-600 text-white rounded-full p-1' />
                    </a>
                    <a href="#" className="">
                        <FaTiktok size={24} className='bg-slate-600 text-white rounded-full p-1' />
                    </a>
                    <a href="#" className="">
                        <CiInstagram size={24} className='bg-slate-600 text-white rounded-full p-1' />
                    </a>
                    <Link to="/contactus" className="ml-4 py-1 px-4 text-white bg-coustemOrange rounded-3xl shadow-md  cursor-pointer text-2lg text-center w-30  transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 hover:bg-indigo-700 duration-300">Contact Us</Link>
                </div>

                {/* Toggle Button for Small Screens */}
                <div className="flex lg:hidden items-center">
                    <Link to="/contactus" className="py-1 px-2 mr-3 text-sm md:text-md md:py-1 md:px-4 text-white bg-coustemOrange rounded-3xl   shadow-md  cursor-pointer  text-2lg text-center w-30  transition ease-in-out delay-150  hover:translate-x-1 hover:scale-110 hover:bg-indigo-500 duration-300">Contact Us</Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="navbar-toggler flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400 hover:text-gray-700 hover:border-gray-700"
                        aria-label="Toggle navigation"
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Collapsible Menu for Small Screens */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <ul className="flex flex-col space-y-2">
                    <li>
                        <Link to="/aboutus" className={`block py-2 pr-4 pl-3  `} >About Us</Link>
                    </li>
                    <li>
                        <Link to="/ourmanu" className={`block py-2 pr-4 pl-3 `}>Our Manu</Link>
                    </li>
                    <li>
                        <Link to="/ourservice" className={`block py-2 pr-4 pl-3`}>Our Services</Link>
                    </li>
                    <li>
                        <Link to="/advice" className={`block py-2 pr-4 pl-3 `}>Allergy Advice</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
