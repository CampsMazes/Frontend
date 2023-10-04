import React, { useState, useRef } from "react";


export default function Faq() {

    const [openQuestion, setOpenQuestion] = useState(null);

    // FAQ data - an array of objects with questions and answers
    const faqData = [
        {
            question: "1. How is get admission in abroad university?",
            answer: "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
        },
        {
            question: "2. Do you offer complete solution for students?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            question: "3. Which country is safe and better for higher study?",
            answer: "You can generate Lorem Ipsum text online or find pre-generated Lorem Ipsum text for your projects.",
        },
        {
            question: "4. Which country offer PR after study getting job?",
            answer: "You can generate Lorem Ipsum text online or find pre-generated Lorem Ipsum text for your projects.",
        },
        {
            question: "5. Can i get scholarship with my low cGPA?",
            answer: "You can generate Lorem Ipsum text online or find pre-generated Lorem Ipsum text for your projects.",
        },
    ];
    const toggleQuestion = (index) => {
        if (openQuestion === index) {
            setOpenQuestion(null); // Close the currently open question
        } else {
            setOpenQuestion(index); // Open the clicked question
        }
    };
    return (
        <div>
            <section className="bg-blue hero py-12 xl:pt-12 xl:pb-16 overflow-hidden">
                <div className="container mx-auto h-full">
                    <div className="ml-16 flex flex-col xl:flex-row item-center justify-between h-full">
                        <div>
                            <div>
                                <strong className="text-secondary text-xl">FAQ</strong><br />
                                <strong className="text-4xl xl:text-6xl font:bold" style={{ lineHeight: "1.5" }}>
                                    Frequently asked<br />
                                    question
                                </strong>
                            </div>
                            <hr className="mt-6 mb-6"
                                style={{
                                    width: '50px',
                                    height: '2.533px',
                                    flexShrink: 0,
                                    borderBottom: '2px solid #2EAAFA',
                                }}
                            />

                            <strong className="text-3xl ">
                                Still do you have any questions to know?<br />
                                Feel free to ask our experts here.<br />
                            </strong>
                            <div className="mt-12">
                                <form>
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative flex items-center">
                                        <div className="relative w-full items-center flex flex-row">
                                            <button className="btn-outline-3 border bg-white border-white  hover:bg-white hover:text-primary" style={{ width: "250px", height: "60px" }}> ASK YOUR QUESTIONS</button>

                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="mt-12 max-w-3xl mx-auto p-4">
                            {faqData.map((item, index) => (
                                <div
                                    className={`bg-white rounded-lg p-4 mb-4 cursor-pointer relative w-full ${openQuestion === index ? 'h-auto' : 'w-[745px]'
                                        }`}
                                    key={index}
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">{item.question}</h3>
                                        <div className="text-2xl font-bold">
                                            {openQuestion === index ? "-" : "+"}
                                        </div>
                                    </div>
                                    {/* Display answer container */}
                                    <div
                                        className={`${openQuestion === index ? 'block' : 'hidden'
                                            } bg-white transition-height duration-300 ease-in-out overflow-hidden w-full`}
                                        style={{ maxHeight: openQuestion === index ? "1000px" : "0" }}
                                    >
                                        <p className="mt-2 text-gray-700">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}