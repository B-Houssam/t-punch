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
  margin: 20px 20px 10px 20px;
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

export const BigTitle = styled.div`
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 42px;
  padding: 20px;
  background: #096192;
  margin: 0px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #053742;
    color: #fff;
    cursor: pointer;
  }
`;

export const DataContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  display: ${({ display }) => (display ? "true" : "none")};
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

export const InsightContainer = styled.div`
  flex: 1;
  //padding: 20px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 10px;
`;

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 10px;
  //height: 200px;
  width: 100%;
  margin: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

export const TableWrapper = styled.div`
  //height: 400px;
  width: 100%;
`;

export const TweetsContainer = styled.div`
  //height: 400px;
  width: 100%;
  flex: 1;
  //padding: 20px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 10px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Open sans", sans-serif;
  font-weight: bold;
  color: #053742;
`;

export const Filler = styled.span`
  color: #053742;
  font-family: "Open sans", sans-serif;
  font-size: 16px;
`;
