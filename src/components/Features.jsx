import { counselling, collegeShortlisting, admissionGuidance, scholarships, visaProcessing, studentAccommodation } from '../assets'

const articles = [
    {
        "title": "Career counselling",
        "description": "Get a full view so you know where to save. Track spending, data keep tab subscription lorem ipsum text",
        "image": counselling,
        "redirectTo": "#",
    },
    {
        "title": "College Shortlisting",
        "description": "Get a full view so you know where to save. Track spending, data keep tab subscription lorem ipsum text",
        "image": collegeShortlisting,
        "redirectTo": "#"
    },
    {
        "title": "Admission Guidance",
        "description": "Get a full view so you know where to save. Track spending, data keep tab subscription lorem ipsum text",
        "image": admissionGuidance,
        "redirectTo": "#"
    },
    {
        "title": "Visa Processing",
        "description": "Get a full view so you know where to save. Track spending, data keep tab subscription lorem ipsum text",
        "image": visaProcessing,
        "redirectTo": "#"
    },
    {
        "title": "Scholarship",
        "description": "Get a full view so you know where to save. Track spending, data keep tab subscription lorem ipsum text",
        "image": scholarships,
        "redirectTo": "#"
    },
    {
        "title": "Student Accommodation",
        "description": "Get a full view so you know where to save. Track spending, data keep tab subscription lorem ipsum text",
        "image": studentAccommodation,
        "redirectTo": "#"
    }
]


const Features = () => {
    return (
        <section id='features' className="py-8 px-10 md:px-16 lg:px-20 xl:px-24">
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <div className="relative mb-4">
                    <p className="text-3xl font-semibold mb-3">Our Services</p>
                    <strong className="text-secondary">We have quality partners in variety of destinations around the
                        globe.</strong>
                </div>
            </div>

            <div className="my-12 xl:p-8 grid grid-cols-1 gap-10 place-items-center md:grid-cols-2 md:gap-14 lg:grid-cols-2 lg:gap-4 xl:gap-6 xl:grid-cols-3">

                {/* <!-- Article --> */}
                {articles.map((item, index) => {
                    return (

                        <article key={index} className="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                            <div className="ml-4 mt-4">
                                <img src={item.image} alt="" />
                            </div>
                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href="#">
                                        <strong>{item.title}</strong>
                                    </a>
                                </h1>
                            </header>
                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline hover:underline text-black" href="#">
                                    <p className="ml-2 text-sm text-dark">
                                        {item.description}
                                    </p>
                                </a>
                            </footer>
                            <div className="ml-4 text-secondary">
                                <a className="no-underline" href="#">
                                    <div className="flex items-center">
                                        <div>Learn More</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                    </div>
                                </a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Features