import React from 'react'


import Group8 from '../images/aboutImg/Group8.png'

function About() {
    const customStyle = {
        fontFamily: "'Allura', cursive",
        fontWeight: 400,
        fontStyle: 'normal'
    };


    return (
        <div>
            <div className='flex flex-col md:flex-row px-6 md:px-40 md:justify-evenly'>
                <div className='mt-[60px] md:mt-[120px] flex justify-between'>
                    <div className='flex flex-col justify-start'>
                        <div className='text-4xl text-customGreen md:leading-[76.8px] md:text-6xl' style={customStyle}><span>About Us</span></div>
                        <div className='mt-[30px] md:mt-[50px]'>
                            <p className='text-customGrayish'><span>WE PRIDE OURSELF ON</span></p>
                            <p className='text-coustemOrange font-bold text-3xl'>
                                <span> Our authentic momo recipes</span>
                            </p>
                            <p className='font-bold text-lg md:text-4xl'>
                                passed down through generations
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center relative bottom-0 mt-4 invisible md:visible'>
                    <div className=''>
                        <img src={Group8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
