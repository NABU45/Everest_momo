import React, { useState } from 'react'

import Advice01 from '../images/AdviceImg/Advice01.png'
import About02 from '../images/aboutImg/About02.jpeg'
import Service01 from '../images/serviceImg/Service01.png'
import Service02 from '../images/serviceImg/Service02.png'
import Service03 from '../images/serviceImg/Service03.png'


import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import playCircle from "../images/aboutImg/play-circle.png";
import GetInTouchForm from '../Components/GetInTouchForm'
import Map from '../MapModel/Map';



function OurService() {
  const aboutStyle02 = {
    position: 'relative',
    backgroundImage: `url(${About02})`,
    width: '100%',
    transition: 'background-image 0.5s ease',
  };

  const buttonsConfig3 = [
    {
        image: playCircle,
        text: 'Watch The Video', customStyles: 'w-36 lg:w-56 gap-1 lg:gap-2', onClick: () => console.log('Watch The Video  clicked')
    },
];
const [showContact, setShowContact] = useState(false);

const handleGetInTouchClick = () => {
  setShowContact(!showContact);
};

  return (
<>
      <Navbar />

         <div className=' mx-auto px-6 lg:px-20 xl:px-40  flex flex-col justify-center'>
                <div className='flex flex-row justify-between  gap-1 lg:gap-10 xl:gap-48'>
                    <div className=' flex flex-col justify-start'>
                        <h3 className='our-menu mt-6 md:mt-10 lg:mt-20  text-xl md:text-4xl lg:text-6xl'>Our Services</h3>
                        <div>
                            <p className='pride uppercase text-[6px] lg:text-[14px] xl:text-lg mt-1 lg:mt-12 w-full lg:w-[90%] xl:w-[80%]'>Knowing our customers needs</p>
                            <div className='flex flex-col justify-first space-y-2 font-bold w-[95%]'>
                                <h1 className='mt-1 lg:mt-5 text-customBlack font-proxima  customer text-[9px] md:text-xl lg:text-3xl'>
                                    <span className=" text-coustemOrange space-x-1 relative"> We're more then just momos,</span> We're a full-services dining experiences. 
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='xl:ml-[32px] ml-0 mt-4 w-[100%] '>
                        <img src={Advice01} alt="" />
                    </div>
                </div>
            </div>


            <div style={{ position: 'relative' }} className='mt-20'>
                <div style={aboutStyle02} className='px-6 md:px-40 bg-cover h-[320px] sm:bg-cover sm:h-[480px] md:bg-cover md:h-[640px]'>
                    <div className='absolute inset-0 bg-gradient-to-r from-black to-[rgba(94,77,64,0.7)] opacity-80'></div>
                    <div className='absolute top-[150px] md:top-[367px] text-white  font-proxima' >
                        <p className='font-bold transition-all text-2xl   lg:text-4xl'>Dine With Us</p>
                        <p className=' text-xs lg:text-lg'>Enjoy our momos in the comfort of your own home with our delivery services</p>
                        <div className=' mt-1l lg:mt-16'>
                            {buttonsConfig3.map((btn, index) => (
                                <Button key={index} text={btn.text} customStyles={btn.customStyles} image={btn.image} onClick={btn.onClick} />
                            ))}
                        </div>
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
                  <p className='font-bold text-xl md:text-2xl font-proxima text-customBlack'>Private Party</p>
                  <p className='  text-customiconbg '>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
                </div>
              </div>
              <div className='flex items-center justify-between rounded-md custom-shadow'>
                <div className='p-2'>
                  <p className='font-bold text-customGreen text-xl lg:text-2xl font-proxima'>Scan the QR code</p>
                  <p className= ' text-customiconbg btnFont'>You can also check about the service</p>
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
                  <p className='font-bold text-xl md:text-2xl font-proxima  text-customBlack'>Private Party</p>
                  <p className=' text-customiconbg '>Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
                </div>
              </div>
              <div className='flex items-center gap-2 rounded-md custom-shadow'>
                <div className='p-2'>
                  <p className='font-bold text-customGreen text-xl md:text-2xl font-proxima'>Scan the QR code</p>
                  <p className='text-customiconbg btnFont'>You can also check about the service</p>
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
              <p className='text-center font-bold text-xl md:text-3xl font-proxima text-customBlack'>Got any Queries?</p>
              <p className='btnFont text-customiconbg'>If you have any queries, send us a message. Our Friendly team would love to hear from you </p>
            </div>
            <div className='w-[216px] h-[59px] rounded-full bg-customGreen flex justify-center items-center'>
              <span className='text-white font-medium cursor-pointer' onClick={handleGetInTouchClick} >Get In Touch</span>
            </div>
            {showContact && (
        <div className='mx-auto flex flex-col md:flex lg:flex-row  items-center mt-20 bg-slate-50 gap-10 xl:gap-12 '>
                <div className='w-full    lg:w-[550px] xl:w-[650px]'>
                    <Map />
                </div>
                <div className=' relative bg-white w-5/6 lg:w-2/6  lg:ml-10 shadow-lg px-8 py-20'>
                      <p className='text-coustemOrange font-sans md:text-2xl transition-all text-lg font-bold -mt-10 '>
                        Contact<span className='text-slate-800 ml-2'>Us</span>
                      </p>
                    <p className='text-slate-500  text-xs lg:text-md mt-2'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
                    <div className='mt-10'>
                    <GetInTouchForm buttonColor="green" />
                    </div>
                </div>
            </div>)}
            </div>
          </div>

       
      <Footer />
      </>
  )
}

export default OurService;
