import React from 'react'

const Features = () => {
    return (
        <section id='features' class="mt-12 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div class="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <p class="relative mb-4">
                    <strong class="text-3xl">Our Expertise</strong><br />
                    <strong class="text-secondary">We have quality partners in variety of destinations around the
                        globe.</strong>
                </p>
            </div>
            <div class="mt-12 mb-12 flex flex-col gap-y-16 lg:flex-row lg:gap-x-20 lg:gap-y-0">

                <div class="container my-12 mx-auto px-4 md:px-12 ml-auto" style={{ paddingLeft: "120px" }} >
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">

                        {/* <!-- Column --> */}
                        <div class="my-1 px-5 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            {/* <!-- Article --> */}
                            <article class="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8466 29.3537C19.805 25.8636 16.0228 23.5196 11.6936 23.5196C7.36431 23.5196 3.58215 25.8636 1.54051 29.3537H21.8466ZM27.2325 50H48.2038C48.526 50 48.8033 49.8671 49.0055 49.6156C49.2075 49.3643 49.2782 49.0645 49.2097 48.7491C48.0582 43.4515 43.3508 39.4841 37.7182 39.4841C32.0854 39.4841 27.3779 43.4515 26.2265 48.7491C26.158 49.0645 26.2287 49.3643 26.4308 49.6156C26.6329 49.8671 26.9103 50 27.2325 50ZM37.7182 26.5368C41.0024 26.5368 43.6648 29.2044 43.6648 32.4948C43.6648 35.7853 41.0023 38.4527 37.7182 38.4527C34.4339 38.4527 31.7716 35.7852 31.7716 32.4948C31.7716 29.2043 34.434 26.5368 37.7182 26.5368ZM1.02941 31.0039H30.2708C30.1751 31.4861 30.1245 31.9844 30.1245 32.4948C30.1245 35.0041 31.3376 37.23 33.2081 38.6159C28.9478 40.142 25.6217 43.7761 24.6171 48.398C24.5758 48.5882 24.5552 48.7792 24.5547 48.9684H1.02941C0.462412 48.9684 0 48.5051 0 47.937V32.0353C0 31.4672 0.462412 31.0039 1.02941 31.0039ZM45.1656 31.0039H48.3824C48.9494 31.0039 49.4118 31.4672 49.4118 32.0353V44.6874C47.8269 41.8631 45.2651 39.7039 42.2282 38.616C44.0988 37.2301 45.3118 35.0041 45.3118 32.4948C45.3118 31.9844 45.2613 31.4861 45.1656 31.0039ZM47.0955 16.9131C47.0955 18.4627 45.8341 19.7264 44.2876 19.7264H31.5922L26.0976 25.4572V19.7264H23.7216C22.175 19.7264 20.9136 18.4627 20.9136 16.9131C20.9136 12.2132 20.9136 7.51327 20.9136 2.81329C20.9136 1.26375 22.175 0 23.7216 0H44.2876C45.8341 0 47.0955 1.26375 47.0955 2.81329V16.9131ZM40.9458 9.63955L34.3487 11.3953C33.9278 11.5073 33.4848 11.5052 33.065 11.39L26.4877 9.63955V13.0034C35.1165 14.5842 32.3168 14.5842 40.9457 13.0034V9.63955H40.9458ZM42.8257 12.2073L42.2418 12.4989V16.2125L43.6492 15.297L45.0566 16.2125V12.4989L44.4728 12.2073V6.7614C44.5148 6.69353 44.5474 6.61845 44.5688 6.53717C44.6843 6.0975 44.4221 5.6473 43.9834 5.53158L33.9379 2.85805C33.8019 2.81989 33.6543 2.81628 33.5078 2.85485L23.4617 5.52849C23.1799 5.59883 22.944 5.81686 22.865 6.11813C22.7495 6.5578 23.0117 7.008 23.4504 7.12372L33.4959 9.79715C33.6319 9.83531 33.7795 9.83892 33.926 9.80035L42.8258 7.43179V12.2073H42.8257ZM11.6936 9.54085C14.9778 9.54085 17.6402 12.2083 17.6402 15.4988C17.6402 18.7893 14.9778 21.4568 11.6936 21.4568C8.40937 21.4568 5.747 18.7893 5.747 15.4988C5.747 12.2084 8.40947 9.54085 11.6936 9.54085Z"
                                            fill="#2EAAFA" />
                                    </svg>
                                </div>

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black" href="#">
                                            <strong>Career Counseling</strong>
                                        </a>
                                    </h1>

                                </header>

                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <p class="ml-2 text-sm text-dark">
                                            Get a full view so you know where to<br />
                                            save. Track spending, deta keep tab<br />
                                            subscription lorem ipsum text
                                        </p>
                                    </a>


                                </footer>
                                <div class="ml-4 text-secondary">
                                    <a class="no-underline" href="#">
                                        <div className="flex items-center">
                                            <div>Learn More</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                        </div>

                                    </a>
                                </div>
                            </article>
                            {/* <!-- END Article --> */}

                        </div>
                        {/* <!-- END Column --> */}

                        {/* <!-- Column --> */}
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            {/* <!-- Article --> */}
                            <article class="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="50" viewBox="0 0 61 50"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M60.7175 47.9412C60.6463 48.0653 60.5229 48.1351 60.378 48.1327L58.6652 48.1233C58.5204 48.1233 58.3958 48.1942 58.3222 48.3208L57.4783 49.8025C57.4047 49.9302 57.2836 50 57.1388 50C56.994 50 56.8729 49.929 56.7993 49.8061L54.7743 46.3128L55.0129 46.1449L56.3684 46.1378C57.4925 46.1342 58.4884 45.4838 58.943 44.4822L60.7235 47.5497C60.7911 47.6727 60.7911 47.817 60.7175 47.9412ZM48.0632 46.1401C46.9427 46.1307 45.9539 45.4803 45.5029 44.4774L43.7224 47.5486C43.6512 47.6727 43.6512 47.817 43.7224 47.9412C43.796 48.0653 43.9206 48.1351 44.0619 48.1327L45.7783 48.1233C45.9231 48.1233 46.0477 48.1942 46.1177 48.3208L46.9652 49.8025C47.0365 49.9302 47.1599 50 47.3011 50C47.446 50 47.5706 49.929 47.6406 49.8061L49.6692 46.3069L49.4603 46.1555L48.0632 46.1401ZM28.8342 15.9376H46.0002C46.4275 15.9376 46.8275 16.0854 47.148 16.3396C47.4614 16.5915 47.6928 16.9498 47.7878 17.372C47.8721 17.7575 48.0739 18.1064 48.3528 18.3843C48.6317 18.6622 48.9819 18.8632 49.3689 18.9472C49.7926 19.0406 50.1523 19.2724 50.4051 19.5846C50.6603 19.9027 50.8087 20.3024 50.8087 20.7281V28.1794C51.7713 27.6295 52.9618 27.6827 53.877 28.3402L54.9809 29.1314L55.7785 29.1385V12.8712C55.7785 11.5006 54.6545 10.3807 53.2787 10.3807H26.4175L27.6828 11.6413C28.8437 12.7931 29.2508 14.4322 28.8342 15.9376ZM43.8435 42.0851C42.8642 41.365 42.4571 40.1008 42.8274 38.9478L43.2441 37.66L43.0458 37.0332H22.0637C21.6328 37.0332 21.2328 36.8854 20.9159 36.6312C20.599 36.3769 20.3711 36.021 20.2761 35.5988C20.1883 35.2133 19.99 34.8609 19.7111 34.5865C19.4322 34.3086 19.0784 34.1076 18.6915 34.0201C18.2677 33.929 17.9105 33.6984 17.6588 33.3862C17.4036 33.0681 17.2553 32.6684 17.2553 32.2403V28.1605C17.2149 28.1806 17.1781 28.2042 17.1413 28.2279C15.6065 29.1633 13.7121 29.0829 12.283 28.0836V40.0972C12.283 41.4678 13.4106 42.5913 14.7863 42.5913H44.5331L43.8435 42.0851ZM46.9664 19.7655C47.4744 20.2716 48.1202 20.6441 48.8478 20.8251V29.1456H48.0727C46.8513 29.1527 45.7818 29.9237 45.3913 31.0767L44.9509 32.3976L43.8542 33.1982C43.2215 33.657 42.8274 34.3417 42.7206 35.0785H22.1586C21.9806 34.3547 21.6067 33.7079 21.0987 33.2041C20.5907 32.698 19.9449 32.3255 19.215 32.1445V26.8644C22.6465 24.4272 25.5107 21.4471 27.8253 17.8911H45.9041C46.0845 18.6161 46.4584 19.2594 46.9664 19.7655ZM27.6425 21.945C27.6425 22.4842 28.0805 22.9206 28.6217 22.9206H39.4386C39.9799 22.9206 40.4214 22.4842 40.4214 21.945C40.4214 21.4057 39.9811 20.9693 39.4386 20.9693H28.6217C28.0805 20.9693 27.6425 21.4057 27.6425 21.945ZM43.8945 31.0258C43.8945 30.4866 43.4565 30.0467 42.9153 30.0467H25.1463C24.6074 30.0467 24.167 30.4854 24.167 31.0258C24.167 31.5663 24.6074 32.0014 25.1463 32.0014H42.9153C43.4565 32.0014 43.8945 31.5651 43.8945 31.0258ZM43.8945 26.4836C43.8945 25.9467 43.4565 25.508 42.9153 25.508H25.1463C24.6074 25.508 24.167 25.9467 24.167 26.4836C24.167 27.0229 24.6074 27.4628 25.1463 27.4628H42.9153C43.4565 27.4628 43.8945 27.0229 43.8945 26.4836ZM56.3601 44.1865L54.658 44.1936C54.4693 44.1936 54.3043 44.2445 54.1536 44.3545L52.7339 45.3632C52.4206 45.5843 52.0206 45.5843 51.7108 45.3596L50.3279 44.3675C50.176 44.2563 50.0122 44.2031 49.8235 44.2031L48.081 44.1901C47.6976 44.1865 47.3747 43.9488 47.2572 43.587L46.7255 41.9752C46.6649 41.7978 46.564 41.6606 46.4121 41.5459L45.0091 40.5135C44.7029 40.2888 44.5782 39.9069 44.6957 39.545L45.2168 37.9296C45.2738 37.7487 45.2738 37.5808 45.2168 37.3998L44.6922 35.7442C44.5782 35.3788 44.7029 35.0004 45.0115 34.7757L46.3848 33.7729C46.5391 33.6618 46.64 33.5246 46.7005 33.3437L47.2525 31.6975C47.3736 31.3357 47.6964 31.1003 48.0798 31.1003L49.7819 31.0932C49.9742 31.0932 50.1356 31.04 50.2899 30.9324L51.7096 29.9237C52.0194 29.7026 52.4194 29.7026 52.7327 29.9237L54.112 30.9194C54.2663 31.027 54.4277 31.0802 54.6165 31.0838L56.3589 31.0968C56.7423 31.1003 57.0652 31.3345 57.1863 31.6963L57.718 33.3082C57.7786 33.4891 57.8759 33.6263 58.0314 33.7374L59.4308 34.7698C59.7406 34.9981 59.8617 35.3765 59.7442 35.7419L59.2255 37.3573C59.165 37.5346 59.165 37.7061 59.2219 37.887L59.7466 39.5426C59.8605 39.9045 59.7371 40.2829 59.4308 40.5111L58.0551 41.514C57.9032 41.6251 57.8023 41.7623 57.7418 41.9397L57.1898 43.5893C57.0699 43.9512 56.7435 44.183 56.3601 44.1865ZM55.8213 41.2301C56.7435 40.3113 57.3121 39.0448 57.3121 37.6434C57.3121 36.2421 56.7435 34.9756 55.8213 34.0567C54.899 33.1379 53.6277 32.5679 52.2212 32.5679C50.8146 32.5679 49.5398 33.1379 48.6211 34.0567C47.6988 34.9756 47.1267 36.2421 47.1267 37.6434C47.1267 39.0448 47.6988 40.3113 48.6211 41.2301C49.5398 42.149 50.8146 42.7154 52.2212 42.7154C53.6277 42.7154 54.9002 42.1478 55.8213 41.2301ZM52.2212 34.5227C51.357 34.5227 50.5724 34.8715 50.0074 35.438C49.4389 36.0009 49.0887 36.7825 49.0887 37.6434C49.0887 38.5043 49.4389 39.286 50.0074 39.8489C50.5724 40.4154 51.357 40.7642 52.2212 40.7642C53.0865 40.7642 53.8699 40.4154 54.4349 39.8489C54.9999 39.286 55.3536 38.5043 55.3536 37.6434C55.3536 36.7814 54.9999 36.0009 54.4349 35.438C53.8699 34.8703 53.0865 34.5227 52.2212 34.5227ZM16.1193 26.5605C20.2179 24.0665 23.818 20.7115 26.6644 16.0617C27.2662 15.0731 27.119 13.8397 26.2976 13.0214L23.1581 9.88995L19.5449 17.767C19.1983 18.5215 18.593 19.1246 17.8357 19.4699L9.92925 23.0696L13.0688 26.1974C13.8878 27.017 15.1294 27.1636 16.1193 26.5605ZM6.49889 27.0205L3.37359 23.9068L17.0202 17.6948C17.3467 17.5435 17.609 17.2821 17.7609 16.9569L25.0525 1.05741C25.2175 0.702645 25.1937 0.377441 24.9884 0.172858C24.783 -0.0317244 24.4531 -0.0553755 24.097 0.105453L8.1381 7.37346C7.81169 7.52128 7.54936 7.78263 7.40099 8.11138L0.105846 24.0062C-0.0555823 24.3609 -0.0318428 24.6897 0.173504 24.8943C0.37885 25.0988 0.705268 25.1225 1.06136 24.9581L1.47205 24.7736L1.71064 25.0113L5.11251 28.4006L5.98374 29.2686C6.36714 29.6505 6.98674 29.6505 7.37013 29.2686C7.75352 28.8901 7.75352 28.2693 7.37013 27.8873L6.49889 27.0205Z"
                                            fill="#2EAAFA" />
                                    </svg>
                                </div>

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black" href="#">
                                            <strong>Scholarship</strong>
                                        </a>
                                    </h1>

                                </header>

                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <p class="ml-2 text-sm text-dark">
                                            Get a full view so you know where to<br />
                                            save. Track spending, deta keep tab<br />
                                            subscription lorem ipsum text
                                        </p>
                                    </a>


                                </footer>
                                <div class="ml-4 text-secondary">
                                    <a class="no-underline" href="#">
                                        <div className="flex items-center">
                                            <div>Learn More</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                        </div>

                                    </a>
                                </div>
                            </article>
                            {/* <!-- END Article --> */}

                        </div>
                        {/* <!-- END Column --> */}

                        {/* <!-- Column --> */}
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            {/* <!-- Article --> */}
                            <article class="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                        fill="none">
                                        <g clip-path="url(#clip0_113_1856)">
                                            <path
                                                d="M44.2707 8.36601H33.3332V7.84492C33.3332 5.83458 31.6978 4.19922 29.6875 4.19922H20.3125C18.3022 4.19922 16.6668 5.83458 16.6668 7.84492V8.36601H5.72929C2.56882 8.36601 0 10.9344 0 14.0949V40.1367C0 43.2972 2.56882 45.866 5.72929 45.866H44.2707C47.4312 45.866 50 43.2972 50 40.1367V14.0949C50 10.9344 47.4312 8.36601 44.2707 8.36601ZM29.1687 12.5324H20.8332V8.36601H29.1668L29.1687 12.5324ZM15.625 18.7824C18.4959 18.7824 20.8332 21.1201 20.8332 23.991C20.8332 26.8616 18.4959 29.1992 15.625 29.1992C12.7541 29.1992 10.4168 26.8616 10.4168 23.991C10.4168 21.1201 12.7541 18.7824 15.625 18.7824ZM25 38.0535C25 38.916 24.3 39.616 23.4375 39.616H7.8125C6.95 39.616 6.25 38.916 6.25 38.0535V37.0117C6.25 33.8512 8.81882 31.2824 11.9793 31.2824H19.2707C22.4312 31.2824 25 33.8512 25 37.0117V38.0535ZM42.1875 39.616H30.7293C29.8668 39.616 29.1668 38.916 29.1668 38.0535C29.1668 37.191 29.8668 36.491 30.7293 36.491H42.1875C43.05 36.491 43.75 37.191 43.75 38.0535C43.75 38.916 43.05 39.616 42.1875 39.616ZM42.1875 31.2824H30.7293C29.8668 31.2824 29.1668 30.5824 29.1668 29.7199C29.1668 28.8574 29.8668 28.1574 30.7293 28.1574H42.1875C43.05 28.1574 43.75 28.8574 43.75 29.7199C43.75 30.5824 43.05 31.2824 42.1875 31.2824ZM42.1875 22.9492H30.7293C29.8668 22.9492 29.1668 22.2492 29.1668 21.3867C29.1668 20.5242 29.8668 19.8242 30.7293 19.8242H42.1875C43.05 19.8242 43.75 20.5242 43.75 21.3867C43.75 22.2492 43.05 22.9492 42.1875 22.9492Z"
                                                fill="#2EAAFA" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_113_1856">
                                                <rect width="50" height="50" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black" href="#">
                                            <strong>Admission Guidance</strong>
                                        </a>
                                    </h1>

                                </header>

                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <p class="ml-2 text-sm text-dark">
                                            Get a full view so you know where to<br />
                                            save. Track spending, deta keep tab<br />
                                            subscription lorem ipsum text
                                        </p>
                                    </a>


                                </footer>
                                <div class="ml-4 text-secondary">
                                    <a class="no-underline" href="#">
                                        <div className="flex items-center">
                                            <div>Learn More</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                        </div>

                                    </a>
                                </div>
                            </article>
                            {/* <!-- END Article --> */}

                        </div>
                        {/* <!-- END Column --> */}

                        {/* <!-- Column --> */}
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            {/* <!-- Article --> */}
                            <article class="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50"
                                        fill="none">
                                        <path
                                            d="M22.43 35.2997V37.0596C22.43 40.3948 17.4092 43.0984 11.215 43.0984C5.02088 43.0984 0 40.3948 0 37.0596V35.2997C2.46385 37.4392 6.48401 38.785 11.215 38.785C15.946 38.785 19.9662 37.4374 22.43 35.2997Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M22.43 42.2012V43.9611C22.43 47.2963 17.4092 50 11.215 50C5.02088 50 0 47.2963 0 43.9611V42.2012C2.46385 44.3407 6.48401 45.6865 11.215 45.6865C15.946 45.6865 19.9662 44.339 22.43 42.2012Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M22.43 30.1581C22.43 33.4932 17.4092 36.1969 11.215 36.1969C5.02088 36.1969 0 33.4932 0 30.1581C0 26.8229 5.02088 24.1192 11.215 24.1192C17.4092 24.1192 22.43 26.8229 22.43 30.1581Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M37.0959 38.785C41.8269 38.785 45.847 37.4374 48.3109 35.2997V37.0596C48.3109 40.3948 43.29 43.0984 37.0959 43.0984C30.9017 43.0984 25.8809 40.3948 25.8809 37.0596V35.2997C28.3447 37.4374 32.3649 38.785 37.0959 38.785Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M37.0959 45.6865C41.8269 45.6865 45.847 44.339 48.3109 42.2012V43.9611C48.3109 47.2963 43.29 50 37.0959 50C30.9017 50 25.8809 47.2963 25.8809 43.9611V42.2012C28.3447 44.339 32.3649 45.6865 37.0959 45.6865Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M48.3109 30.1581C48.3109 33.4932 43.29 36.1969 37.0959 36.1969C30.9017 36.1969 25.8809 33.4932 25.8809 30.1581C25.8809 26.8229 30.9017 24.1192 37.0959 24.1192C43.29 24.1192 48.3109 26.8229 48.3109 30.1581Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M32.7822 13.1025V19.5779C32.7822 19.5779 29.0847 22.3938 24.1553 22.3938C19.2258 22.3938 15.5283 19.5762 15.5283 19.5762V13.1025L24.1553 16.5533L32.7822 13.1025Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M40.2479 7.32945L37.9583 8.24563V14.0308C38.4655 14.3311 38.821 14.8608 38.821 15.4923V18.943H35.3702V15.4923C35.3702 14.8608 35.7256 14.3311 36.2329 14.0308V8.93578L24.3415 13.6927C24.2225 13.741 24.0896 13.741 23.9706 13.6927L8.0625 7.32945C7.64323 7.16208 7.64323 6.56855 8.0625 6.39946L23.9688 0.0362331C24.0879 -0.0120777 24.2208 -0.0120777 24.3398 0.0362331L40.2462 6.39946C40.6671 6.56855 40.6671 7.16208 40.2479 7.32945Z"
                                            fill="#2EAAFA" />
                                    </svg>
                                </div>

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black" href="#">
                                            <strong>Student Loans</strong>
                                        </a>
                                    </h1>

                                </header>

                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <p class="ml-2 text-sm text-dark">
                                            Get a full view so you know where to<br />
                                            save. Track spending, deta keep tab<br />
                                            subscription lorem ipsum text
                                        </p>
                                    </a>


                                </footer>
                                <div class="ml-4 text-secondary">
                                    <a class="no-underline" href="#">
                                        <div className="flex items-center">
                                            <div>Learn More</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                        </div>

                                    </a>
                                </div>
                            </article>
                            {/* <!-- END Article --> */}

                        </div>
                        {/* <!-- END Column --> */}

                        {/* <!-- Column --> */}
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            {/* <!-- Article --> */}
                            <article class="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="50" viewBox="0 0 53 50"
                                        fill="none">
                                        <path
                                            d="M39.0647 15.8002C45.7673 15.8002 51.2236 21.2565 51.2236 27.9591C51.2236 30.786 50.2357 33.537 48.4347 35.7104C48.2219 35.9611 48.1991 36.3259 48.3815 36.5995L50.3725 39.738L45.3114 38.6133C45.1366 38.5753 44.9466 38.5981 44.787 38.6817C43.0392 39.6164 41.0634 40.1104 39.0723 40.1104C37.9704 40.1104 33.2426 39.738 27.5061 35.7104C27.5744 36.2347 27.4909 36.6794 27.5061 37.2189C27.8002 37.9544 32.6543 41.3034 39.0723 41.6302C41.2153 41.6302 43.3431 41.1211 45.2506 40.1559L51.8316 41.615C51.8848 41.6302 51.938 41.6302 51.9988 41.6302C52.2419 41.6302 52.4775 41.5086 52.6219 41.3034C52.7967 41.0527 52.8043 40.7183 52.6447 40.4599L49.9697 36.2347C51.7784 33.8637 52.7663 30.9456 52.7663 27.9515C52.7663 20.4053 46.6336 14.2727 39.0875 14.2727C31.5414 14.2727 25.8723 19.9798 25.4468 27.1459C25.9559 27.3055 26.4499 27.5031 26.9362 27.7159C27.0654 21.1197 32.4609 15.7926 39.0799 15.7926L39.0647 15.8002Z"
                                            fill="#2EAAFA" />
                                        <path d="M32.9854 22.2596H45.1442V24.5394H32.9854V22.2596Z" fill="#2EAAFA" />
                                        <path d="M32.9854 26.8192H45.1442V29.0989H32.9854V26.8192Z" fill="#2EAAFA" />
                                        <path d="M36.0249 31.3787H45.1441V33.6585H36.0249V31.3787Z" fill="#2EAAFA" />
                                        <path
                                            d="M25.4315 2.52822C25.4266 2.1298 25.3281 1.7381 25.1441 1.38471C24.96 1.03132 24.6955 0.726116 24.3719 0.493715C24.0409 0.250552 23.656 0.0911543 23.25 0.0291515C22.844 -0.0328514 22.4291 0.00438508 22.0406 0.137677L5.48486 5.91906H25.4315V2.52822Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M16.1066 30.9265C16.5135 30.9265 17.6409 28.892 17.802 24.9926H14.4111C14.5722 28.892 15.6997 30.9265 16.1066 30.9265Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M16.1066 17.3632C15.6997 17.3632 14.5722 19.3977 14.4111 23.2971H17.802C17.6409 19.3977 16.5135 17.3632 16.1066 17.3632Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M13.7665 30.5027C13.0996 28.7407 12.744 26.8763 12.7153 24.9926H9.38379C9.53998 26.2242 10.0312 27.3893 10.8041 28.3609C11.5769 29.3325 12.6016 30.0734 13.7665 30.5027Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M13.7665 17.787C12.6016 18.2163 11.5769 18.9571 10.8041 19.9288C10.0312 20.9004 9.53998 22.0655 9.38379 23.2971H12.7153C12.744 21.4134 13.0996 19.549 13.7665 17.787Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M0 10.1576V47.4568C0 48.1313 0.267936 48.7782 0.744866 49.2551C1.2218 49.732 1.86865 50 2.54313 50H29.6699C30.3443 50 30.9912 49.732 31.4681 49.2551C31.9451 48.7782 32.213 48.1313 32.213 47.4568V10.1576C32.213 9.48309 31.9451 8.83624 31.4681 8.35931C30.9912 7.88238 30.3443 7.61444 29.6699 7.61444H2.54313C1.86865 7.61444 1.2218 7.88238 0.744866 8.35931C0.267936 8.83624 0 9.48309 0 10.1576ZM22.8882 41.9467H9.32481C9.09999 41.9467 8.88437 41.8574 8.72539 41.6984C8.56641 41.5394 8.4771 41.3238 8.4771 41.099C8.4771 40.8742 8.56641 40.6586 8.72539 40.4996C8.88437 40.3406 9.09999 40.2513 9.32481 40.2513H22.8882C23.113 40.2513 23.3286 40.3406 23.4876 40.4996C23.6466 40.6586 23.7359 40.8742 23.7359 41.099C23.7359 41.3238 23.6466 41.5394 23.4876 41.6984C23.3286 41.8574 23.113 41.9467 22.8882 41.9467ZM11.8679 38.5559C11.8679 38.331 11.9573 38.1154 12.1162 37.9564C12.2752 37.7975 12.4908 37.7082 12.7157 37.7082H19.4973C19.7222 37.7082 19.9378 37.7975 20.0968 37.9564C20.2557 38.1154 20.345 38.331 20.345 38.5559C20.345 38.7807 20.2557 38.9963 20.0968 39.1553C19.9378 39.3143 19.7222 39.4036 19.4973 39.4036H12.7157C12.4908 39.4036 12.2752 39.3143 12.1162 39.1553C11.9573 38.9963 11.8679 38.7807 11.8679 38.5559ZM16.1065 15.6677C17.7831 15.6677 19.4221 16.1649 20.8161 17.0963C22.2102 18.0278 23.2967 19.3518 23.9383 20.9007C24.5799 22.4497 24.7478 24.1542 24.4207 25.7986C24.0936 27.443 23.2863 28.9535 22.1007 30.139C20.9152 31.3246 19.4047 32.1319 17.7603 32.459C16.1159 32.7861 14.4114 32.6182 12.8625 31.9766C11.3135 31.335 9.98952 30.2485 9.05804 28.8544C8.12657 27.4604 7.62939 25.8214 7.62939 24.1448C7.62939 21.8965 8.52251 19.7403 10.1123 18.1506C11.702 16.5608 13.8582 15.6677 16.1065 15.6677Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M22.829 23.2971C22.6728 22.0655 22.1815 20.9004 21.4087 19.9288C20.6359 18.9571 19.6112 18.2163 18.4463 17.787C19.1131 19.549 19.4688 21.4134 19.4975 23.2971H22.829Z"
                                            fill="#2EAAFA" />
                                        <path
                                            d="M22.829 24.9926H19.4975C19.4688 26.8763 19.1131 28.7407 18.4463 30.5027C19.6112 30.0734 20.6359 29.3325 21.4087 28.3609C22.1815 27.3893 22.6728 26.2242 22.829 24.9926Z"
                                            fill="#2EAAFA" />
                                    </svg>
                                </div>

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black" href="#">
                                            <strong>Visa Guidance</strong>
                                        </a>
                                    </h1>

                                </header>

                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <p class="ml-2 text-sm text-dark">
                                            Get a full view so you know where to<br />
                                            save. Track spending, deta keep tab<br />
                                            subscription lorem ipsum text
                                        </p>
                                    </a>


                                </footer>
                                <div class="ml-4 text-secondary">
                                    <a class="no-underline" href="#">
                                        <div className="flex items-center">
                                            <div>Learn More</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                        </div>

                                    </a>
                                </div>
                            </article>
                            {/* <!-- END Article --> */}

                        </div>
                        {/* <!-- END Column --> */}

                        {/* <!-- Column --> */}
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            {/* <!-- Article --> */}
                            <article class="overflow-hidden rounded-lg shadow-lg w-wi h-hi">

                                <div class="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M4.7 0.000344665C3.41165 0.000344665 2.35 1.06199 2.35 2.35033V43.8667H29.6398C28.121 42.1323 26.7935 39.8583 25.6741 37.3859C23.3612 32.2771 21.9334 26.3896 21.9334 22.7165C21.9334 19.7899 22.8833 17.0828 24.4884 14.8833H23.5001C22.2117 14.8833 21.1501 13.8216 21.1501 12.5333V6.26665C21.1501 4.97831 22.2117 3.91667 23.5001 3.91667H30.5501C31.8384 3.91667 32.9001 4.97831 32.9001 6.26665V9.61107C33.6636 9.47458 34.4478 9.39994 35.2501 9.39994C35.7804 9.39994 36.3025 9.43427 36.8167 9.49479V2.34998C36.8167 1.06164 35.7551 0 34.4667 0L4.7 0.000344665ZM8.61667 3.91698H15.6667C16.955 3.91698 18.0167 4.97863 18.0167 6.26696V12.5336C18.0167 13.8219 16.955 14.8836 15.6667 14.8836H8.61667C7.32832 14.8836 6.26667 13.8219 6.26667 12.5336V6.26696C6.26667 4.97863 7.32832 3.91698 8.61667 3.91698ZM35.25 10.9669C28.7514 10.9669 23.5 16.2183 23.5 22.7168C23.5 25.9662 24.8783 31.8277 27.1015 36.7384C28.2132 39.1937 29.5357 41.4223 30.9524 42.9928C32.3691 44.5633 33.8322 45.433 35.25 45.433C36.6678 45.433 38.131 44.5633 39.5476 42.9928C40.9643 41.4223 42.2868 39.1937 43.3985 36.7384C45.6217 31.8277 47 25.9661 47 22.7168C47 16.2183 41.7486 10.9669 35.25 10.9669ZM35.25 16.4502C38.7017 16.4502 41.5167 19.2652 41.5167 22.7168C41.5167 26.1685 38.7017 28.9835 35.25 28.9835C31.7983 28.9835 28.9833 26.1685 28.9833 22.7168C28.9833 19.2652 31.7983 16.4502 35.25 16.4502ZM8.61667 17.2336H15.6667C16.955 17.2336 18.0167 18.2952 18.0167 19.5835V25.8502C18.0167 27.1385 16.955 28.2001 15.6667 28.2001H8.61667C7.32832 28.2001 6.26667 27.1385 6.26667 25.8502V19.5835C6.26667 18.2952 7.32832 17.2336 8.61667 17.2336ZM8.61667 30.5501H15.6667C16.955 30.5501 18.0167 31.6118 18.0167 32.9001V39.1667C18.0167 40.4551 16.955 41.5167 15.6667 41.5167H8.61667C7.32832 41.5167 6.26667 40.4551 6.26667 39.1667V32.9001C6.26667 31.6118 7.32832 30.5501 8.61667 30.5501ZM0.783333 45.4333C0.350714 45.4333 0 45.7841 0 46.2167C0 46.6493 0.350714 47 0.783333 47H35.25C33.813 47 32.4815 46.3968 31.266 45.4333H0.783333Z"
                                            fill="#2EAAFA" />
                                    </svg>
                                </div>

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black" href="#">
                                            <strong>Student Accomodation</strong>
                                        </a>
                                    </h1>

                                </header>

                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <p class="ml-2 text-sm text-dark">
                                            Get a full view so you know where to<br />
                                            save. Track spending, deta keep tab<br />
                                            subscription lorem ipsum text
                                        </p>
                                    </a>


                                </footer>
                                <div class="ml-4 text-secondary">
                                    <a class="no-underline" href="#">
                                        <div className="flex items-center">
                                            <div>Learn More</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="16" height="16"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z" fill="rgba(46,170,250,1)"></path></svg>
                                        </div>

                                    </a>
                                </div>
                            </article>
                            {/* <!-- END Article --> */}

                        </div>
                        {/* <!-- END Column --> */}

                    </div>
                </div>
            </div>

        </section>
    )
  
}

export default Features
