import { Logo, downArrow, searchIcon, globeIcon } from "../assets";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const NavItems = () => {
  return (
    <>
      <div className="md:hidden lg:flex items-center mb-2 md:mb-0">
        <div>College Finder</div>
        <img src={downArrow} alt="" />
      </div>
      <div className="flex items-center mb-2 md:mb-0">
        <div>Courses</div>
        <img src={downArrow} alt="" />
      </div>
      <div className="flex items-center mb-2 md:mb-0">
        <div>Services</div>
        <img src={downArrow} alt="" />
      </div>
      <div className="md:hidden xl:flex items-center mb-2 md:mb-0">
        <div>Community</div>
        <img src={downArrow} alt="" />
      </div>
      <div className="flex items-center mb-2 md:mb-0">
        <div>Counsellor</div>
      </div>
      <div className="md:hidden xxl:flex xxl:items-center">
        <img src={searchIcon} alt="" />
      </div>

      <div className="md:hidden xl:flex xl:items-center ">
        <img src={globeIcon} alt="" />
        <div className="ml-2">Login</div>
      </div>

      <div className="flex items-center">
        <div>
          <button className="btn hover:bg-white hover:text-primary">Sign Up</button>
        </div>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <header className="py-8 px-10 md:px-16 lg:px-20 xl:px-24 grid grid-cols-3">

      <div className="col-span-1">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div id="page-wrap" className="col-span-2 md:flex md:gap-6 md:justify-end">
        <div id="navbar-active" className="md:flex md:gap-6 md:justify-end">
          <NavItems />
        </div>

        <div id="menubar-active" className="md:flex md:gap-6 md:justify-end">
          <Menu pageWrapId={"page-wrap"}
            right
          >
            <NavItems />
          </Menu>
        </div>

      </div>
    </header>
  );
};

export default Header;

