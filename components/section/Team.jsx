'use client'
import Image from 'next/image'
import React from 'react'
import TeamCard from '../card/TeamCard'
import { motion } from 'framer-motion'
import { FadeInFromBottom, ZoomIn } from '@/animations/Variants'
import { FadeInFromBottomIndexed, FadeInFromLeftIndexed, FadeInFromRightIndexed } from '@/animations/IndexedVariants'

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
                <motion.h1 
                    variants={ZoomIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-[30px] md:text-[48px] text-white text-center font-bold'>
                    Team Member
                </motion.h1>
                <motion.p 
                    variants={FadeInFromBottom}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-[10px] md:text-[16px] text-white text-center max-w-sm mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue
                </motion.p>
            </div>
            <div className='hidden md:grid md:grid-cols-4 md:gap-6'>
                {team?.map((item, index)=>(
                    <motion.div
                        key={index}
                        variants={FadeInFromBottomIndexed}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index + 1}>
                        <TeamCard item={item}/>
                    </motion.div>
                ))}
            </div>
            <div className='md:hidden grid grid-cols-2 gap-6'>
                {team?.map((item, index)=>(
                    <motion.div
                        key={index}
                        variants={index % 2 === 0 ? FadeInFromLeftIndexed : FadeInFromRightIndexed}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index + 1}>
                        <TeamCard item={item}/>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
