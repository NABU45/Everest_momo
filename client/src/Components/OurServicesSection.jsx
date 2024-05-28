import React from 'react';
import quality from "../images/aboutImg/Group6.png";
import privates from "../images/aboutImg/Group5.png";
import chef from "../images/aboutImg/Chef.png";


function OurServicesSection() {
  return (
<>


    <div className="container flex items-center justify-center mx-auto px-6 sm:px-10 md:px-7 lg:px-40 mt-20">
      <div className="mt-10 flex justify-center items-center md:flex-row lg:flex-row lg:gap-32 md:gap-16 gap-6 flex-col">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
  <img className="w-full max-w-[90px] h-auto" src={quality} alt="Quality Food" />
  <p className="font-bold text-sm md:text-md lg:text-lg xl:text-xl font-proxima text-customBlack">Quality Food</p>
  <span className="text-xs sm:text-sm md:text-md lg:text-lg btnFont">Only the best food with top quality products and ingredients</span>
</div>

        <div className="flex flex-col items-center justify-center text-center gap-5">
          <img className="w-full max-w-[90px] h-auto" src={privates} alt="Buff Momo" />
            <p className=" text-customBlack font-proxima font-bold text-sm md:text-md lg:text-lg xl:text-xl">Private Party</p>
            <span className="  text-sm md:text-md lg:text-lg btnFont">Get the best food for all your private parties and gatherings
            </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <img className="w-full max-w-[90px] h-auto" src={chef} alt="Buff Momo" />
            <p className="text-customBlack font-proxima font-bold text-sm md:text-md lg:text-lg xl:text-xl">Catering</p>
            <span className=" text-sm md:text-md lg:text-lg btnFont">Get the best food for any occasions and gatherings</span>
        </div>
      
      </div>
    </div>
    </>

  );
}

export default OurServicesSection
