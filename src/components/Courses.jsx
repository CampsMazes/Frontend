import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { rectangle584 } from './../assets'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Courses = () => {
    return (
        <section className="ele text-white mt-8 py-12 xl:pt-12 xl:pb-16 overflow-hidden">
            <div className="container ml-16 mx-auto h-full px-12 flex flex-col xl:flex-row items-center justify-start">
                <div className="mb-4">
                    <h2 className="text-secondary">Always on Top</h2>
                    <span className="text-white text-3xl">Popular Courses</span>
                </div>
                <div className="ml-auto">
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
                    {/* Your slide content here */}

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col p-2 md:p-4">
                            <div>
                                <img src={rectangle584} className='rounded-lg' alt="i1" />
                            </div>
                            <div className='bg-white p-3 mt-0.25 rounded-lg'>
                                <p className="flex items-center description">🟢 Technology</p>
                                <h2 className='description name font-bold'>ERP Systems are very Important for Companies</h2>
                                <div className="mt-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <g clipPath="url(#clip0_44_223)">
                                            <path
                                                d="M10.8083 2.82886H3.0831C2.47359 2.82886 1.97949 3.32296 1.97949 3.93246V11.6577C1.97949 12.2672 2.47359 12.7613 3.0831 12.7613H10.8083C11.4178 12.7613 11.9119 12.2672 11.9119 11.6577V3.93246C11.9119 3.32296 11.4178 2.82886 10.8083 2.82886Z"
                                                stroke="#1C1D4E" strokeWidth="1.6" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                            <path d="M9.15332 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.73828 1.7251V3.9323" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.97949 6.13965H11.9119" stroke="#1C1D4E" strokeWidth="1.6"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_44_223">
                                                <rect width="13.2432" height="13.2432" fill="white"
                                                    transform="translate(0.324219 0.621582)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="description ml-2">CampsMaze</p>
                                    <strong className='description-2 ml-48'>$25.50</strong>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section >
    )
}

export default Courses;

