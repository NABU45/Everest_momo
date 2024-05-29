import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import Group8 from '../images/aboutImg/Group8.png'
import About02 from '../images/aboutImg/About02.jpeg'

import About03 from '../images/aboutImg/About03.jpeg'
import About04 from '../images/aboutImg/About04.png'
import About05 from '../images/aboutImg/About05.jpeg'
import About06 from '../images/aboutImg/About06.png'
import About07 from '../images/aboutImg/About07.jpeg'
import About08 from '../images/aboutImg/About08.png'
import About09 from '../images/aboutImg/About09.jpeg'
import About10 from '../images/aboutImg/About10.jpeg'
import About11 from '../images/aboutImg/About11.jpg'
import About12 from '../images/aboutImg/About12.jpeg'
import About13 from '../images/aboutImg/About13.jpeg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Button from '../Components/Button';
import playCircle from "../images/aboutImg/play-circle.png";



function AboutUs() {

    
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
        transition: 'background-image 0.5s ease',
    };

    const aboutStyle05 = {
        position: 'relative',
        backgroundImage: `url(${About05})`,
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease',
    };

    const aboutStyle07 = {
        position: 'relative',
        backgroundImage: `url(${About07})`,
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease',
    };

    const aboutStyle09 = {
        position: 'relative',
        zIndex: -1,
        transition: 'background-image 0.5s ease',
        overflow: 'hidden',
    };

    const backgroundImageStyle09 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${About09})`,
        backgroundSize: 'cover',
        filter: 'blur(10px)',
        zIndex: -1,
    };

    const overlayStyle09 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to right, rgba(0,0,0), rgba(0,0,0))',
        opacity: 0.7,
        zIndex: 0,
    };

    const textStyle09 = {
        position: 'absolute',
        color: 'white',
        zIndex: 1,
    };

    const aboutStyle11 = {
        backgroundImage: `url(${About11})`,
    };

    const aboutStyle12 = {
        backgroundImage: `url(${About12})`,
    };

    const aboutStyle13 = {
        backgroundImage: `url(${About13})`,
    };


    const buttonsConfig3 = [
        {
            image: playCircle,
            text: 'Watch The Video', customStyles: 'w-36 lg:w-56 gap-1 lg:gap-2', onClick: () => console.log('Watch The Video  clicked')
        },
    ];


    return (
        <>
            <Navbar />
            <div className=' mx-auto px-6 lg:px-20 xl:px-40  flex flex-col justify-center'>
                <div className='flex flex-row justify-between items-center gap-10 lg:gap-24'>
                    <div className=' flex flex-col justify-start'>
                        <h3 className='our-menu mt-6 md:mt-10 lg:mt-20  text-xl md:text-4xl lg:text-6xl'> About Us</h3>
                        <div>
                            <p className='pride uppercase text-[8px] lg:text-lg  mt-2  lg:mt-12 w-full lg:w-[70%]'>we pride ourself on</p>
                            <div className='flex flex-col justify-first space-y-2 font-bold w-[85%]'>
                                <h1 className='mt-1 lg:mt-5 text-customBlack font-proxima  customer text-[9px] md:text-xl lg:text-3xl'>
                                    <span className=" text-coustemOrange space-x-1 relative">Our authentic momo recipes</span> passed down through generations
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-[60%] '>
                        <img src={Group8} alt="" />
                    </div>
                </div>
            </div>

            <div style={{ position: 'relative' }} className='mt-20'>
                <div style={aboutStyle02} className='px-6 md:px-40 bg-cover h-[320px] sm:bg-cover sm:h-[480px] md:bg-cover md:h-[640px]'>
                    <div className='absolute inset-0 bg-gradient-to-r from-black to-[rgba(94,77,64,0.7)] opacity-80'></div>
                    <div className='absolute top-[150px] md:top-[367px] text-white  font-proxima' >
                        <p className='font-bold transition-all text-2xl   lg:text-4xl'>Process behind the making</p>
                        <p className=' text-xs lg:text-lg'>See how we make momos that you like from only the best ingredients</p>
                        <div className=' mt-1 lg:mt-6'>
                            {buttonsConfig3.map((btn, index) => (
                                <Button key={index} text={btn.text} customStyles={btn.customStyles} image={btn.image} onClick={btn.onClick} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <img className='absolute top-[240px] md:top-[450px] w-24 md:w-1/6 h-auto' src="" alt="" />
                    </div>
                </div>
            </div>



            <div className=' mx-auto px-6 lg:px-40 gap-14 '>
                <div className='mt-[60px] md:mt-[120px]'>
                    <div className='flex flex-col-reverse md:flex-row justify-between gap-12 lg:gap-16'>
                        <div className='w-[100%] lg:w-[60%] xl:w-[30%] flex flex-col gap-[16px] px-0'>
                            <p className='font-bold text-md lg:text-3xl font-proxima'> Our momos are <span className='text-coustemOrange'>made with love</span> </p>
                            <p className=' font-proxima text-customaragraph text-xs lg:text-lg' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium voluptatem doloribus..</p>
                        </div>
                        <div className='w-[100%] lg:w-[63%] xl:w-[50%] h-[300px] md:h-[350px]' style={aboutStyle03}>
                            <div className=' absolute bottom-[-50px] md:bottom-[-50px] md:left-[-15%]'>
                                <img className='w-[40%] h-[10%] ' src={About04} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' mx-auto px-6 lg:px-40 '>
                <div className='mt-[60px] md:mt-[120px] flex'>
                    <div className='flex flex-col md:flex-row justify-between gap-12 lg:gap-16'>
                        <div className='w-[100%] lg:w-[63%] xl:w-[50%] h-[300px] md:h-[350px]' style={aboutStyle05}>
                            <div className=' relative top-[260px] lg:top-[270px] md:bottom-[-140px] md:left-[75%]'>
                                <img className='w-[30%] h-[10%] ' src={About06} alt="" srcset="" />
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[60%] xl:w-[30%] flex flex-col gap-[16px] px-0'>
                            <p className='font-bold text-md lg:text-3xl font-proxima'> Test the difference with <span className='text-coustemOrange'> our handcrafted momos</span> </p>
                            <p className=' font-proxima text-customaragraph text-xs lg:text-lg'> Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti molestias in. amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='mx-auto px-6 lg:px-40  '>
                <div className='mt-[60px] md:mt-[120px] '>
                    <div className='flex flex-col-reverse md:flex-row justify-between gap-12 lg:gap-16'>
                        <div className='w-[100%] lg:w-[60%] xl:w-[30%] flex flex-col gap-[16px] px-0'>
                            <p className='font-bold text-md md:text-3xl font-proxima  text-customBlack'>Our momos are the perfect 
                                <span className='text-coustemOrange'> blend of tradition 
                                <b className=' text-customBlack'> and </b>
                                innovation 
                                </span>
                                
                            </p>
                            <p className=' font-proxima text-customaragraph text-xs lg:text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius molestiae accusamus assumenda pariatur dolor a officia explicabo quidem provident, sequi expedita praesentium deserunt id? Magni eos ad facilis architecto.</p>
                        </div>
                        <div className='w-[100%] lg:w-[63%] xl:w-[50%] h-[300px] md:h-[350px]' style={aboutStyle07}>
                            <div className=' absolute bottom-[-50px] md:bottom-[-50px] md:left-[-15%]'>
                                <img className='w-[40%] h-[10%] ' src={About08} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-20'>

                <div className='flex flex-col h-[600px] items-center md:flex-row w-full relative inset-0'>
                    <div className='w-[100%] md:w-[80%] h-full flex px-6 lg:px-32 items-center' style={aboutStyle09}>
                        <div style={backgroundImageStyle09} className='h-full'></div>
                        <div style={overlayStyle09}></div>
                        <div style={textStyle09} className=' flex flex-col  items-center'>
                            <div className=' font-proxima'>
                                <p className='text-2xl md:text-5xl lg:text-9xl'>❝</p>
                                <p className='mt-2 md:mt-5 text-sm lg:text-2xl '>
                                    Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences
                                </p>
                                <p className='mt-1 md:mt-10 font-bold text-md lg:text-4xl'> Marcus Schleifer </p>
                                <p className='font-bold text-sm lg:text-2xl'> CEO </p>
                            </div>
                            <div className=' flex gap-2 relative  sm:-bottom-6 md:-bottom-10 left-28 sm:left-48 md:left-28'>
                                <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center text-white'><IoMdArrowRoundBack /></div>
                                <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center text-white'><IoMdArrowRoundForward /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center h-[600px] w-[100%] md:w-[90%] lg:w-[60%] overflow-hidden bg-cover'>
                        <img className='w-[100%] h-[600px] bg-cover relative' src={About10} alt="" />
                    </div>
                </div>
            </div>


            <div className=' px-6 lg:px-40'>
                <div className='flex flex-col justify-center items-center gap-[8px] '>
                    <p className='mt-8 lg:mt-20 text-customBlack font-proxima  customer text-xl md:text-2xl lg:text-4xl'>Meet The <span className='text-coustemOrange'>Team</span></p>
                    <p className=' mt-2 text-customGreen font-bold text-[10px] md:text-xl font-proxima'>Our talented team members who delivers only the best results</p>
                </div>

                
                <div className='flex flex-col mt-10 items-center lg:flex-row md:justify-center gap-[24px] '>
                    <div style={aboutStyle11} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
                            <div className='text-white absolute bottom-5 left-5 font-bold'>
                                <p>Head Chef</p>
                            </div>
                        </div>
                    </div>
                    <div style={aboutStyle12} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
                            <div className='text-white absolute bottom-5 left-5 font-bold'>
                                <p>Assistant Chef</p>
                            </div>
                        </div>
                    </div>
                    <div style={aboutStyle13} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
                            <div className='text-white absolute bottom-5 left-5 font-bold'>
                                <p>Assistant Chef</p>
                            </div>
                        </div>
                    </div>
                    
                </div>


                <div className='flex justify-center' >
                    <div className='flex w-[1128px] h-[48px]'>
                        <div className='flex justify-between items-center w-full' >
                            <div className='flex items-center h-[48px] w-[85px]'>
                                <span className='font-bold'>01</span>
                                <span>/05</span>
                            </div>
                            <div className='h-[48px] w-[112px] flex justify-end items-center gap-2'>
                                <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'><IoMdArrowRoundBack /></div>
                                <div className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'><IoMdArrowRoundForward /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerColor="white" />
        </>
    )
}

export default AboutUs;

