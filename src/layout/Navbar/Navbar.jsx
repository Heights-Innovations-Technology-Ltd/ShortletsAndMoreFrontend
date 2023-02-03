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
            {itemContainer && itemContainer > 0 && (
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
            <NavLink to="/register">
              <NavLinkText>SIGN UP</NavLinkText>
            </NavLink>
            <NavLink to="/login">
              <NavLinkText>SIGN IN</NavLinkText>
            </NavLink>
          </MobileLinkWrapper>
        </MobileDropWrapper>
      )}
    </>
  );
};

export default Navbar;
