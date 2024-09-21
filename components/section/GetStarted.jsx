import React from 'react'
import GetStartedInfoCard from '@/components/card/GetStartedInfoCard'

export default function GetStarted() {
    const cardData = [
        {
            icon: '/icons/dish-icon.png',
            title: 'Food Order',
            description: 'Food is the necessity of life. It provides nutrition, sustenance growth to human body.'
        },
        {
            icon: '/icons/dish-icon.png',
            title: 'Promote Restaurant',
            description: 'Food can be classified into cereals, pulses, nuts and oilseeds, vegetable'
        },
    ]
  return (
    <section className='max-w-7xl mx-auto px-[15px]'>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center gap-20'>
            <div className='space-y-4'>
                <h2 className='text-[18px] md:text-[18px] text-primary font-bold'>PIZZA DELIVERY</h2>
                <h1 className='text-[30px] md:text-[55px] font-bold'>
                    <p>Get Started Today!</p>
                    <p className='w-1/4 h-1 bg-primary'/>
                </h1>
                <p className='text-[16px] md:text-[26px]'>Everything you need to build an amazing food restaurant responsive website.</p>
                <p className='text-[14px] md:text-[17px]'>
                    Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu 
                    feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui 
                    blandit praesent luptatum zzril delenit augue duis.
                </p>
                <div className='grid grid-cols-2 gap-10'>
                    {cardData?.map((item, index)=>(
                        <GetStartedInfoCard key={index} item={item}/>
                    ))}
                </div>
            </div>

            <div>
                <div className='text-[18px] flex items-center space-x-2'> <p>About us</p> <p className='w-10 mt-3 h-px bg-primary'/></div>
                <h1 className='text-[30px] md:text-[48px] font-semibold'>Food is an important part Of a balanced Diet</h1>
                <p className='text-[14px] md:text-[16px] py-6 text-justify md:text-start'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit 
                    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  
                    vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <div className='flex items-center justify-between md:justify-start space-x-[14px]'>
                    <button className='w-[86.83px] h-[26.28px] md:w-[195px] md:h-[58px] text-[8.03px] md:text-[18px] rounded-[6px] text-center bg-primary hover:bg-primary-light text-white'>Show more</button>
                    <button className='text-center flex items-center space-x-[13px]'>
                        <div className='w-[26.28px] h-[26.28px] md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center bg-primary hover:bg-green-600'>
                            <img src="/icons/play.png" alt="play" className='w-[12px] h-[12px] md:w-[24px] md:h-[24px]'/>
                        </div>
                        <p className='text-[14px] md:text-[16px]'>Watch video </p>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}