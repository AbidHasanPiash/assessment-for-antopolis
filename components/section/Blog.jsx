'use client'

import { motion } from 'framer-motion'
import { FadeInFromBottom } from '@/animations/Variants'
import { FadeInFromBottomIndexed, FadeInFromLeftIndexed, FadeInFromRightIndexed } from '@/animations/IndexedVariants'

export default function Blog() {
    const cardData = [
        {
            img: '/images/blog/unsplash_WBMi3TLZdZc.png',
            date: '02 Jan 2022',
            chat: 'Comments (03)',
            title: 'Chocolate Truffle Cake With Honey Flavor',
            description: 'Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.'
        },
        {
            img: '/images/blog/unsplash_WBMi3TLZdZc.png',
            date: '02 Jan 2022',
            chat: 'Comments (03)',
            title: 'Chocolate Truffle Cake With Honey Flavor',
            description: 'Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.'
        },
        {
            img: '/images/blog/unsplash_WBMi3TLZdZc.png',
            date: '02 Jan 2022',
            chat: 'Comments (03)',
            title: 'Chocolate Truffle Cake With Honey Flavor',
            description: 'Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.'
        },
    ]
  return (
    <section className='max-w-7xl mx-auto px-[15px] space-y-10'>
        <div>
            <motion.h1 
                variants={FadeInFromBottom}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='text-center text-[30px] md:text-[55px]'>
                Latest news & Blog
            </motion.h1>
            <motion.p 
                variants={FadeInFromBottom}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='text-center text-[14px] md:text-[18px] opacity-80 max-w-xl mx-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius sed pharetra dictum neque massa congue
            </motion.p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {cardData.map((item, index)=>(
                <motion.div 
                    key={index}
                    variants={FadeInFromBottomIndexed}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index + 1}
                    className='rounded-[20px] md:p-[22px] p-[9.56px] space-y-[9.56px] shadow-md'>
                    <img src={item?.img} alt={item?.title} className='w-full h-[239.18px] md:h-[313px] object-cover rounded-[4.58px] md:rounded-[6px] aspect-square'/>
                    <div className='p-2 space-y-[9.56px]'>
                        <div className='flex items-center space-x-4'>
                            <div className='flex items-center space-x-2'>
                                <img src="/icons/Calendar.png" alt="date" className='h-[18.34px] md:h-[24px] aspect-square'/>
                                <p className='text-[12.23px] md:text-[16px] opacity-70'>{item?.date}</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img src="/icons/Chats.png" alt="chat" className='h-[18.34px] md:h-[24px] aspect-square'/>
                                <p className='text-[12.23px] md:text-[16px] opacity-70'>{item?.chat}</p>
                            </div>
                        </div>
                        <h2 className='text-[15.28px] md:text-[20px] font-bold'>{item?.title}</h2>
                        <p className='text-[12.23px] md:text-[16px] opacity-80'>{item?.description}</p>
                        <button className='text-[10.7px] md:text-[14px] flex items-center space-x-2 hover:text-primary focus:text-primary'>
                            <span>Read more</span>
                            <img src="/icons/ArrowRight.png" alt="arrow" className='h-[15.28px] md:h-[20px]'/>
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}
