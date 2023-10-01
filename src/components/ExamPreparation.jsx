import { image4 } from "../assets"
const ExamPreparation = () => {
    return (
        <section id="courses" className="mt-8 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <p className="relative mb-4">
                    <strong className="text-5xl">Prepare For Exams</strong><br />
                </p>
            </div>
            <div className="mt-12 mb-12 flex flex-col gap-y-16 lg:flex-row lg:gap-x-20 lg:gap-y-0">
                <div className="slide-container swiper">
                    <div className="slide-content">
                        <div className="card-wrapper swiper-wrapper">

                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img src={image4} alt="exam" className="card-img" />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h2 className="name">GRE Test
                                    </h2>
                                    <p className="description">The lorem text the section that contains header with having open
                                        functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-button-next swiper-navBtn"></div>
                    <div className="swiper-button-prev swiper-navBtn"></div>

                </div>
            </div>
        </section>
    )
}

export default ExamPreparation
