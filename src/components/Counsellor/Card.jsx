import React from "react";
import { image18 } from "../../assets";

const Card = ({ item,startIndex, endIndex  }) => {
    // destructuring props
    const itemsToDisplay = item.slice(startIndex, endIndex);
    return (
        <>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center rounded-lg'>
                    {itemsToDisplay.map((Val) => {

                        return (
                            <div key={Val.id}>
                                <div className='w-full rounded-t-md'>
                                    <img src={image18} alt={Val.title} className='w-full rounded-t-md'  />
                                </div>
                                <div className='bg-white p-4 mt-0.25 rounded-b-lg' style={{ border: '1px solid #D9D9D9' }}>
                                    <strong className="flex text-3xl items-center description">{Val.title}</strong>
                                    <h2 className='text-secondary font-bold'>{Val.sub}</h2>
                                    <p className="flex mt-2 items-center description">
                                        {Val.desc}
                                    </p>
                                    <hr className='mt-2' />
                                    <div className="mt-4 flex items-center">
                                        <p className=" font-semibold text-primary">Book Now</p>
                                        <p className='text-secondary ml-36'>View Profile</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Card;

