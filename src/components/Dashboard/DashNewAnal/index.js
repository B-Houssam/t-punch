import React from "react";
import SideBarDD from "../SideBarD";
import WelcomeBarD from "../WelcomeBar";
import NewA from "./NewA";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./NewElements";
import { AiFillHome } from "react-icons/ai";

const NewAnal = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Add New Analysis
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
          <NewA></NewA>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default NewAnal;
