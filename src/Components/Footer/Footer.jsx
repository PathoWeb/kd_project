import React from 'react'
// start Footer css
import './Footer.css'

export default function Footer () {
  return (
    // start footer
    <footer className='footer h-[700px] text-white'>
      {/* start gray circle */}
      <div className='h-full w-full bg-[#bbbbbb] rounded-tr-[40%] rounded-tl-[100%] overflow-hidden'>
        {/* start dark blue circle */}
        <div className=' h-full w-full bg-[#343f5f] rounded-tr-[20%] rounded-tl-[130%]'>
          {/*start  black circle */}
          <div className='h-full w-full bg-[#000000]  rounded-tl-[500%]'>
            {/* start footer introduction and access and map */}
            <div className='footer-content'>
              <div className='footer-content-intro'>
                <img src='' alt='KD-logo' className='footer-intro-img' />
                <p className='footer-intro-text'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
              <div className='footer-content-access'></div>
              <div className='footer-content-map'></div>
            </div>
            {/* start footer address and phone number and media link */}
            <div className='footer-info'>
              <div className='footer-info-content'></div>
              <div className='footer-info-content'></div>
              <div className='footer-info-content'></div>
            </div>
            {/* start footer copy-right */}
            <div className='footer-copy-right'></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
