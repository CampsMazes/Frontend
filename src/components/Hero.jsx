import { downArrow, numberOfStudents, ideation, helpingInCareer, HeroImg } from "../assets"

const Hero = () => {
    return (
        <section className="px-10 md:px-16 lg:px-20 xl:px-24 mt-8 md:grid md:grid-cols-2">
         {/* <div className="block mx-auto sm:hidden w-[70%]">
                <img src={HeroImg} alt="" />
            </div> */}
            <div className="md:col-span-1 lg:mt-10 flex flex-col xl:flex-row item-center justify-between">
                <div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold" style={{ lineHeight: "1.5" }}>
                            Choose {window.innerWidth > 768 && <br />}
                            The <b className="text-primary">Campus</b> You
                            Want To <b className="text-primary">Study</b> In
                        </h1>
                    </div>

                    <div className="text-md opacity-90">
                        Selecting the right campus is critical, as it sets the stage for
                        your educational journey. Campsmaze is here to help you,
                        offering guidance & resources to make an informed choice.
                    </div>
                    <div className="mt-12">

                        <form>
                           <div className="hero-form-border grid grid-cols-3 rounded-lg pl-4">
                                <div className="col-span-2 grid grid-cols-2 py-3">
                                    <div className="flex items-center justify-around opacity-80">
                                        <p>Course</p>
                                        <img className="" src={downArrow} alt="" />
                                    </div>
                                    <div className="flex items-center justify-around opacity-80">
                                        <p>Location</p>
                                        <img src={downArrow} alt="" />
                                    </div>
                                </div>
                                <div className=" col-span-1 flex justify-end">
                                     <button className="btn-primary px-10 rounded-l-lg">Let's Go</button>
                                </div>
                           </div>
                        </form>

                    </div>
                    <div className=" mt-12 flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">

                        <div className="flex items-center">
                            <img src={numberOfStudents} alt="" />
                            <div className="ml-2">1k+ students</div>
                        </div>
                        <div className="flex items-center">
                            <img src={helpingInCareer} alt="" />
                            <div className="ml-2">Help in Career</div>
                        </div>
                        <div className="flex items-center">
                            <img src={ideation} alt="" />
                            <div className="ml-2">Ideation</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="hide-in-sm md:col-span-1 md:place-content-end justify-center ">
                <img className="" src={HeroImg} alt="" />
            </div>
        </section>
    )
}

export default Hero
