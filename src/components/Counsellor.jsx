// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { image18 } from './../assets'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const counsellorCards = [
    {
        "name": "Anthony Wade",
        "description": "Expert in Digital Marketing",
        "about": "Lorem ipsum dolor sit amet ipsumLorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    },
    {
        "name": "Anthony Wade",
        "description": "Expert in Digital Marketing",
        "about": "Lorem ipsum dolor sit amet ipsumLorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    },
    {
        "name": "Anthony Wade",
        "description": "Expert in Digital Marketing",
        "about": "Lorem ipsum dolor sit amet ipsumLorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    },
    {
        "name": "Anthony Wade",
        "description": "Expert in Digital Marketing",
        "about": "Lorem ipsum dolor sit amet ipsumLorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    },
    {
        "name": "Anthony Wade",
        "description": "Expert in Digital Marketing",
        "about": "Lorem ipsum dolor sit amet ipsumLorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    },
    {
        "name": "Anthony Wade",
        "description": "Expert in Digital Marketing",
        "about": "Lorem ipsum dolor sit amet ipsumLorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    },
]

export default function Counsellor() {
    return (
        <div>
            <section className="py-1 sm:pt-6 sm:ml-12 sm:mr-12 xl:pt-12 xl:pb-16">
                <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                    <p className="relative mb-4">
                        <strong className="text-4xl text-ultra">Expert Counsellor</strong><br />
                        <strong className="text-secondary">WE are here to help you</strong>
                    </p>
                </div>
                <div className='slide-container-2' style={{ maxWidth: 'calc(100% - 80px)', }}>
                    <div className="swiper-container" style={{ maxWidth: 'calc(100% - 100px)', marginLeft: '50px' }}>
                        <Swiper
                            slidesPerView={3} // Set the number of slides per view to 3
                            spaceBetween={1}
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
                                    spaceBetween: 2, // Adjust this value for medium screens
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
                            {counsellorCards.map((card, index) => {
                                return (
                                    <SwiperSlide key={index}>

                                        <div className="flex gap-4 ml-6 mr-6 items-center justify-center flex-col p-4 md:p-4 mb-12">
                                            <div className=' bg-purple-800 rounded-lg'>
                                                <div className='w-full rounded-t-md'>
                                                    <img src={image18} className='w-full rounded-t-md' alt="i1" />
                                                </div>
                                                <div className='bg-white p-4 mt-0.25 rounded-b-lg' style={{ border: '1px solid #D9D9D9' }}>
                                                    <strong className="flex text-3xl items-center description">{card.name}</strong>
                                                    <h2 className='text-secondary font-bold'>{card.description}</h2>
                                                    <p className="flex mt-2 items-center description">
                                                        {card.about}
                                                    </p>
                                                    <hr className='mt-2' />
                                                    <div className="mt-4 flex items-center">
                                                        <p className=" font-semibold text-primary">Book Now</p>
                                                        <p className='text-secondary ml-36'>View Profile</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </div>
                </div>
            </section >
        </div>
    )
}