import React from 'react';

function Button({ text, customStyles, onClick, image }) {
  return (
    <div
      className={`flex flex-row justify-center items-center py-2 lg:py-3 cursor-pointer mt-4 bg-customGreen text-white rounded-3xl shadow-md  text-2lg text-center w-30  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 ${customStyles}`}
      onClick={onClick}
    >
      <p className='text-[8px] md:text-md lg:text-[16px] justify-center flex items-center btnFont '>{text}</p>
      <img className='w-3 md:w-6' src={image} alt="Arrow" />
    </div>
  );
}

export default Button;
