import React from 'react'

const ConnectedCommon = ({conectlogo , conecth2, conectp}) => {
  return (
    <>
    
    <div className='text-center'>
        <div className=' flex justify-center'>
        <div className='w-[64px] flex justify-center items-center text-[32px] text-[#6366F1] h-[64px] bg-[#F3F6FF] rounded-full'>{conectlogo}</div>

        </div>
        <div className='pt-[24px] pb-[12px]'> <h2 className='text-[20px] font-extrabold font-main text-main'>{conecth2}</h2> </div>
        <div className='flex justify-center'>

        <div className='w-[298px] text-center'><p className='text-[14px] font-normal font-main text-primary'>{conectp}</p></div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ConnectedCommon