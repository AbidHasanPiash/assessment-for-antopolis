import React from 'react'

export default function Footer() {
    const contact = [
        {
            icon: '/icons/MapPin.png',
            text: '3517 W. Gray St. Utica, Pennsylvania 57867'
        },
        {
            icon: '/icons/Phone.png',
            text: '(480) 555-0103'
        },
        {
            icon: '/icons/EnvelopeSimpleOpen.png',
            text: 'M.Alyaqout@4house.Co'
        },
        {
            icon: '/icons/Clock.png',
            text: 'Sun - Sat / 10:00 AM - 8:00 PM'
        },
    ]
    const links = [
        "About us",
        "Contact Us",
        "Our Menu",
        "Team",
        "FAQ"
    ]
    const instagram = [
        '/images/footer/1.png',
        '/images/footer/2.png',
        '/images/footer/3.png',
        '/images/footer/4.png',
        '/images/footer/5.png',
        '/images/footer/6.png',
    ]
  return (
    <footer className='bg-primary text-white'>
        <div className='max-w-7xl mx-auto px-[15px] py-20 flex flex-col md:flex-row md:flex-wrap justify-between gap-4'>
            <div className='space-y-4'>
                <p className='text-[24px] md:text-[32px]'>RESTAURANT</p>
                <p className='text-[18px] md:text-[18px] max-w-xs opacity-90'>Subscribe our newsletter and get discount 25%off</p>
                <div className='h-[40px] bg-white text-black rounded-md overflow-hidden flex items-center justify-between'>
                    <input type="text" placeholder='Enter Your Email' className='px-2 outline-none bg-transparent'/>
                    <button className='h-full aspect-square flex items-center justify-center bg-primary-light'><img src="/icons/Send Button.png" alt="send" /></button>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='text-[18px] md:text-[20px]'>Contact us</p>
                <ul className='space-y-2'>
                    {contact.map((item, index)=>(
                        <li key={index} className='flex items-center space-x-2'>
                            <img src={item?.icon} alt="map" className='w-[20px] md:w-[24px]'/>
                            <p className='text-[14px] md:text-[18px]'>{item?.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='space-y-4'>
                <p className='text-[18px] md:text-[20px]'>Links</p>
                <ul className='md:space-y-2 flex flex-wrap gap-4 md:flex-col'>
                    {links.map((item, index)=>(
                        <li key={index} className='flex items-center space-x-2'>
                            <p className='text-[14px] md:text-[18px] hover:underline cursor-pointer'>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='space-y-4 hidden md:block'>
                <p className='text-[18px] md:text-[20px]'>Instagram Gallery</p>
                <ul className='grid grid-cols-3 gap-2'>
                    {instagram.map((item, index)=>(
                        <li key={index}>
                            <img src={item} alt="map" className='w-[108px] aspect-square'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='bg-primary-light'>
            <div className='max-w-7xl h-[53px] md:h-[68px] mx-auto px-[15px] text-[12px] md:text-[16px] opacity-80 flex items-center justify-center md:justify-between'>
                <p>Copyright © 2024. All rights reserved</p>
                <ul className='hidden md:flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>Privacy Policy</li>
                    <li className='hover:underline cursor-pointer'>Term of Use</li>
                    <li className='hover:underline cursor-pointer'>Partner</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
