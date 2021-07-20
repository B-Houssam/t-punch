import React from "react";
import {
  AccWrapper,
  AccContainer,
  AccInfoContainer,
  AccPhContainer,
  //AccTxt,
  AccPh,
  //AccLo,
  AccInfoBtnSave,
  AccInfoBtnWrapper,
  //AccInfoBtnCancel,
  Form,
  FormContent,
  FormInput,
  FormLabel,
  FormPass,
  Overlay,
} from "./AccElements";

import img from "../../../../images/svg-9.svg";

import { MdModeEdit } from "react-icons/md";
//import { FiLogOut } from "react-icons/fi";

const Account = () => {
  return (
    <>
      <AccWrapper>
        <AccContainer>
          <AccInfoContainer>
            <AccPhContainer>
              <Overlay>
                <MdModeEdit size="40px" color="white"></MdModeEdit>
              </Overlay>
              <AccPh src={img}></AccPh>
              {/* <AccTxt>Acme Inc.</AccTxt> */}
            </AccPhContainer>

            {/** <AccInfoTxt>Settings</AccInfoTxt>*/}
            <FormContent>
              <Form action="#">
                <FormPass style={{ "grid-template-columns": "1fr 2fr" }}>
                  <FormLabel htmlFor="for">Account Name</FormLabel>
                  <FormLabel htmlFor="for">Key</FormLabel>
                  <FormInput type="email" required></FormInput>
                  <FormInput type="email" required></FormInput>
                </FormPass>
                <FormPass>
                  <FormLabel htmlFor="for">Password</FormLabel>
                  <FormLabel htmlFor="for">Confirm Password</FormLabel>
                  <FormInput type="password" required></FormInput>
                  <FormInput type="password" required></FormInput>
                </FormPass>
              </Form>
            </FormContent>
            <AccInfoBtnWrapper>
              {/** <AccLo>
                <FiLogOut></FiLogOut>
                Log out
              </AccLo>*/}

              {/*<AccInfoBtnCancel>Reset</AccInfoBtnCancel>*/}
              <AccInfoBtnSave>Save</AccInfoBtnSave>
            </AccInfoBtnWrapper>
          </AccInfoContainer>
        </AccContainer>
      </AccWrapper>
    </>
  );
};

export default Account;
