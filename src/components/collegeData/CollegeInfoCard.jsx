import React from "react";
import {collegeImage,collegeImage2,vector,vector1,perc,perc1} from "../../assets";
export default function CollegeInfoCard({ key,name, branches, year,total,international,rank,feerange,review,description }) {

  return (
    <div key={key}>
      <div className="text-black text-2xl mt-4 mb-2">{name}</div>


      <div className="text-dark2 mt-4 mb-2 flex">
        {branches.map((val, index) => (
          <React.Fragment key={index}>
            {index > 0 && " | "}
            {val}
          </React.Fragment>
        ))}
      </div>
      
      
      <hr className="mt-4" />

      
      <div className="flex">
        {/* First Column */}
        <div>
          <div className="flex items-center mt-12 ">
            <div className="rounded-full bg-light p-4">
              <img className="w-30 h-30" src={collegeImage} alt={name} />
            </div>
            <div className="ml-4 mt-2">
              <p className="leading-none text-sm mb-3 font-semibold text-secondary">University Established in</p>
              <p className="text-black text-2xl leading-none font-bold">{year}</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div>
          <div className="flex items-center mt-12 ml-24">
            <div className="rounded-full bg-light p-4">
              <img className="w-30 h-30" src={collegeImage2} alt={name} />
            </div>
            <div className="ml-4 mt-2">
              <p className="leading-none text-sm mb-3 font-semibold text-secondary">Total Students</p>
              <p className="text-black text-2xl leading-none font-bold">{total}</p>
            </div>
          </div>
        </div>

        
      </div>
      <div className="flex">
        {/* First Column */}
        <div>
          <div className="flex items-center mt-12">
            <div className="rounded-full bg-light p-4">
              <img className="w-30 h-30" src={vector} alt={name} />
            </div>
            <div className="ml-4 mt-2">
              <p className="leading-none text-sm mb-3 font-semibold text-secondary">International Students</p>
              <p className="text-black text-2xl leading-none font-bold">{international}</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="ml-3">
          <div className="flex items-center mt-12 ml-24">
            <div className="rounded-full bg-light p-4">
              <img className="w-30 h-30" src={vector1} alt={name} />
            </div>
            <div className="ml-4 mt-2">
              <p className="leading-none text-sm mb-3 font-semibold text-secondary">Ranking</p>
              <p className="text-black text-2xl leading-none font-bold">{rank}</p>
            </div>
          </div>
        </div>

        
      </div>
      <div className="flex">
        {/* First Column */}
        <div>
          <div className="flex items-center mt-12">
            <div className="rounded-full bg-light p-4">
              <img className="w-30 h-30" src={perc} alt={name} />
            </div>
            <div className="ml-4 mt-2">
              <p className="leading-none text-sm mb-3 font-semibold text-secondary">Average Annual Fees</p>
              <p className="text-black text-2xl leading-none font-bold">{feerange}</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="ml-5 mt-2">
          <div className="flex items-center mt-12 ml-24">
            <div className="rounded-full bg-light p-4">
              <img className="w-30 h-30" src={perc1} alt={name} />
            </div>
            <div className="ml-4">
              <p className="leading-none text-sm mb-3 font-semibold text-secondary">Positive Review</p>
              <p className="text-black text-2xl leading-none font-bold">{review}</p>
            </div>
          </div>
        </div>  
      </div>

      <div className="mt-16">
          {description}
      </div>
    </div>
  );
}
