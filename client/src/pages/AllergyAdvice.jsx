import React from 'react'


import Advice01 from '../images/AdviceImg/Advice01.png'
import Advice02 from '../images/AdviceImg/Advice02.png'
import Advice03 from '../images/AdviceImg/Advice03.png'
import Advice04 from '../images/AdviceImg/Advice04.png'
import Advice05 from '../images/AdviceImg/Advice05.png'
import Advice06 from '../images/AdviceImg/Advice06.png'
import Advice07 from '../images/AdviceImg/Advice07.png'
import Advice08 from '../images/AdviceImg/Advice08.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function AllergyAdvice() {

    const customStyle = {
        fontFamily: "Chela One",
        fontWeight: 700,
        fontStyle: 'normal'
    };


    return (
        <>
            <Navbar />
                <div className=' mx-auto px-6 lg:px-20 xl:px-40  '>

                    <div className='flex flex-row justify-between  gap-1 lg:gap-10'>
                        <div className=' flex flex-col justify-start'>
                            <h3 className='our-menu mt-6 md:mt-10 lg:mt-20  text-xl md:text-4xl lg:text-6xl'>Allergy Advices</h3>
                            <div>
                                <p className='pride uppercase text-[7px] md:text-[16spx] lg:text-lg mt-1 lg:mt-12 w-full lg:w-[60%]'>at our restaurant</p>
                                <div className='flex flex-col justify-first space-y-2 font-bold w-[80%]'>
                                    <h1 className='mt-1 lg:mt-5 text-customBlack font-proxima  customer text-[8px] md:text-xl lg:text-3xl'>We use only the freshest and highest quality ingredients in all our dishes,
                                        <span className=" text-coustemOrange space-x-1 relative"> and offer transparency in our ingredient labeling.</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 w-[100%] '>
                            <img src={Advice01} alt="" />
                        </div>
                    </div>
                </div>


                <div className='mt-14 md:mt-24 flex items-center justify-center text-center'>
                    <div className=' flex flex-col lg:flex-row gap-2 lg:gap-3 justify-center items-center text-center  '>
                        <img src={Advice02} alt="" className='' />
                        <div class="w-[279px] h-[48px] flex items-center text-[#D95103]  flex-none flex-grow-0 text-[40px] leading-[120%] font-chela font-normal">
                            Ingredients<span className=' text-customBlack ml-3'> Used</span></div>
                        <img src={Advice03} alt="" />
                    </div>
                </div>


                <div className='relative mt-16 font-proxima'>
                    <div className='relative left-2 md:left-52 lg:left-72'>
                        <img className='w-[70%] lg:w-[40%]' src={Advice04} alt='/' />
                    </div>
                    <div className='relative'>
                        <img className='w-[100%]' src={Advice05} alt='/' />
                    </div>
                    <div className='relative w-full left-[58%] mt-56 lg:mt-10 visible sm:hidden md:block'>
                        <img className='w-[50%] lg:w-[25%]' src={Advice06} alt='/' />
                    </div>
                    <div className='w-full absolute top-0 left-0 z-10 flex justify-center items-center'>
                        <div className='flex w-[80%] md:w-[50%] flex-col gap-2 md:gap-20 justify-between mt-0 md:mt-20'>
                            <div className='font-medium w-full rounded-xl border-customGreen border-4 bg-white p-[2%] md:p-[10%]'>
                                <p className='text-xl md:text-3xl'>For the Dough</p>
                                <div className='mt-3 w-[100%]'>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'> Text="120 gms refined flour";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/4 tsp baking powder";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/2 tsp salt water (for kneading)";</p>
                                    </div>
                                </div>
                            </div>





                            <div className='font-medium w-full rounded-xl border-customGreen border-4 bg-white p-[2%] md:p-[10%]'>
                                <p className='text-xl md:text-3xl'>For the Chicken Filling:</p>
                                <div className='mt-3 w-[100%]'>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1 cup chicken (minced)";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/2 cup onions, finely chopped";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/4 tsp black pepper powder";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1 tbsp oil";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/2 tsp garlic paste";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/2 tsp soya sauce";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="Salt";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/4 tsp vinegar";</p>
                                    </div>
                                </div>
                            </div>





                            <div className='font-medium w-full rounded-xl border-customGreen border-4 bg-white p-[2%] md:p-[10%]'>
                                <p className='text-xl md:text-3xl'>For the Vegetarian Filling:</p>
                                <div className='mt-3 w-[100%]'>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1 cup cabbage and carrots, grated";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="2 tbsp onions , finely chopped";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/2 tsp garlic, finely chopped";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1 tbsp oil";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/4 tsp vinegar";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1/2 tsp soya sauce";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="to taste salt";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="to taste pepper";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1 tbsp cornflour";</p>
                                    </div>
                                </div>
                            </div>





                            <div className='font-medium w-full rounded-xl border-customGreen border-4 bg-white p-[2%] md:p-[10%]'>
                                <p className='text-xl md:text-3xl'>For Chilli Sauce:</p>
                                <div className='mt-3 w-[100%]'>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="25 gram garlic, peeled";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="6 gms whole red chillies";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="3 tbsp vinegar";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="3 tbsp vinegar";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="1 tbsp oil";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="to taste salt";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="to taste salt";</p>
                                    </div>
                                    <div className='flex items-center gap-2 border-b-2 border-[#EBEDF0] pb-1.5 w-full'>
                                        <p className='h-[10px] w-[10px] rounded-full border-2 border-coustemOrange'></p>
                                        <p className='text-[12px] md:text-[16px]'>Text="to taste sugar";</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' relative'>
                    
                        <div className='mt-14 md:mt-24 flex justify-center items-center text-center'>
                            <div className=' flex flex-col lg:flex-row gap-2 lg:gap-3 justify-center items-center   '>
                                <img src={Advice02} alt="" className='' />
                                <div class="w-[279px] h-[48px]  text-[#D95103]  flex-none flex-grow-0 text-[40px] leading-[120%] font-chela font-normal ">
                                    Allergy<span className=' text-customBlack ml-3'>Advice</span></div>
                                <img   src={Advice03} alt="" />
                            </div>
                        </div>

                        <div className='mt-10 flex justify-center items-center w-full'>
                            <div className='flex flex-col justify-center items-center gap-8 w-[80%]'>
                                <p className='text-[#252D43]'>Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio labore omnis ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, et eveniet cum pariatur cumque sed molestiae! Quas laboriosam dignissimos quod! euismod malesuada. Amet sed neque vitae malesuada quis sed urna.</p>
                                <p className='text-[#252D43]'>Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus quasi vitae tempore incidunt ex facilis blanditiis atque obcaecati consectetur ullam exercitationem, magnam ipsa culpa, nemo ea deleniti sequi nulla.. Ipsum massa suspendisse netus mollis interdum.</p>
                                <p className='text-[#252D43]'>Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senec Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad itaque voluptates consequuntur, nesciunt tempora error veritatis, placeat atque numquam porro, accusamus dolore? Architecto repudiandae ut soluta totam, eligendi asperiores numquam veritatis, qui iste eius deleniti tenetur, dolor vero suscipit non consequuntur perferendis odio saepe debitis! Quam eaque eligendi nemo.tus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.</p>
                                <p className='text-[#252D43]'>Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.</p>
                                <p className='text-[#252D43]  flex justify-between'>Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesen t pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam ipsum! Commodi velit, tempore laudantium voluptatibus architecto ducimus, error possimus officia, iusto atque vitae odio cupiditate. Neque ea, nam dolores iste quaerat unde vel optio maxime corporis eaque corrupti assumenda.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-8 w-full mt-10'>
                            <div className='flex flex-col justify-between items-center font-proxima gap-2'>
                                <p className='font-bold text-customGreen text-xl lg:text-2xl '> Scan the QR code </p>
                                <p className='flex justify-center text-center text-sm lg:text-xl text-customBlack'> You can also check the allergy advices using your phone as well </p>
                            </div>
                            <div>
                                <div>
                                    <img src={Advice07} alt="" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='font-bold text-4xl'>
                                        <span className='text-coustemOrange'> SCAN </span>
                                        <span> ME! </span>
                                    </div>
                                    <div>
                                        <img src={Advice08} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <Footer />
        </>
    )
}

export default AllergyAdvice;
