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
import image from '../images/aboutImg/Image.png';
import arrowright from "../images/aboutImg/arrow-right.png";
import playCircle from "../images/aboutImg/play-circle.png";
import OurServicesSection from '../Components/OurServicesSection';
import girls from '../images/aboutImg/girls.png';
import { FaItalic } from 'react-icons/fa';
import Address from '../Components/Address';
import GetInTouchForm from '../Components/GetInTouchForm';
import Map from '../MapModel/Map';


function Home() {
  const options = ['Buff', 'Chiken', 'Veg'];
  const [activeOption, setActiveOption] = useState('Buff');

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

  const buttonsConfig1 = [
    { text: 'Explore Our Story', customStyles: 'w-36 lg:w-56 gap-1 lg:gap-2', image: arrowright, onClick: () => console.log('Explore Our Story clicked') },
  ];

  const buttonsConfig2 = [
    { text: 'Explore Our Menu', customStyles: 'w-36 lg:w-60 gap-1 lg:gap-2', image: arrowright, onClick: () => console.log('Explore Our menu clicked') },
  ];

  const buttonsConfig3 = [
    {   image: playCircle,
         text: 'Watch The Video', customStyles: 'w-36 lg:w-56 gap-1 lg:gap-2',  onClick: () => console.log('Watch The Video  clicked') },
  ];


  return (
    <>
      <div className="relative z-20">
        <Navbar /> {/* Navbar with higher z-index */}
      </div>
      <div className="container mx-auto overflow-hidden">
        <div className="relative">
          <div className="absolute -mt-10 md:mt-5 lg:-mt-20 right-[-125px]  md:-right-6 lg:right-[-250px] xl:right-[-400px] z-0 ">
            <div className="bg-coustemOrange  w-[200px] h-[200px]  md:w-[500px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full"></div>
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
          <div className="flex justify-start items-center lg:w-1/2 -mt-32 md:mt-10 lg:mt-3">
            <img className="relative z-10 w-[100%] lg:ml-28 ml-2" src={frame16} alt="Frame" />
          </div>
        </div>

        <div className="mt-20 lg:mt-32 px-1 lg:px-40 gap-4 lg:gap-14 max-auto flex">
          <img className='group3 h-[50%] w-[40%]' src={group3} alt="" />
          <div className='flex flex-col gap-[8%] mt-[8%]'>
            <h1 className='text-slate-800 customer text-sm md:text-xl lg:text-2xl xl:text-4xl'>Why Customer<span className="text-coustemOrange space-x-1 relative"> Love Us</span></h1>
            <span className='w-[90%] text-slate-400 flex justify-between text-xs lg:text-sm xl:text-lg paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem provident consectetur similique quidem fuga culpa optio ea at in voluptatem saepe velit, numquam accusamus eum praesentium officiis dolorum ipsa? Minus vel cupiditate.</span>
            <div className='mt-4'>
              {buttonsConfig1.map((btn, index) => (
                <Button key={index} text={btn.text} customStyles={btn.customStyles} image={btn.image} onClick={btn.onClick} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20 lg:mt-32 px-6 lg:px-40 container max-auto flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-slate-800 customer text-xl md:text-2xl lg:text-2xl xl:text-4xl justify-center items-center relative' style={{ font: 'Proxima Nova' }}>Our<span className="text-coustemOrange space-x-1 relative"> Most Popular</span> Recipes</h1>
          <span className='w-[100%] text-slate-400 text-sm lg:text-sm xl:text-lg paragraph'>Browse through a varieties of recipes with fresh ingredients selected only from the best places.</span>
        </div>
      </div>

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

      <div className='flex mx-auto px-6 sm:px-10 md:px-28 lg:px-40'>
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
      <div className='flex justify-center items-center mx-auto px-6 sm:px-10 md:px-28 lg:px-40 mt-4 lg:mt-10'>
        <div>
          {buttonsConfig2.map((btn, index) => (
            <Button key={index} text={btn.text} customStyles={btn.customStyles} image={btn.image} onClick={btn.onClick} />
          ))}
        </div>
      </div>

      <div className='mt-8 lg:mt-32 bg-slate-50 w-full'>
        <div className='px-6 lg:px-40 flex justify-center items-center'>
          <h1 className='mt-5 lg:mt-16 text-slate-800 customer text-xl md:text-2xl lg:text-4xl'>
            <span className="text-coustemOrange space-x-1 relative">We Offer People </span> The Service They Want
          </h1>
        </div>
        <div className='mt-8 lg:mt-16 flex flex-col justify-center items-center text-white bgVideoImage'>
          <img className='videoImage' src={image} alt="" />
          <div className='centered-content -mt-6 flex flex-col justify-center items-center  md:gap-2'>
            <h4 className='font-bold text-[12px] sm:text-4xl sm:-mt-[300px] md:text-3xl lg:text-6xl lx:text-7xl -mt-[70px] lg:-mt-[400px] xl:-mt-[650px]  '>Process behind the making</h4>
            <p className='text-[8px]  sm:text-lg lg:text-2xl'>See how only chefs cooks the best momos</p>
            <div className=' mt-1lg:mt-6'>
              {buttonsConfig3.map((btn, index) => (
                <Button key={index} text={btn.text} customStyles={btn.customStyles} image={btn.image} onClick={btn.onClick} />
              ))}
            </div>
          </div>
          <br />
        </div>
      </div>
    
    {/* our services section    */}
        <OurServicesSection/>
        <div className='flex justify-center items-center text-center mx-auto px-6 sm:px-10 md:px-28 lg:px-40 mt-4 lg:mt-12'>
        <div>
          {buttonsConfig2.map((btn, index) => (
            <Button key={index} text={btn.text} customStyles={btn.customStyles} image={btn.image} onClick={btn.onClick} />
          ))}
        </div>
      </div>


      {/*Testimonials  */}
      <div className='mt-8 lg:mt-20 bg-slate-50 w-full py-10'>
        <div className='px-6 lg:px-40 flex flex-col lg:flex-row lg:justify-between '>
          <div className='  mt-10 lg:mt-20  w-full lg:w-2/4 '>
            <h1 className=' text-slate-800 customer text-lg md:text-2xl lg:text-4xl'>200+  <span className="text-coustemOrange space-x-1 relative ml-2">Happy  Customers </span> The Service They Want
            </h1>
            <p className=' mt-2 text-customGreen font-bold text-[10px] md:text-xl'>What our customers say about us</p>
            <div className=' mt-7 lg:mt-12 w-full lg:w-3/4'>
            <span className='  italic text-md '>“Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”</span>
            <h1 className='mt-5 font-bold text-2xl font-proxima'> Lila Dias</h1>
            </div>
            <div className='flex  gap-5 mt-10 lg:mt-16'>
               <img className='smallArrowLeft  cursor-pointer' src={arrowLeft} alt=" " />
               <img className='smallArrowLeft  cursor-pointer'  src={arrowRights} alt="" />
            </div>

          </div>
          <div className='mt-10'>
            <img  className=' h-[95%] w-[95%]' src={girls} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className=' mt-8 lg:mt-20  px-6 lg:px-40 flex justify-center w-auto items-center text-center '>
        <div className='flex flex-col'>
          <h1 className=' text-slate-800 customer text-lg md:text-2xl lg:text-4xl'>Get  <span className="text-coustemOrange space-x-1 relative ml-2">In Touch </span>  </h1>
          <p className=' mt-2 text-customGreen font-bold text-[10px] md:text-xl'>Our Friendly team Would love to hear from you</p>
        </div>
      </div>
      <div className='  mt-1 lg:mt-20 px-6 lg:px-10 flex justify-center items-center '>
        <div className=' flex flex-col lg:flex-row   lg:justify-between items-center  gap-10 rounded-lg  p-8 border-2 shadow-lg'>
          <Address />
          <GetInTouchForm buttonColor="orange" />
        </div>
      </div>

    <div className=' mt-20 h-auto w-auto'>
      <Map/>
    </div>
    <Footer footerColor="white" />
    </>
  );
}

export default Home;
