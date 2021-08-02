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
  Text,
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
              <Form action="/dashboard/main">
                <FormH1>SIGN IN TO YOUR ACCOUNT</FormH1>
                <FormLabel htmlFor="for">KEY</FormLabel>
                <FormInput type="text" required></FormInput>
                <FormLabel htmlFor="for">PASSWORD</FormLabel>
                <FormInput type="password" required></FormInput>
                <FormButton type="submit">CONTINUE</FormButton>
                <Text>FORGOT PASSWORD</Text>
              </Form>
            </FormContent>
          </OutWrap>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
