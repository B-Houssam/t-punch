import React from "react";
import {
  WelcomeText,
  WelcomeBarWrapper,
  WelcomeBar,
  WelcomeContent,
  Circle,
  //Line,
  //Menu,
  TextWrapper,
  CircleSearch,
  WelcomeSubText,
  //MenuIcon,
  //MenuTxt,
} from "./WelcomeElements";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
//import { RiLogoutBoxRLine } from "react-icons/ri";
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
            <CircleSearch>
              <AiOutlineSearch size="20px"></AiOutlineSearch>
            </CircleSearch>

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
            {/**
 <Line></Line>
            <Menu>
              <MenuIcon>
                <RiLogoutBoxRLine size="20px"></RiLogoutBoxRLine>
              </MenuIcon>
            </Menu>
 */}
          </WelcomeContent>
        </WelcomeBarWrapper>
      </WelcomeBar>
    </>
  );
};

export default WelcomeBarD;
