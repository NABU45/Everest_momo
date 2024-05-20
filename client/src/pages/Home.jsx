import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import frame16 from "../images/aboutImg/Frame16.png";
import frame5 from "../images/aboutImg/Frame5.png";

function Home() {
    return (
        <>
            <div className="relative z-20">
                <Navbar />  {/* Navbar with higher z-index */}
            </div>
            <div className="container mx-auto px-6 lg:px-20 xl:px-40 gap-14 flex flex-col justify-center overflow-hidden">
                <div className="relative">
                    <div className="absolute -top-[22px] right-[-150px] md:right-[-250px] lg:right-[-350px] xl:right-[-450px] z-0">
                        <div className="bg-coustemOrange w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 py-5">
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                        <p className="pride uppercase mt-4 w-full lg:w-[70%]">Restaurant</p>
                        <div className="flex flex-col justify-start space-y-2 font-bold">
                            <img className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[60%] mt-5 lg:mt-10" src={frame5} alt="Momo Varieties" />  {/* Make image responsive and adjust margin */}
                            <p>More than <span className="text-coustemOrange text-lg z-10">20+ Varieties</span> of momo available for you</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
                        <img className="relative z-10 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%] ml-40" src={frame16} alt="Frame" />  {/* Make image responsive */}
                    </div>
                </div>
                <div className="mt-10 text-center">
                    Hello
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
