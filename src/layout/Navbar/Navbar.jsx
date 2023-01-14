import React, { useState } from "react";
// import { BsChatSquareDots } from 'react-icons/bs';
import { BsCart3, BsPerson, BsTelephone } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_transparent_background 3.png";
import Profile from "../../components/Profile";

const Navbar = (props) => {
  // const { marginTop, absolute } = props;
  const [nav, setNav] = useState(false);

  const [showProfile, setShowProfile] = useState(false);
  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-[50px] flex justify-around items-center  z-10 bg-white shadow sticky  inset-x-0 top-0 p-4">
        <ul className="hidden sm:flex uppercase cursor-pointer text-xs">
          <li className="border-b-2 border-transparent hover:text-gray-800  hover:border-yellow-600 mx-1.5 sm:mx-6">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:text-gray-800  hover:border-yellow-600 mx-1.5 sm:mx-6">
            <NavLink to="/home/property">Property</NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:text-gray-800  hover:border-yellow-600 mx-1.5 sm:mx-6">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:text-gray-800  hover:border-yellow-600 mx-1.5 sm:mx-6">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="border-b-2 border-transparent hover:text-gray-800  hover:border-yellow-600 mx-1.5 sm:mx-6">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="flex justify-center ml-10 mr-10">
          <div className="hidden md:flex items-center ">
            <img src={Logo} alt="shortlets and more Logo" className="w-28" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="hidden md:flex items-center px-6">
            <BsTelephone size={18} className="mr-2" />
            <h6 className="text-sm">(+234) 5678 4895</h6>
            <BsPerson
              size={18}
              className="ml-4"
              // onClick={() => navigate("/login")}
              onClick={handleProfile}
            />
            <BsCart3
              size={18}
              className="ml-4"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
        {/* Hamburger Icon */}
        <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={20} className="ml-28 cursor-pointer" />
        </div>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-2xl py-4">
              <NavLink to="/property">Property</NavLink>
            </li>
            <li className="text-2xl py-4">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="text-2xl py-4">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="text-2xl py-4">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {showProfile && <Profile />}
    </>
  );
};

export default Navbar;
