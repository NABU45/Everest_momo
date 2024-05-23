import React from 'react'

import Group8 from '../images/AdviceImg/Advice01.png'

function AllergyAdvice() {
    return (
        <div>
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
                        <img src={Group8} alt="" />
                    </div>
                </div>
            </div>




            <div>

            </div>
        </div>
    )
}

export default AllergyAdvice;
