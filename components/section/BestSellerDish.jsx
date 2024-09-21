import React from 'react'
import BestSellerDishCard from '../card/BestSellerDishCard'

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
        <section className='max-w-7xl mx-auto px-[15px] space-y-[68px]'>
            <div className='text-center space-y-[18px]'>
                <h1 className='text-[30px] md:text-[55px]'>Our best Seller Dishes</h1>
                <p className='text-[16px] md:text-[30px] opacity-80'>
                    Our fresh garden salad is a light and refreshing option. 
                    It features a mix of crisp lettuce, juicy tomatoe all tossed 
                    in your choice of dressing.
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-[30px]'>
                {cardData?.map(item=>(
                    <BestSellerDishCard key={item?.title} item={item}/>
                ))}
            </div>
        </section>
    )
}
