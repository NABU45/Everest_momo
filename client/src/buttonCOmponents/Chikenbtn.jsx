import React from 'react'
import momo1 from "../images/aboutImg/momo1.png"
import vector from "../images/aboutImg/Vector.png"
import chillimomo from "../images/aboutImg/chillimomo.png"
import frymomo from "../images/aboutImg/frymomo.png"

function Chikenbtn() {
  return (
  <>
    <div className=" flex items-center justify-center mx-auto px-6 sm:px-10 md:px-7 lg:px-8 xl:px-40  mt-20">
      <div className="mt-10 flex justify-center items-center md:flex-row lg:flex-row lg:gap-32 md:gap-16 gap-6 flex-col">
        <div className="flex flex-col items-center">
          <img className="w-full max-w-[200px] h-auto" src={momo1} alt="Buff Momo" />
          <div className="flex-col flex justify-center items-center mt-2">
            <p className=" font-bold text-sm md:text-md lg:text-lg xl:text-xl">Chicken Momo</p>
            <p className="flex py-2 gap-1 items-center">
              <img src={vector} alt="Vector" className="h-[12px] md:h-[14px] lg:h-[16px]" />
              <span className="text-coustemOrange font-bold text-sm md:text-md lg:text-lg xl:text-xl -mt-1">200</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-full max-w-[190px] h-auto" src={frymomo} alt="Buff Fry Momo" />
          <div className="flex-col flex justify-center items-center mt-3">
            <p className=" w-[120%]  text-customBlack font-proxima font-bold text-sm md:text-md lg:text-lg xl:text-xl">Chicken fry Momo</p>
            <p className="flex py-2 gap-1 items-center">
              <img src={vector} alt="Vector" className="h-[12px] md:h-[14px] lg:h-[16px]" />
              <span className="text-coustemOrange font-bold text-sm md:text-md lg:text-lg xl:text-xl -mt-1">200</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-full max-w-[250px] h-auto" src={chillimomo} alt="Buff Chilli Momo" />
          <div className="flex-col flex justify-center items-center">
            <p className=" text-customBlack font-proxima font-bold text-sm md:text-md lg:text-lg xl:text-xl">Chicken C. Momo</p>
            <p className="flex py-2 gap-1 items-center">
              <img src={vector} alt="Vector" className="h-[12px] md:h-[14px] lg:h-[16px]" />
              <span className="text-coustemOrange font-bold text-sm md:text-md lg:text-lg xl:text-xl -mt-1">200</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Chikenbtn
