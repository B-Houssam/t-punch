import React from "react";
import img from "../../images/svg-7.svg";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormInput,
  Form,
  FormH1,
  FormButton,
  Img,
  FormLabel,
  Txt,
  OutWrap,
} from "./signupElements";

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">TECH_PUNCH</Icon>
          <OutWrap>
            <Txt>START BOOSTING YOUR BUSINESS</Txt>
            <Img src={img}></Img>
            <FormContent>
              <Form action="/dashboard">
                <FormH1>CREATE YOUR NEW ACCOUNT</FormH1>
                <FormLabel htmlFor="for">EMAIL</FormLabel>
                <FormInput type="email" required></FormInput>
                <FormLabel htmlFor="for">PASSWORD</FormLabel>
                <FormInput type="password" required></FormInput>
                <FormLabel htmlFor="for">CONFIRME PASSWORD</FormLabel>
                <FormInput type="password" required></FormInput>
                <FormButton type="submit">CONTINUE</FormButton>
              </Form>
            </FormContent>
          </OutWrap>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
