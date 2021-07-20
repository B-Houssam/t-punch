import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const AccWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  background: #f3f4ed;
  width: 100%;
  height: 900px;
  //background: #fff;
  padding: 50px;
`;

export const AccContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  //height: 80%;
  //background: #f3f4ed;
  box-shadow: 0px 0px 30px 1px #f3f4ed;
`;

export const AccBar = styled.div`
  display: flex;
  background: #fff;
  //background: #f3f4ed;
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
  border-radius: 200px;
  border: 5px solid #096192;
  z-index: 1;
`;

export const AccPh = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 200px;
  //margin-bottom: 10px;
  border: 5px solid #fff;
`;

export const Overlay = styled.div`
  position: absolute;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  //display: none;
  cursor: pointer;
  &:hover {
    opacity: 0.16;
  }
`;

export const AccTxt = styled.p`
  text-align: center;
  //font-family: "Open Sans", sans-serif;
  font-family: "Oswald", sans-serif;
  font-size: 26px;
  color: #444444;
`;

/*
export const AccLo = styled(LinkR)`
  background: #096192;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  height: 50px;
  width: 10%;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d54c4c;
    color: #fff;
  }
`;
*/

export const AccInfoContainer = styled.div`
  background: #fff;
  display: flex;
  flex: 4;
  flex-direction: column;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
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
  padding-left: 20px;
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

export const Container = styled.div`
  //min-height: 692px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #096192;
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

export const Icon = styled(LinkR)`
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
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  //background: #096192;
  //max-width: 400px;
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

export const FormPass = styled.form`
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //grid-template-rows: 1fr 1fr;
  column-gap: 30px;
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #000;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  background: #f3f4ed;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
`;
