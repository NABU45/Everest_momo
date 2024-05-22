import React from 'react'
import momo1 from "../images/aboutImg/momo1.png"
import vector from "../images/aboutImg/Vector.png"
import chillimomo from "../images/aboutImg/chillimomo.png"
import frymomo from "../images/aboutImg/frymomo.png"

function Vegbtn() {
  return (
<>

      < div className="container flex items-center justify-center mx-auto px-6 sm:px-10 md:px-7 lg:px-40 mt-20">
    
    <div className='mt-10 flex justify-center items-center  md:flex-row  lg:flex-row  lg:gap-32 md:gap-16  gap-6 flex-col' >
      <div className='flex flex-col  '>
        <img className=' h-[200px] top-[23px]  z=0' src={momo1} alt="" />
      <div className='flex-col flex justify-center items-center mt-2'>
        <p className='text-slate-800 font-bold text-xl'>Veg Momo</p>
        <p className='flex py-2 gap-1'><img src={vector} alt="" className='h-[16px]' />
        <span className=' text-coustemOrange text-bold text-xl -mt-2'> 200</span>
        </p>
      </div>
      </div>
      <div className='flex flex-col   items-center '>
        <img className=' h-[190px] top-[23px]  z=0' src={frymomo} alt="" />
      <div className='flex-col flex justify-center items-center mt-3'>
        <p className='text-slate-800 font-bold text-xl'>Veg Fry Momo</p>
        <p className='flex py-2 gap-1'><img src={vector} alt="" className='h-[16px]' />
        <span className=' text-coustemOrange text-bold text-xl -mt-2'> 200</span>
        </p>
      </div>
      </div>
      <div className='flex flex-col items-center '>
        <img className=' h-[200px] top-[23px]' src={chillimomo} alt="" />
      <div className='flex-col flex justify-center items-center '>
        <p className='text-slate-800 font-bold text-xl'>Veg C. Momo</p>
        <p className='flex py-2 gap-1'><img src={vector} alt="" className='h-[16px]' />
        <span className=' text-coustemOrange text-bold text-xl -mt-2'> 200</span>
        </p>
      </div>
      </div>
    </div>
    </div>
    
      </>

  )
}

export default Vegbtn