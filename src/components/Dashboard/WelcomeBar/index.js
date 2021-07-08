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
import { IoMdNotificationsOutline } from "react-icons/io";
import Badge from "@material-ui/core/Badge";

const WelcomeBarD = ({ path }) => {
  return (
    <>
      <WelcomeBar>
        <WelcomeBarWrapper>
          <TextWrapper>
            <WelcomeText>WELCOME BACK ACME INC. 👋</WelcomeText>
            <WelcomeSubText>{path}</WelcomeSubText>
          </TextWrapper>
          <WelcomeContent>
            <Circle>
              <AiOutlineSearch size="20px"></AiOutlineSearch>
            </Circle>

            <Badge badgeContent={0} color="primary" showZero>
              <Circle>
                <BiMessageSquareDetail size="20px"></BiMessageSquareDetail>
              </Circle>
            </Badge>

            <Badge badgeContent={0} color="primary" showZero>
              <Circle>
                <IoMdNotificationsOutline size="20px"></IoMdNotificationsOutline>
              </Circle>
            </Badge>

            <Line></Line>
            <Menu></Menu>
          </WelcomeContent>
        </WelcomeBarWrapper>
      </WelcomeBar>
    </>
  );
};

export default WelcomeBarD;
