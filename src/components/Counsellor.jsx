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
            <section class="py-1 xl:pt-12 xl:pb-16 overflow-hidden swiper-navBtn">
                <div class="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                    <p class="relative mb-4">
                        <strong class="text-4xl text-ultra">Expert Counsellor</strong><br />
                        <strong class="text-secondary">WE are here to help you</strong>
                    </p>
                </div>
                <div className='slide-container-2' style={{ maxWidth: 'calc(100% - 80px)', }}>

                    <div className="swiper-container" style={{ maxWidth: 'calc(100% - 100px)', marginLeft: '50px' }}>
                        <Swiper
                            slidesPerView={3} // Set the number of slides per view to 3
                            spaceBetween={10}
                            loop={true}
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
                                    spaceBetween: 10, // Adjust this value for medium screens
                                },
                                1424: {
                                    slidesPerView: 3,
                                    spaceBetween: 3, // Adjust this value for larger screens
                                },
                            }}

                            navigation={true}
                            pagination={{
                            
                                dynamicBullets: true,
                            }}
                           
                            modules={[Autoplay, Navigation, Pagination]}
                            className="mySwiper"
                        >
                            {/* Your slide content here */}

                            <SwiperSlide>
                                <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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


                            </SwiperSlide>

                            <SwiperSlide>
                                
                             <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>

                            <SwiperSlide>
                                 <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                    <div>
                                        <img src={image18} className='mt-1  rounded-lg' alt="i1" />
                                    </div>
                                    <div className='bg-white p-4 mt-0.25 rounded-lg' style={{ border: '1px solid #D9D9D9' }}>
                                        <strong className="flex text-3xl items-center description">Anthony Wade</strong>
                                        <h2 className='text-secondary font-bold'>Expert in Digital Marketing</h2>
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section >
        </div>
    )
}