import { group19291 } from "../assets"
const Header = () => {
  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="flex justify-center lg:justify-normal">
          <a href="#">
            <img src={group19291} alt="CampusMaze" />
          </a>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div>College Finder<i className="ri-arrow-down-s-line"></i></div>
          <div>Courses<i className="ri-arrow-down-s-line"></i></div>
          <div>Services<i className="ri-arrow-down-s-line"></i></div>
          <div>Community</div>
          <div>Counsellor</div>
          <i className="ri-search-line"></i>
          <div><i className="ri-global-line"></i>Login</div>
          <div><button className="btn">Sign Up</button></div>
        </div>
      </div>
    </header>
  )
}

export default Header
