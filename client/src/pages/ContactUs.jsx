import React from 'react';
import Navbar from '../Components/Navbar';
import Location from '../images/ContactusIcon/location.png';
import callCalling from '../images/ContactusIcon/call-calling.png';
import clock from '../images/ContactusIcon/clock.png';
import Map from '../MapModel/Map';
import GetInTouchForm from '../Components/GetInTouchForm';
import Footer from '../Components/Footer';

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className='container mx-auto px-6 lg:px-32 gap-14 flex flex-col justify-center'>

                {/* our services */}
                <div className='flex justify-center items-center mt-14'>
                    <p className='our-menu'>Our Contact</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <p className='pride text-sm lg:text-xl uppercase w-full lg:w-[100%] justify-center'>Get in touch</p>
                    <p className='text-coustemOrange  font-sans md:text-2xl transition-all text-md font-bold mt-3'>
                        Our Friendly Team<span className='text-slate-800 ml-2'>Would love to hear from you</span>
                    </p>
                </div>

                <div className='flex md:flex-row flex-col gap-5 xl:gap-12'>

                    <div className='custom-shadow w-full lg:w-1/3 h-[220px] lg:h-[250px]'>
                        <div className='ml-10 md:ml-6 lg:ml-8 xl:ml-12 mt-12'>
                            <div className='flex gap-2 uppercase font-semibold text-customText'>
                                <img className='w-[8%] lg:w-[10%]' src={Location} alt="" />
                                <h4 className='text-[14px] lg:text-[19px]'>Location</h4>
                            </div>
                            <p className='font-semibold text-customText w-4/5 lg:w-3/4 mt-7 italic text-xs lg:text-[15px]'>
                                New Baneshwor -41201, Kathmandu, Bagmati, Nepal
                            </p>
                        </div>
                    </div>

                    <div className='custom-shadow w-full lg:w-1/3 h-[220px] lg:h-[250px]'>
                        <div className='ml-10 md:ml-6 lg:ml-8 xl:ml-12  mt-12'>
                            <div className='flex gap-3 uppercase font-semibold text-customText'>
                                <img className='w-[8%] lg:w-[10%]' src={callCalling} alt="" />
                                <h4 className='text-[14px] lg:text-[19px]'>Phone</h4>
                            </div>
                            <div className='flex gap-10 lg:gap-6 xl:gap-14'>
                                <div className='mt-7 text-customGreen font-bold text-xs lg:text-[15px]'>
                                    <p>Phone:</p>
                                    <p className='mt-10'>Call:</p>
                                </div>
                                <div className='mt-7 flex flex-col font-semibold text-customText italic text-xs lg:text-[14px]'>
                                    <a href='tel:+9779802428334'>(+977) 9802428334</a>
                                    <a href='tel:+9779825395895'>(+977) 9825395895</a>
                                    <a href='tel:019834637' className='mt-5 ml-12'>01-9834637</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='custom-shadow w-full lg:w-1/3 h-[220px] lg:h-[250px]'>
                        <div className='ml-10 md:ml-6 lg:ml-6 xl:ml-12  mt-12'>
                            <div className='flex gap-3 uppercase font-semibold text-customText'>
                                <img className='w-[8%] lg:w-[10%]' src={clock} alt="" />
                                <h4 className='text-[14px] lg:text-[19px]'>Service Time</h4>
                            </div>
                            <div className='flex gap-10 lg:gap-6 xl:gap-14'>
                                <div className='flex flex-col mt-7 text-customGreen font-bold text-xs lg:text-[15px] '>
                                    <a href='#'>MON - FRI</a>
                                    <a href='#' className='mt-2'>SAT - SUN</a>
                                </div>
                                <div className='mt-7 flex flex-col text-customText italic text-xs lg:text-[15px] font-semibold'>
                                    <span className='text-customText'>8 am - 8 pm</span>
                                    <a href='#' className='mt-2 ml-8'>Closed</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className='bg-slate-50'>
               <div className='mx-auto flex flex-col md:flex lg:flex-row  items-center mt-20 bg-slate-50 gap-10 xl:gap-32 '>
                <div className='w-[400px] md:w-full  lg:w-[550px] xl:w-[650px]'>
                    <Map />
                </div>
                <div className=' relative bg-white w-5/6 lg:w-2/6  lg:ml-10 shadow-lg px-8 py-20'>
                      <p className='text-coustemOrange font-sans md:text-2xl transition-all text-lg font-bold -mt-10 '>
                        Contact<span className='text-slate-800 ml-2'>Us</span>
                      </p>
                    <p className='text-slate-500  text-xs lg:text-md mt-2'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
                    <div className='mt-10'>
                    <GetInTouchForm buttonColor="green" />
                    </div>

                </div>
            </div>
            <span  >
            <Footer footerColor="bg-slate-50" />
            </span>
            </div>
        </>
    );
}

export default ContactUs;
