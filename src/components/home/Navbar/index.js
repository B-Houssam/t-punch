import React from "react";
//import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavCC,
  NavBtnLink,
  NavContact,
  NavBtn,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  /*
  const [scrollNav, setscrollNav] = useState(false);
  const changNav = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changNav);
  }, []);
*/

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav //scrollNav={scrollNav}
      >
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            TECH_PUNCH
          </NavLogo>
          <MobileIcon onCLick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                The What
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                The Why
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="how"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                The How
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavCC>
            <NavContact>
              <NavLinks
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Contact
              </NavLinks>
            </NavContact>
            <NavBtn>
              <NavBtnLink to="/signin">SIGN IN</NavBtnLink>
            </NavBtn>
          </NavCC>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
