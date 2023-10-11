import React from 'react';

const Card = ({ name, description, imageUrl, imageUrl2, rank, feerange, placementrange, state }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sm:custom-width sm:custom-height flex flex-col sm:flex-row">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 sm:w-1/2 sm:h-full object-contain mb-2"
      />
      <div className="mt-4 sm:ml-6 sm:mt-12 flex flex-col justify-between p-4"> {/* Add padding here */}
        <div>
          <div className="group inline-flex flex-col sm:flex-row justify-center font-medium text-customary hover:text-gray-900">
            <img
              src={imageUrl2}
              alt={name}
              className="w-full h-48 sm:w-1/3 sm:h-full object-contain mb-2 sm:mr-4"
            />
            <div>
              <button className="px-6 py-2 ml-12 bg-light rounded-lg text-base sm:text-sm">
                <span className="text-sm">Institute Ranking: </span>
                <span>{rank}</span>
              </button>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl mt-4 mb-4 font-semibold">{name}</h3>
          <p className="text-gray-600">{description}</p>
          {/* Add any other content you want for the card */}
          <div className="group inline-flex flex-col sm:flex-row justify-center font-medium text-customary hover:text-gray-900">
            <div className="sm:mr-4">
              <div className="mt-2">
                <span className="font-bold">Fee Structure:</span>
                <br />
                <span>{feerange}</span>
              </div>
            </div>
            <div>
              <div className="mt-2 sm:ml-8">
                <span className="font-bold">Average Placement:</span>
                <br />
                <span>{placementrange}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:ml-0 sm:mt-6">
          <button className="px-4 py-2 bg-primary font-semibold rounded-lg text-white text-base">
            Talk with the counsellor
          </button>
          <button className="px-4 mt-2 sm:ml-2 py-2 bg-white border border-secondary font-semibold rounded-lg text-secondary text-base sm:text-sm">
            Talk with the College peer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
