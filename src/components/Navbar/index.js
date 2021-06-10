import React from "react";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">TECH_PUNCH</NavLogo>
          <MobileIcon onCLick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">The What</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">The Why</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">The How</NavLinks>
            </NavItem>
          </NavMenu>
          <NavCC>
            <NavContact>
              <NavLinks to="signup">Contact</NavLinks>
            </NavContact>
            <NavBtn>
              <NavBtnLink to="/signin">SIGN UP</NavBtnLink>
            </NavBtn>
          </NavCC>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
