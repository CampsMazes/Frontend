import { useState } from 'react'
import Buttons from './Buttons';
import CollegeInfoCard from './CollegeInfoCard';
import text1 from './text1';
import text2 from './text2';
import text3 from './text3';
import text4 from './text4';
import text5 from './text5';
import { image25, vit2 } from '../../assets'
import collegeData from './collegedata2'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import CollegeHighlight from './CollegeHighlight';
import { useEffect } from 'react';


const highlights = [{
    id: 'vit',
    name: 'Vellore Institute of Technology',
    image1: image25,
    image2: vit2,
    descp: 'Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem'
}]


const cards = [
    {
        "name": "Vellore Institute of Technology",
        "img": image25,
        "img2": vit2,
        "description": "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem",

    },
    {
        "name": "Vellore Institute of Technology",
        "img": image25,
        "img2": vit2,
        "description": "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem",
    },
    {
        "name": "Vellore Institute of Technology",
        "img": image25,
        "img2": vit2,
        "description": "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem",
    },
    {
        "name": "Vellore Institute of Technology",
        "img": image25,
        "img2": vit2,
        "description": "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem",
    },
    {
        "name": "Vellore Institute of Technology",
        "img": image25,
        "img2": vit2,
        "description": "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem",
    },
    {
        "name": "Vellore Institute of Technology",
        "img": image25,
        "img2": vit2,
        "description": "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem Get a full view so you know where to save. Track spending, deta keep tab Get a full view so you know where to save. Track spending, deta keep tab subscription lorem",
    },
]
const filters = [
    
    { name: 'Overview', id: 0 },
    { name: 'Admission', id: 1 },
    { name: 'Courses and Fees', id: 2 },
    { name: 'Ranking', id: 3 },
    { name: 'Reviews', id: 4 },
     
]

export default function CollegeInfo() {
    
    
    const text = [text1, text2, text3, text4, text5];

    const [item, setItem] = useState(['Overview','Admission','Courses and Fees','Ranking','Reviews']);
    const [selectedItem, setSelectedItem] = useState('Overview');
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        setSelectedData(collegeData)
    },[])

    function handledata(e){
        let id=e.target.value;
        setSelectedData(collegeData.filter((item)=>item.id===id))
    }

    let filteredData=collegeData;

    const menuItems = [...new Set(filters.map((item) => item.name))]

    const [c, setC] = useState(0);

    const filterItem = (cat,index) => {
        const newItems = filters.map((n) => n.name === cat)
        setItem(newItems);
        
    }
    let m=0;
    if(c>=5){
        m=c%5;
    }
    else{
        m=c;
    }
    
    return (
        <>
            <div className="ele text-white mt-8 xl:h-80 py-12 xl:pt-12 overflow:hidden">
                <div className="xl:ml-16 mx-auto h-full px-12 flex flex-col xl:flex-row items-center justify-start">
                    <div className="mb-4">
                        <h2 className="text-secondary">Home / Colleges</h2>
                        <span className="mt-2 text-white text-5xl">Our Colleges</span>
                    </div>
                </div>
            </div>

            <div>
                <section aria-labelledby="products-heading" className="pb-6 pt-12">
                    <div className="xl:ml-12 md:ml-12 lg:ml-12 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">

                        <div className="lg:col-span-2 lg:ml-0 xl:ml-24">
                            {/* Your content */}
                            <section aria-labelledby="products-heading" className="pb-24">

                                <h2 id="products-heading" className="sr-only">
                                    Products
                                </h2>

                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">

                                    <Buttons
                                        menuItems={menuItems}
                                        filterItem={(cat, index) => filterItem(cat, index)}
                                        setItem={setItem}
                                        c={c}  // Pass the value of c
                                        setC={setC}  // Pass the setC function
                                    />

                                    {
                                    
                                 
                                    collegeData.map((item,index) => (
                                        // Map over your data and render a Card for each item
                                        <CollegeInfoCard
                                            key={item.detail[m].id}
                                            name={item.detail[m].name} // Access the name from the 'detail' array
                                            description={item.detail[m].desc}
                                            year={item.detail[m].year}
                                            feerange={item.detail[m].feerange}
                                            branches={item.detail[m].branches}
                                            total={item.detail[m].total}
                                            international={item.detail[m].international}
                                            rank={item.detail[m].rank}
                                            review={item.detail[m].review}
                                        />
                                    ))}
                                </div>
                                <div className='bg-light mt-24 mb-24 px-10 py-10 h-full w-full'>
                                    <div className='font-semibold text-2xl'>Write a Review</div>
                                    <div className='description mt-2 font-semibold'>Your email address will not be published. Required fields are marked *</div>

                                    <form>
                                        <div class="w-full mt-6 rounded-lg">
                                            <div class="px-4 py-2 bg-white rounded-b-lg">
                                                <label for="editor" class="sr-only">Publish post</label>
                                                <textarea id="comment" rows="8" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" required></textarea>
                                            </div>
                                        </div>
                                        <div class="grid gap-6 mb-12 md:grid-cols-2 mt-6">
                                            <div>
                                                <input type="text" id="name" class="text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-white" placeholder="Name *" required />
                                            </div>
                                            <div>
                                                <input type="text" id="email" class="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-white" placeholder="Email *" required />
                                            </div>
                                        </div>
                                        <div class="flex items-center mb-12">
                                            <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="link-checkbox" class="ml-2 text-sm font-medium text-dark3 dark:text-gray-300">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <button type="submit" class="inline-flex items-center px-8 py-2.5 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                            Post Comment
                                        </button>
                                    </form>

                                </div>
                            </section>

                        </div>

                        <div class="max-w-sm bg-white sm:ml-24 md:ml-0 lg:mr-2 xl:ml-0 rounded-xxl flex flex-col items-center">
                            {highlights.map((item) => (
                                // Map over your data and render a Card for each item
                                <CollegeHighlight
                                    key={item.id} // Make sure to provide a unique key for each card
                                    name={item.name}
                                    image1={item.image1}
                                    image2={item.image2}
                                    descp={item.descp}
                                />
                            ))}
                        </div>



                    </div>


                </section>
            </div>

            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <p className="relative mb-4">
                    <strong className="text-4xl text-ultra">Trending Colleges</strong><br />
                    <strong className="text-secondary">500+ Top Colleges</strong>
                </p>
            </div>
            <div className='flex justify-center mb-16 items-center p-8 px-22'>


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


                    modules={[Autoplay, Navigation]}
                >

                    {cards.map((card, index) => {
                        return (
                            <SwiperSlide key={index}>

                                <div className='ml-12 mr-12'>
                                    <div className='relative'>
                                        <a href="#">
                                            <img className="rounded-t-xl w-full h-60 object-cover" src={card.img} alt="Cover Photo" />
                                        </a>
                                        <a className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <img className="rounded-full w-60 h-30 p-6 shadow object-cover bg-white border-4 border-white" src={card.img2} alt="Profile Picture" />
                                        </a>
                                    </div>
                                    <div class="p-6 shadow border border-gray-300 rounded-lg">
                                        <a href="#">
                                            <h1 class="mb-2 mt-12 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{card.name}</h1>
                                        </a>
                                        <p class="mb-3 font-normal text-dark mt-5 text-center">{card.description}</p>

                                        <div className="sm:ml-0 sm:mt-6 lg:mt-12 flex flex-col items-center">
                                            <button className="px-16 py-4 bg-primary font-semibold rounded-lg text-white text-base">
                                                Talk with the counsellor
                                            </button>
                                            <button className="px-16 mt-2 py-4 bg-white border border-secondary font-semibold rounded-lg text-secondary text-base sm:text-sm">
                                                Talk with the College peer
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    })}
                </Swiper>
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