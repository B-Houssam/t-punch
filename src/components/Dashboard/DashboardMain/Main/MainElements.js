//import styled from "styled-components";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const OverviewContainer = styled.div`
  display: flex;
  height: 300px;
  //width: 100%;
  flex-direction: row;
  //justify-content: space-around;
  border-radius: 5px;
  background: #096192;
  margin: 50px 20px 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  overflow: hidden;
  align-self: center;
`;

export const RightContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  padding: 20px;
  //margin-left: 100px;
`;

export const Title = styled.span`
  font-family: "Oswald", sans-serif;
  color: #053742;
  font-weight: bold;
  font-size: 62px;
  //margin-bottom: 100px;
`;

export const SubTitle = styled.span`
  font-family: "Oswald", sans-serif;
  color: #053742;
  font-weight: bold;
  font-size: 26px;
  //margin-bottom: 10px;
`;

export const MainText = styled.span`
  font-family: "Oswald", sans-serif;
  color: #fff;
  //font-weight: bold;
  font-size: 24px;
`;

export const SubText = styled.span`
  font-family: "Open Sans", sans-serif;
  color: #fff;
  //font-weight: bold;
  font-size: 16px;
`;

export const LeftContainer = styled.img`
  height: 200%;
  width: 50%;
  opacity: 0.3;
`;

export const AddBtn = styled(LinkR)`
  margin-top: 30px;
  border-radius: 50px;
  background: #fff;
  color: #096192;
  white-space: nowrap;
  font-size: 16px;
  width: 200px;
  height: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Open Sans", sans-serif;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #053742;
    color: #fff;
  }
`;

export const DataContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
`;

export const DoughnutContainer = styled.div`
  flex: 1;
  //padding: 20px;
  display: flex;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 10px;
`;
export const LineContainer = styled.div`
  margin-left: 20px;
  flex: 2;
  //padding: 20px;
  display: flex;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 10px;
`;
