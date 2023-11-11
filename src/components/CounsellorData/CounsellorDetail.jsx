import { image18 } from "../../assets"
import { collegeImage } from "../../assets"
import Card from "./Card"
import CardTab from "./CardTab"
import Feedback from "./Feedback"
const detail=[
    {
        name:"Anthony Wade",
        expert:"Expert in Digital Marketing",
        i1:image18,
        i2:collegeImage,
        descp:"VIT Vellore B.Arch Orientation Schedule is live and the M.Arch application 2023 is open for application. The institute recently held its 38th Annual Convocation - 2023. VITREE - 2023 July session Ph.D / Direct Ph.D Fee Payment Portal (Date extended up to 14-07-2023). UG Science and Humanities - Seat Allotment. VIT Vellore Admission BTech is now open, and the application deadline for VITEEE is March 31. (tentative). PhD July session 2023 via VITREE application is now available, and the deadline to apply is March 31.",
        year:"1980"
    }
]
export default function CounsellorDetail() {
    return (
        <>
            <div className="ele text-white mt-8 xl:h-80 py-12 xl:pt-12 overflow:hidden">
                <div className="xl:ml-16 mx-auto h-full px-12 flex flex-col xl:flex-row items-center justify-start">
                    <div className="mb-4 mx-12">
                        <h2 className="text-secondary">Home / Colleges / VIT</h2>
                        <span className="mt-2 text-white text-5xl">Our Counsellors</span>
                    </div>
                </div>
            </div>
            <div className="bg-light p-20">
                <Card {...detail[0]}/>
                <div className="xl:mx-40">
                    <CardTab />
                </div>
                <div>
                    <Feedback />
                </div>
            </div>
            <div className="bg-primary xl:pb-16 text-white py-16 xl:pt-12 xl:pb-0 overflow-hidden">
                <div className="container mt-6 mx-auto h-full px-12 flex flex-col xl:flex-row items-center justify-start">
                    <div className="mb-2">
                        <h2 className="text-white font-semibold text-3xl">Join more than <span className='text-secondary'>1 million</span><br />
                            <span className='text-secondary'>learners</span> worldwide</h2>
                    </div>
                    <div className="ml-auto">
                        <button className="btn-outline border mr-32 border-secondary text-white hover:bg-white hover:text-primary" style={{ width: "210px", height: "60px" }}>Join Our Community</button>
                    </div>
                </div>
            </div>
        </>
    )
}