import React, { useState } from 'react';
import icon from "../images/aboutImg/image-removebg-preview-removebg-preview.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 lg:px-40">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-14">
                        {/* Left Section: Logo and Title */}
                        <div className="flex items-center gap-3">
                            <img className="h-8 w-auto" src={icon} alt="Logo" />
                            <a href="#" className="ml-2 text-xl font-semibold text-customGreen">Momos</a>
                        </div>

                        {/* Center Section: Navigation Links with Dropdown */}
                        <div className="hidden lg:flex lg:items-center lg:w-auto">
                            <ul className="flex flex-col lg:flex-row lg:space-x-6">
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900">About Us</a>
                                </li>
                                <li className="relative">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 focus:outline-none"
                                    >
                                        Our menu
                                        <i className={`fas fa-chevron-down ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}></i>
                                    </button>
                                    {isDropdownOpen && (
                                        <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                            <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a></li>
                                            <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a></li>
                                            <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 3</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-slate-600">Our services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-500" aria-disabled="true">Allergy Advice</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section: Social Media Icons */}
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
                    </div>

                    {/* Toggle Button for Small Screens */}
                    <div className="block lg:hidden">
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
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900">About Us</a>
                        </li>
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 focus:outline-none"
                            >
                                Our menu
                                <i className={`fas fa-chevron-down ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}></i>
                            </button>
                            {isDropdownOpen && (
                                <ul className="mt-2 w-full bg-white border rounded shadow-lg">
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 3</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900">Our services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-500 cursor-not-allowed" aria-disabled="true">Allergy Advice</a>
                        </li>

                        <li className="flex justify-center space-x-4">
                            <a href="#" className="">
                            < FaFacebookF size={24}  className='bg-slate-600 text-white rounded-full p-1'/>
                            </a>
                            <a href="#" className="">
                            <FaTiktok size={24}  className='bg-slate-600 text-white rounded-full p-1'/>
                            </a>
                            <a href="#" className="">
                            <CiInstagram size={24}  className='bg-slate-600 text-white rounded-full p-1'/>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
