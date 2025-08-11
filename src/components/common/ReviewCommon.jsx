import React from 'react'
import revimg from '../../assets/images/reviewimage.png'
import { RiDoubleQuotesL } from "react-icons/ri";

const ReviewCommon = () => {
  return (
    <>
    
    
    <div>
        <div className=' flex justify-center gap-[24px]'>
            {/* ----------- left-side */}
            <div className='w-[636px] h-[433px] bg-main rounded-[8px]'>
                <div className='pl-[40px]'>

                <div className='pt-[48px] pb-[24px]'><h2 className='text-[80px] font-extrabold font-main text-[#fff]'>420k</h2></div>
                <div className='w-[540px]'><p className='text-[24px] font-semibold font-main text-[#ffffffa0]'>users are taking advantage of our <span className='font-extrabold text-[#fff]'>Task Manager Tool</span>. It’s a new transparent and efficient way to organize all of your daily tasks.</p></div>
                </div>
            </div>
            {/* ----------- right-side */}
            <div className='w-[636px] h-[433px] bg-[#fff] pt-[48px] pl-[48px] shadow-[0px_15px_35px_-5px_rgba(0,_0,_0,_0.1)] rounded-[8px]'>
                <div className='w-[52px] h-[52px]  bg-[#6366F1] rounded-[6px] flex justify-center items-center'><RiDoubleQuotesL className='text-white text-[24px]' /></div>
                {/* -------------- description */}
                <div className='w-[540px] py-[32px]'><p className='text-[18px] font-normal font-main text-primary'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p></div>
{/* --------------- details */}
                <div className='flex gap-[16px] items-center'>
                    <div><img src={revimg} alt="review-img" /></div>
                    <div>
                        <h2 className='text-[16px] font-bold font-main text-main'>Annette Black</h2>
                        <p className='text-[14px] font-normal font-main text-[#9397AD]'>Marketing Specialist at Createx Studio</p>
                    </div>

                </div>

            </div>

        </div>
    </div>
    
    
    
    
    </>
  )
}

export default ReviewCommon