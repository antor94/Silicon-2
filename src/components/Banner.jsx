import React from 'react'
import bannerimg from '../assets/images/bannerimg.png'
import { Link } from 'react-router'
import subtitle from '../assets/images/bannerlogos.png'

const Banner = () => {
  return (
    <>
    
  <section id='banner' className='flex flex-col-reverse md:flex-row relative justify-between items-center pb-16 md:pb-[209px]'>
        <div className="container">
          <div id='banner-row' className='flex'>
            {/* --------------- left-side */}
            <div className='flex-1 w-full max-w-xl'>
              {/* ---------- h2 */}
              <div className='w-full'><h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold font-main text-[#131022]'>Task Management Assistant You Gonna Love</h2></div>
              {/*------------------- description  */}
              <div className='w-full pt-6 pb-8'><p className='text-base md:text-lg font-normal font-main text-[#585C7B]'>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p></div>
              {/* ------------ button */}
              <div className='w-full max-w-xs bg-[#6366F1] rounded-[6px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] mb-8'>
                <button className='w-full py-3 text-base md:text-lg font-semibold font-main text-[#fff] rounded-[6px] px-8'>Get started for free</button>
              </div>
              {/* --------------- subtitle */}
              <div><h2 className='text-sm md:text-base pt-12 pb-10 font-extrabold font-main text-[#131022]'>Largest companies use our tool to work efficiently</h2></div>
              {/* ------------- icons */}
              <div><img src={subtitle} alt="subtitle" className='max-w-full h-auto' /></div>
            </div>
            {/* ------------ right-side */}
            <div className='flex-1 w-full flex justify-center md:justify-end relative mb-8 md:mb-0'>
              <img className='' src={bannerimg} alt="banner-img" />
            </div>
          </div>
        </div>
      </section>
    
    
    </>
  )
}

export default Banner