import { visaProcess } from '../assets'

export default function Problem() {
    return (
        <section className="py-8 px-10 md:px-16 lg:px-20 xl:px-28">
            <div className='grid grid-cols-2'>
                <div className='flex justify-start '>
                    <img className='h-full md:object-cover mt-4 xl:ml-4' src={visaProcess} alt="" />
                </div>

                <div className='sm:px-2 lg:px-8 xl:px-20 flex flex-col justify-center'>
                    <p className='text-[#2EAAFA] font-semibold'>Advantage Features</p>
                    <p className='text-3xl lg:text-4xl font-medium mb-3'>Struggling with the Visa Process?</p>
                    <p>The head office of Eduplan is located in India which helps all Indian students to get admission into top-ranked universities from the United Kingdom, USA, Australia, Canada,Germany and Sweden. </p>
                    <div>
                        <button className='btn-primary px-3 py-2 rounded-md mt-8'>Know More</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 mt-6'>
                <div className='md:px-4 lg:px-8 xl:px-20 lg:mt-8 flex flex-col justify-center'>
                    <p className='text-[#2EAAFA] font-semibold'>Advantage Features</p>
                    <p className='text-3xl lg:text-4xl font-medium mb-3'>Struggling with the Visa Process?</p>
                    <p>The head office of Eduplan is located in India which helps all Indian students to get admission into top-ranked universities from the United Kingdom, USA, Australia, Canada,Germany and Sweden. </p>
                    <div>
                    <button className='btn-primary px-3 py-2 rounded-md mt-4'>Know More</button>
                    </div>
                </div>
                <div className=''>
                    <img className='h-full md:object-cover' src={visaProcess} alt="" />
                </div>
            </div>
        </section>
    );
}