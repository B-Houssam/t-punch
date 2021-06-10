import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  /*margin-top: -80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  posiiton: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1050px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    max-width: 100%;
    padding-right: 20;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #312c51;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 1050px) {
    font-size: 1.3rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1050px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 25px);
    font-size: 1.7rem;
    cursor: pointer;
    color: #312c51;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavCC = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavContact = styled(LinkS)`
  color: #48426d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #48426d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 100%;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 20px;
  background: #48426d;
  align-items: center;
  white-sapce: nowrap;
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 50%;
  font-size: 0.85rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Open Sans bold", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #48426d;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }

  &.active {
    border-bottom: 3px solid #48426d;
  }
`;
