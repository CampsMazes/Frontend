import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { image18 } from './../assets'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Counsellor() {
    return (
        <div>
            <section class="py-1 xl:pt-12 xl:pb-16 overflow-hidden">
                <div class="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                    <p class="relative mb-4">
                        <strong class="text-4xl">Expert Counsellor</strong><br />
                        <strong class="text-secondary">WE are here to help you</strong>
                    </p>
                </div>
                <div className='slide-container-2' style={{ maxWidth: 'calc(100% - 80px)', }}>

                    <div className="swiper-container" style={{ maxWidth: 'calc(100% - 100px)', marginLeft: '50px' }}>
                        <Swiper
                            slidesPerView={3} // Set the number of slides per view to 3
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1, // Ensure that 3 slides are displayed for all breakpoints
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2, // Ensure that 3 slides are displayed for all breakpoints
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3, // Ensure that 3 slides are displayed for all breakpoints
                                    spaceBetween: 50,
                                },
                            }}

                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {/* Your slide content here */}

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card swiper-slide" style={{ border: '1px solid #D9D9D9' }}>
                                        <div className="image-content">
                                            <div>
                                                <img src={image18} alt="" className="course-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">

                                            <strong>Anthony Wade</strong>
                                            <p className="flex items-center text-secondary">Expert in Digital Marketing</p>
                                            <p className="flex mt-2 items-center description">
                                                Lorem ipsum dolor sit amet ipsum<br />
                                                Lorem ipsum dolor sit amet.<br />
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                            <hr className='mt-2' />
                                            <div className="mt-4 flex items-center">
                                                <p className="ml-4 font-semibold text-primary">Book Now</p>
                                                <p className='text-secondary ml-36'>View Profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section >
        </div>
    )
}