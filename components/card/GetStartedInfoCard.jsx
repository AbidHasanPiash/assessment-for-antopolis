import React from 'react'

export default function GetStartedInfoCard({item}) {
  return (
    <div className='shadow-md md:shadow-none space-y-4 p-2 rounded'>
        <img src={item?.icon} alt={item?.title} className='w-[55px] h-[55px] md:w-[100px] md:h-[100px]'/>
        <h2 className='text-[10px] md:text-[20px] font-bold'>{item?.title}</h2>
        <p className='text-[8px] md:text-[17px]'>{item?.description}</p>
    </div>
  )
}
