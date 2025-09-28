import React from 'react'
import bannerimg from '../assets/images/bannerimg.png'
import { Link } from 'react-router'
import subtitle from '../assets/images/bannerlogos.png'

const Banner = () => {
  return (
    <>
    
  <section id='banner' className='pt-[112px] pb-[209px] relative'>
        <div className="container">
          <div id='banner-row' className='flex'>
            {/* --------------- left-side */}
            <div className='flex-1 w-full max-w-xl'>
              {/* ---------- h2 */}
              <div className='w-full'><h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold font-main text-[#131022]'>Task Management Assistant You Gonna Love</h2></div>
              {/*------------------- description  */}
              <div className='mt-[32px] mb-[48px]'><p className='text-base md:text-lg font-normal font-main text-[#585C7B]'>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p></div>
              {/* ------------ button */}
             
                <button className='w-[210px] py-[13px] bg-[#6366F1] text-[16px] font-semibold font-main text-[#fff] rounded-[6px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'>Get started for free</button>
              {/* --------------- subtitle */}
              <div><h2 className='text-sm md:text-base pt-12 pb-10 font-extrabold font-main text-[#131022]'>Largest companies use our tool to work efficiently</h2></div>
              {/* ------------- icons */}
              <div><img src={subtitle} alt="subtitle" className='max-w-full h-auto' /></div>
            </div>
            {/* ------------ right-side */}
            <div className=' absolute top-[-70px] right-0'>
              <img className='' src={bannerimg} alt="banner-img" />
            </div>
          </div>
        </div>
      </section>
    
    
    </>
  )
}

export default Banner