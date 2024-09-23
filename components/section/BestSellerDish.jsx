'use client'
import React from 'react'
import BestSellerDishCard from '../card/BestSellerDishCard'
import { motion } from 'framer-motion'
import { FadeInFromBottom } from '@/animations/Variants'
import { FadeInFromBottomIndexed, FadeInFromLeftIndexed, FadeInFromRightIndexed } from '@/animations/IndexedVariants'

export default function BestSellerDish() {
    const cardData = [
        {
            img: '/images/best-seller-dish/1.png',
            title: 'Breakfast Food',
            price: 230,
            star: 5,
        },
        {
            img: '/images/best-seller-dish/2.png',
            title: 'Health Breakfast',
            price: 230,
            star: 5,
        },
        {
            img: '/images/best-seller-dish/3.png',
            title: 'Breakfast Food',
            price: 230,
            star: 5,
        },
        {
            img: '/images/best-seller-dish/4.png',
            title: 'Breakfast Food',
            price: 230,
            star: 5,
        },
        {
            img: '/images/best-seller-dish/5.png',
            title: 'Breakfast Food',
            price: 230,
            star: 5,
        },
        {
            img: '/images/best-seller-dish/6.png',
            title: 'Breakfast Food',
            price: 230,
            star: 5,
        },
    ]
    return (
        <section className='max-w-7xl mx-auto px-[15px] space-y-[40px]'>
            <div className='text-center space-y-[18px]'>
                <motion.h1 
                    variants={FadeInFromBottom}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-[30px] md:text-[55px]'>
                    Our best Seller Dishes
                </motion.h1>
                <motion.p 
                    variants={FadeInFromBottom}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className='text-[14px] md:text-[18px] opacity-80 max-w-xl mx-auto'>
                    Our fresh garden salad is a light and refreshing option. 
                    It features a mix of crisp lettuce, juicy tomatoe all tossed 
                    in your choice of dressing.
                </motion.p>
            </div>
            <div className='hidden md:grid md:grid-cols-3 md:gap-6'>
                {cardData?.map((item, index)=>(
                    <motion.div 
                        key={index}
                        variants={FadeInFromBottomIndexed}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index + 1}>
                        <BestSellerDishCard item={item}/>
                    </motion.div>
                ))}
            </div>
            <div className='md:hidden grid grid-cols-2 gap-6'>
                {cardData?.map((item, index)=>(
                    <motion.div 
                        key={index}
                        variants={index % 2 === 0 ? FadeInFromLeftIndexed : FadeInFromRightIndexed}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index + 1}>
                        <BestSellerDishCard item={item}/>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
