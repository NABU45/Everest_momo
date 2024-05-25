import React from 'react'


import Advice01 from '../images/AdviceImg/Advice01.png'
import Advice02 from '../images/AdviceImg/Advice02.png'
import Advice03 from '../images/AdviceImg/Advice03.png'
import Advice04 from '../images/AdviceImg/Advice04.png'
import Advice05 from '../images/AdviceImg/Advice05.png'
import Advice06 from '../images/AdviceImg/Advice06.png'
import Advice07 from '../images/AdviceImg/Advice07.png'
import Advice08 from '../images/AdviceImg/Advice08.png'

function AllergyAdvice() {

    const customStyle = {
        fontFamily: "Chela One",
        fontWeight: 700,
        fontStyle: 'normal'
    };


    return (
        <div className=' overflow-x-hidden'>
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

            <div className='mt-4 md:mt-10'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img src={Advice02} alt="" />
                    </div>
                    <div className='md:text-4xl' style={customStyle}>
                        <span className='text-coustemOrange'> Ingredient's </span>
                        <span> Used </span>
                    </div>
                    <div>
                        <img src={Advice03} alt="" />
                    </div>
                </div>
            </div>


            <div className='relative mt-4'>
                <div className='relative left-20 md:left-52 lg:left-72'>
                    <img className='' src={Advice04} alt='/' />
                </div>
                <div className='relative'>
                    <img src={Advice05} alt='/' />
                </div>
                <div className='relative w-full left-[55%] md:top-56 visible sm:hidden md:block'>
                    <img src={Advice06} alt='/' />
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
            <div className='md:mt-96 relative'>
                <div className='flex flex-col gap-20'>
                    <div className='flex items-center justify-center pt-12'>
                        <div>
                            <img src={Advice02} alt="" />
                        </div>
                        <div className='md:text-4xl' style={customStyle}>
                            <span className='text-coustemOrange'> Allergy </span>
                            <span> Advice </span>
                        </div>
                        <div>
                            <img src={Advice03} alt="" />
                        </div>
                    </div>

                    <div className='mt-10 flex justify-center items-center w-full'>
                        <div className='flex flex-col justify-center items-center gap-8 w-[80%]'>
                            <p className='text-[#252D43]'>Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna.</p>
                            <p className='text-[#252D43]'>Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.</p>
                            <p className='text-[#252D43]'>Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.</p>
                            <p className='text-[#252D43]'>Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.</p>
                            <p className='text-[#252D43]'>Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-8 w-full'>
                        <div>
                            <p className='text-center font-bold text-customGreen text-xl'> Scan the QR code </p>
                            <p className='text-center md:text-[24px] text-[#252D43]'> You can also check the allergy advices using your phone as well </p>
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
            </div>
        </div>
    )
}

export default AllergyAdvice;
