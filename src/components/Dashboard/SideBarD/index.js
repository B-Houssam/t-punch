import React from "react";
//import { Redirect } from "react-router-dom";
import {
  SideBar,
  SideBarWrapper,
  SideBarMenu,
  SideBarTitle,
  SideBarListItem,
  SideBarList,
  //Logo,
  UpperLogo,
  Logout,
  UpperLogoContainer,
  CircleBack,
} from "./SideBarElements.js";
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineDatabase,
} from "react-icons/ai";

import { BiMessageSquareDetail } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsClipboardData } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import img from "../../../images/svg-9.svg";

const SideBarDD = ({ lightBg }) => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <SideBar>
        <SideBarWrapper>
          <SideBarMenu>
            <UpperLogoContainer>
              <CircleBack to="/">
                <MdKeyboardBackspace
                  color="white"
                  size="25px"
                ></MdKeyboardBackspace>
              </CircleBack>
              <UpperLogo src={img} alt="profilPic"></UpperLogo>
            </UpperLogoContainer>

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
            <Logout onClick={handleLogout} to="/account">
              LOGOUT
              <FiLogOut />
            </Logout>
          </SideBarMenu>
          {/*<Logo>TECH_PUNCH</Logo>*/}
        </SideBarWrapper>
      </SideBar>
    </>
  );
};

export default SideBarDD;
