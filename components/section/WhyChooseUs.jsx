import React from 'react'
import WhyChooseUsCard from '../card/WhyChooseUsCard'

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
            <div>
                <img src="/images/why-choose-us/image 28.png" alt="why-cose-us" className='w-full aspect-square md:w-[578px] md:h-[574px] rounded-[29px] object-cover'/>
            </div>
            <div className='space-y-[35px]'>
                <h1 className='text-[30px] md:text-[50px] text-center md:text-start'>Why People Choose us?</h1>
                <div className='space-y-[41px]'>
                    {cardData?.map(item=>(
                        <WhyChooseUsCard key={item} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
