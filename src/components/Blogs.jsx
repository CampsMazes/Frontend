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
        "title" : "Overseas Education Fair Amravati 2023",
    }, 
    {
        "title" : "Overseas Education Fair Amravati 2023",
    }, 
    {
        "title" : "Overseas Education Fair Amravati 2023",
    }, 
    {
        "title" : "Overseas Education Fair Amravati 2023",
    }, 
    {
        "title" : "Overseas Education Fair Amravati 2023",
    }, 
    {
        "title" : "Overseas Education Fair Amravati 2023",
    }, 
]

export default function Blogs() {
    return (
        <div>
            <section className="py-1 xl:pt-12 xl:pb-16 overflow-hidden">
                <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                    <p className="relative mb-4">
                        <strong className="text-4xl text-ultra">Campsmaze latest blogs</strong><br />
                        <strong className="text-secondary">Knowledge exploration</strong>
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
                            {counsellorCards.map((card, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center justify-center flex-col p-2 md:p-4 mb-12">
                                        <div className='rounded-lg'>
                                            <div className=''>
                                                <img src={image18} className='w-full h-[240px] rounded-lg' alt="i1" />
                                            </div>
                                            <div className='bg-white p-4 mt-0.25 rounded-b-lg' >
                                                <p className='text-black'>12 Noon To 4 Pm</p>
                                                <h2 className= 'font-bold text-black'>{card.title}</h2>
                                              
                                                <a href="#">Read more</a>
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