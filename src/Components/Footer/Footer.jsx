import React from 'react'
// start Footer css
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    // start footer
    <footer className='footer h-[700px] text-white'>
      {/* start gray circle */}
      <div className='h-full w-full bg-[#bbbbbb] rounded-tr-[40%] rounded-tl-[100%] overflow-hidden'>
        {/* start dark blue circle */}
        <div className=' h-full w-full bg-[#343f5f] rounded-tr-[20%] rounded-tl-[130%]'>
          {/*start  black circle */}
          <div className='h-full w-full bg-[#181810]  rounded-tl-[500%]'>
            {/* start footer introduction and access and map */}
            <div className='footer-content'>
              <div className='footer-content-intro'>
                <p className='footer-intro-text'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
              <div className='footer-content-access'>
                <h5>دسترسی سریع</h5>
                <ul className='footer-access-lists'>
                  <li className='footer-access-link'>
                    <Link to='/' className='access-link'>
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className='footer-access-link'>
                    <Link to='/' className='access-link'>
                      مقالات
                    </Link>
                  </li>
                  <li className='footer-access-link'>
                    <Link to='/' className='access-link'>
                      فروشگاه
                    </Link>
                  </li>
                  <li className='footer-access-link'>
                    <Link to='/' className='access-link'>
                      آموزش
                    </Link>
                  </li>
                  <li className='footer-access-link'>
                    <Link to='/' className='access-link'>
                      درباره ما
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer-content-map rounded-full border-solid border-2 border-gray-500 w-80 h-80'></div>
            </div>
            {/* start footer address and phone number and media link */}
            <div className='footer-info'>
              <div className='footer-info-content'>
                <p className='footer-address'></p>
              </div>
              <div className='footer-info-content'>
                <p className='footer-phone'></p>
              </div>
              <div className='footer-info-content'>
                <span className='footer-social'></span>
                <span className='footer-social'></span>
                <span className='footer-social'></span>
              </div>
            </div>
            {/* start footer copy-right */}
            <div className='footer-copy-right'></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
