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
import img from "../../../../images/svg-14.svg";

const Overview = () => {
  return (
    <>
      <OverviewContainer>
        <RightContainer>
          <Title>INTERN OVERVIEW</Title>
          <SubTitle>Upload your own intern data first:</SubTitle>
          <MainText>Unlock a new prespective.</MainText>
          <SubText>Multiple graphical models to view your data</SubText>
          <AddBtn to="/datasets">Upload intern data</AddBtn>
        </RightContainer>
        <LeftContainer src={img}></LeftContainer>
      </OverviewContainer>
    </>
  );
};

export default Overview;
