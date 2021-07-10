import React from "react";
import SideBarDD from "../SideBarD";
import Account from "./Account";
import WelcomeBarD from "../WelcomeBar";

import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./AccountElements";

import { AiFillHome } from "react-icons/ai";

const DashAccount = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Account
      </>
    );
  };

  return (
    <>
      <DashboardContainer>
        <SideBarContainer>
          <SideBarDD></SideBarDD>
        </SideBarContainer>
        <ContentContainer>
          <WelcomeBarD path={tellPath()}></WelcomeBarD>
          <Account></Account>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default DashAccount;
