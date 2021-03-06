import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f3f4ed;
`;

export const AddBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #f3f4ed;
`;

export const SelectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 50px;
  align-items: center;
  width: 80%;
  height: 80px;
  background: #096192;
`;

export const AddTxt = styled.p`
  //font-family: "Oswald", sans-serif;
  font-family: "Open Sans", sans-serif;
  color: #053742;
  font-size: 16px;
  //font-weight: bold;
  text-align: center;
`;

export const AddTxtT = styled.p`
  //font-family: "Oswald", sans-serif;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 16px;
  //font-weight: bold;
  text-align: center;
`;

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //padding-left: 20px;
  //padding-right: 20px;
  align-items: flex-start;
`;

export const AddBtn = styled(LinkR)`
  border-radius: 50px;
  background: #096192;
  color: #fff;
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

export const AddBtnT = styled(LinkR)`
  //border-radius: 50px;
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

export const AddText = styled.div`
  //font-family: "Oswald", sans-serif;
  font-family: "Open Sans", sans-serif;
  color: #053742;
  padding: 20px;
  font-size: 18px;
  //font-weight: bold;
  text-align: center;
  opacity: 0.5;
`;

export const AddImage = styled.img`
  height: 250px;
  width: 250px;
  opacity: 0.8;
  margin-top: 100px;
`;

export const TableWrapper = styled.div`
  height: 200px;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
`;

export const Del = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 5px;
  background: #096192;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #da0037;
    color: #fff;
  }
`;

export const OptWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
