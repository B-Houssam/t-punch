import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const LineContainer = styled.div`
  margin-left: 20px;
  flex: 2;
  //padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 10px;
`;

export const DataContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  //display: ${({ display }) => (display ? "true" : "none")};
`;

export const DoughnutContainer = styled.div`
  flex: 1;
  //padding: 20px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 10px;
`;

export const SubTitle = styled.span`
  font-family: "Oswald", sans-serif;
  color: #053742;
  font-weight: bold;
  font-size: 26px;
  //margin-bottom: 10px;
`;
