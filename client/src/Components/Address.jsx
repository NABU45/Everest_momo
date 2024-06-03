import React from 'react'
import Location from '../images/aboutImg/location.png'
import Call from '../images/aboutImg/call.png'
import Clock from '../images/aboutImg/clock.png'
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa"; 


function Address() {
    return (
        <div className=' bg-customGreen flex flex-col gap-10 rounded-lg lg:rounded-3xl px-10 text-white w-full lg:w-2/5 h-[650px]  py-6'>
            <div>
                <div className=' flex gap-2 '>
                    <img src={Location} alt="" />
                    <h4 >Our Address</h4>
                </div>
                <p className=' italic mt-5 w-5/6'> New Baneshwor, Kathmandu, Bagmati, Nepal</p>
            </div>

            <div>

                <div className=' flex gap-2 '>
                    <img src={Call} alt="" />
                    <h4 >Our Contact</h4>
                </div>

                <div className='flex gap-10 mt-5'>
                    <div className='flex flex-col'>
                        <h4>Mobile</h4>
                        <a href="#">980 5689789</a>
                        <a href="#">9841 275897</a>
                    </div>
                    <div>
                        <h4>Landline</h4>
                        <a href="#">01-4783972</a>
                    </div>
                </div>
            </div>
            <div>
                <div className=' flex gap-2 '>
                    <img src={Clock} alt="" />
                    <h4 >Our Service Time</h4>
                </div>
                <div className='flex gap-10 mt-5'>
                    <div className='flex flex-col'>
                        <h4>MON - FRI</h4>
                        <p className=' italic'>10am - 8pm</p>
                    </div>
                    <div>
                        <h4>SAT - SUN</h4>
                        <a href="#" className='italic'>Closed</a>
                    </div>
                </div>
            </div>

            <div>
                <p className=' italic'>Get in touch in social network</p>
                <div className="hidden lg:flex items-center space-x-4 ml-auto mt-2 ">
                        <a href="#" className="">
                            < FaFacebookF size={24}  className='bg-white text-customGreen  rounded-full p-1'/>
                        </a>
                        <a href="#" className="">
                            <FaTiktok size={24}  className='bg-white text-customGreen rounded-full p-1'/>
                        </a>
                        <a href="#" className="">
                            <CiInstagram size={24}  className='bg-white text-customGreen rounded-full p-1'/>
                        </a>
               </div>
            </div>

        </div>
    )
}

export default Address
