export default function Card({i1,i2,name,expert,descp,year}) {
    return (
        <>
            <div className="xl:mx-40 rounded-lg bg-white h-128 p-10 xl:flex lg:flex" >
                <div>
                    <img src={i1} alt="counsellor" className="sm:h-auto h-80 rounded-lg w-96 p-1" />
                    <button className="py-4 mt-5 lg:ml-2  w-80 bg-primary font-semibold text-sm rounded-lg text-white text-base">
                        Consult with the counsellor
                    </button>
                </div>
                <div className="w-2/3 ml-8">
                    <p className="text-5xl"><strong>{name}</strong></p>
                    <p className="text-secondary mt-2 font-semibold">{expert}</p>
                    <p className="mt-4 text-dark2">{descp}</p>
                    <div className="flex">
                        <div>
                            <div className="flex items-center mt-10">
                                <div className="rounded-full bg-light p-4">
                                    <img className="w-30 h-30" src={i2} alt="vit" />
                                </div>
                                <div className="ml-2 mt-2">
                                    <p className="leading-none text-sm mb-3 font-semibold text-secondary">University Established in</p>
                                    <p className="text-black text-2xl leading-none font-bold">{year}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex  mx-8 items-center mt-10">
                                <div className="rounded-full bg-light p-4">
                                    <img className="w-30 h-30" src={i2} alt="vit" />
                                </div>
                                <div className="ml-2 mt-2">
                                    <p className="leading-none text-sm mb-3 font-semibold text-secondary">University Established in</p>
                                    <p className="text-black text-2xl leading-none font-bold">{year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}