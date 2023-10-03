import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { image4 } from './../assets'


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function ExamPreparation() {
    return (
        <section id="courses" className="mt-8 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <p className="relative mb-4">
                    <strong className="text-5xl">Prepare For Exams</strong><br />
                </p>
            </div>
            <div className="mt-12 mb-12 flex flex-col gap-y-16 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20} // Adjust this value as needed for spacing between cards
                    centeredSlides={true} // Center the active slide
                    centeredSlidesBounds={true} // Center the slide without padding
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10, // Adjust this value for smaller screens
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20, // Adjust this value for medium screens
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30, // Adjust this value for larger screens
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper mx-auto" // Add mx-auto class to center
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <img src={image4} alt="i1" />
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    <strong>GRE Test</strong>
                                </a>
                            </h1>
                            <a className="mt-8 flex items-center no-underline hover:underline text-black" href="#">
                                <p className="ml-2 text-sm text-dark">
                                    Get a full view so you know where to<br />
                                    save. Track spending, deta keep tab<br />
                                    subscription lorem ipsum text
                                </p>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};