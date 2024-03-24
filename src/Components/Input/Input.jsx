import React from 'react'
import './Input.css'
export default function Input ({ type, placeholder, label }) {
  return (
    <>
      <label className='text-white text-lg font-[sans]'>{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className='w-full h-10 rounded-3xl p-3 my-2'
      />
    </>
  )
}
