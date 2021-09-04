import React from "react";
import SideBarDD from "../SideBarD";
import WelcomeBarD from "../WelcomeBar";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./HistoryElements.js";
import { AiFillHome } from "react-icons/ai";

const History = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Analysis History
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

export default History;
