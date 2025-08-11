import React from 'react'
import CommonHead from './common/CommonHead'
import logos from '../assets/images/logos.png'
import { Link } from 'react-router'

const Integrate = () => {
  return (
    <>
    
    <section id='intregrate' className='pt-[112px]'>
        <div className="container">
            <div className='text-center'><CommonHead comh2={'Integrate Top Work Tools'} /></div>
            <div id='intre-row' className=''>
                <div className='flex justify-center pt-[24px]'>

                <div className='w-[856px] text-center'><p className='text-[18px] font-normal font-main text-[#9397AD]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p></div>
                </div>

                <div className='py-[48px] flex justify-center'>
                    <Link to={'/'} ><img src={logos} alt="logos" /></Link>
                </div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Integrate