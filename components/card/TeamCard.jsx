import React from 'react'

export default function TeamCard({ item }) {
    return (
        <div className='w-full h-[206px] md:h-[398px] bg-cover shadow-md flex items-end justify-end' style={{ backgroundImage: `url(${item?.img})` }}>
            <div className='h-[45.55px] md:h-[88px] w-full bg-white flex flex-col items-center justify-center'>
                <p className='text-[10.35px] md:text-[20px] font-semibold'>{item?.name}</p>
                <p className='text-[8.28px] md:text-[16px] opacity-80'>{item?.designation}</p>
            </div>
        </div>
    )
}
