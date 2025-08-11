import React from 'react'
import footerlogo from '../assets/images/solid.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    
    <section id='footer'>
        <div className="container">
            <div id='footer-row' className='pt-[72px] pb-[83px] flex '>

{/* ------------------ left-side */}
              <div>
              {/* ------------- logo */}
              <Link to={'/'} ><img src={footerlogo} alt="footer-logo" /></Link>
              <div className='w-[416px] text-[14px] font-normal font-main text-primary pt-[24px] pb-[40px]'><p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p></div>
             
             <div>

              <h2 className='text-[14px] font-semibold font-main text-main'>Subscribe to our newsletter</h2>
              <div className='w-[416px] mt-[8px] flex justify-between border border-[#D4D7E5] items-center rounded-[6px]'>
                <input className='w-[70%] text-[14px] pl-[8px] outline-none py-[11px] font-normal font-main text-[#B4B7C9]' type="email" placeholder='Your Email' />
                <button className='w-[124px] py-[11px] rounded-r-[6px] text-[14px] font-semibold font-main text-white bg-[#6366F1]'>Subscribe</button>
              </div>

             </div>
            </div>

{/* ---------------- home */}
            <div className='pl-[244px] pr-[126px]'> 
              <ul>
                <li><Link  to={'/'} className='text-[18px] font-semibold font-main text-[#3E4265]'  >Home</Link></li>
                <li><Link to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]'   >Features</Link></li>
                <li><Link to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]'   >Integrations</Link></li>
                <li><Link  to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]'  >Our Clients</Link></li>
                <li><Link  to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]'  >Blog</Link></li>
              </ul>

              <ul className='pt-[40px]'>
                <li><Link to={'/'} className='text-[18px] font-semibold font-main text-[#3E4265]' >Terms & Conditions</Link></li>
                <li><Link to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]' >Privacy Policy</Link></li>
              </ul>
            </div>

{/* --------------- facebook */}
            <div className='pr-[136px]'>
              <ul>
                <li ><Link to={'/'} className='text-[18px] font-semibold font-main text-[#3E4265]' >Facebook</Link></li>
                <li ><Link to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]' >Linkedin</Link></li>
                <li ><Link to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]' >Twitter</Link></li>
                <li ><Link to={'/'} className='text-[18px] py-[8px] font-semibold font-main text-[#3E4265]' >Instragram</Link></li>
              </ul>
            </div>

{/* ----------------- contact */}

            <div>
              <h2  className='text-[18px] font-semibold font-main text-[#3E4265]'>Contact Us</h2>
              <Link to={'/'} className='text-[16px] py-[8px] font-semibold font-main underline text-[#6366F1]' >example@gmail.com</Link>
            </div>





              </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Footer