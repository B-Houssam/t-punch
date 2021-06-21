import React from "react";
import SideBarDD from "../SideBarD";
import WelcomeBarD from "../WelcomeBar";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
  Rest,
} from "./DashElements";

const Dash = () => {
  return (
    <>
      <DashboardContainer>
        <SideBarContainer>
          <SideBarDD></SideBarDD>
        </SideBarContainer>
        <ContentContainer>
          <WelcomeBarD></WelcomeBarD>
          <Rest></Rest>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default Dash;
