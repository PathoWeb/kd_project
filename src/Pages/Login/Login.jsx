import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import Input from '../../Components/Input/Input'
export default function Login () {
  return (
    <div className='login font-[switch-font] w-full h-screen pt-28 bg-cover bg-center bg-[url(/src/assets/images/collage-finance-banner-concept1-WIDE.jpg)]'>
      <div className='login-box pt-11 max-[450px]:w-[95%] w-[400px] md:w-[350px] xl:w-1/4 h-[500px] bg-[#ffffff45] mx-auto rounded-3xl shadow-xl backdrop-blur-md relative'>
        <div className='login-switch w-48 h-14 bg-white mx-auto rounded-[30px] absolute top-[-30px] right-0 left-0 flex text-center items-center '>
          <NavLink to='/login' className={`w-1/2 block text-xl`}>
            ورود
          </NavLink>
          <NavLink to='/register' className={`w-1/2 block text-xl`}>
            ثبت نام
          </NavLink>
        </div>
        <div className='login-content mx-8'>
          <h5 className='text-white text-4xl text-center'>ورود</h5>
          <form className='w-full flex flex-col justify-center items-start mt-5'>
            <Input type='text' placeholder='09121212121' label='شماره تماس' />
            <Input type='password' placeholder='******' label='رمز عبور' />
          </form>
        </div>
      </div>
    </div>
  )
}
