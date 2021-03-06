import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#096192")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#096192" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "Open Sans", sans-serif;
  margin-left: 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #096192;
  }
`;
