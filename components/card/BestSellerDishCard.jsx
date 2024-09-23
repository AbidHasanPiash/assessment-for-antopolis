import React from 'react'

export default function BestSellerDishCard({ item }) {
  return (
    <div className='space-y-[11.8px] md:space-y-[30px] bg-white rounded-[7.08px] md:rounded-b-[18px] shadow-md'>
        <img src={item?.img} alt={item?.title} />
        <div className='px-[10px] flex items-start justify-between'>
            <p className='text-[12.19px] md:text-[20px]'>{item?.title}</p>
            <button className='text-[10px] md:text-[16px] bg-[#F03328] text-white px-4 whitespace-nowrap py-1 rounded-full'>Buy Now</button>
        </div>
        <div className='px-[10px] pb-[10px] flex items-center justify-between'>
            <p className='flex items-center space-x-1'>
                {Array.from({ length: item?.star || 0 }).map((_, index) => (
                    <img 
                        key={index}
                        src='/images/best-seller-dish/star.png'
                        className='h-[10px] md:h-[18px] aspect-square'
                    />
                ))}
            </p>
            <p className='text-[12px] md:text-[24px] font-semibold'>${item?.price}</p>
        </div>
    </div>
  )
}
