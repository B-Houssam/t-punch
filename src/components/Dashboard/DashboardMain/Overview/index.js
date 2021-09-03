import React from "react";
import {
  OverviewContainer,
  RightContainer,
  Title,
  MainText,
  SubText,
  LeftContainer,
  SubTitle,
  AddBtn,
} from "./OverviewElements";
import img from "../../../../images/svg-12.svg";

const Overview = () => {
  return (
    <>
      <OverviewContainer>
        <RightContainer>
          <Title>SOCIAL OVERVIEW</Title>
          <SubTitle>Start a new analysis now to explore:</SubTitle>
          <MainText>More than 56'112 analysed tweets.</MainText>
          <SubText>Over 20 brands and companies.</SubText>
          <SubText>More than 60 products covered.</SubText>
          <AddBtn to="/newanalysis">Add new analysis</AddBtn>
        </RightContainer>
        <LeftContainer src={img}></LeftContainer>
      </OverviewContainer>
    </>
  );
};

export default Overview;
