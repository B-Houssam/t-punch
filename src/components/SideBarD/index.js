import React from "react";
import {
  SideBar,
  SideBarWrapper,
  SideBarMenu,
  SideBarTitle,
  SideBarListItem,
  SideBarList,
  Logo,
  UpperLogo,
} from "./SideBarElements.js";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import img from "../../images/svg-9.svg";

const SideBarDD = () => {
  return (
    <>
      <SideBar>
        <SideBarWrapper>
          <SideBarMenu>
            <UpperLogo src={img} alt="profilPic"></UpperLogo>
            <SideBarTitle>PAGES</SideBarTitle>
            <SideBarList>
              <SideBarListItem>
                DASHBOARD
                <AiOutlineDashboard />
              </SideBarListItem>
              <SideBarListItem>
                SETTINGS <AiOutlineSetting />
              </SideBarListItem>
              <SideBarListItem>
                MESSAGES
                <BiMessageSquareDetail />
              </SideBarListItem>
              <SideBarListItem>
                ACCOUNT
                <RiAccountCircleLine />
              </SideBarListItem>
            </SideBarList>
          </SideBarMenu>
          <Logo>TECH_PUNCH</Logo>
        </SideBarWrapper>
      </SideBar>
    </>
  );
};

export default SideBarDD;
