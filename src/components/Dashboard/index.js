import React from "react";
import SideBarDD from "../SideBarD";
import AddData from "../AddData";
import WelcomeBarD from "../WelcomeBar";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
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
          <AddData></AddData>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default Dash;
