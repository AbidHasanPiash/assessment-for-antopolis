import Image from 'next/image'
import React from 'react'

export default function CustomerReview() {
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
  return (
    <section className='max-w-7xl mx-auto px-[15px] space-y-[68px] grid md:grid-cols-2'>
        <div>
            <h1 className='text-[30px] md:text-[50px] text-center md:text-start'>
                Customer <span className='text-primary'>Feedback</span>
            </h1>
            <div>
                {cardData?.map(item=>(
                    <div className='space-y-6'>
                        <p>{item?.review}</p>
                        <div className='flex items-center space-x-[18px]'>
                            <img src={item?.img} alt={item?.name} className='h-[54px] md:h-[74px] aspect-square'/>
                            <div>
                                <p>{item?.name}</p>
                                <p>{item?.occupation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Image 
            src={'/images/customer-review/Chef making ok sign over white background.png'}
            alt='chef'
            width={590}
            height={589}
            className='w-[342px] h-[341.42px] md:w-[590px] md:h-[589px]'
        />
    </section>
  )
}
