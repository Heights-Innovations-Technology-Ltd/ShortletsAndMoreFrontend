import React, { useEffect, useState } from "react";
// import { BsChatSquareDots } from 'react-icons/bs';
import { BsCart3, BsPerson, BsTelephone } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_transparent_background 3.png";
import Profile from "../../components/Profile";
import { ReactComponent as LogoIcon } from "../../assets/svg/brandLogo.svg";
import { ReactComponent as MobileLogoIcon } from "../../assets/svg/mobileLogo.svg";
import mobileLogo from "../../assets/mobileLogo.png";
import {
  CartIconContainer,
  Length,
  LengthContainer,
  MobileDropWrapper,
  MobileLinkWrapper,
  MobileLogo,
  MobileNavContainer,
  NavContainer,
  NavLinksContainer,
  NavLinkText,
  NavLogoContainer,
  NavRightContainer,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../store/Slice/roomSlice";
import CartShow from "../../components/Cart/cartShow";
import { FaAlignRight } from "react-icons/fa";

const Navbar = (props) => {
  // const { marginTop, absolute } = props;
  const [itemContainer, setItemContainer] = useState(0);
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  const cartShow = useSelector((store) => store.ApartmentDataReducer.showCart);

  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();

  const handleToggle = () => {
    dispatch(setShowCart());
  };

  useEffect(() => {
    const localData = localStorage.getItem("cartItemId");
    let newItemContainer = JSON.parse(localData);

    setItemContainer(newItemContainer && newItemContainer.length);
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
      setChange(true);
    } else {
      setChange(false);
    }
  });

  const handleDrop = () => {
    setMobile(!mobile);
  };
  useEffect(() => {}, []);
  return (
    <>
      {/* <div className="w-full min-h-[50px] flex justify-around items-center  z-10 bg-white shadow sticky  inset-x-0 top-0 p-4">
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
      {/* <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={20} className="ml-28 cursor-pointer" />
        </div>
        {/* Mobile Menu */}
      {/* <div
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
      </div> */}

      <NavContainer
        boxShadow={change ? "0px 10px 30px rgba(13, 38, 59, 0.05)" : ""}
      >
        <NavLinksContainer>
          <NavLink to="/home">
            <NavLinkText>HOME</NavLinkText>
          </NavLink>
          <NavLink to="/property">
            <NavLinkText>PROPERTY</NavLinkText>
          </NavLink>
          <NavLink>
            <NavLinkText>ABOUT</NavLinkText>
          </NavLink>
          <NavLink to="/contact">
            <NavLinkText>CONTACT</NavLinkText>
          </NavLink>
        </NavLinksContainer>
        <NavLogoContainer>
          <LogoIcon />
        </NavLogoContainer>
        <NavRightContainer>
          <BsTelephone size={20} />
          <NavLinkText>(+234) 5678 4895</NavLinkText>
          <BsPerson
            size={20}
            // onClick={() => navigate("/login")}
            onClick={handleProfile}
          />

          <CartIconContainer onClick={handleToggle}>
            {/* <CartIcon /> */}
            <BsCart3 size={20} />
            {itemContainer > 0 && (
              <LengthContainer>
                <Length>{itemContainer}</Length>
              </LengthContainer>
            )}
          </CartIconContainer>
        </NavRightContainer>
      </NavContainer>
      {showProfile && <Profile />}
      {cartShow && <CartShow />}

      <MobileNavContainer
        boxShadow={change ? "0px 10px 30px rgba(13, 38, 59, 0.05)" : ""}
      >
        <NavLogoContainer>
          <MobileLogo src={mobileLogo} alt="mobile logo" />
        </NavLogoContainer>
        <FaAlignRight color="#8BA00D" size={24} onClick={handleDrop} />
      </MobileNavContainer>

      {mobile && (
        <MobileDropWrapper
          key="MobileDropWrapper"
          // initial={{ y: 10, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // exit={{ y: 10, opacity: 0 }}
          // transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <MobileLinkWrapper>
            <NavLink to="/home">
              <NavLinkText>HOME</NavLinkText>
            </NavLink>
            <NavLink to="/property">
              <NavLinkText>PROPERTY</NavLinkText>
            </NavLink>
            <NavLink>
              <NavLinkText>ABOUT</NavLinkText>
            </NavLink>
            <NavLink to="/contact">
              <NavLinkText>CONTACT</NavLinkText>
            </NavLink>
          </MobileLinkWrapper>
        </MobileDropWrapper>
      )}
    </>
  );
};

export default Navbar;
