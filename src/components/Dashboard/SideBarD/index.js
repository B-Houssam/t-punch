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
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineDatabase,
} from "react-icons/ai";

import { BiMessageSquareDetail } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsClipboardData } from "react-icons/bs";

import img from "../../../images/svg-9.svg";

const SideBarDD = ({ lightBg }) => {
  return (
    <>
      <SideBar>
        <SideBarWrapper>
          <SideBarMenu>
            <UpperLogo src={img} alt="profilPic"></UpperLogo>
            <SideBarTitle>DATA</SideBarTitle>
            <SideBarListItem to="/datasets">
              DATASET
              <AiOutlineDatabase />
            </SideBarListItem>
            <SideBarListItem to="/explore">
              EXPLORE
              <BsClipboardData />
            </SideBarListItem>
            <SideBarTitle>PAGES</SideBarTitle>
            <SideBarList>
              <SideBarListItem to="/main">
                DASHBOARD
                <AiOutlineDashboard />
              </SideBarListItem>
              <SideBarListItem to="/settings">
                SETTINGS <AiOutlineSetting />
              </SideBarListItem>
              <SideBarListItem to="/messages">
                MESSAGES
                <BiMessageSquareDetail />
              </SideBarListItem>
              <SideBarListItem to="/account">
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
