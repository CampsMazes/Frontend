export default function CollegeHighlight({image1,image2,name,descp}) {
    return (
        <>
            <div className='relative'>
                <a href="#">
                    <img className="rounded-t-xl w-full h-60 object-cover" src={image1} alt="Cover Photo" />
                </a>
                <a className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img className="rounded-full w-60 h-30 p-6 shadow object-cover bg-white border-4 border-white" src={image2} alt="Profile Picture" />
                </a>
            </div>
            <div class="p-6 shadow border border-gray-300 rounded-lg">
                <a href="#">
                    <h1 class="mb-2 mt-12 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{name}</h1>
                </a>
                <p class="mb-3 font-normal text-dark mt-5 text-center">{descp}</p>

                <div className="sm:ml-0 sm:mt-6 lg:mt-12 flex flex-col items-center">
                    <button className="px-16 py-4 bg-primary font-semibold rounded-lg text-white text-base">
                        Talk with the counsellor
                    </button>
                    <button className="px-16 mt-2 py-4 bg-white border border-secondary font-semibold rounded-lg text-secondary text-base sm:text-sm">
                        Talk with the College peer
                    </button>
                </div>
            </div>
        </>
    )
}