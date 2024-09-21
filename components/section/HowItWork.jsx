import React from 'react'

export default function HowItWork() {
    const cardData = [
        {
            img: '/images/how-it-work/01.png',
            title: 'Quality Food',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
        },
        {
            img: '/images/how-it-work/02.png',
            title: 'Quality Food',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
        },
        {
            img: '/images/how-it-work/03.png',
            title: 'Quality Food',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
        },
        {
            img: '/images/how-it-work/04.png',
            title: 'Quality Food',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
        },
    ]
  return (
    <section className='max-w-7xl mx-auto px-[15px] space-y-10'>
        <h1 className='text-center text-[30px] md:text-[61px]'>How does it work</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {cardData.map((item, index)=>(
                <div key={index} className='border rounded-[20px] md:p-[22px] p-[9.56px] space-y-[9.56px] text-center flex flex-col items-center justify-center'>
                    <div className='space-y-[10.55px] md:space-y-[20px] flex flex-col items-center justify-center'>
                        <img src={item?.img} alt={item?.title} className='h-[53.09px] md:h-[100px] aspect-square'/>
                        <h2 className='text-[15.93px] md:text-[30px] font-semibold'>{item?.title}</h2>
                    </div>
                    <p className='text-[10.62px] md:text-[20px] opacity-80'>{item?.description}</p>
                    <button className='text-[10.55px] md:text-[20px] hover:text-primary focus:text-primary'>Learn More</button>
                </div>
            ))}
        </div>
    </section>
  )
}
