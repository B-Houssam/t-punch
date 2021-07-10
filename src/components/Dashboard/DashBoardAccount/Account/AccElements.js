import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const AccWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
  background: #fff;
  padding: 50px;
`;

export const AccContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
  //background: #f3f4ed;
  box-shadow: 0px 0px 30px 1px #f3f4ed;
`;

export const AccBar = styled.div`
  display: flex;
  background: #f3f4ed;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const AccPhContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AccPh = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const AccTxt = styled.p`
  text-align: center;
  //font-family: "Open Sans", sans-serif;
  font-family: "Oswald", sans-serif;
  font-size: 26px;
  color: #444444;
`;

export const AccLo = styled(LinkR)`
  background: #096192;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  height: 50px;
  width: 50%;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d54c4c;
    color: #fff;
  }
`;

export const AccInfoContainer = styled.div`
  background: #fff;
  display: flex;
  flex: 4;
  flex-direction: column;
  padding: 40px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AccInfoTxt = styled.p`
  color: #444444;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  //font-family: "Oswald", sans-serif;
  font-size: 24px;
`;

export const AccInfoBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
  width: 100%;
  align-items: center;
`;

export const AccInfoBtnSave = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-family: "Open Sans", sans-serif;
  width: 12%;
  height: 40px;
  background: #096192;
  color: #fff;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: green;
    color: #fff;
  }
`;

export const AccInfoBtnCancel = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  width: 12%;
  height: 40px;
  background: #fff;
  color: #096192;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #d54c4c;
  }
`;
