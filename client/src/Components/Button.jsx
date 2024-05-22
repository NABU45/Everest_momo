import React from 'react';
import arrowRight from "../images/aboutImg/arrow-right.png"
function Button() {
  return (
<>
<div className='flex flex-row justify-center items-center py-3 lg:py-5  bg-customGreen text-white rounded-3xl w-3/4 lg:w-1/2 gap-4 '>
  <p className='text-xs md:text-md lg:text-md xl:text-xl justify-center flex items-center'>Explore Our Story</p>
  <img src={arrowRight} alt="" />
</div>

</>
  )
}

export default Button;
