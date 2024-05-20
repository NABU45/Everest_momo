import React from 'react'
import qrcode from "../images/aboutImg/qrcode.png"
import { IoIosPhonePortrait } from "react-icons/io";
import BuffMomos from '../Components/BuffMomos';
import ChikenMomos from '../Components/ChikenMomos';


function OurService() {
  return (
    <>
      <div className='container mx-auto px-6 lg:px-40 gap-14 flex flex-col justify-center  '>

        {/* our services  */}
        <div className='flex justify-center items-center mt-14'>
          <p className='our-menu'>Our Menu</p>
        </div>

        <div className='flex flex-col justify-center items-center  space-y-2 font-bold  '>
          <span className='  text-coustemOrange  justify-center font-sans md:text-3xl transition-all text-md '>Our menu is more than just momos,</span>
          <span className='text-slate-800 justify-center text-center font-sans md:text-3xl transition-all text-md '>with a variety of dishes to cater to all tastes and preferences</span>
        </div>

        {/*  */}
        <div className=''>
          <div className='flex flex-col justify-center items-center  space-y-2 font-bold '>
            <p className='justify-center font-sans md:text-3xl transition-all text-md text-customGreen font-bold'> Scan the QR Code</p>
            <a href="">
              <span className='flex justify-center text-center font-normal text-gray-700 '>Your can also check allergy advice using your phone as well</span>
            </a>
            <a href="" className=' justify-center text-center'>
              <img className='border border-black  md:w-[150px] md:h-[150px] w-[130px] h-[130px] mt-6' style={{ borderWidth: '5px' }} src={qrcode} alt="" />
            </a>
            <div className='flex flex-row  justify-center gap-1 '>
              <p className=' uppercase text-coustemOrange font-bold justify-center font-sans md:text-xl transition-all text-md '>Scan</p>
              < span className=' uppercase text-slate-800 font-bold justify-center font-sans md:text-xl transition-all text-md '> Me!
              </span>
              <IoIosPhonePortrait className='mt-1 md:size-5 sm:3' />
            </div>
          </div>

        </div>

        {/* momo manu */}
        <div className='mt-10'>
          <div className='flex gap-4 justify-center items-center '>
            {/* <hr  className='w-48 md:w-60 h-[1.4px] bg-slate-800'/> */}
            <div class="w-[279px] h-[48px] flex justify-center items-center text-[#D95103] order-1 flex-none flex-grow-0 text-[40px] leading-[120%] font-chela font-normal">
              Buff <span className='text-slate-800 ml-3'> MOMO's</span></div>
            {/* <p><hr className='w-48 md:w-60 h-[1.4px] bg-slate-800' /></p> */}
          </div>

          {/* momos iteams */}
          <div className='flex justify-center items-center'>
            <BuffMomos />
          </div>
        </div>
        <div className='mt-14'>
          <div className='flex gap-4 justify-center items-center '>
            {/* <hr  className='w-48 md:w-60 h-[1.4px] bg-slate-800'/> */}
            <div class="w-[279px] h-[48px] flex items-center text-[#D95103] order-1 flex-none flex-grow-0 text-[40px] leading-[120%] font-chela font-normal">
              CHICKEN<span className='text-slate-800 ml-3'> MOMO's</span></div>
            {/* <p><hr className='w-48 md:w-60 h-[1.4px] bg-slate-800' /></p> */}
          </div>
          <div className='flex justify-center items-center'>
            <ChikenMomos />
          </div>
        </div>


      </div>
    </>
  )
}

export default OurService

