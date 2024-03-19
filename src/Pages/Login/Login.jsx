import React from 'react'
import './Login.css'
import { Na, NavLinkvLink } from 'react-router-dom'
export default function Login () {
  return (
    <div className='login w-full h-screen pt-28 bg-cover bg-center bg-[url(/src/assets/images/collage-finance-banner-concept1-WIDE.jpg)]'>
      <div className='login-box max-[450px]:w-[95%] w-[400px] md:w-[500px] xl:w-1/3 h-[500px] bg-[#ffffff45] mx-auto rounded-3xl shadow-xl backdrop-blur-md relative'>
        <div className='login-switch w-48 h-14 bg-white mx-auto rounded-[30px] absolute top-[-30px] right-0 left-0 flex text-center items-center font-[switch-font]'>
          <NavLink
            to='/login'
            className={`w-1/2 block text-xl ${isACctive ? 'active' : ''}`}
          >
            ورود
          </NavLink>
          <NavLink
            to='/register'
            className={`w-1/2 block text-xl ${isACctive ? 'active' : ''}`}
          >
            ثبت نام
          </NavLink>
        </div>
        <div className="login-content">
          <h5>ورود</h5>
          <form>
            
          </form>
        </div>
      </div>
    </div>
  )
}
