import React from "react";
import SideBarDD from "../SideBarD";
import ExploreData from "./ExploreData";
import WelcomeBarD from "../WelcomeBar";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./ExploreElements";
import { AiFillHome } from "react-icons/ai";

const DashExplore = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Explore
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
          <ExploreData></ExploreData>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default DashExplore;
