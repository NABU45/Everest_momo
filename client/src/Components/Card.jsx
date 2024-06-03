import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useRef } from "react";
import Slider from "react-slick";

import About11 from '../images/aboutImg/About11.jpg';
import About12 from '../images/aboutImg/About12.jpeg';
import About13 from '../images/aboutImg/About13.jpeg';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

function CustomArrows() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const aboutStyle11 = {
    backgroundImage: `url(${About11})`,
  };

  const aboutStyle12 = {
    backgroundImage: `url(${About12})`,
  };

  const aboutStyle13 = {
    backgroundImage: `url(${About13})`,
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container px-6 lg:px-40">
      <Slider ref={sliderRef} {...settings}>
        <div className="flex flex-col mt-10 items-center gap-[24px]">
          <div style={aboutStyle11} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
              <div className='text-white absolute bottom-5 left-5 font-bold'>
                <p>Head Chef</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center gap-[24px]">
          <div style={aboutStyle12} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
              <div className='text-white absolute bottom-5 left-5 font-bold'>
                <p>Assistant Chef</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center gap-[24px]">
          <div style={aboutStyle13} className='relative bg-cover h-[450px] w-[300px] md:h-[512px] md:w-[360px] transition-background-image duration-500 ease-in-out rounded-lg'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 rounded-lg'>
              <div className='text-white absolute bottom-5 left-5 font-bold'>
                <p>Assistant Chef</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className='flex justify-center mt-4'>
        <div className='flex w-[1128px] h-[48px]'>
          <div className='flex justify-between items-center w-full'>
            <div className='flex items-center h-[48px] w-[85px]'>
              <span className='font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
              <span>/05</span>
            </div>
            <div className='h-[48px] w-[112px] flex justify-end items-center gap-2'>
              <div
                className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
                onClick={() => sliderRef.current.slickPrev()}
              >
                <IoMdArrowRoundBack />
              </div>
              <div
                className='h-[24px] w-[24px] md:h-[48px] md:w-[48px] rounded-full border-2 border-[#A6AEBB] flex items-center justify-center'
                onClick={() => sliderRef.current.slickNext()}
              >
                <IoMdArrowRoundForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomArrows;
