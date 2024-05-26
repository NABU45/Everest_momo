import React from 'react'

import Advice01 from '../images/AdviceImg/Advice01.png'
import About02 from '../images/aboutImg/About02.jpeg'
import Service01 from '../images/serviceImg/Service01.png'
import Service02 from '../images/serviceImg/Service02.png'
import Service03 from '../images/serviceImg/Service03.png'


import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function OurService() {
  const aboutStyle02 = {
    position: 'relative',
    backgroundImage: `url(${About02})`,
    width: '100%',
    transition: 'background-image 0.5s ease',
  };

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className=''>
        <div className='container mx-auto px-6 lg:px-40 gap-14 flex flex-col justify-center'>
          <div className='flex flex-row justify-between items-center'>
            <div className=' flex flex-col justify-start'>
              <h3 className='our-menu mt-5 text-4xl'>Allergy Advices</h3>
              <div>
                <p className='pride uppercase mt-4 w-[70%]'>AT OUR RESTAURANT</p>
                <div className='flex flex-col justify-first font-bold mt-4'>
                  <p className='text-slate-800  justify-first font-sans md:text-3xl transition-all text-md w-[100%]'>We use only the freshest and highest quality ingredients in all our dishes,</p>
                  <p className='text-coustemOrange text-first font-sans md:text-3xl transition-all text-md w-[70%]'>and offer transparency in our ingredient labeling.</p>
                </div>
              </div>
            </div>
            <div className='mt-4 w-[40%] '>
              <img src={Advice01} alt="" />
            </div>
          </div>
        </div>


        <div style={{ position: 'relative' }} className='mt-20'>
          <div style={aboutStyle02} className='px-6 md:px-40 bg-cover h-[320px] sm:bg-cover sm:h-[480px] md:bg-cover md:h-[640px]'>
            <div className='absolute inset-0 bg-gradient-to-r from-black to-[rgba(94,77,64,0.7)] opacity-80'></div>
            <div className='absolute top-[150px] md:top-[367px] text-white' >
              <p className='font-bold md:text-3xl transition-all text-md'>Process behind the making</p>
              <p className='text-lg'>See how we make momos that you like from only the best ingredients</p>
            </div>
            <div>
              <img className='absolute top-[240px] md:top-[450px] w-24 md:w-1/6 h-auto' src="" alt="" />
            </div>
          </div>
        </div>




        <div className='flex flex-col items-center w-full pt-12'>
          <div className='flex flex-col-reverse lg:flex-row w-[80%] gap-[10%]'>
            <div className='w-full lg:w-[40%] flex flex-col gap-6'>
              <div className=''>
                <img className='py-6' src={Service01} alt="" />
                <div className='flex flex-col gap-6'>
                  <p className='font-bold text-xl md:text-2xl'>Private Party</p>
                  <p className='text-[#6B788E]'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
                </div>
              </div>
              <div className='flex items-center gap-2 rounded-md custom-shadow'>
                <div className='p-2'>
                  <p className='font-bold text-customGreen text-xl lg:text-2xl'>Scan the QR code</p>
                  <p className='text-[#6B788E]'>You can also check about the service</p>
                </div>
                <div className='p-2'>
                  <img src={Service02} alt="" />
                </div>
              </div>
            </div>
            <div className='flex md:justify-center'>
              <img src={Service03} alt="" />
            </div>
          </div>



          <div className='flex flex-col lg:flex-row w-[80%] gap-[10%] pt-20'>
            <div className='flex md:justify-center'>
              <img src={Service03} alt="" />
            </div>
            <div className='w-full lg:w-[40%] flex flex-col gap-6'>
              <div className=''>
                <img className='py-6' src={Service01} alt="" />
                <div className='flex flex-col gap-6'>
                  <p className='font-bold text-xl md:text-2xl'>Private Party</p>
                  <p className='text-[#6B788E]'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
                </div>
              </div>
              <div className='flex items-center gap-2 rounded-md custom-shadow'>
                <div className='p-2'>
                  <p className='font-bold text-customGreen text-xl md:text-2xl'>Scan the QR code</p>
                  <p className='text-[#6B788E]'>You can also check about the service</p>
                </div>
                <div className='p-2'>
                  <img src={Service02} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className='mt-20 w-full flex justify-center'>
          <div className='py-10 w-[80%] flex flex-col items-center gap-12 bg-[#F5F6F7] rounded-[12px]'>
            <div className='flex flex-col gap-2'>
              <p className='text-center font-bold text-xl md:text-2xl'>Got any Queries?</p>
              <p>If you have any queries, send us a message. Our Friendly team would love to hear from you </p>
            </div>
            <div className='w-[216px] h-[59px] rounded-full bg-customGreen flex justify-center items-center'>
              <span className='text-white font-medium'>Get In Touch</span>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default OurService;
