import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularCoursesImg } from './../assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { rectangle584 } from './../assets'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const cards = [
    {
        "technology": "Technology",
        "img": popularCoursesImg,
        "description": "ERP Systems are very Important for Companies",
        "author": "CampsMaze",
        "price": "25.50"
    },
    {
        "technology": "Technology",
        "img": popularCoursesImg,
        "description": "ERP Systems are very Important for Companies",
        "author": "CampsMaze",
        "price": "25.50"
    },
    {
        "technology": "Technology",
        "img": popularCoursesImg,
        "description": "ERP Systems are very Important for Companies",
        "author": "CampsMaze",
        "price": "25.50"
    },
    {
        "technology": "Technology",
        "img": popularCoursesImg,
        "description": "ERP Systems are very Important for Companies",
        "author": "CampsMaze",
        "price": "25.50"
    },
    {
        "technology": "Technology",
        "img": popularCoursesImg,
        "description": "ERP Systems are very Important for Companies",
        "author": "CampsMaze",
        "price": "25.50"
    },
    {
        "technology": "Technology",
        "img": popularCoursesImg,
        "description": "ERP Systems are very Important for Companies",
        "author": "CampsMaze",
        "price": "25.50"
    },
]

const Courses = () => {
    return (
        <section className="ele text-white">

            <div className=" py-8 px-10 md:px-16 lg:px-20 xl:px-24 flex items-center justify-between">
                <div className="mb-4">
                    <h2 className="text-secondary">Always on Top</h2>
                    <span className="text-white text-3xl">Popular Courses</span>
                </div>
                <div className="">
                    <button className="btn-outline border border-white text-white hover:bg-white hover:text-primary">View All Courses</button>
                </div>
            </div>

            <div className='flex justify-center items-center p-8 px-22'>


                <Swiper
                    slidesPerView='auto'
                    loop={true}
                    spaceBetween={3}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 1, // Adjust this value for smaller screens
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5, // Adjust this value for medium screens
                        },
                        1240: {
                            slidesPerView: 3,
                            spaceBetween: 10, // Adjust this value for larger screens
                        },
                    }}
                    navigation={true}
                    pagination={{

                        dynamicBullets: true,
                    }}

                    modules={[Autoplay, Navigation, Pagination]}
                >

                    {cards.map((card, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12 ">
                                    <div>
                                        <img src={card.img} className='rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                        <p className="flex items-center description">🟢 {card.technology}</p>
                                        <h2 className='description name font-bold'>{card.description}</h2>
                                        <div className="mt-4 flex items-center">
                                            <p className="description ml-2">{card.author}</p>
                                            <strong className='description-2 ml-48'>${card.price}</strong>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </section >
    )
}

export default Courses;

