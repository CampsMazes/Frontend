import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { rectangle584 } from './../assets'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { test } from './../assets'
export default function Feedback() {
    return (
        <div>
            <section className="bg-light mt-12 py-1 pt-12 pb-16 overflow-hidden">
                <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                    <p className="relative mb-4">
                        <strong className="text-4xl">Students Feedback</strong><br />
                        <strong className="text-secondary">We have quality partners in variety of destinations around the
                            globe.</strong>
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
                                0:{
                                    slidesPerView: 1,
                                    spaceBetween: 1, 
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 1, // Adjust this value for smaller screens
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10, // Adjust this value for medium screens
                                },
                                1324: {
                                    slidesPerView: 3,
                                    spaceBetween: 3, // Adjust this value for larger screens
                                },
                            }}
                            navigation={true}
                            modules={[Autoplay,Navigation]}
                            className="mySwiper"
                        >
                            {/* Your slide content here */}

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card-wrapper swiper-wrapper">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className='ml-14 mt-3' style={{ fontSize: '16px', color: '#FFC44E' }}>⭐⭐⭐⭐⭐</span>
                                            <p className="ml-12 name-2">“ I able to prove potential<br />
                                                employers that i have a solid<br />
                                                understanding of computers &<br />
                                                hardware- and started to receive<br />
                                                real, viable job offers ”</p>

                                            <div className="mt-4 flex items-center">
                                                <img className='ml-10' src={test} alt="" />

                                                <p className="description ml-2"><strong>Savannah</strong><br />Central African</p>
                                                <div className='ml-20'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="3.25em" viewBox="0 0 512 512">
                                                        <style>{'svg{fill:#e4e4e4}'}</style>
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="bg-primary xl:pb-16 text-white py-16 xl:pt-12 xl:pb-0 overflow-hidden">
                <div className="container mt-6 mx-auto h-full px-12 flex flex-col xl:flex-row items-center justify-start">
                    <div className="mb-2">
                        <h2 className="text-white font-semibold text-3xl">Join more than <span className='text-secondary'>1 million</span><br />
                        <span className='text-secondary'>learners</span> worldwide</h2>
                    </div>
                    <div className="ml-auto">
                        <button className="btn-outline border mr-32 border-secondary text-white hover:bg-white hover:text-primary" style={{ width: "210px", height: "60px" }}>Join Our Community</button>
                    </div>
                </div>
            </section>
        </div>
    )
}