import React from 'react';

function Button({ text, customStyles, onClick, image }) {
  return (
    <div
      className={`flex flex-row justify-center items-center py-2 lg:py-3 bg-customGreen text-white rounded-3xl ${customStyles}`}
      onClick={onClick}
    >
      <p className='text-[8px] md:text-md lg:text-[16px] justify-center flex items-center'>{text}</p>
      <img className='w-3 md:w-6' src={image} alt="Arrow" />
    </div>
  );
}

export default Button;
