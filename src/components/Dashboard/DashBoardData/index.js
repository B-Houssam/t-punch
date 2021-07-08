import React from "react";
import SideBarDD from "../SideBarD";
import AddData from "./AddData";
import WelcomeBarD from "../WelcomeBar";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./DataElements";
import { AiFillHome } from "react-icons/ai";

const DashData = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Dataset
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
          <AddData></AddData>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default DashData;
