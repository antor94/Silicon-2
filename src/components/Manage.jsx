import React from 'react'
import manageimg from '../assets/images/MangeImg.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';

const Manage = () => {
  return (
    <>
    
    
    <section id='manage' className='pt-[112px] pb-[96px]'>
        <div className="container">
            <div id='manage-row' className='flex  justify-around items-center'>
                {/* -------------- left-side */}
                <div><img src={manageimg} alt="manage-img" /></div>

                {/* ------------- right-side */}
                <div>
                    <h2 className='text-[32px] font-extrabold font-main text-main'>Manage Your Work</h2>
                    <div className='flex gap-[8px] items-center pt-[32px]'><IoIosCheckmarkCircleOutline className='text-[#6366F1]' /><p className='text-[16px] font-normal font-main text-primary'>Powerful project management</p></div>
                    <div className='flex gap-[8px] items-center pt-[12px]'><IoIosCheckmarkCircleOutline className='text-[#6366F1]' /><p className='text-[16px] font-normal font-main text-primary'>Powerful project management</p></div>
                    <div className='flex gap-[8px] items-center pt-[12px]'><IoIosCheckmarkCircleOutline className='text-[#6366F1]' /><p className='text-[16px] font-normal font-main text-primary'>Powerful project management</p></div>
                    <div className='flex gap-[8px] items-center pt-[12px]'><IoIosCheckmarkCircleOutline className='text-[#6366F1]' /><p className='text-[16px] font-normal font-main text-primary'>Powerful project management</p></div>
                    <div className='flex gap-[8px] items-center pt-[12px]'><IoIosCheckmarkCircleOutline className='text-[#6366F1]' /><p className='text-[16px] font-normal font-main text-primary'>Powerful project management</p></div>
                 <Link to={'/'} className='w-[170px] mt-[40px] rounded-[6px] bg-[#6366F1] py-[11px] px-[28px] flex gap-[8px] items-center text-white'>Learn more <FaArrowRight /></Link>
                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Manage