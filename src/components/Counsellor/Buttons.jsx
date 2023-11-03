import React from "react";
import Data from "./Data";
import { useState } from "react";
const Buttons = ({ filterItem, setItem, menuItems }) => {
  const dropdownStyle = {
    backgroundColor: "lightgray", // Set the background color to light gray
    color: "#333",
    width: "140px",

  };
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 9; // Number of results per page
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, Data.length);

  const totalPages = Math.ceil(Data.length / resultsPerPage);

  // Generate an array of page numbers

  const activePageClass = 'text-primary font-semibold';


  const visiblePageNumbers = [];
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
    visiblePageNumbers.push(i);
  }
  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <div className="flex mr-82 mb-6 justify-end justify-content-center">
        <div className="text-gray-600 flex-grow  px-4 font-semibold">
          Showing {startIndex + 1}-{endIndex} of {Data.length} results
        </div>
        <label className="p-2 font-semibold text-lg">
          Sort by:
        </label>
        <select
          className="btn-dark text-gray-700 bg-gray-300 p-1 px-2 btn fw-bold"
          style={dropdownStyle}
          onChange={(e) => filterItem(e.target.value)}
        >
          <option value="All" >All</option>
          {menuItems.map((Val, id) => (
            <option value={Val} key={id}>
              {Val}
            </option>
          ))}
        </select>
        
      </div>
      
    </>
  );
};

export default Buttons;