import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 70%;
  //hight: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
`;

export const TableWrapper = styled.div`
  //height: 200px;
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
`;

/*
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

export const Text = styled.span`
  font-family: "Oswald", sans-serif;
  //font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 48px;
  color: #053742;
  margin-bottom: 30px;
`;


export const Btn = styled(LinkR)`
  color: #fff;
  background: ${({ disabled }) => (disabled === false ? "grey" : "#228b22")};
  height: 38px;
  width: 100px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 20px;
  pointer-events: ${({ disabled }) => (disabled === false ? "none" : "auto")};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4aa96c;
    color: #fff;
  }
`;

export const DelBtn = styled(LinkR)`
  color: #fff;
  background: #b61919;
  height: 38px;
  width: 106px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 20px 10px 0px 0px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff6b6b;
    color: #fff;
  }
`;
*/
