import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Rectangle628, Vit } from '../assets';

import Card from "./CollegeCard"

import collegeinfo from "./collegedata"





// imageUrl: Rectangle628,
// imageUrl2: Vit,

const sortOptions = [
    { name: 'Trending', href: '#', current: true },
    { name: 'Most Popular', href: '#', current: false },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const initialFilters = [
    {
        id: 'state',
        name: 'State',
        options: [
            { value: 'delhi', label: 'New Delhi', checked: false },
            { value: 'gujarat', label: 'Gujarat', checked: false },
            { value: 'rajasthan', label: 'Rajasthan', checked: true },
            { value: 'maharastra', label: 'Maharastra', checked: false },
            { value: 'karnataka', label: 'Karnataka', checked: false },
            { value: 'goa', label: 'Goa', checked: false },
            { value: 'tamil_nadu', label: 'Tamil Nadu', checked: false },
        ],
    },
    {
        id: 'fees',
        name: 'Fees',
        options: [
            { value: 'less_than_Rs_50,000', label: 'Less than Rs 50,000', checked: false },
            { value: 'rs_50,000_-_1 Lakh', label: 'Rs 50,000 - 1 Lakh', checked: false },
            { value: 'rs_1-3_Lacs', label: 'Rs 1-3 Lacs', checked: true },
            { value: 'rs_5_Lacs_and_above', label: 'Rs 5 Lacs and above', checked: false },
        ],
    },
    {
        id: 'universities',
        name: 'Universities',
        options: [
            { value: 'vit', label: 'VIT', checked: false },
            { value: 'admin', label: 'Admin', checked: false },
            { value: 'cody_Fisher', label: 'Cody Fisher', checked: false },
            { value: 'eleanor_Pena', label: 'Eleanor Pena', checked: false },
            { value: 'floyd_Miles', label: 'Floyd Miles', checked: false },
            { value: 'jenny_Wilson', label: 'Jenny Wilson', checked: false },
            { value: 'jacob_Jones', label: 'Jacob Jones', checked: true },
            { value: 'kristin_Watson', label: 'Kristin Watson', checked: false },
            { value: 'millar_Richard', label: 'Millar Richard', checked: false },
            { value: 'kristin_Watson', label: 'Kristin Watson', checked: false },
        ],
    },
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function College() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filters, setFilters] = useState(initialFilters); // Initialize filters with initialFilters
    const [selectedSortOption, setSelectedSortOption] = useState('Trending'); // Track selected sort option




    // Function to handle search input change



    // Call filterColleges when filters or collegeinfo change

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };
    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option.name);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 6; // Number of results per page

    // Calculate the start and end index of the displayed results
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = Math.min(startIndex + resultsPerPage, collegeinfo.length);

    const totalPages = Math.ceil(collegeinfo.length / resultsPerPage);

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

    useEffect(() => {
        // Logic to automatically select checkboxes based on search input
        const input = searchInput.toLowerCase();
        const updatedFilters = [...filters]; // Create a copy of filters

        const universityOptions = updatedFilters.find((filter) => filter.id === 'universities').options;

        for (const option of universityOptions) {
            option.checked = option.label.toLowerCase().includes(input);
        }

        // Set the updated filters
        setFilters(updatedFilters);
    }, [searchInput, filters]);




    // Function to handle search input change
    return (
        <div>

            <div className="ele text-white mt-8 xl:h-80 py-12 xl:pt-12 overflow:hidden">
                <div className="xl:ml-16 mx-auto h-full px-12 flex flex-col xl:flex-row items-center justify-start">
                    <div className="mb-4">
                        <h2 className="text-secondary">Home / Colleges</h2>
                        <span className="mt-2 text-white text-5xl">Our Colleges</span>
                    </div>
                </div>
            </div>


            <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                        <div className="flex items-center justify-between px-4">
                                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                            <button
                                                type="button"
                                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                                onClick={() => setMobileFiltersOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>

                                        <Disclosure as="div" className="border-t mt-6 border-gray-200 px-4">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">Search</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            <div className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900">

                                                                <input
                                                                    type="text"
                                                                    placeholder="Search"
                                                                    className="block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    value={searchInput}
                                                                    onChange={handleSearchInputChange}
                                                                />
                                                            </div>

                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>


                                        {/* Filters */}
                                        <form className="mt-4 border-gray-200">
                                            <h3 className="sr-only">Categories</h3>


                                            {filters.map((section) => (
                                                <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                    {({ open }) => (
                                                        <>
                                                            <h3 className="-mx-2 -my-3 flow-root">
                                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                                    <span className="ml-6 flex items-center">
                                                                        {open ? (
                                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                        ) : (
                                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                        )}
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-6">
                                                                    {section.options.map((option, optionIdx) => (
                                                                        <div key={option.value} className="flex items-center">
                                                                            <input
                                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                name={`${section.id}[]`}
                                                                                defaultValue={option.value}
                                                                                type="checkbox"
                                                                                defaultChecked={option.checked}
                                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                            />
                                                                            <label
                                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                            >
                                                                                {option.label}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main className="mx-12 max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-gray-200  pt-12">

                            <div className="flex items-center ml-auto">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="group inline-flex justify-center font-medium text-customary hover:text-gray-900">
                                            Sort-by:
                                            <button className="ml-2 btn-4">
                                                {selectedSortOption}
                                                <ChevronDownIcon
                                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            </button>

                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">



                                                {sortOptions.map((option) => (
                                                    <Menu.Item key={option.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={option.href}
                                                                onClick={() => handleSortOptionSelect(option)}
                                                                className={classNames(
                                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                {option.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>





                                <button
                                    type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>



                        <section aria-labelledby="products-heading" className="pb-24">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                <form className="hidden border p-5 border-gray-200 gray-300 lg:block pt-6">
                                    <ul>
                                        <Disclosure as="div" defaultOpen={true} className="border-b border-gray-200">
                                            {({ open }) => (
                                                <>
                                                    <h3 className={`-my-3 flow-root ${open ? 'border-b border-transparent' : 'border-b border-gray-200'}`}>
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">Search</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            <div className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900">

                                                                <input
                                                                    type="text"
                                                                    placeholder="Search"
                                                                    className="block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    value={searchInput}
                                                                    onChange={handleSearchInputChange}
                                                                />
                                                            </div>

                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </ul>
                                    <h3 className="sr-only">Categories</h3>


                                    {filters.map((section) => (
                                        <Disclosure as="div" defaultOpen={true} key={section.id} className="border-b border-gray-200 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                                {/* Filters */}

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    {/* Your content */}
                                    <section aria-labelledby="products-heading" className="pb-24 pt-6">

                                        <h2 id="products-heading" className="sr-only">
                                            Products
                                        </h2>
                                        <p className="text-gray-600">
                                            Showing {startIndex + 1}-{endIndex} of {collegeinfo.length} results
                                        </p>

                                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                                            {collegeinfo.slice(startIndex, endIndex).map((item) => (
                                                // Map over your data and render a Card for each item
                                                <Card
                                                    key={item.id} // Make sure to provide a unique key for each card
                                                    name={item.name}
                                                    description={item.description}
                                                    imageUrl={item.imageUrl}
                                                    imageUrl2={item.imageUrl2}
                                                    rank={item.rank}
                                                    feerange={item.feerange}
                                                    placementrange={item.placementrange}
                                                />
                                            ))}
                                        </div>
                                    </section>

                                </div>


                            </div>


                        </section>
                        <div className="mt-2 mb-16 flex items-center justify-center space-x-4">
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

                    </main>
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
        </div>
    )
}
