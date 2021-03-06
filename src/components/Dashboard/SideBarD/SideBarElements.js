import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Logo = styled.span`
  font-family: "Oswald", sans-serif;
  margin-bottom: 10px;
  //color: #053742;
  color: #fff;
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  opacity: 0.8;
  //text-shadow: 2px 2px 1px #000;
`;

/*
export const SideBarAdd = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  color: #096192;
  white-space: nowrap;
  font-size: 15px;
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 30px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #053742;
    color: #fff;
  }
`;
*/

export const CircleBack = styled(LinkR)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  //padding: 0px 20px 0px 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #053742;
    color: #fff;
  }
`;

export const UpperLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  //padding: 0px 20px 0px 20px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const UpperLogo = styled.img`
  width: 50px;
  height: 50px;
  //margin-bottom: 30px;
`;

export const SideBar = styled.div`
  position: fixed;
  z-index: 9999;
  background: #096192;
  top: 0px;
  width: 15%;
  height: 100vh;
`;

export const SideBarWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SideBarMenu = styled.div`
  padding: 20px;
`;
export const SideBarTitle = styled.div`
  font-family: "Oswald", sans-serif;
  margin-bottom: 10px;
  font-size: 18px;
  color: #dcdcdc;
`;

export const SideBarList = styled.ul`
  list-style: none;
`;
export const SideBarListItem = styled(LinkR)`
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  flex-direction: center;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  //background: ${({ lightBg }) => (lightBg ? "#096192" : "#053742")};
  &:hover,
  &.active {
    background: #053742;
  }
`;

export const Logout = styled(LinkR)`
  //margin-top: 30px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  flex-direction: flex-start;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  &:hover {
    background: #bd1616;
  }
`;
