import React from 'react'
// start Footer css
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export default function Footer () {
  return (
    // start footer
    <footer className='footer h-[500px] max-[780px]:h-[600px] max-[450px]:h-[800px] text-white'>
      {/* start gray circle */}
      <div className='bg-circle'>
        <div className='footer-contents absolute z-10 w-full h-full text-center mt-12 max-[780px]:mt-28 max-[450px]:mt-32'>
          {/* footer about me and quick access and map */}
          <div className='footer-content flex items-center flex-wrap justify-around max-[780px]:flex-row-reverse'>
            {/* footer about me */}
            <div className='footer-content-intro w-60'>
              <p className='footer-intro-text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
              </p>
            </div>
            {/* footer quick access */}
            <div className='footer-content-access '>
              <h5 className='mb-3 text-[#006fca]'>دسترسی سریع</h5>
              <div className='footer-access flex items-center'>
                <ul className='footer-access-lists ml-5'>
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
            </div>
            {/* start footer introduction and access and map */}
            <div className='footer-content-map rounded-full border-solid border-2 border-gray-500 w-64 h-64 max-[780px]:hidden'>
              <div className='footer-content-map rounded-full border-solid border-2 border-gray-500 w-60 h-60 mx-auto mt-1'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25895.92562736867!2d51.490709948913434!3d35.775604711773184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0469fe133fb5%3A0xd63ca3192d82b662!2z2b7Yp9iz2K_Yp9ix2KfZhtiMINmF2YbYt9mC2Ycg27TYjCDYqtmH2LHYp9mG2Iwg2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2s!4v1710194913432!5m2!1sfa!2s'
                  className='w-full h-full rounded-full border-none'
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
          {/* start footer address and phone number and media link */}
          <div className='footer-info flex justify-around items-center flex-wrap my-10 gap-5'>
            {/* footer address */}
            <div className='footer-info-content w-50 flex justify-around items-center'>
              <FaLocationDot className=' text-2xl text-[#006fca]' />
              <p className='footer-address'>
                تهران - ونک - گاندی جنوبی - کوچه بیستم
              </p>
            </div>
            {/* footer phone number */}
            <div className='footer-info-content flex justify-around items-center'>
              <span>
                <FaPhoneAlt className='text-2xl text-[#006fca]' />
              </span>
              <p className='footer-phone mr-2'>09032323233</p>
            </div>
            {/* footer social media link */}
            <div className='footer-info-content flex justify-around items-center '>
              <Link to='/' className='footer-social'>
                <FaTelegramPlane className=' text-2xl text-[#006fca]' />
              </Link>
              <Link to='/' className='footer-social'>
                <FaLinkedinIn className=' text-2xl text-[#006fca]' />
              </Link>
              <Link to='/' className='footer-social'>
                <RiInstagramFill className=' text-2xl text-[#006fca]' />
              </Link>
            </div>
          </div>
          {/* start footer copy-right */}
          <div className='footer-copy-right w-full flex justify-around items-center flex-wrap'>
            <span>طراحی شده با ❤ در ...</span>
            <span>تمامی حقوق این وبسایت برای مجموعه KD محفوظ است</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
