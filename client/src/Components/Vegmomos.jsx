import React from 'react'
import momo1 from "../images/aboutImg/momo1.png"
import vector from "../images/aboutImg/Vector.png"
import chillimomo from "../images/aboutImg/chillimomo.png"
import frymomo from "../images/aboutImg/frymomo.png"



function Vegmomos() {
  return (
    <>
      <div className='flex flex-col '>
      <div className='mt-10 flex md:flex-row lg:w-[936px] lg:gap-48 md:gap-20 w-100% gap-10 flex-col' >
           <div className='flex flex-col md:ml-10  items-center w-[350px] '>
        <div className='flex flex-col ml-10 '>
          <img className='w-[230px] md:w-[260px] h-[160px] md:h-[189px] top-[23px] mr-10 z=0' src={momo1} alt="" />
          <p className='buffmomonew ml-24 text-white -mt-9 italic '>New</p>
        </div>
        <div className='flex-col flex justify-center items-center mt-5'>
          <p className=' font-bold text-lg md:text-2xl text-customBlack font-proxima'>Veg Steam Momo</p>
          <p className='flex py-2 gap-1'><img src={vector} alt="" className='h-[13px] md:h-[17px]' />
          <span className=' text-coustemOrange text-bold text-lg md:text-2xl -mt-2  font-proxima'> 200</span>
          </p>
          <span className='flex justify-center text-center text-customiconbg mt-1 lg:text-[16px] md:text-md text-[12px] px-10 lg:px-1'>(Freshly Steamed Veg Mommos made from whole wheat and kneaded with beat Carotene Rich Vegetable Juice)</span>
        </div>
        </div>
        <div className='flex flex-col items-center w-[350px] '>
        <div className='flex flex-col -ml-10  '>
          <img className='w-[290px] md:w-[320px] h-[170px] md:h-[200px] top-[23px]  z=0 justify-center items-center' src={chillimomo} alt="" />
          <p className='popular ml-36 -mt-10  text-white italic'>Popular</p>
        </div>
        <div className='flex-col flex justify-center items-center mt-5'>
          <p className=' font-bold text-lg md:text-2xl text-customBlack font-proxima '>Veg C. Momo</p>
          <p className='flex py-2 gap-1'><img src={vector} alt="" className='h-[13px] md:h-[17px]' />
          <span className=' text-coustemOrange text-bold text-lg  md:text-2xl -mt-2  font-proxima'> 200</span>
          </p>
          <span className='flex justify-center text-center  btnFont text-customiconbg mt-1 lg:text-[16px] md:text-md text-[12px] px-10 lg:px-1 ' >(Freshly Steamed Veg Mommos made from whole wheat and kneaded with beat Carotene Rich Vegetable Juice)</span>
        </div>
        </div>
      </div>

      <div className='mt-10 flex md:flex-row lg:w-[936px] lg:gap-48 md:gap-20 w-100% gap-10 flex-col' >
             <div className='flex flex-col md:ml-10  items-center w-[350px]  '>
        <div className='flex flex-col ml-10 '>
          <img className='w-[230px] md:w-[260px] h-[160px] md:h-[189px] top-[23px] mr-10  z=0' src={frymomo} alt="" />
        </div>
        <div className='flex-col flex justify-center items-center mt-5'>
          <p className='font-bold text-lg md:text-2xl  font-proxima text-customBlack'>Veg Fry Momo</p>
          <p className='flex py-2 gap-1'><img src={vector} alt="" className=' h-[13px] md:h-[18px]' />
          <span className=' text-coustemOrange text-bold text-lg md:text-2xl -mt-2 font-proxima'> 200</span>
          </p>
          <span className='lg:text-[16px] md:text-md text-[12px] px-10 lg:px-1 flex justify-center text-center btnFont text-customiconbg  mt-1'>(Freshly Steamed Veg Mommos made from whole wheat and kneaded with beat Carotene Rich Vegetable Juice)</span>
        </div>
        </div>
             <div className='flex flex-col   items-center w-[350px] '>
        <div className='flex flex-col ml-10 '>
          <img className='w-[230px] md:w-[260px] h-[160px] md:h-[189px] top-[23px] mr-10 z=0' src={momo1} alt="" />
          <p className='recomanded ml-16 text-white -mt-9 italic'>Recomanded</p>
        </div>
        <div className='flex-col flex justify-center items-center mt-5'>
          <p className='font-bold text-lg md:text-2xl text-customBlack font-proxima'>Veg jhol Momo</p>
          <p className='flex py-2 gap-1'><img src={vector} alt="" className='h-[13px] md:h-[17px]' />
          <span className=' text-coustemOrange text-bold text-xl -mt-2 font-proxima'> 200</span>
          </p>
          <span className='lg:text-[16px] md:text-md text-[12px] px-10 lg:px-1 flex justify-center text-center mt-1 text-customiconbg btnFont'>(Freshly Steamed Veg Mommos made from whole wheat and kneaded with beat Carotene Rich Vegetable Juice)</span>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Vegmomos
