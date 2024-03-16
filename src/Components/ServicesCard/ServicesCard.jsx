import React from 'react'
import './ServicesCard.css'
export default function ServicesCard ({ title, caption, image }) {
  return (
    <div className='services-card border-2 border-[#616a82] border-solid rounded-[20%] w-[300px] h-full p-2 bg-[#c9c5c7] text-center'>
      <img
        src='/src/assets/images/2150970182.jpg'
        alt='image'
        className='services-card-image border-2 border-[#616a82] border-solid rounded-[25%] w-full h-full'
      />
      <h5 className='services-card-title text-2xl'>{title}</h5>
      <p className='services-card-caption px-3 mt-3'>{caption}</p>
    </div>
  )
}
