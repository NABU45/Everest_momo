import React, { useState } from 'react';
import logo from "../images/aboutImg/icon.png"
// import '@fortawesome/fontawesome-free/css/all.css';
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa"; 
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md ">
                <div className="flex  justify-between items-center py-4 sm:w-screen px-5 lg:px-40">
                    <div className="flex items-center gap-14 ">
                        {/* Left Section: Logo and Title */}
                        <div className="flex items-center gap-3">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />

                            <a href="/" className="ml-2 text-xl font-semibold text-customGreen">Momos</a>
                        </div>

                        {/* Center Section: Navigation Links with Dropdown */}
                        <div className="hidden lg:flex lg:items-center lg:w-auto">
                            <ul className="flex flex-col lg:flex-row lg:space-x-6">
                                <li>
                                    <Link to={"/aboutus"}>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 hover:text-[17px] hover:underline ">About Us</a>
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link to={"/ourmanu"}>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-slate-600 hover:text-[17px] hover:underline">Our Manu</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"}>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-slate-600 hover:text-[17px] hover:underline">Our services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/advice"}>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-500 hover:text-[17px] hover:underline" aria-disabled="true">Allergy Advice</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section: Social Media Icons and Contact Us Button */}
                    <div className="hidden lg:flex items-center space-x-4 ml-auto">
                        <a href="#" className="">
                            < FaFacebookF size={24}  className='bg-slate-600 text-white rounded-full p-1'/>
                        </a>
                        <a href="#" className="">
                            <FaTiktok size={24}  className='bg-slate-600 text-white rounded-full p-1'/>
                        </a>
                        <a href="#" className="">
                            <CiInstagram size={24}  className='bg-slate-600 text-white rounded-full p-1'/>
                        </a>
                        <a href="#" className="ml-4 py-1 px-4 text-white bg-coustemOrange rounded-3xl">Contact Us</a>
                    </div>

                    {/* Toggle Button for Small Screens */}
                    <div className="flex lg:hidden items-center">
                        <a href="#" className="py-1 px-2 mr-3 text-sm md:text-md md:py-1 md:px-4 text-white bg-coustemOrange rounded-3xl">Contact Us</a>
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
                    <ul className="flex flex-col space-y-2 ">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900">Our Manu</a>
                        </li>
                      
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900">Our services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 focus:outline-none">Allergy Advice</a>
                        </li>


                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;
