import React from 'react'
import bannerimg from '../assets/images/bannerimg.png'
import { Link } from 'react-router'
import subtitle from '../assets/images/bannerlogos.png'

const Banner = () => {
  return (
    <>
    
    <section id='banner' className='flex relative justify-between items-center'>
        <div className="container">
            <div id='banner-row' className='pt-[112px] pb-[209px] flex '>
                {/* --------------- lift-side */}
                <div>
                    {/* ---------- h2 */}
                    <div className='w-[526px]'><h2 className='text-[56px] font-extrabold font-main text-[#Task Management Assistant You Gonna Love]'>Task Management Assistant You Gonna Love</h2></div>
                {/*------------------- description  */}
                <div className='w-[526px] pt-[32px] pb-[48px]'><p className='text-[18px] font-normal font-main text-[#585C7B]'>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p></div>
                {/* ------------ button */}
                <div className='w-[210px] bg-[#6366F1] rounded-[6px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'><button className='py-[13px] text-[16px] font-semibold font-main text-[#fff] rounded-[6px] px-[32px]' >Ger started for free</button></div>
               
               {/* --------------- subtitle */}
                <div><h2 className='text-[16px] pt-[112px] pb-[40px] font-extrabold font-main text-[#131022]'>Largest companies use our tool to work efficiently</h2></div>  
                {/* ------------- icons */}
                <div><img src={subtitle} alt="subtitle" /></div>
                
                
                </div>

                {/* ------------ right-side */}
        <div className=' absolute top-0 right-0'><img className='w-[1058px]' src={bannerimg} alt="banner-img" /></div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Banner