import React from "react";
import {
  WelcomeText,
  WelcomeBarWrapper,
  WelcomeBar,
  WelcomeContent,
  Circle,
  Line,
  Menu,
  TextWrapper,
  WelcomeSubText,
} from "./WelcomeElements";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

const WelcomeBarD = () => {
  return (
    <>
      <WelcomeBar>
        <WelcomeBarWrapper>
          <TextWrapper>
            <WelcomeText>WELCOME BACK ACME INC. 👋</WelcomeText>
            <WelcomeSubText>
              Here are your informations for today
            </WelcomeSubText>
          </TextWrapper>

          <WelcomeContent>
            <Circle>
              <AiOutlineSearch></AiOutlineSearch>
            </Circle>
            <Circle>
              <BiMessageSquareDetail></BiMessageSquareDetail>
            </Circle>
            <Circle>
              <IoMdNotifications></IoMdNotifications>
            </Circle>
            <Line></Line>
            <Menu></Menu>
          </WelcomeContent>
        </WelcomeBarWrapper>
      </WelcomeBar>
    </>
  );
};

export default WelcomeBarD;
