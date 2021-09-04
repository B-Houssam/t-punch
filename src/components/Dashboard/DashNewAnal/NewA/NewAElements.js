import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 50%;
  //hight: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
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

export const ResetBtn = styled(LinkR)`
  color: #fff;
  background: ${({ disabled }) => (disabled === false ? "grey" : "#b61919")};
  height: 38px;
  width: 100px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 20px 10px 0px 0px;
  pointer-events: ${({ disabled }) => (disabled === false ? "none" : "auto")};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff6b6b;
    color: #fff;
  }
`;
