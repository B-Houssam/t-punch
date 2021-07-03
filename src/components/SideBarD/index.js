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
  AiFillFolderAdd,
  AiOutlineDatabase,
} from "react-icons/ai";

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
            <SideBarTitle>DATA</SideBarTitle>
            <SideBarListItem to="/dashboard/datasets">
              DATASETS
              <AiOutlineDatabase />
            </SideBarListItem>
            <SideBarTitle>PAGES</SideBarTitle>
            <SideBarList>
              <SideBarListItem to="/dashboard/main">
                DASHBOARD
                <AiOutlineDashboard />
              </SideBarListItem>
              <SideBarListItem to="/dashboard/settings">
                SETTINGS <AiOutlineSetting />
              </SideBarListItem>
              <SideBarListItem to="/dashboard/messages">
                MESSAGES
                <BiMessageSquareDetail />
              </SideBarListItem>
              <SideBarListItem to="/dashboard/account">
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
