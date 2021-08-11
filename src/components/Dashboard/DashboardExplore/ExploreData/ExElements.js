import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 100%;
  //height: 900px;
  //background: #f3f4ed;
  background: #fff;
`;

export const SubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  align-items: center;
  width: 100%;
  height: 100px;
  //background: #f3f4ed;
  background: #fff;
`;

export const ExTxt = styled.p`
  //font-family: "Oswald", sans-serif;
  font-family: "Open Sans", sans-serif;
  color: #053742;
  font-size: 16px;
  opacity: 0.5;
  //font-weight: bold;
  text-align: center;
`;

export const Title = styled.p`
  //font-family: "Oswald", sans-serif;
  font-family: "Open Sans", sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 50px 50px 50px;
`;

export const LineChart = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  justify-content: center;
  padding: 30px;
  margin-right: 50px;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const DoughnutChart = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  justify-content: space-between;
  padding: 30px;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const FormInput = styled.input`
  padding: 10px 21px;
  border: 0.1px solid grey;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 50px 30px 50px;
`;

export const FirstCol = styled.div`
  flex: 1;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  margin: 0px 20px 0px 0px;
  //box-shadow: 10px 5px 5px grey;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const SecondCol = styled.div`
  flex: 1;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  margin: 0px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const ThirdCol = styled.div`
  //flex: 1;
  display: flex;
  background: #fff;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  //margin: 0px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const SecondSubCol = styled.div`
  display: flex;
  //flex: 1;
  height: 100%;
  flex-direction: column;
  //background: #fff;
  justify-content: flex-end;
  align-items: center;
  //padding: 20px;
  border-radius: 10px;
  margin: 20px 0px 0px 0px;
`;

export const FirstSubCol = styled.div`
  //flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  //background: #fff;
  justify-content: space-between;
  align-items: center;
  //padding: 20px;
  border-radius: 10px;
  margin-bottom: 100%;
`;

export const CardTitle = styled.p`
  //font-family: "Oswald", sans-serif;
  font-family: "Open Sans", sans-serif;
  color: #053742;
  font-size: 24px;
  //font-weight: bold;
  text-align: center;
  padding: 0px 0px 10px 0px;
`;

export const CardSubTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

export const CardIndc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #66de93;
  font-family: "Open Sans", sans-serif;
`;
