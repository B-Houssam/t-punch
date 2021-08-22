import React from "react";
import SideBarDD from "../SideBarD";
import Messages from "./Messages";
import WelcomeBarD from "../WelcomeBar";
//import { Redirect } from "react-router-dom";
import {
  SideBarContainer,
  ContentContainer,
  DashboardContainer,
} from "./MessagesElements";
import { AiFillHome } from "react-icons/ai";

const DashMessages = () => {
  const tellPath = () => {
    return (
      <>
        <AiFillHome style={{ "margin-right": "5px" }}></AiFillHome>
        /Messages
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
          <Messages></Messages>
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default DashMessages;

