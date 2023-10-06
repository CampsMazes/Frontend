import React from 'react';
import { hands, talking } from '../assets'
export default function Problem() {
    return (
        <section className="hero py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between h-full">
                    <div className="imag hero__img hidden xl:flex max-w-[814px] self-end">
                        <div>
                            <img src={hands} alt="hands" className='rounded-lg'/>
                        </div>
                    </div>
                    <div className="text-center xl:text-left xl:ml-8"> {/* Adjust text alignment and ml values */}
                        <div>
                            <strong className='text-secondary mb-10'>Advantage Features</strong>
                            <h1 className="text-4xl hed xl:text-5xl font:bold mt-5">
                                <strong>Struggling with the</strong><br />
                                <strong>Visa Process?</strong>
                            </h1>
                            <p className="text-dark dec mt-5">
                                The head office of Eduplan is located in India<br />
                                which helps all Indian students to get admission<br />
                                into top-ranked universities from the United<br />
                                Kingdom, USA, Australia, Canada, Germany<br />
                                and Sweden
                            </p>
                        </div>

                        <div className="mt-12">
                            <div className="relative flex items-center">
                                <div className="relative w-full items-center flex flex-row">
                                    <button
                                        className="text-white btn-text bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-12 py-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        style={{ width: "210px", height: "60px" }}>
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-36 container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between h-full">
                    <div className="text-center xl:text-left "> {/* Adjust text alignment and ml values */}
                        <div>
                            <strong className='text-secondary mb-10'>Advantage Features</strong>
                            <h1 className="text-4xl hed xl:text-5xl font:bold mt-5">
                                <strong>Struggling with the</strong><br />
                                <strong>Accomodation?</strong>
                            </h1>
                            <p className="text-dark dec mt-5">
                                The head office of Eduplan is located in India<br />
                                which helps all Indian students to get admission<br />
                                into top-ranked universities from the United<br />
                                Kingdom, USA, Australia, Canada, Germany<br />
                                and Sweden
                            </p>
                        </div>

                        <div className="mt-12">
                            <div className="relative flex items-center">
                                <div className="relative w-full items-center flex flex-row">
                                <button className="btn-outline-2 border border-primary hover:bg-white " style={{ width: "210px", height: "60px" }}>Know More</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="imag hero__img hidden xl:flex max-w-[814px] self-end">
                        <div>
                            <img src={talking} alt="talking" className="rounded-lg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}