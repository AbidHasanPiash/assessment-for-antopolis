'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const [activeItem, setActiveItem] = useState(0);

    const carousel = [
        {
            id: '1',
            img: '/images/foods/2a60ca43ad8b3a02726b467a09347c25-removebg-preview 2.png',
            bg: 'bg-primary',
            bgSecond: 'bg-primary-light'
        },
        {
            id: '2',
            img: '/images/foods/5f8ad2f4c7f31fbf2b60eb4427f4e38d-removebg-preview 2.png',
            bg: 'bg-variant-1',
            bgSecond: 'bg-variant-1-light'
        },
        {
            id: '3',
            img: '/images/foods/8ba2f727df2b40a33c40dbaa09ff8ddf-removebg-preview 2.png',
            bg: 'bg-variant-2',
            bgSecond: 'bg-variant-2-light'
        },
        {
            id: '4',
            img: '/images/foods/c3b35a4e4d28be80e17f19bd30ae57f0-removebg-preview 2.png',
            bg: 'bg-variant-3',
            bgSecond: 'bg-variant-3-light'
        },
    ];

    const activeBg = carousel[activeItem].bg;
    const activeBgSecond = carousel[activeItem].bgSecond;
    const totalItems = carousel.length;
    const anglePerItem = 360 / totalItems; // Calculate angle between each item

    // Rotating the circular layout based on the active item
    const circleRotation = {
        visible: (i) => ({
            rotate: i * anglePerItem, // Rotate the circle based on the active index
            transition: { duration: 1 },
        })
    };

    return (
        <section className='w-screen h-screen flex flex-col'>
            <div className={`relative w-full h-full flex flex-grow ${activeBg} rounded-b-2xl overflow-hidden`}>
                <div className={`absolute -top-32 -left-40 h-full aspect-square ${activeBgSecond} rounded-full`} />
                <div className="z-10 p-10 text-white">
                    <h2 className="text-2xl">RESTAURANT</h2>

                    {/* Controls */}
                    <div className="z-10 p-10">
                        <h1 className="text-4xl">BREAKFAST</h1>
                        <p>
                            Breakfast, often referred to as the 'most important meal of the day', provides essential nutrients to kick start our day. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.
                        </p>

                        {/* Buttons to change active item */}
                        <div className="flex space-x-4 mt-6">
                            {carousel.map((item, index) => (
                                <button
                                    key={item.id}
                                    className={`w-16 h-16 md:w-32 md:h-32 focus:outline-none ${index === activeItem ? 'ring-4 ring-yellow-500' : ''}`}
                                    onClick={() => setActiveItem(index)}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.id}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover items-center justify-center"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Rotating Circle Container */}
                    <div className={`absolute -bottom-72 -right-72 h-full aspect-square ${activeBgSecond} rounded-full`}>
                        <motion.div
                            className="h-full aspect-square rounded-full flex justify-center items-center"
                            custom={activeItem}
                            variants={circleRotation}
                            initial="visible"
                            animate="visible"
                        >
                            {/* Images positioned in a circular layout */}
                            {carousel.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className={`absolute aspect-square rounded-full overflow-hidden w-1/2`}
                                    style={{
                                        transform: `rotate(-${index * anglePerItem}deg) translate(300px, 100px) rotate(${index * anglePerItem}deg)`, // Shift the layout to the 10:30 position
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.id}
                                        width={240}
                                        height={240}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='w-full h-16'/>
        </section>
    );
}
