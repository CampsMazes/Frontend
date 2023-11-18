import { collegeImage } from "../../assets"
import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
export default function counsellorInfo() {
    const [item, setItem] = useState(Data);
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

    const filterItem = (curcat) => {
        if (curcat === "All") {
            // If "All" is selected, show all data
            setItem(Data);
        } else {
            const newItem = Data.filter((newVal) => {
                return newVal.category === curcat;
                // comparing category for displaying data
            });
            setItem(newItem);
        }
    };

    const menuItems = [...new Set(Data.map((Val) => Val.category))];
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
            <div className="container mx-36 mt-8 h-full">
                <p className="relative mb-4">
                    <strong className="text-4xl text-ultra">Expert Counsellor</strong>
                </p>
                <p className="text-secondary font-semibold">WE are here to help you</p>
            </div>
            <p className="text-dark2 mx-40 mb-4 mt-4">
                VIT Vellore B.Arch Orientation Schedule is live and the M.Arch application 2023 is open for application. The institute recently held its 38th Annual Convocation - 2023. VITREE - 2023 July session Ph.D / Direct Ph.D Fee Payment Portal (Date extended up to 14-07-2023). UG Science and Humanities - Seat Allotment. VIT Vellore Admission BTech is now open, and the application deadline for VITEEE is March 31. (tentative). PhD July session 2023 via VITREE application is now available, and the deadline to apply is March 31.
            </p>

            <div className="flex ml-40">
                {/* First Column */}
                <div>
                    <div className="flex items-center mt-16">
                        <div className="rounded-full bg-light p-4">
                            <img className="w-30 h-30" src={collegeImage} alt="vit" />
                        </div>
                        <div className="ml-4 mt-2">
                            <p className="leading-none text-sm mb-3 font-semibold text-secondary">University Established in</p>
                            <p className="text-black text-2xl leading-none font-bold">1980</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mt-16 ml-24">
                        <div className="rounded-full bg-light p-4">
                            <img className="w-30 h-30" src={collegeImage} alt="vit" />
                        </div>
                        <div className="ml-4 mt-2">
                            <p className="leading-none text-sm mb-3 font-semibold text-secondary">University Established in</p>
                            <p className="text-black text-2xl leading-none font-bold">1980</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mt-16 ml-24">
                        <div className="rounded-full bg-light p-4">
                            <img className="w-30 h-30" src={collegeImage} alt="vit" />
                        </div>
                        <div className="ml-4 mt-2">
                            <p className="leading-none text-sm mb-3 font-semibold text-secondary">University Established in</p>
                            <p className="text-black text-2xl leading-none font-bold">1980</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-40 mt-32 h-full flex flex-col xl:flex-row">
                <p className="relative mb-4">
                    <strong className="text-4xl text-ultra">Meet Our Expert</strong><br />
                    <strong className="text-secondary">WE are here to help you</strong>
                </p>
            </div>
            <div className="container-fluid mx-40 mt-4 mb-16">
                <div className="row">

                    <Buttons filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
                    <Card item={item} startIndex={startIndex} endIndex={endIndex} />
                </div>
                <div className="mt-16 mb-16 flex items-center justify-center space-x-4">
                    {/* Display previous page button */}
                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="btn-pagination bg-primary text-white p-2 rounded-lg"
                        >
                            &lt;
                        </button>
                    )}

                    {/* Display visible page numbers */}
                    {visiblePageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`btn-pagination ${pageNumber === currentPage ? activePageClass : ''}`}
                        >
                            {pageNumber}
                        </button>
                    ))}

                    {/* Display next page button */}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="btn-pagination bg-primary text-white p-2 rounded-lg"
                        >
                            &gt;
                        </button>
                    )}
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