import React from 'react'
import { CiMail } from "react-icons/ci";

const Email = () => {
  return (
    <>
    
    <section id='email' className='pt-[112px]'>
        <div className="container">
            <div id='email-row' className='bg-main text-center rounded-[8px]' >
                <div className='pt-[96px]'><h2 className='text-[40px] font-extrabold font-main text-[#ffff]'>Ready to Get Started? </h2></div>
                <div className='pt-[24px]'><p className='text-[18px] font-normal font-main text-[#fff]'>Organize your tasks with a 14-day free trial</p></div>
               {/* -------------- email part */}
               <div className='flex justify-center'>
                <div className='w-[636px] bg-[#fff] rounded-[8px] mt-[40px] mb-[16px] flex justify-between items-center'>
                  <div className=' w-[60%]  flex items-center pl-[16px]'>
                    <CiMail />

                <input className='pl-[8px] text-[16px] outline-none font-normal font-main text-[#B4B7C9] ' type="text" placeholder='Your Email' />
                  </div>
                <button className='w-[211px] py-[13px] px-[32px] bg-[#6366F1] rounded-r-[8px] text-[16px] font-semibold font-main text-[#fff]'>Get started for free</button>
                </div>
               </div>
                <div className='pb-[96px]'><p className='text-[14px]  font-normal font-main text-[#fff]'>No subscriptions. No annual fees. No lock-ins.</p></div>



            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Email