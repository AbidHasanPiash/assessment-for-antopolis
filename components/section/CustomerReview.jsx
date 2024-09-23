'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FadeInFromBottom, FadeInFromTop } from '@/animations/Variants';

export default function CustomerReview() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardData = [
        {
            name: 'Tayyab Sohail',
            occupation: 'UX/UI Designer',
            img: '/images/customer-review/c1.png',
            review: 'I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.'
        },
        {
            name: 'Nafiz Salim',
            occupation: 'Graphic Designer',
            img: '/images/customer-review/c2.png',
            review: 'I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.'
        },
        {
            name: 'Tayyab Iqbal',
            occupation: 'Developer',
            img: '/images/customer-review/c3.png',
            review: 'I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.'
        },
    ]
    const handleDotClick = (index) => {
        setActiveIndex(index); // Change the active review based on the dot clicked
    };
    return (
        <section className='max-w-7xl mx-auto px-[15px] space-y-[68px] flex flex-col-reverse md:grid md:grid-cols-2 place-items-center'>
            <motion.div 
                variants={FadeInFromTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='space-y-10 mb-20'>
                <h1 className='text-[30px] md:text-[50px] text-center md:text-start'>
                    Customer <span className='text-primary'>Feedback</span>
                </h1>
                <div>
                    {/* Display only the active review */}
                    <div className='space-y-6'>
                        <p className='text-justify md:text-start text-[14px] md:text-[25px]'>{cardData[activeIndex]?.review}</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-[18px]'>
                                <img
                                    src={cardData[activeIndex]?.img}
                                    alt={cardData[activeIndex]?.name}
                                    className='h-[54px] md:h-[74px] object-cover'
                                />
                                <div>
                                    <p className='text-[20px] md:text-[24px] text-primary font-semibold'>{cardData[activeIndex]?.name}</p>
                                    <p className='text-[14px] md:text-[18px]'>{cardData[activeIndex]?.occupation}</p>
                                </div>
                            </div>
                            {/* Dots for navigation */}
                            <div className='flex justify-center space-x-2 mt-4'>
                                {cardData.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                variants={FadeInFromBottom}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                <Image
                    src={'/images/customer-review/Chef making ok sign over white background.png'}
                    alt='chef'
                    width={590}
                    height={589}
                    className='w-[342px] h-[341.42px] md:w-[590px] md:h-[589px] object-cover'
                />
            </motion.div>
        </section>
    )
}
