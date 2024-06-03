import React from 'react'
import scan from "../images/aboutImg/Scan.png"
import { IoIosPhonePortrait } from "react-icons/io";
import BuffMomos from '../Components/BuffMomos';
import ChikenMomos from '../Components/ChikenMomos';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Advice02 from '../images/AdviceImg/Advice02.png'
import Advice03 from '../images/AdviceImg/Advice03.png'

;
import Vegmomos from '../Components/Vegmomos';

function OurManu() {

  return (
    <>
    <Navbar/>
      <div className='container mx-auto px-6 md:20 lg:px-40 gap-14 flex flex-col justify-center  '>

        {/* our menu  */}
        <div className='flex justify-center items-center mt-14'>
          <p className='our-menu'>Our Menu</p>
        </div>

        <div className='flex flex-col  items-center  space-y-2 font-bold transition-all text-sm md:text-md  justify-center text-center  md:text-2xl  font-proxima'>
          <span className='  text-coustemOrange '>Our menu is more than just momos,</span>
          <span className=' text-customBlack  '>with a variety of dishes to cater to all tastes and preferences</span>
        </div>

        {/*  */}

          <div className='flex flex-col justify-center items-center  space-y-2 font-proxima '>
            <p className='justify-center  md:text-2xl transition-all text-md text-customGreen font-bold'> Scan the QR Code</p>
            <a href="">
              <span className='flex justify-center text-center text-[10px] md:text-md lg:text-xl '>Your can also check allergy advice using your phone as well</span>
            </a>
            <a href="" className=' justify-center text-center'>
              <img className='  md:w-[150px] md:h-[150px] w-[130px] h-[130px] mt-6'  src={scan} alt="" />
            </a>
            <div className='flex flex-row  justify-center gap-1 '>
              <p className=' uppercase text-coustemOrange font-bold  font-sans md:text-xl transition-all text-md '>Scan</p>
              < span className=' uppercase  font-bold  md:text-xl transition-all text-md  text-customBlack '> Me!
              </span>
              <IoIosPhonePortrait className='mt-1 md:size-5 sm:3' />
            </div>
          </div>


        {/* momo manu */}
        <div className='mt-10'>
          <div className='flex flex-col lg:flex-row gap-3 lg:gap-3 justify-center items-center '>
          <img src={Advice02} alt="" className='' />
            <div class="w-[240px] md:w-[279px] h-[34px] md:h-[48px] flex justify-center items-center text-[#D95103] flex-none flex-grow-0 text-[40px] leading-[120%] font-chela ">
              Buff <span className=' text-customBlack ml-3'> MOMO's</span> 
            </div> 
            <img src={Advice03} alt=""  />

          </div>
        
  
          {/* momos iteams */}
          <div className='flex justify-center items-center'>
            <BuffMomos />
          </div>
        </div>

        <div className='mt-14'>
          <div className=' flex flex-col lg:flex-row gap-3 lg:gap-6 justify-center items-center   '>
              <img src={Advice02} alt="" className='' />
              <div class=" md:w-[279px] h-[30px] md:h-[48px] flex items-center text-[#D95103]  flex-none flex-grow-0 text-[40px] leading-[120%] font-chela font-normal">
              CHICKEN<span className='text-slate-800 ml-3'> MOMO's</span></div>
              <img src={Advice03} alt=""  />
            
          </div>
          <div className='flex justify-center items-center'>
            <ChikenMomos />
          </div>

        <div className='mt-14'>
          <div className=' flex flex-col lg:flex-row gap-3 lg:gap-6 justify-center items-center   '>
              <img src={Advice02} alt="" className='' />
              <div class=" w-[240px] md:w-[279px] h-[34px] md:h-[48px] flex items-center text-[#D95103]  flex-none flex-grow-0 text-[40px] leading-[120%] font-chela font-normal ml-10">
              VEG<span className='text-slate-800 ml-3'> MOMO's</span></div>
              <img src={Advice03} alt=""  className='md:-ml-10' />
            
          </div>
          <div className='flex justify-center items-center'>
            <Vegmomos />
          </div>
          
        </div>
        </div>

      </div>
      <Footer footerColor="white" />

    </>
  )
}

export default OurManu;

