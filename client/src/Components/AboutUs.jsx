import React from 'react'


import Group8 from '../images/aboutImg/Group8.png'
import Navbar from './Navbar';

function About() {
    const customStyle = {
        fontFamily: "'Allura', cursive",
        fontWeight: 400,
        fontStyle: 'normal'
    };


    return (
        <>
          <Navbar/>
              <div className='container mx-auto px-6 lg:px-40 gap-14 flex flex-col justify-center  '>
                <div className='flex flex-row justify-between items-center'>
                    <div className=' flex flex-col justify-start'>
                        <h3 className='our-menu mt-5'> About Us</h3>

                        <p className='pride uppercase mt-4'>we pride ourself on</p>
                        <div className='flex flex-col justify-first   space-y-2 font-bold  '>
                       <span className='  text-coustemOrange  justify-first font-sans md:text-3xl transition-all text-md '>Our authentic momo recipes,</span>
                       <span className='text-slate-800  text-first font-sans md:text-3xl transition-all text-md w-[70%]'>passed down through generations</span>
                       </div>
                  </div>
            
                      <div className='mt-4 w-[40%] '>
                        <img  src={Group8} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
