import React from 'react'
import CommonHead from './common/CommonHead'
import { FaToggleOn } from "react-icons/fa";
import TranceCommon from './common/TranceCommon';

const Transparent = () => {
  return (
    <>
    
    
    
    <section is='transparent' className='pt-[112px]'>
        <div className="container">
            <div className='flex justify-center'><CommonHead comh2={'Transparent Pricing for You'} /></div>
            <div id='transparent-row' >

                {/* --------------- toggle */}
                <div className='flex gap-[16px] justify-center items-center'>
                    <h2 className='text-[18px] font-semibold font-main text-main'>Bill Monthly</h2>
                    <button className='py-[40px]'><FaToggleOn className='text-[46px] text-[#6366F1]' /></button>
                    <h2 className='text-[18px] font-semibold font-main text-[#6366F1]'>Bill Annualy</h2>
                </div>
                <div className='flex justify-center gap-[24px]'>
                    <TranceCommon tracp={'Basic'} trach2={'$ 540'}/>
                    <TranceCommon tracp={'Standard'} trach2={'$ 540'} />
                    
                    <TranceCommon tracp={'Ultimate'} trach2={'$ 40'}/>
                
                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Transparent