import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const InfoContainer = styled.div`
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#096192")};
  @media screen and (maw-width: 830px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 70%;
  /*margin-right: auto;
  margin-left: auto;*/
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 830px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgstart }) =>
    imgstart ? `'col2 col1` : `'col1 col2'`};

  @media screen and (max-width: 1050px) {
    grid-template-areas: "col1 " "col2";
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  margin-left: 100px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const TopLine = styled.p`
  display: ${({ displayed }) => (displayed ? "none" : "block")};
  color: #096192;
  font-size: 21px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: "Open Sans", sans-serif;
  @media screen and (maw-width: 1050px) {
    font-size: 16px;
  }
`;

export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? "#F7F8F8" : "#010606")};
  font-size: 75px;
  line-height: 1.1;
  margin-bottom: 24px;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 1050px) {
    font-size: 48px;
  }
`;

export const Sub = styled.p`
  max-width: 440px;
  color: ${({ darkText }) => (darkText ? "#096192" : "#fff")};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  font-family: "Open Sans", sans-serif;
  @media screen and (max-width: 1050px) {
    font-size: 14px;
  }
`;

export const BtnWrap = styled.div`
  visibility: ${({ btn }) => (btn ? "hidden" : "visible")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 100%;
`;

export const ImgWrap = styled.div`
  @media screen and (max-width: 1050px) {
    display: none;
  }
  height: 100%;
  width: 100%;
`;

export const Img = styled.img`
  @media screen and (max-width: 1050px) {
    display: none;
  }
  width: 100%;
  height: ${({ size }) => (size ? "500px" : "600px")};
`;
