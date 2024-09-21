import Image from 'next/image'
import React from 'react'
import TeamCard from '../card/TeamCard'

export default function Team() {
    const team = [
        {
            name: 'Mark Henry',
            designation: 'Owner',
            img: '/images/team/unsplash_v3OlBE6-fhU.png'
        },
        {
            name: 'Mark Henry',
            designation: 'Chef',
            img: '/images/team/unsplash_v3OlBE6-fhU.png'
        },
        {
            name: 'Mark Henry',
            designation: 'Founder',
            img: '/images/team/unsplash_v3OlBE6-fhU.png'
        },
        {
            name: 'Mark Henry',
            designation: 'Specialist',
            img: '/images/team/unsplash_v3OlBE6-fhU.png'
        },
    ]
  return (
    <section className='relative mb-[450px] md:mb-[300px]'>
        <Image src={'/images/team/Bg.png'} width={1920} height={460} className='h-[199.33px] md:h-[460px] w-full object-cover'/>
        <div className='absolute top-8 md:top-20 left-1/2 right-1/2 -translate-x-1/2 w-full max-w-7xl px-[15px] space-y-8 md:space-y-20'>
            <div>
                <h1 className='text-[30px] md:text-[48px] text-white text-center font-bold'>Team Member</h1>
                <p className='text-[10px] md:text-[16px] text-white text-center max-w-sm mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {team?.map(item=>(
                    <TeamCard key={item?.name} item={item}/>
                ))}
            </div>
        </div>
    </section>
  )
}
