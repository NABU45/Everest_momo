import React from 'react'


import Group8 from '../images/aboutImg/Group8.png'
import About02 from '../images/aboutImg/About02.jpeg'
import Watch from '../images/aboutImg/Watch.png'
import About03 from '../images/aboutImg/About03.jpeg'
import About04 from '../images/aboutImg/About04.png'
import About05 from '../images/aboutImg/About05.jpeg'
import Navbar from './Navbar';

function About() {
    const customStyle = {
        fontFamily: "'Allura', cursive",
        fontWeight: 400,
        fontStyle: 'normal'
    };

    const aboutStyle02 = {
        position: 'relative',
        backgroundImage: `url(${About02})`,
        width: '100%',
        transition: 'background-image 0.5s ease',
    };

    const aboutStyle03 = {
        position: 'relative',
        backgroundImage: `url(${About03})`,
        backgroundSize: 'cover',
        // height: '250px',
        // width: '50%',
        transition: 'background-image 0.5s ease',
    };


    return (
        <>
            <Navbar />
            <div className='container mx-auto px-6 lg:px-40 gap-14 flex flex-col justify-center'>
                <div className='flex flex-row justify-between items-center'>
                    <div className=' flex flex-col justify-start'>
                        <h3 className='our-menu mt-5'> About Us</h3>
                        <div>
                            <p className='pride uppercase mt-4 w-[70%]'>we pride ourself on</p>
                            <div className='flex flex-col justify-first space-y-2 font-bold'>
                                <span className='  text-coustemOrange  justify-first font-sans md:text-3xl transition-all text-md w-[100%]'>Our authentic momo recipes,</span>
                                <span className='text-slate-800  text-first font-sans md:text-3xl transition-all text-md w-[70%]'>passed down through generations</span>
                            </div>
                        </div>
                    </div>


                    <div className='mt-4 w-[40%] '>
                        <img src={Group8} alt="" />
                    </div>
                </div>
            </div>



            <div style={{ position: 'relative' }} className='mt-20'>
                <div style={aboutStyle02} className='px-6 md:px-40 bg-cover h-[320px] sm:bg-cover sm:h-[480px] md:bg-cover md:h-[640px]'>
                    <div className='absolute inset-0 bg-gradient-to-r from-black to-[rgba(94,77,64,0.7)] opacity-80'></div>
                    <div className='absolute top-[150px] md:top-[367px] text-white' >
                        <p className='font-bold md:text-3xl transition-all text-md'>Process behind the making</p>
                        <p className='text-lg'>See how we make momos that you like from only the best ingredients</p>
                    </div>
                    <div>
                        <img className='absolute top-[240px] md:top-[450px] w-24 md:w-1/6 h-auto' src={Watch} alt="" />
                    </div>
                </div>
            </div>



            <div className='container mx-auto px-6 lg:px-40 gap-14 flex flex-col justify-center'>
                <div className='mt-[60px] md:mt-[120px] flex justify-between'>
                    <div className='flex flex-col-reverse md:flex-row justify-start gap-20'>
                        <div className='w-[100%] md:w-[50%] flex flex-col gap-[16px] px-0'>
                            <p className='font-bold text-md md:text-3xl'> Our momos are <span className='text-coustemOrange'>made with love</span> </p>
                            <p className='bg-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto.</p>
                        </div>
                        <div className='w-[100%] md:w-[50%] h-[300px] md:h-[250px]' style={aboutStyle03}>
                            <div className=' absolute bottom-[-50px] md:bottom-[-50px] md:left-[-25%]'>
                                <img className='w-[150px] h-[100px] md:w-[200px] md:h-[150px]' src={About04} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
