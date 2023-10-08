// import React from 'react'
import { campsMazeLogoFooter, facebook, twitter, website, linkedin, github } from "../assets"
const Footer = () => {
  return (
    <>
      <section className="bg-dd py-12 xl:pt-12 xl:pb-16 overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row item-center justify-between h-full">
            <div>
              <div>
                <img src={campsMazeLogoFooter} alt="/" className="mt-12" />
              </div>

              <div className="mt-6 text-xl text-ld">
                Faucibus quis fringilla scelerisque dui. Amet <br />
                parturient dui venenatis amet sagittis viverra<br />
                vel tincidunt. Orci tincidunt.
              </div>
            </div>
            <div className="flex" >
              <div className="mt-16">
                <h1 className="text-white text-2xl">Company</h1>
                <div className="mt-4">
                  <ul>
                    <li className="text-xl text-ld mb-2">
                      Home
                    </li>
                    <li className="text-xl text-ld mb-2">
                      About us
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Courses
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Instructors
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 ml-36">
                <h1 className="text-white text-2xl">Resources</h1>
                <div className="mt-4">
                  <ul>
                    <li className="text-xl text-ld mb-2">
                      Community
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Video Guides
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Documentation
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Certification
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Scholarships
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 ml-36">
                <h1 className="text-white text-2xl">Help</h1>
                <div className="mt-4">
                  <ul>
                    <li className="text-xl text-ld mb-2">
                      Customer Support
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Terms & Conditions
                    </li>
                    <li className="text-xl text-ld mb-2">
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-mdd py-8 lg:pt-6 lg:pb-5">
        <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
          <div className="text-fdd flex justify-center lg:justify-normal">
            © 2023 CampusMaze. All rights reserved.
          </div>
          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <div className="flex items-center">
              <img src={twitter} alt="" />
            </div>
            <div className="flex items-center">
              <img src={linkedin} alt="" />
            </div>
            <div className="flex items-center">
              <img src={facebook} alt="" />
            </div>
            <div className="flex items-center">
                <img src={github} alt="" />
            </div>
            <div className="flex items-center">
                <img src={website} alt="" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
