import React from 'react'

export default function WhyChooseUsCard({ item }) {
  return (
    <div className='flex items-center p-[18px] rounded-[18px] space-x-[26px] shadow'>
        <div className='h-[90px] aspect-square rounded-full shadow-md flex items-center justify-center'>
            <img src={item?.icon} alt={item?.title} className='w-[45.92px] h-[44.08px] object-cover'/>
        </div>
        <div>
            <h2 className='text-[24px] md:text-[31px] font-semibold'>{item?.title}</h2>
            <p className='text-[14px] md:text-[20px]'>{item?.description}</p>
        </div>
    </div>
  )
}
