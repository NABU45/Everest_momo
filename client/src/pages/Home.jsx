import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import frame16 from "../images/aboutImg/Frame16.png";
import frame5 from "../images/aboutImg/Frame5.png";
import group3 from "../images/aboutImg/Group3.png";
import Button from '../Components/Button';
import Buffbtn from '../buttonCOmponents/Buffbtn';
import Chikenbtn from '../buttonCOmponents/Chikenbtn';
import Vegbtn from '../buttonCOmponents/Vegbtn';
import arrowLeft from '../images/aboutImg/arrow-left.png';
import arrowRights from '../images/aboutImg/arrow-rights.png';

function Home() {
    const options = ['Buff', 'Chiken', 'Veg'];
    const [activeOption, setActiveOption] = useState('Buff'); // Initialize with 'Buff' to show Buffbtn by default

    const handleClick = (option) => {
        setActiveOption(option);
    };

    const handleArrowClick = (direction) => {
        const currentIndex = options.indexOf(activeOption);
        let newIndex;

        if (direction === 'left') {
            newIndex = currentIndex === 0 ? options.length - 1 : currentIndex - 1;
        } else if (direction === 'right') {
            newIndex = currentIndex === options.length - 1 ? 0 : currentIndex + 1;
        }

        setActiveOption(options[newIndex]);
    };

    return (
        <>
            <div className="relative z-20">
                <Navbar /> {/* Navbar with higher z-index */}
            </div>
            {/* home pages */}
            <div className="container mx-auto overflow-hidden">
                <div className="relative">
                    <div className="absolute -top-[22px] right-[-150px] lg:right-[-250px] xl:right-[-400px] z-0 ">
                        <div className="bg-coustemOrange w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-10 lg:mt-20 px-6 lg:px-20 xl:px-40 gap-14">
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                        <p className="pride uppercase mt-4 w-full lg:w-[70%]">Restaurant</p>
                        <div className="flex flex-col justify-start space-y-2 font-bold">
                            <img className="w-[60%] lg:w-[60%] mt-5 lg:mt-10" src={frame5} alt="Momo Varieties" />
                            <p className='text-slate-800'>More than <span className="text-coustemOrange text-lg z-10">20+ Varieties</span> of momo available for you</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center lg:w-1/2 -mt-28 lg:mt-10">
                        <img className="relative z-10 w-[100%] lg:ml-36 ml-6" src={frame16} alt="Frame" />
                    </div>
                </div>

                {/* Token of Love */}
                <div className="mt-20 lg:mt-32 px-1 lg:px-40 gap-4 lg:gap-14 max-auto flex">
                    <img className='group3 h-[50%] w-[40%]' src={group3} alt="" />
                    <div className='flex flex-col gap-[8%] mt-[8%]'>
                        <h1 className='text-slate-800 customer text-sm md:text-xl lg:text-2xl xl:text-4xl'>Why Customer<span className="text-coustemOrange space-x-1 relative"> Love Us</span></h1>
                        <span className='w-[90%] text-slate-400 flex justify-between text-xs lg:text-sm xl:text-lg paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem provident consectetur similique quidem fuga culpa optio ea at in voluptatem saepe velit, numquam accusamus eum praesentium officiis dolorum ipsa? Minus vel cupiditate.</span>
                        <div className='mt-4'>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>

            {/* Most Popular Recipes */}
            <div className='mt-20 lg:mt-32 px-6 lg:px-40 container max-auto flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-slate-800 customer text-xl md:text-2xl lg:text-2xl xl:text-4xl justify-center items-center relative' style={{ font: 'Proxima Nova' }}>Our<span className="text-coustemOrange space-x-1 relative"> Most Popular</span> Recipes</h1>
                    <span className='w-[100%] text-slate-400 text-sm lg:text-sm xl:text-lg paragraph'>Browse through a varieties of recipes with fresh ingredients selected only from the best places.</span>
                </div>
            </div>

            {/* Menus Button */}
            <div className="flex items-center justify-center px-6 lg:px-40">
                <div className="mt-16 flex justify-center items-center gap-5 lg:gap-20">
                    <p
                        onClick={() => handleClick('Buff')}
                        className={`font-bold border px-3 py-1 lg:px-10 lg:py-3 rounded-full text-sm lg:text-xl cursor-pointer ${activeOption === 'Buff' ? 'border-black border-4' : ''}`}
                    >
                        Buff
                    </p>
                    <p
                        onClick={() => handleClick('Chiken')}
                        className={`font-bold border px-3 py-1 lg:px-10 lg:py-3 rounded-full text-sm lg:text-xl cursor-pointer ${activeOption === 'Chiken' ? 'border-black border-4' : ''}`}
                    >
                        Chicken
                    </p>
                    <p
                        onClick={() => handleClick('Veg')}
                        className={`font-bold border px-3 py-1 lg:px-10 lg:py-3 rounded-full text-sm lg:text-xl cursor-pointer ${activeOption === 'Veg' ? 'border-black border-4' : ''}`}
                    >
                        Veg
                    </p>
                </div>
            </div>

            <div className='flex container mx-auto px-6 sm:px-10 md:px-28 lg:px-40'>
                <img
                    className='invisible lg:visible arrowLeft mt-48 cursor-pointer'
                    src={arrowLeft}
                    alt="Previous"
                    onClick={() => handleArrowClick('left')}
                />
                <div>
                    {activeOption === 'Buff' && <Buffbtn />}
                    {activeOption === 'Chiken' && <Chikenbtn />}
                    {activeOption === 'Veg' && <Vegbtn />}
                </div>
                <img
                    className='invisible lg:visible arrowLeft mt-48 cursor-pointer'
                    src={arrowRights}
                    alt="Next"
                    onClick={() => handleArrowClick('right')}
                />
            </div>

            <Footer />
        </>
    );
}

export default Home;
