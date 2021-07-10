import React from "react";
import {
  AccWrapper,
  AccContainer,
  AccBar,
  AccInfoContainer,
  AccPhContainer,
  AccTxt,
  AccPh,
  AccLo,
  AccInfoTxt,
  AccInfoBtnSave,
  AccInfoBtnWrapper,
  AccInfoBtnCancel,
} from "./AccElements";

import img from "../../../../images/svg-9.svg";

import { FiLogOut } from "react-icons/fi";

const Account = () => {
  return (
    <>
      <AccWrapper>
        <AccContainer>
          <AccBar>
            <AccPhContainer>
              <AccPh src={img}></AccPh>
              <AccTxt>Acme Inc.</AccTxt>
            </AccPhContainer>
            <AccLo>
              <FiLogOut></FiLogOut>
              Log out
            </AccLo>
          </AccBar>
          <AccInfoContainer>
            <AccInfoTxt>Account settings</AccInfoTxt>
            <AccInfoBtnWrapper>
              <AccInfoBtnCancel>Cancel</AccInfoBtnCancel>
              <AccInfoBtnSave>Save</AccInfoBtnSave>
            </AccInfoBtnWrapper>
          </AccInfoContainer>
        </AccContainer>
      </AccWrapper>
    </>
  );
};

export default Account;
