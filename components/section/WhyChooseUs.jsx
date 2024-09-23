'use client'
import React from 'react'
import WhyChooseUsCard from '../card/WhyChooseUsCard'
import { motion } from 'framer-motion'
import { FadeInFromLeft, FadeInFromRight } from '@/animations/Variants'
import { FadeInFromBottomIndexed } from '@/animations/IndexedVariants'

export default function WhyChooseUs() {
    const cardData = [
        {
            icon: '/images/why-choose-us/01.png',
            title: 'Convenient and Reliable',
            description: 'Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.'
        },
        {
            icon: '/images/why-choose-us/02.png',
            title: 'Variety of Options',
            description: 'From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.'
        },
        {
            icon: '/images/why-choose-us/03.png',
            title: 'Eat Burger',
            description: 'Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.'
        },
    ]
  return (
    <section className='max-w-7xl mx-auto px-[15px]'>
        <div className='grid md:grid-cols-2 place-items-center gap-20'>
            <motion.div
                variants={FadeInFromLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/images/why-choose-us/image 28.png" alt="why-cose-us" className='w-full aspect-square md:w-[578px] md:h-[574px] rounded-[29px] object-cover'/>
            </motion.div>
            <div className='space-y-[35px]'>
                <motion.h1 
                    variants={FadeInFromRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-[30px] md:text-[50px] text-center md:text-start'>
                    Why People Choose us?
                </motion.h1>
                <div className='space-y-[41px]'>
                    {cardData?.map((item, index)=>(
                        <motion.div
                            key={item}
                            variants={FadeInFromBottomIndexed}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index + 1}>
                            <WhyChooseUsCard item={item}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
