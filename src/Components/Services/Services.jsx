import React from 'react'
import './Services.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ServicesCard from '../ServicesCard/ServicesCard'
export default function Services () {
  return (
    <div className='services my-36'>
      <SectionTitle title='خدمات آکادمی' />

      <div className='bg-rectangle w-full h-fit bg-[#343f5f] rounded-3xl py-7'>
        <div className='services-cards flex justify-around w-full h-full mt-3 flex-wrap items-center gap-6'>
          <ServicesCard
            title='دوره های آموزشی'
            caption='                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله'
          />
          <ServicesCard
            title='دوره های آموزشی'
            caption='                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله'
          />
          <ServicesCard
            title='دوره های آموزشی'
            caption='                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله'
          />
        </div>
      </div>
    </div>
  )
}
