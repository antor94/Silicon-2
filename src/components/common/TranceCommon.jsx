import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaRegSmile } from "react-icons/fa";

const TranceCommon = ({trach2 , tracp ,}) => {
  return (
    <>
    
    <div className='text-center'>

    <div className='w-[416px] h-[544px] border border-[#E2E5F1] hover:shadow-[inset_0px_2px_4px_0px_rgba(0,_0,_0,_0.3)] shadow-[0px_10px_30px_0px_rgba(255,_182,_193,_0.3)] rounded-[8px]'>
        {/* -------------- logo */}
        <div className='text-center flex justify-center pt-[40px]'>
        <div className='w-[120px] h-[120px] rounded-full bg-[#F3F6FF] flex justify-center items-center'><FaRegSmile className='text-[56px] text-[#6366F1]' /></div>

        </div>

        {/* ---------------- text */}
        <div className='pt-[16px]'>
            <p className='text-[20px] font-normal font-main text-[#9397AD]'>{tracp}</p>
            <h2 className='text-[32px] font-main font-extrabold text-main'>{trach2}</h2>
        </div>
        {/* ------------- span */}
        <div className='flex justify-center py-[16px]'>
        <span className=' inline-block w-[336px] border border-[#E2E5F1]'></span>

        </div>
        <div className='text-center flex flex-col justify-center pl-[40px] pt-[16px] pb-[32px]'>
            <p className='text-[14px] font-main font-normal flex gap-[8px] items-center text-main'><IoMdCheckmark /> Aenean neque tortor, purus faucibus</p>
            <p className='text-[14px] font-main font-normal flex gap-[8px] items-center text-main'><IoMdCheckmark /> Nullam augue vitae et volutpat sagittis augue</p>
            <p className='text-[14px] font-normal font-main flex gap-[8px] items-center text-[#9397AD]'><RxCross2 /> Mauris massa penatibus enim elit quam</p>
            <p className='text-[14px] font-normal font-main flex gap-[8px] items-center text-[#9397AD]'><RxCross2 /> Nec ac sagittis nunc bibendum</p>
            <p className='text-[14px] font-normal font-main flex gap-[8px] items-center text-[#9397AD]'><RxCross2 /> Odio ut orci volutpat ultricies eleifend</p>
        </div>

        {/* ------------ button */}
        <div className='flex justify-center'>

        <div className='w-[340px] flex justify-center'>
            
        <button className='text-[14px] font-semibold font-main text-[#6366F1] hover:bg-[#6366F1] hover:text-[#fff] rounded-[6px] border border-[#6365f182] py-[11px] px-[121px]'>Start free trial</button>
        </div>

        </div>
    </div>
    
    
    </div>
    
    </>
  )
}

export default TranceCommon