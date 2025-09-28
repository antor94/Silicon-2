import React from 'react'
import ReviewCommon from './common/ReviewCommon'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Review = () => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
    
    <section id='review' className='bg-[#F3F6FF] mt-[112px]'>
        <div className="container">
            <div id='review-row' className='py-[96px] flex justify-center gap-[24px]'>
                {/* ----------- left-side */}
                          <div className='w-[636px] h-[433px] bg-main rounded-[8px]'>
                              <div className='pl-[40px]'>
              
                              <div className='pt-[48px] pb-[24px]'><h2 className='text-[80px] font-extrabold font-main text-[#fff]'>420k</h2></div>
                              <div className='w-[540px]'><p className='text-[24px] font-semibold font-main text-[#ffffffa0]'>users are taking advantage of our <span className='font-extrabold text-[#fff]'>Task Manager Tool</span>. It’s a new transparent and efficient way to organize all of your daily tasks.</p></div>
                              </div>
                          </div>
            </div>
                     <div className="slider-container">
      <Slider {...settings}>
        <div>
      <ReviewCommon />
        </div>
        <div>
      <ReviewCommon />
          
        </div>
        <div>
      <ReviewCommon />
  
        </div>
        <div>
      <ReviewCommon />
        
        </div>
        <div>
      <ReviewCommon />
          
        </div>
        <div>
      <ReviewCommon />
          
        </div>
      </Slider>
                        </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Review