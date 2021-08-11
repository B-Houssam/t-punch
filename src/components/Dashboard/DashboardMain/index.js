import React from "react";
import SideBarDD from "../SideBarD";
import WelcomeBarD from "../WelcomeBar";

import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./DashElements";
import { AiFillHome } from "react-icons/ai";

const Dash = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Main
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
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default Dash;
