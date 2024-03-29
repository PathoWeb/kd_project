import React from 'react'
import './Login.css'
import { Link, NavLink } from 'react-router-dom'
import Input from '../../Components/Input/Input'
export default function Login () {
  return (
    <>
      <div className='login font-[switch-font] w-full h-screen pt-28 bg-cover bg-center bg-[url(/src/assets/images/login-bg.jpg)]'>
        <div className='login-box py-10 max-[450px]:w-[95%] w-[400px] md:w-[350px] xl:w-1/4 h-fit bg-[#ffffff45] mx-auto rounded-3xl shadow-xl backdrop-blur-md relative'>
          <div className='login-switch overflow-hidden w-48 h-14 bg-white mx-auto rounded-[30px] absolute top-[-30px] right-0 left-0 flex text-center items-center'>
            <NavLink
              to='/login'
              className={`w-1/2 h-full text-white text-xl bg-teal-950 pt-3`}
            >
              ورود
            </NavLink>
            <NavLink to='/register' className={`w-1/2 h-full text-xl pt-3`}>
              ثبت نام
            </NavLink>
          </div>
          <div className='login-content mx-8 text-white'>
            <h5 className='text-4xl text-center'>ورود</h5>
            <form className='w-full flex flex-col justify-center items-start mt-5'>
              <Input type='text' placeholder='09121212121' label='شماره تماس' />
              <Input type='password' placeholder='******' label='رمز عبور' />
              <span className='text-xs'>
                <Link to='/forget'>رمز عبور خود را فراموش کرده اید؟</Link>
              </span>
              <button class='cursor-pointer font-semibold overflow-hidden relative border border-white group px-6 py-2 rounded-xl mx-auto my-5'>
                <span class='relative z-10 group-hover:text-black text-base duration-500'>
                  ورود به سایت
                </span>
                <span class='absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500'></span>
                <span class='absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500'></span>
              </button>
            </form>
            <span className='w-full text-sm font-[sans]'>
              ورود و ثبت نام در سایت به معنی پذیرفتن قوانین می باشد .
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
