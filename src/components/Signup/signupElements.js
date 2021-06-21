import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;

  background: #096192;
`;

/*
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
`;
*/

export const Img = styled.img`
  @media screen and (max-width: 1050px) {
    display: none;
  }
  width: 30%;
  height: 30%;
  position: absolute;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const OutWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;

export const Txt = styled.h1`
  color: #010606;
  font-size: 75px;
  line-height: 1.1;
  margin-bottom: 24px;
  width: 350px;
  font-family: "Oswald", sans-serif;
  overflow: break-word;
  @media screen and (max-width: 1050px) {
    font-size: 48px;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-top: 32px;
  margin-left: 32px;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #096192;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
`;

export const FormButton = styled.button`
  background: #096192;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
`;
