import React from 'react';

const Card = ({ name, description, imageUrl, imageUrl2, rank, feerange, placementrange, state }) => {
  return (
    <div className="max-w-xxl custom-height sm:mb-96 xl:mb-0 lg:mb-0 w-full lg:flex pt-4">
      <div className="h-48 lg:h-auto lg:w-1/3 sm:h-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }} title={name}>
      </div>
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="flex items-center">
            <img className="w-30 h-10 mr-4" src={imageUrl2} alt={name} />
            <div className="text-sm">
              <p className="text-black leading-none font-semibold ml-60 sm:p-3 xl:p-4 rounded-md bg-light">Institute Ranking:{rank}</p>
            </div>
          </div>
          <div className="text-black font-bold text-xl mt-4 mb-2">{name}</div>
          <p className="text-grey-darker text-base">{description}</p>
          <div className="group inline-flex flex-col sm:flex-row justify-center font-medium text-customary hover:text-gray-900">
            <div className="ml-8">
              <div className="mt-2">
                <span className="font-bold">Fee Structure:</span>
                <span className="font-bold ml-32">Average Placement:</span>
                <br />
                <span>{feerange}</span>
                <span className='ml-36'>{placementrange}</span>
              </div>
            </div>
          </div>
          <div className="sm:ml-0 sm:mt-6 lg:mt-3">
            <button className="px-4 py-2 lg:ml-8 xl:ml-36 bg-primary font-semibold rounded-lg text-white text-base">
              Talk with the counsellor
            </button>
            <button className="px-4 mt-2 sm:ml-2 py-2 bg-white border border-secondary font-semibold rounded-lg text-secondary text-base sm:text-sm">
              Talk with the College peer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
