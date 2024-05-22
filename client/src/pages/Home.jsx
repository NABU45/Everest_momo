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
import arrowLeft  from '../images/aboutImg/arrow-left.png';
import arrowRights from '../images/aboutImg/arrow-rights.png';

function Home() {
    const [activeOption, setActiveOption] = useState(null);

    const handleClick = (option) => {
        setActiveOption(option === activeOption ? null : option);
    };

    return (
        <>
            <div className="relative z-20">
                <Navbar />  {/* Navbar with higher z-index */}
            </div>
            {/* home pages */}
            <div className="container mx-auto overflow-hidden">
                <div className="relative">
                    <div className="absolute -top-[22px] right-[-150px]  lg:right-[-250px] xl:right-[-400px] z-0 ">
                        <div className="bg-coustemOrange w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-10 lg:mt-20 px-6 lg:px-20 xl:px-40 gap-14  ">
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                        <p className="pride uppercase mt-4 w-full lg:w-[70%]">Restaurant</p>
                        <div className="flex flex-col justify-start space-y-2 font-bold">
                            <img className="w-[60%] lg:w-[60%] mt-5 lg:mt-10" src={frame5} alt="Momo Varieties" />  {/* Make image responsive and adjust margin */}
                            <p className='text-slate-800'>More than <span className="text-coustemOrange text-lg z-10">20+ Varieties</span> of momo available for you</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-1/2 mt-5 lg:mt-10">
                        <img className="relative z-10 w-[80%] md:w-[90%] lg:w-[100%] lg:ml-48 ml-6" src={frame16} alt="Frame" />  {/* Make image responsive */}
                    </div>
                </div>

                {/*token of love  */}
                <div className="mt-32  px-6 lg:px-40 gap-8 lg:gap-14 container max-auto  flex  ">
                    <img className='group3 h-[50%] w-[40%]' src={group3} alt="" />
                    <div className='ml-[8%] flex flex-col gap-[8%] mt-[8%]'>
                        <h1 className='text-slate-800 customer text-xl md:text-2xl lg:text-2xl xl:text-4xl'>Why Customer<span className="text-coustemOrange space-x-1 relative"> Love Us</span></h1>
                        <span className='w-[90%] text-slate-400 text-sm lg:text-sm xl:text-lg paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem provident consectetur similique quidem fuga culpa optio ea at in voluptatem saepe velit, numquam accusamus eum praesentium officiis dolorum ipsa? Minus vel cupiditate provident.</span>
                        <div className='mt-4'>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>

            {/* most popular recipes */}
            <div className='mt-32 px-6 lg:px-40 container max-auto flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-slate-800 customer text-xl md:text-2xl lg:text-2xl xl:text-4xl justify-center items-center relative' style={{ font: 'Proxima Nova' }}>Our<span className="text-coustemOrange space-x-1 relative"> Most Popular</span> Recipes</h1>
                    <span className='w-[100%] text-slate-400 text-sm lg:text-sm xl:text-lg paragraph'>Browse through a varieties of recipes with fresh ingredients selected only from the best places.</span>
                </div>
            </div>

            {/*menus button*/}
            <div className="flex items-center justify-center px-6 lg:px-40 container max-auto">
                <div className="mt-16 flex justify-center items-center gap-20">
                    <p
                        onClick={() => handleClick('Buff')}
                        className={`font-bold border px-10 py-3 rounded-full text-md lg:text-xl cursor-pointer ${activeOption === 'Buff' ? 'border-black border-4' : ''}`}
                    >
                        Buff
                    </p>
                    <p
                        onClick={() => handleClick('Chiken')}
                        className={`font-bold border px-10 py-3 rounded-full text-md lg:text-xl cursor-pointer ${activeOption === 'Chiken' ? 'border-black border-4' : ''}`}
                    >
                        Chicken
                    </p>
                    <p
                        onClick={() => handleClick('Veg')}
                        className={`font-bold border px-10 py-3 rounded-full text-md lg:text-xl cursor-pointer ${activeOption === 'Veg' ? 'border-black border-4' : ''}`}
                    >
                        Veg
                    </p>
                </div>
            </div>
 <div className='flex container mx-auto px-6 sm:px-10 md:px-28 lg:px-40' >
   <img className='arrowLeft mt-48' src={arrowLeft} alt="" />
<div>
            {/* Conditionally render Buffbtn */}
            {activeOption === 'Buff' && <Buffbtn />}

            {/* Conditionally render Buffbtn */}
            {activeOption === 'Chiken' && <Chikenbtn />}

             {/* Conditionally render Buffbtn */}
             {activeOption === 'Veg' && <Vegbtn />}
</div>
   <img className='arrowLeft mt-48' src={arrowRights} alt="" />
 </div>

            

            <Footer />
        </>
    );
}

export default Home;
